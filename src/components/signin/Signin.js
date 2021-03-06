import React from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';


class Signin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            signInEmail: '',
            signInPassword: ''
        }
    }
    
    onEmailChange = (event) => {
        this.setState({signInEmail: event.target.value});
    }
    
    onPasswordChange = (event) => {
        this.setState({signInPassword: event.target.value});
    }
    
    onSubmitSignIn = (event) => {
        event.preventDefault();
        const apiUrl = 'https://ultimate-texas-holdem-api.herokuapp.com';

        const handleUserSignin = (user) => {
            if (user.email === this.state.signInEmail) {
                this.props.loadUser(user);
                this.props.onRouteChange('home');
            }
        }

        async function getUserData(url, email, password) {
            const response = await fetch(url, {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    email: email,
                    password: password
                })
            })
            const userObj = await response.json();
            return userObj;
        }

        getUserData(apiUrl + '/signin', this.state.signInEmail, this.state.signInPassword)
            .then(user => handleUserSignin(user))
            .catch(err => console.error(err))


        // fetch(apiUrl + '/signin', {
        //         method: 'post',
        //         headers: {'Content-Type': 'application/json'},
        //         body: JSON.stringify({
        //             email: this.state.signInEmail,
        //             password: this.state.signInPassword
        //         })
        //     })
        //     .then(response => response.json())
        //     .then(user => handleUserSignin(user))
        //     .catch(err => console.error(err))
    }

    render() {
        const { onRouteChange } = this.props;
        return (
            <div>
                <Form className="position-relative  shadow p-3 mb-5 rounded" style={{width: '400px', top: '200px', margin: 'auto'}}>
                    
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" onChange={this.onEmailChange} />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" onChange={this.onPasswordChange}/>
                    </Form.Group>

                    <Button 
                        variant='link' 
                        style={{color: '#083f08'}}
                        className='mb-2'
                        onClick={() => onRouteChange('register')}
                    >Register
                    </Button>

                    <Form.Group as={Row}>
                        <Col sm={12}>
                            <Button 
                                type="submit"
                                onClick={this.onSubmitSignIn}
                            >Sign In
                            </Button>
                        </Col>
                    </Form.Group>
                </Form>
            </div>
        )
    }
}

export default Signin;
