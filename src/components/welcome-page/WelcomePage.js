import React from 'react';
// import Button from 'react-bootstrap/Button';
import Particles from 'react-particles-js';
import Signin from '../signin/Signin';

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



class WelcomePage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          signInEmail: '',
          signInPassword: ''
        }
      }
    
    //   onEmailChange = (event) => {
    //     this.setState({signInEmail: event.target.value})
    //   }
    
    //   onPasswordChange = (event) => {
    //     this.setState({signInPassword: event.target.value})
    //   }
    
    //   saveAuthTokenInSessions = (token) => {
    //     window.sessionStorage.setItem('token', token);
    //   }
    
    //   onSubmitSignIn = () => {
    //     fetch('http://localhost:3000/signin', {
    //       method: 'post',
    //       headers: {'Content-Type': 'application/json'},
    //       body: JSON.stringify({
    //         email: this.state.signInEmail,
    //         password: this.state.signInPassword
    //       })
    //     })
    //       .then(response => response.json())
    //       .then(data => {
    //         if (data && data.success === "true") {
    //           this.saveAuthTokenInSessions(data.token)
    //           this.props.loadUser(data.user)
    //           this.props.onRouteChange('home');
    //         }
    //       })
    //       .catch(console.log)
    //   }

    render() {
        const { onClickPlay } = this.props;
        return (
            <div>
                <Particles className='particles' params={particlesOption} /> 
                
                <Signin onClickPlay={onClickPlay}/>
                {/* <h1>Ultimate Texas Hold'em</h1> */}
                {/* <Button variant="primary" size="lg" onClick={onClickPlay}>PLAY</Button> */}
            </div>
        )
    }
}

export default WelcomePage;
