import React, { useEffect } from 'react';
import { Card, Col, Container, Nav, Navbar, NavDropdown, Row } from 'react-bootstrap'
import Button1 from '../../Button1';
import './xirurg.scss'
import _Navbar from "../../app/nav/_Navbar"
import Accordions from '../../components/accrdion/Accordions'
import AOS from 'aos';
import Adoctors from './Adoctors';
// import RunText from '../.././compon/ents/runText/RunText'
import Price from './Price';

function AboutXirurg({ setShow }) {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
    const data = [
        {
            title: "Оборудование, которое видит больше, чем врач",
            text: "Мы предлагаем нашим пациентам только самые современные в сфере стоматологии технологии и оборудование, которые исключают возможность врачебной ошибки."
        },
        {
            title: "Консилиум врачей по преображению каждой улыбки",
            text: "За эстетику и функциональность зубов лично отвечают все специалисты клиники, которые участвуют в создании улыбки."
        },
        {
            title: "Работаем даже с самыми сложными случаями",
            text: "Опыт наших врачей, современное оборудование и материалы позволяют создать восхитительную улыбку при любой клинической ситуации."
        },
        {
            title: "Высокое качество услуг и сервиса",
            text: "Американские технологии и передовые зарубежные методики, привезённые в Россию. Нашим врачам доверяют улыбки популярные люди и члены их семьей."
        },
        {
            title: "Пошаговый план лечения без скрытых расходов",
            text: "Полный чекап полости рта и составление цифрового плана лечения с предоставлением наглядных пошаговых действий и их стоимости."
        },
    ]

    return (
        <>
            <div className='container aboutXirurg mt-4'>
            <Navbar bg="dark" expand="lg" variant='dark'>
          <Container>
            <Navbar.Brand href="/"><img width="50px" src={'https://images.squarespace-cdn.com/content/v1/5d752f9b79dbbb3fce1ecf1b/1578856941630-IS6RIUSYKXOWHUMG2YBH/Meta_Icons-08.png'} /></Navbar.Brand>
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
                <Row>
                <Col sm={6} xs={12} md={6} className=" mb-3">
                        <img className='w-100' src='https://deti-euromed.ru/wp-content/uploads/2022/01/8.png' />
                    </Col>
                    <Col sm={6} xs={12} md={6} >
                        <h1 className='pt-5 text-center '>Хирургия Айдаров</h1>
                        <p className='text_nav  h5 mt-5'> Хирургический центр "Кортекс" - оснащен всем <br />
                            необходимым качественным современным оборудованием, <br />
                            на котором работают высококвалифицированные врачи.
                            Каждая палата, в нашем центре, подготовлена таким образом, <br /> чтобы все пациенты, вне зависимости от
                            <br /> возраста могли чувствовать себя в ней максимально комфортно.
                            Хирургический центр "Кортекс" - оснащен всем <br />
                            необходимым качественным современным оборудованием, <br />
                            на котором работают высококвалифицированные врачи.
                            Каждая палата, в нашем центре, подготовлена таким образом, <br /> чтобы все пациенты, вне зависимости от
                            <br /> возраста могли чувствовать себя в ней максимально комфортно.Хирургический центр "Кортекс" - оснащен всем <br />
                            необходимым качественным современным оборудованием, <br />
                            на котором работают высококвалифицированные врачи.
                            Каждая палата, в нашем центре, подготовлена таким образом, <br /> чтобы все пациенты, вне зависимости от
                            <br /> возраста могли чувствовать себя в ней максимально комфортно.</p>
                        <Col className='mt-3' sm={6}>
                            <Button1 setShow={setShow} />
                        </Col>
                    </Col>

                    
                </Row>
            </div>

            {/* <RunText /> */}
            <div className='container'>
                <h1 className='text-center mt-5'>Наша Хурургия</h1>
                <Accordions name={data} />
                <div className='mt-5'>
                    <Row>
                        <Col xs={12} md={4} >
                            <img data-aos="zoom-in" className='pt-3 h-100 w-100' src='https://med122.com/news/1/2867775.jpg' alt='' />
                        </Col>
                        <Col xs={12} md={4} >
                            <img data-aos="zoom-in" className='pt-3 h-100 w-100' src='https://thumbs.dreamstime.com/b/%D1%85%D0%B8%D1%80%D1%83%D1%80%D0%B3%D0%B8%D1%8F-11-7465323.jpg' alt='' />
                        </Col>
                        <Col xs={12} md={4}>
                            <img data-aos="zoom-in" className=' pt-3 h-100 w-100' src='https://www.anadolumedicalcenter.ru/wp-content/uploads/2020/12/hirurgiya-golovy.jpg' alt='' />
                        </Col>
                    </Row>
                </div>
                <Row className='mt-5'>
                    <Col xs={12} md={6} lg={6}>
                        <div data-aos="zoom-in" className='justify-content-evenly mt-5 text-center' >
                            <img class=" t013__img t-img" src={'https://www.cchp.ru/upload/iblock/60f/60f75d25040a7b4b1cb0e484e4e7c322.jpg'} imgfield="img" data-tu-max-width="320" data-tu-max-height="320" data-tu-cover="c" alt="" role="presentation">
                            </img>
                            <Card.Title className='text_nav'>Доктор Айдаров</Card.Title>
                            <h6 className='text_nav' data-customstyle="yes">Основатель и<br /> главный врач хирургии</h6>
                        </div>
                    </Col>
                    <Col xs={12} md={6} lg={6}>
                        <div data-aos="zoom-in-up" className='container justify-content-evenly text_nav '>
                            <div  className=''>
                                Я хотел, чтобы клиника не напоминала больницу. Поэтому мы создали пространство, которое настраивает<br />
                                на правильную волну совместного творчества. Если люди приходят лечить зубы как на каторгу, то сложно <br />
                                ожидать от них высокогоуровня мотивации. Все мы немного нервничаем, если вокруг больничные<br /> белые стены. А у нас даже зона
                                ресепшена больше похожа на лобби-бар в отеле, где во время ожидания можно <br />послушать музыку, почитать
                                что-нибудь интересное или выпить чашечку кофе.
                            </div>
                            <div className='mt-4'>
                                Все пациенты — наши друзья! Те, кто приходит сюда впервые, знакомятся с нами и, пройдя вместе путь <br />от стоматологического кресла до красивой улыбки и здоровых зубов, остаются с нашей командой в прекрасных отношениях.
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
            <Adoctors />
            <Price />
            {/* <RunText /> */}
        </>
    );
}

export default AboutXirurg;