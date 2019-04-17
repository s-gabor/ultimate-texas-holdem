import React from 'react';
import DealerCards from '../dealer-cards/DealerCards';
import TableCards from '../table-cards/TableCards';
import PlayerCards from '../player-cards/PlayerCards';


const Cards = ({ cards }) => {
    return (
        <div>
            <DealerCards cards={cards.dealer}/>
            <TableCards cards={cards.table}/>
            <PlayerCards cards={cards.player}/>
        </div>
    )
}

export default Cards;
