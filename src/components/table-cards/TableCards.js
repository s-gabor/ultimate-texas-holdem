import React from 'react';
import Button from 'react-bootstrap/Button';

const TableCards = ({ cards }) => {
    return (
        <div>
            <Button className='m-1'>{cards[0]}</Button>
            <Button className='m-1'>{cards[1]}</Button>
            <Button className='m-1'>{cards[2]}</Button>
            <Button className='ml-3'>{cards[3]}</Button>
            <Button className='m-2'>{cards[4]}</Button>
        </div>
    )
}

export default TableCards;