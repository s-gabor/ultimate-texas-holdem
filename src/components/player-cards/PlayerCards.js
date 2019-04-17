import React from 'react';
import Button from 'react-bootstrap/Button';

const PlayerCards = ({ cards }) => {
    return (
        <div>
            <Button className='m-1'>{cards[0]}</Button>
            <Button className='m-1'>{cards[1]}</Button>
        </div>
    )
}

export default PlayerCards;
