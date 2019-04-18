import React from 'react';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import './Chips.css';

const Chips = (props) => { // lifting state up --> the selected chips
    return (
        <ButtonToolbar>
            <ToggleButtonGroup type="radio" name="options" className='mx-auto' > {/*defaultValue={1}*/}
                <ToggleButton value={1} onClick={(e) => props.onClickChips(1)}  className='chips rounded-circle ml-1' variant='danger'>1</ToggleButton>
                <ToggleButton value={2} onClick={(e) => props.onClickChips(5)}  className='chips rounded-circle ml-1' variant='success'>5</ToggleButton>
                <ToggleButton value={3} onClick={(e) => props.onClickChips(10)} className='chips rounded-circle ml-1' variant='warning'>10</ToggleButton>
                <ToggleButton value={4} onClick={(e) => props.onClickChips(25)} className='chips rounded-circle ml-1' variant='info'>25</ToggleButton>
                <ToggleButton value={5} onClick={(e) => props.onClickChips(50)} className='chips rounded-circle ml-1' variant='dark'>50</ToggleButton>
            </ToggleButtonGroup>
        </ButtonToolbar>
    )
}

export default Chips;
