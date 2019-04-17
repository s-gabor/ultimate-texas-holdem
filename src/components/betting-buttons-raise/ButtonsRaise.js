import React from 'react';
import Buttons from '../betting-buttons/Buttons';
import Button from 'react-bootstrap/Button';

const ButtonsRaise = ({ bets, lifeCycleGame, raise, check, deal, onClickRebet, onClickUndo, onClickClear, onClickChips }) => {
    return (
        <div>
            {
                lifeCycleGame === 'initial-bet'
                    ?   <Buttons
                            bets={bets}
                            onClickDeal={deal}
                            onClickRebet={onClickRebet}
                            onClickUndo={onClickUndo}
                            onClickClear={onClickClear}
                            onClickChips={onClickChips}
                        />
                    : (
                        lifeCycleGame === 'raise'
                            ?   <div>
                                    <Button onClick={() => raise(4)}>4x</Button>
                                    <Button onClick={() => raise(3)}>3x</Button>
                                    <Button onClick={() => check()}>CHECK</Button>
                                </div>
                            : (
                                lifeCycleGame === 're-raise'
                                    ?   <div>
                                            <Button onClick={() => raise(2)}>2x</Button>
                                            <Button onClick={() => check()}>CHECK</Button>
                                        </div>
                                    // final-bet
                                    :   <div>
                                            <Button onClick={() => raise(1)}>1x</Button>
                                            <Button onClick={() => raise(0)}>FOLD</Button>
                                        </div>
                            )
                    )
            }
        </div>
    )
}

export default ButtonsRaise;
