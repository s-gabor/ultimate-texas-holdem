import React from 'react';
import Button from 'react-bootstrap/Button';

const GameStats = ({ stats }) => {
    return (
        <div>
            <Button variant="secondary" size="sm">BALANCE: {stats.balance}</Button>
            <Button variant="secondary" size="sm">WIN: {stats.win}</Button>
            <Button variant="secondary" size="sm">Info: {stats.info}</Button>
            <Button variant="secondary" size="sm">TOTAL BET: {stats.bet}</Button>
        </div>
    )
}

export default GameStats;
