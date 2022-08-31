import React from 'react';
import {Card} from 'react-bootstrap'
import './xirurg.scss'

function AboutXirurg(props) {
    return (
        <div className='container row'>
            AboutXirurg
            <Card style={{ width: '18rem' }}>
                <h1>Adoctors</h1>
                <a href="/Adoctors" style={{ textDecoration: 'none' }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                    </Card.Body>
                    </a>
                </Card>
                <Card style={{ width: '18rem' }}>
                <h1>Price</h1>
                <a href="/Price" style={{ textDecoration: 'none' }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                    </Card.Body>
                    </a>
                </Card>
        </div>
    );
}

export default AboutXirurg;