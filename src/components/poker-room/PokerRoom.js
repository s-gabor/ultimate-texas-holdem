import React from 'react';
import Container from 'react-bootstrap/Container';
import { Deck } from 'ultimate-deck';
import Cards from '../cards/Cards';
import BettingActions from '../betting-actions/BettingActions';


class PokerRoom extends React.Component {
    constructor() {
        super();
        this.state = {
            deck: new Deck(),
            cards: {
                dealer: ['card', 'card'],
                table: ['card', 'card', 'card', 'card', 'card'],
                player: ['card', 'card']
            },
            balance: 500,
            lifeCycleGame: 'initial-bet' // initial-bet / raise / re-raise / final-bet / results
        }
    }

    getPreFlopCards = () => {
        this.setState((previousState) => {
            [0, 1].forEach((i) => {
                previousState.cards.dealer[i] = this.state.deck.draw().stringfy;
                previousState.cards.player[i] = this.state.deck.draw().stringfy;
            });
            previousState.lifeCycleGame = 'raise';
            return previousState;
        });
    }

    getFlopCards = () => {
        this.setState((previousState) => {
            [0, 1, 2].forEach((i) => {
                previousState.cards.table[i] = this.state.deck.draw().stringfy;
            });
            previousState.lifeCycleGame = 're-raise';
            return previousState;
        });
    }

    getFinalCards = () => {
        this.setState((previousState) => {
            [3, 4].forEach((i) => {
                previousState.cards.table[i] = this.state.deck.draw().stringfy;
            });
            previousState.lifeCycleGame = 'final-bet';
            return previousState;
        });
    }

    updateLifeCycleGame = (gameState) => {
        this.setState((previousState) => {
            previousState.lifeCycleGame = gameState;
            return previousState;
        });
    }

    componentDidMount = () => {
        this.state.deck.shuffle();
    }

    render() {
        return (
            <Container>
                <Cards 
                    cards={this.state.cards}
                />

                <BettingActions
                    balance={this.state.balance}
                    cards={this.state.cards}
                    lifeCycleGame={this.state.lifeCycleGame}
                    updateLifeCycleGame={this.updateLifeCycleGame}
                    getPreFlopCards={this.getPreFlopCards}
                    getFlopCards={this.getFlopCards}
                    getFinalCards={this.getFinalCards}
                />
            </Container>
        )
    }
}

export default PokerRoom;
