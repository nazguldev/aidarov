import React from 'react';
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import Button1 from '../../Button1';
import logo from "./logo.png"

function _Navbar(props) {
  return (
    <div>
      return (
      <>
        <Navbar bg="dark" expand="lg" variant='dark'>
          <Container>
            <Navbar.Brand href="/"><img width="50px" src={logo} /></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/AboutClinic">О Клинике</Nav.Link>
                <Nav.Link href="/ContactClinick">Контакты</Nav.Link>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                  <NavDropdown.Item href="/aboutDental">Стоматология</NavDropdown.Item>
                  <NavDropdown.Item href="/AboutXirurg">Хирургия
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/AboutTerapiya">Терапия</NavDropdown.Item>
                  
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
            <Button1/>
          </Container>
        </Navbar>

      </>
      );
    </div>
  );
}

export default _Navbar;