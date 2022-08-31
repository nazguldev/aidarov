import React from 'react';
import { Card } from 'react-bootstrap';
import _Navbar from './nav/_Navbar'

function MainContainers(props) {
    return (
        <div className='container'>
            <_Navbar />
            <div>
                <Card style={{ width: '18rem' }}>
                <h1>стом</h1>
                <a href="/aboutDental" style={{ textDecoration: 'none' }}>
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
                <h1>хирургия</h1>
                <a href="/AboutXirurg" style={{ textDecoration: 'none' }}>
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
                <h1>Terapiya</h1>
                <a href="/AboutTerapiya" style={{ textDecoration: 'none' }}>
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
        </div>
    );
}

export default MainContainers;