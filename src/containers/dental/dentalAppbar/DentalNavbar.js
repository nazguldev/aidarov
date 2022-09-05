import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import './Appbar.scss';
import '../../../app/App.scss';
import logo from "../../../app/nav/logo.png";

function DentalNavbar(props) {
    return (
        <div className='containar'>        
            <Navbar bg="dark" expand="lg" variant='dark'>
          <Container>
            <Navbar.Brand href="/"><img width="50px" src={logo} /></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                            <Nav.Link href="/aboutclinicdental">О Клинике</Nav.Link>
                            <Nav.Link href="/Chec_Up">Чекап</Nav.Link>
                            <Nav.Link href="/Brekety">Брекеты</Nav.Link> <Nav.Link href="/whiting">Отбеливание</Nav.Link>
                            <Nav.Link href="/Vinery">Винеры</Nav.Link>
                            <Nav.Link href="/Iplant">Имплантация</Nav.Link>
                            <Nav.Link href="/stuff">Врачи</Nav.Link>
              </Nav>
            </Navbar.Collapse>
            <div className='phone_item'>
              <h3>
                <a
                style={{
                  textDecoration:"none",
                  color:"white"
                }}
                 href='tel:+996709545487'>0709545487</a>
              </h3>
            </div>
          </Container>
        </Navbar>

        </div>
    );
}

export default DentalNavbar;