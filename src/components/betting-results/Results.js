import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Results = ({ cards }) => {
    return (
        <Container>
            <Row>
                <Col>dealer: {cards.dealer}</Col>
                <Col>player: {cards.player}</Col>
            </Row>
        </Container>
        
    )
}

export default Results;
