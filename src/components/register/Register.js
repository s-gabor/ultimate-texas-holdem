import React from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';


class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            signInName: '',
            signInEmail: '',
            signInPassword: ''
        }
    }
    
    onNameChange = (event) => {
        this.setState({signInName: event.target.value});
    }

    onEmailChange = (event) => {
        this.setState({signInEmail: event.target.value});
    }
    
    onPasswordChange = (event) => {
        this.setState({signInPassword: event.target.value});
    }
    
    onSubmitRegister = (event) => {
        event.preventDefault();

        fetch('https://ultimate-texas-holdem-api.herokuapp.com/register', {
                method: 'post',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    name: this.state.signInName,
                    email: this.state.signInEmail,
                    password: this.state.signInPassword
                })
            })
            .then(response => response.json())
            .then(user => {
                alert(user);
                this.props.onRouteChange('signin');
            })
            .catch((err) => console.log('got this error in fetch: ', err))
    }

    render() {
        return (
            <div>
                <Form className="position-relative  shadow p-3 mb-5 rounded" style={{width: '400px', top: '200px', margin: 'auto'}}>
                    <Form.Group controlId="formBasicText">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter name" onChange={this.onNameChange} />
                    </Form.Group>
                    
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" onChange={this.onEmailChange} />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" onChange={this.onPasswordChange}/>
                    </Form.Group>

                    <Form.Group as={Row}>
                        <Col sm={12}>
                            <Button 
                                type="submit"
                                onClick={this.onSubmitRegister}
                            >Register
                            </Button>
                        </Col>
                    </Form.Group>
                </Form>
            </div>
        )
    }
}

export default Register;
