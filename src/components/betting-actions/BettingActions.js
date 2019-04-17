import React from 'react';
import Spots from '../betting-spots/Spots';
import ButtonsRaise from '../betting-buttons-raise/ButtonsRaise';
import Results from '../betting-results/Results';
import GameStats from '../game-stats/GameStats';


class BettingActions extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            bets: {
                ante: 0,
                blind: 0,
                trips: 0,
                play: 0,
                totalBet: 0
            },
            stats: {
                balance: 1000,
                win: 0,
                info: 'choose chips',
                bet: 0
            },
            selectedChips: 0
        }
    }

    onClickChips = (e, value) => {
        // console.log(e.currentTarget); // runs twice. WHY!??? bc setState is async and once the fn is called and once when state is updated ?
        this.setState({selectedChips: value});
        this.setState((previousState) => {
            previousState.selectedChips = value;
            previousState.stats.info = 'Bet on Ante/Blind and/or Trips';
            return previousState;
        });
    }

    onClickTrips = () => {
        if (this.state.bets.ante > 0 && this.props.lifeCycleGame === 'initial-bet') {
            const bet = this.state.selectedChips;
            this.setState((previousState) => {
                previousState.bets.trips += bet;
                previousState.stats.bet = previousState.bets.trips + previousState.bets.ante + previousState.bets.blind + previousState.bets.play;
                previousState.stats.balance = this.props.balance - previousState.stats.bet;
                return previousState;
            });
        } 
    }

    onClickAnteOrBlind = () => {
        const bet = this.state.selectedChips;
        if (bet > 0 && this.props.lifeCycleGame === 'initial-bet') {
            this.setState((previousState) => {
                previousState.bets.ante += bet;
                previousState.bets.blind += bet;
                previousState.bets.totalBet += bet * 2;
                previousState.stats.bet = previousState.bets.trips + previousState.bets.ante + previousState.bets.blind + previousState.bets.play;
                previousState.stats.balance = this.props.balance - previousState.stats.bet;
                return previousState;
            })
        }
    }

    onClickRebet = () => {
        console.log('todo rebet');
    }

    onClickUndo = () => {
        console.log('todo undo');
    }

    onClickClear = () => {
        this.setState((previousState) => {
            previousState.bets.trips = 0;
            previousState.bets.ante = 0;
            previousState.bets.blind = 0;
            previousState.bets.play = 0;
            previousState.bets.totalBet = 0;
            previousState.stats.bet = 0;
            return previousState;
        });
    }

    raiseBet = (value) => {
        this.setState((previousState) => {
            previousState.bets.play += previousState.bets.blind * value;
            previousState.stats.bet = previousState.bets.trips + previousState.bets.ante + previousState.bets.blind + previousState.bets.play;
            previousState.stats.balance = this.props.balance - previousState.stats.bet;
            previousState.stats.info = this.props.lifeCycleGame;
            return previousState;
        });
        if (this.props.cards.table[0] === 'card') {
            this.props.getFlopCards();
        }
        if (this.props.cards.table[3] === 'card') {
            this.props.getFinalCards();
        }
        this.props.updateLifeCycleGame('results');
        this.setState((previousState) => {
            previousState.stats.info = 'game results';
            return previousState;
        });
    }

    checkBet = () => {
        if (this.props.lifeCycleGame === 'raise') {
            this.props.getFlopCards();
            this.setState((previousState) => {
                previousState.stats.info = 'You checked. Bet before turn: 2x/check';
                return previousState;
            });
        } else if (this.props.lifeCycleGame === 're-raise') {
            this.props.getFinalCards();
            this.setState((previousState) => {
                previousState.stats.info = 'You checked again. Have your final move: 1x/fold';
                return previousState;
            });
        }
    }

    dealCards = () => {
        this.setState((previousState) => {
            this.props.getPreFlopCards();
            previousState.stats.info = 'Bet before the flop: 4x/3x/check';
            return previousState;
        });
        this.props.getPreFlopCards();
    }

    render() {
        return (
            <div className='m-5'>
                <Spots  
                    bets={this.state.bets}
                    onClickTrips={this.onClickTrips}
                    onClickAnteOrBlind={this.onClickAnteOrBlind}
                />

                {
                    this.props.lifeCycleGame === 'results'
                        ?   <Results 
                                cards={this.props.cards}
                            />
                        :   <ButtonsRaise // 4x 3x CHECK // 2x CHECK // 1x FOLD
                                bets={this.state.bets}
                                lifeCycleGame={this.props.lifeCycleGame}
                                raise={this.raiseBet}
                                check={this.checkBet}
                                deal={this.dealCards}
                                onClickRebet={this.onClickRebet}
                                onClickUndo={this.onClickUndo}
                                onClickClear={this.onClickClear}
                                onClickChips={this.onClickChips}
                            />
                }

                <GameStats
                    stats={this.state.stats}
                />
            </div>
        )
    }
}

export default BettingActions;
