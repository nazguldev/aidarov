import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Nav, Navbar, NavDropdown, Row, Table } from 'react-bootstrap'
import './Laboratory.scss'
import _Navbar from "../../app/nav/_Navbar"
import lab from './product';
import Button1 from '../../Button1';

function AboutLaboratory({ setShow }) {
    const [filter, setFilter] = useState('')

    const searchText = (e) => {
        setFilter(e.target.value)
    }
    console.log(filter)

    let as = lab.filter(item => {
        return Object.keys(item).some(key =>
            item[key].toString().toLowerCase().includes(filter.toString().toLowerCase()))
    })



    return (
        <div className={'Laboratory'}>
             <Navbar bg="dark" expand="lg" variant='dark'>
          <Container>
            <Navbar.Brand href="/"><img width="50px" src={'http://s1.iconbird.com/ico/0612/iloviconsbysvengraph/w512h5121339361119lab.png'} /></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/">О Клинике</Nav.Link>
                {/* <Nav.Link href="/ContactClinick">Контакты</Nav.Link> */}
                <NavDropdown title="Услуги" id="basic-nav-dropdown">
                  <NavDropdown.Item href="/aboutDental">Стоматология</NavDropdown.Item>
                  <NavDropdown.Item href="/AboutGynecology">Гинекология</NavDropdown.Item>
                  <NavDropdown.Item href="/AboutUrologi">Урология
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/AboutXirurg">Хирургия
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/AboutTerapiya">Терапия</NavDropdown.Item>
                  <NavDropdown.Item href="/AboutLaboratory">Лаборатория</NavDropdown.Item>

                </NavDropdown>
              </Nav>
             <Nav>
             <NavDropdown title="Контакты" id="basic-nav-dropdown">
                <NavDropdown.Item href='tel:+996709545487' > +996709545487 </NavDropdown.Item>
                <NavDropdown.Item href='tel:+996779545487' >+996779545487 </NavDropdown.Item>
                <NavDropdown.Item href='tel:+996555545487' >+996555545487 </NavDropdown.Item>
                </NavDropdown>

             </Nav>
             
            
            </Navbar.Collapse>

          </Container>
        </Navbar>
            <div class={"slider__item "}>
                <div className='container'>
                    <h1 className='text-center pt-2' style={{ color: "#d3bb7e" }}>Лаборатория </h1>
                    <p className='text_nav h5 pb-3 mb-2' style={{ color: "black" }}>
                        - это лаборатория надежных и <br />качественных исследований! Это наш большой <br />труд и гордость потому что у нас <br />работают самые лучшие специалисты, имеющие<br /> огромный опыт работы. Все наши лаборанты имеют<br /> высшее образование и специализацию в <br />сфере медико-биологической диагностики.<br /> Весь коллектив лаборатории успешно прошел <br />сертификацию отделом лицензирования Министерства<br /> здравоохранения Кыргызской Республики.
                    </p>
                    <div className='pb-2 text-center'>
                    <Button1 setShow={setShow} />

                    </div>
                </div>
            </div>
            <h1 className='text-center'>Анализы и цены</h1>
            <div className='container'>
                <div className='pt-3 pb-3'>
                    <input type='text'
                        className="form-control"
                        placeholder='Введите название анализа...'
                        value={filter}
                        onChange={searchText.bind(this)}
                    />
                </div>

                <Col>
                    <Table striped bordered hover variant='dark' >
                        <thead>
                            <tr>
                                <th >№</th>
                                <th>Гематологические исследования   </th>
                                <th>Стоимость услуг</th>
                            </tr>
                        </thead>
                        <tbody>
                            {as.map((a) => {
                                return (
                                    <tr>
                                        <td>{a.id}</td>
                                        <td>{a.title.length > 0 ? a.title : "не найдено"}</td>
                                        <td>{a.price}</td> </tr>
                                )
                            })}
                        </tbody>
                    </Table>
                </Col>
            </div>

        </div>
    );
}

export default AboutLaboratory;