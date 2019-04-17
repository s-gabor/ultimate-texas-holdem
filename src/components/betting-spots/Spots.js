import React from 'react';
import Button from 'react-bootstrap/Button';
import './Spots.css';

const Spots = (props) => {
    return (
        <div className='player-bets'>
            <Button variant='outline-light' 
                    className='rounded m-1 trips' 
                    onClick={props.onClickTrips}>
                {props.bets.trips || 'Trips'}
            </Button>
            <div>
                <Button variant='outline-light' 
                        className='rounded-circle m-1 bet' 
                        onClick={props.onClickAnteOrBlind}>
                    {props.bets.ante || 'Ante'}
                </Button>
                <span> = </span>
                <Button variant='outline-light' 
                        className='rounded-circle m-1 bet' 
                        onClick={props.onClickAnteOrBlind}>
                    {props.bets.blind || 'Blind'}
                </Button>
            </div>
            <Button variant='outline-light' 
                    className='rounded-circle m-1 bet' 
                    onClick={props.onClickPlay}>
                {props.bets.play || 'Play'}
            </Button>
        </div>
    )
}

export default Spots;
