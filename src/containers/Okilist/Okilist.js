import AOS from 'aos';
import React from 'react';
import { useEffect } from 'react';
import { Card, Col, Container, Nav, Navbar, NavDropdown, Row } from 'react-bootstrap';
import Button1 from '../../Button1';
import Accordions from '../../components/accrdion/Accordions';

function Okilist({ setShow }) {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
    const a =[
        {
            title :"Какие болезни лечит окулист?",
            text:"нарушение рефракции: близорукость, дальнозоркость, астигматизм;нарушения работы мышц: косоглазие, опущение верхнего века,невозможность смыкать веки и  воспаления: ячмень, конъюнктивит, кератит, блефарит, склери"
        },
        {
            title :"Что может увидеть окулист?",
            text:"На глазном дне врач осматривает и оценивает состояние сетчатки, сосудов и зрительного нерва. Осмотр вначале проводится с узким зрачком. Однако желательно, а в некоторых состояниях обязательно осматривать глазное дно с расширением зрачков "
        },
        {
            title :"Как понять что нужно идти к окулисту?",
            text:"боль в глазах, независимо от ее характера и локализации, а также боль и дискомфорт, ощущающиеся в непосредственной близости от глазного яблока;сильное или длительное покраснение глаз – как самого глазного яблока, так и слизистой оболочки век;сильный или длительный зуд в глазах;"
        }, {
            title :"Как проходит осмотр у окулиста            ?",
            text:"Как проходит прием у врача-офтальмолога? Офтальмолог беседует с пациентом, затем проводит подробный осмотр, который включает оценку слёзных протоков и век, положение и подвижность глазных яблок, исследование глазного дна, состояния зрачков и их реакции на свет."
        },
    ]
    return (
        <div className='container'>
            <Navbar bg="dark" expand="lg" variant='dark'>
                <Container>
                    <Navbar.Brand href="/"><img width="50px" src={'https://imgtest.mir24.tv/uploaded/images/crops/2022/February/870x489_0x417_detail_crop_20220225174534_fd6eef58_d8f986c597b46d9003f9449f1b5501f6e9f0b74d0859ef4d3c4165341aa8e638.jpg'} /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/">О Клинике</Nav.Link>
                            <NavDropdown title="Услуги" id="basic-nav-dropdown">
                                <NavDropdown.Item href="/aboutDental">Стоматология</NavDropdown.Item>
                                <NavDropdown.Item href="/AboutGynecology">Гинекология</NavDropdown.Item>
                                <NavDropdown.Item href="/AboutUrologi">Урология
                                </NavDropdown.Item>
                                <NavDropdown.Item href="/AboutXirurg">Хирургия
                                </NavDropdown.Item>
                                <NavDropdown.Item href="/AboutTerapiya">Терапия</NavDropdown.Item>
                                <NavDropdown.Item href="/AboutLaboratory">Лаборатория</NavDropdown.Item>

                                <NavDropdown.Item href="/AboutLor">Лор</NavDropdown.Item>

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
                    <h1 className='pt-5 text-center '>Офтальмолог </h1>
                    <p className='text_nav   mt-5'> это врач, который специализируется на диагностике, лечении и профилактике глазных заболеваний. Переоценить тяжесть проблем со зрением сложно – для человека перестает существовать значительная часть окружающего мира.<p />
                        <p> Детская офтальмология – подраздел офтальмологии, занимающийся исследованием особенностей детского зрения. Зрение ребенка в отличие от зрения взрослого человека постоянно изменяется. Детская офтальмология призвана изучить особенности этих изменений и связанных с ними патологий.</p>

                    </p>
                    <Col className='mt-3' sm={6}>
                        <Button1 setShow={setShow} />
                    </Col>
                </Col>
            </Row>
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
                            Центр хирургии оказывает плановую медицинскую помощь. Оперативное лечение осуществляется в соответствии с современными тенденциями развития хирургии. При этом используются новейшие операционные методики: малоинвазивные (малотравматичные) оперативные вмешательства с коротким периодом реабилитации, современный шовный материал, новейшее эндоскопическое оборудование. Для послеоперационной реабилитации широко применяются новые гипоаллергенные перевязочные средства, одноразовые инструменты, современные фармпрепараты.
                            </div>
                            <div className='mt-4'> 
                            Коллектив отделения постоянно трудится над освоением и внедрением новейших методов диагностики и лечения своих пациентов.  <br/> Имеется опыт совместного проведения операций, мастер-классов. В сложных случаях проводятся консультации больных посредством on-line консультаций.
                            </div>
                        </div>
                    </Col>
                </Row>
            <h1 className='text-center mt-5'>НАПРАВЛЕНИЯ РАБОТЫ</h1>
            <Accordions name={a} />
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
            <div>
                {/* <Accordions/> */}
            </div>

            <h1 className='text-center mt-5'> ПРЕИМУЩЕСТВА ОТДЕЛЕНИИ</h1>
            <Row className="mt-5">
                <Col xs={12} md={4}  >
                    <h3 data-aos="fade-up"
                        data-aos-anchor-placement="top-bottom" class="tn-atom text-center  p-2 m-2">01</h3>

                    <p style={{ color: "white" }} className="text-center p-2 m-2">БОЛЕЕ 100 СПЕЦИАЛИСТОВ
                    </p>

                </Col>
                <Col xs={12} md={4} >
                    <h3 data-aos="fade-up"
                        data-aos-anchor-placement="top-bottom" class="tn-atom text-center  p-2 m-2">02</h3>
                    <p style={{ color: "white" }} className="text-center p-2 m-2">БОЛЕЕ 35 000 ДОВОЛЬНЫХ КЛИЕНТОВ </p>
                </Col>
                <Col xs={12} md={4} >
                    <h3 data-aos="fade-up"
                        data-aos-anchor-placement="top-bottom" class="tn-atom text-center  p-2 m-2">03</h3>
                    <p style={{ color: "white" }} className="text-center p-2 m-2">СТАЦИОНАР НА 15 КОЙКО-МЕСТ

                    </p>
                </Col>
                <Col xs={12} md={4} >
                    <h3 data-aos="fade-up"
                        data-aos-anchor-placement="top-bottom" class="tn-atom text-center  p-2 m-2">04</h3>
                    <p style={{ color: "white" }} className="text-center p-2 m-2">БОЛЕЕ 30 СПЕЦИАЛЬНОСТЕЙ</p>

                </Col>
                <Col xs={12} md={4} >
                    <h3 data-aos="fade-up"
                        data-aos-anchor-placement="top-bottom" class="tn-atom text-center  p-2 m-2">05</h3>
                    <p style={{ color: "white" }} className="text-center p-2 m-2">
                        Современные оборудования</p>
                </Col>
                <Col xs={12} md={4} >
                    <h3 data-aos="fade-up"
                        data-aos-anchor-placement="top-bottom" class="tn-atom text-center  p-2 m-2">06  </h3>
                    <p style={{ color: "white" }} className="text-center p-2 m-2">
                        Высококвалифицированные специалисты</p>
                </Col>

            </Row>
        </div>
    );
}

export default Okilist;