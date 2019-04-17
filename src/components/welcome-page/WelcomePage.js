import React from 'react';
import Button from 'react-bootstrap/Button';
import Particles from 'react-particles-js';

const particlesOption = {
    "particles": {
        "number": {
            "value": 150
        },
        "size": {
            "value": 3
        },
        "line_linked": {
            "enable": true,
            "opacity": 0.2
        }
    },
    "interactivity": {
        "events": {
            "onhover": {
                "enable": true,
                "mode": "repulse"
            }
        }
    }
}

const WelcomePage = ({ onClickPlay }) => {
    return (
        <div>
            <Particles className='particles' params={particlesOption} /> 
            <h1>Ultimate Texas Hold'em</h1>
            <Button variant="primary" size="lg" onClick={onClickPlay}>PLAY</Button>
        </div>
    )
}

export default WelcomePage;
