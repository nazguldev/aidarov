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
            <Nav.Link href="/aboutDental"> О  стоматологии</Nav.Link>
              <Nav.Link href="/Iplant">Имплантация</Nav.Link>
              <Nav.Link href="/Orp">Ортопедия</Nav.Link>
              <Nav.Link href="/Vinery">Виниры</Nav.Link>
              <Nav.Link href="/Brekety">Брекеты</Nav.Link>
              <Nav.Link href="/Terapii">Терапия</Nav.Link>
              <Nav.Link href="/whiting">Отбеливание</Nav.Link>
              {/* <Nav.Link href="/whiting">Хирургия</Nav.Link> */}
            </Nav>
            <div className='phone_item'>
              <h3>
                <a
                  style={{
                    textDecoration: "none",
                    color: "white"
                  }}
                  href='tel:+996776245758'>0776245758</a>
              </h3>
            </div>
          </Navbar.Collapse>

        </Container>
      </Navbar>

    </div>
  );
}

export default DentalNavbar;