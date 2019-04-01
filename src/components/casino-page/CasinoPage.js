import React from 'react';
import Button from 'react-bootstrap/Button';

const CasinoPage = ({ onClickQuit }) => {
    return (
        <div className='casino-page'>
            <h1>Casino Chips</h1>
            
            <h1>Dealer Cards</h1>
            <h1>Table Cards</h1>
            <h1>Player Cards</h1>

            <h1>Trips</h1>
            <h1>Ante = Blind</h1>
            <h1>Play</h1>

            <h1>Logo</h1>

            <h1>Player Chips</h1>

            <Button variant='primary' size='lg' onClick={onClickQuit}>Quit</Button>
        </div>
    )
}

export default CasinoPage;