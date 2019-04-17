import React from 'react';
import Button from 'react-bootstrap/Button';
import Chips from '../betting-chips/Chips';


const Buttons = ({ bets, onClickDeal, onClickRebet, onClickUndo, onClickClear, onClickChips }) => {
    return (
        <div>
            <div className='player-bets'>
                <Button variant='outline-light' disabled={!Boolean(bets.ante)} onClick={onClickDeal}>DEAL</Button>
                <Button variant='outline-light' disabled={!Boolean(bets.ante)} onClick={onClickRebet}>Rebet</Button>
                <Button variant='outline-light' disabled={!Boolean(bets.ante)} onClick={onClickUndo}>Undo</Button>
                <Button variant='outline-light' disabled={!Boolean(bets.ante)} onClick={onClickClear}>Clear</Button>
            </div>

            <Chips 
                onClickChips={onClickChips} 
            />
        </div>
        
    )
}

export default Buttons;
