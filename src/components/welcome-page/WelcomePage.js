import React from 'react';
import Button from 'react-bootstrap/Button';

const WelcomePage = ({onClickPlay}) => {
    return (
        <div>
            <h1>Ultimate Texas Hold'em</h1>
            <Button variant="primary" size="lg" onClick={onClickPlay}>PLAY</Button>
        </div>
    )
}

export default WelcomePage;