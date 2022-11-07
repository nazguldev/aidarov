import React from 'react';
import { Card, Col, Container, Nav, Navbar, NavDropdown, Row, Table } from 'react-bootstrap';
import _Navbar from "../../app/nav/_Navbar"
import Button1 from '../../Button1';
import RunText from '../../components/runText/RunText';
import './lor.scss'
import Accordions from '../../components/accrdion/Accordions';


function AboutLor({ setShow }) {
    const data = [
        {
            title: "В каком случае нужно обращаться к отоларингологу?",
            text: "ЛОР-заболевания очень распространены, ими люди болеют часто, поэтому в определенный момент при повторяющихся симптомах перестают считать необходимым посещение врача и самостоятельно ставят себе диагноз и назначают лечение. На самом деле, легкий насморк и боль в горле можно побороть и самостоятельно за несколько дней, но в ситуации, когда улучшений от предпринятых мер не наблюдается, и болезнь прогрессирует, не стоит полагаться на удачу, нужно незамедлительно показаться специалисту – отоларингологу (ЛОРу)."
        },

        {
            title: "Какие болезни выявляет ЛОР         ?",
            text: "Отоларингология – отрасль медицины, которая специализируется на диагностике, лечении и профилактике болезней уха, горла, носа. Врач, который работает в этом направлении, называется отоларинголог или ЛОР."
        },
        {
            title: "Обследование и лечение ЛОР-заболеваний?",
            text: "Наша клиника предоставляет качественные услуги квалифицированного отоларинголога. Для своевременной диагностики и подбора подходящего именно для Вашего организма лечения, обратиться к ЛОР-врачу необходимо сразу после появления у Вас первых симптомов заболевания. Опытный врач проводит лечение не только классическими, но и новаторскими методами. Современное медицинское оборудование обеспечит высокую точность исследований, а также позволит максимально снизить болезненность проводимых пациенту процедур и минимизировать неблагоприятные последствия. Консультация врача-отоларинголога в клинике репродуктивного здоровья «АРТ-ЭКО»."
        },
        {
            title: "В каком случае нужно идти к лору?",
            text: "Посетить врача-отоларинголога нужно при болевых ощущениях, а также ощущении дискомфорта, связанных с носом, ушами или горлом. В частности: прекращение или затруднение дыхания носом; боли или выделения из ЛОР-органов (из ушей, носа или горла);"
        },
        {
            title: "Когда идти к лору а когда к терапевту?",
            text: "Как правило, грипп, как и многие другие ОРВИ-заболевания, диагностирует и лечит врач-терапевт. К ЛОРу необходимо идти только в том случае, когда течение болезни приняло тяжелую форму: сильное повышение температуры (до 40-40,5 °С);"
        },
        {
            title: "Что смотрит ЛОР в ухе?",
            text: "Отоскопия – доктор осматривает ухо с помощью ушной воронки, лобного рефлектора или специальным прибором – отоскопом. Отоскоп оснащен увеличительным стеклом, фонарем и камерой. С помощью отоскопа изучаются ткани, удаляются инородные тела, делается пункция барабанной перепонки и хирургические манипуляции."
        },
    ]
    const patients = [
        {
            img: `https://crb-vyksa.ru/netcat_files/11/1/deontlogiya.jpg`,
            title: "TITLE",
            known_for: "TEXT",
        },
        {
            img: `https://crb-vyksa.ru/netcat_files/11/1/deontlogiya.jpg`,
            title: "TITLE",
            known_for: "TEXT",
        },
        {

            img: `https://crb-vyksa.ru/netcat_files/11/1/deontlogiya.jpg`,
            title: "TITLE",
            known_for: "TEXT",
        }
    ]
    const as = [
        {
            id: 1,
            title: "Прием врача терапевта, гастроэнтеролога",
            price: "	700 сом",

        },
        {
            id: 2,
            title: "Прием врача невролога",
            price: "1000 сом",

        },
        {
            id: 3,
            title: "Прием врача эндокринолога",
            price: "	700 сом",

        },
        {
            id: 4,
            title: "Прием врача иммунолога первичный (прием только с анализами)",
            price: "	1000 сом",

        },
        {
            id: 5,
            title: "Прием врача уролог (с осмотром)",
            price: "	700 сом",

        },


    ]
    const text = [{
        texts: "Как лечить простатит",
        t: "/"
    }, {
        texts: "Уретрит",
        t: "/"
    }, {
        texts: "Нефрит",
        t: "/"
    }, {
        texts: "Бактериальный вагиноз.",
        t: "/"
    }, {
        texts: "Мочекаменная болезнь",
        t: "/"
    }, {
        texts: "Пролапс гениталий",
        t: "/"
    }, {
        texts: "Анализам",
        t: "/"
    }, {
        texts: "Урология",
        t: "/"
    },
    {
        texts: "Как лечить простатит",
        t: "/"
    }, {
        texts: "Уретрит",
        t: "/"
    }, {
        texts: "Нефрит",
        t: "/"
    }, {
        texts: "Бактериальный вагиноз.",
        t: "/"
    }, {
        texts: "Мочекаменная болезнь",
        t: "/"
    }, {
        texts: "Пролапс гениталий",
        t: "/"
    }, {
        texts: "Анализам",
        t: "/"
    }, {
        texts: "Урология",
        t: "/"
    },
    ]
    return (
        <>


            <div className='container AboutUrolog'>
                <Navbar bg="dark" expand="lg" variant='dark'>
                    <Container>
                        <Navbar.Brand href="/"><img width="50px" src={'https://vvclinic.com.ua/images/news/lor_vrach_kiev.jpg'} /></Navbar.Brand>
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

                    <Col className="mt-5" md={6} >
                        <h1 className="mt-3 text">Кто такой лор?</h1>
                        <p className="text2 mt-3">
                            Отоларингология – отрасль медицины, которая специализируется на диагностике, лечении и профилактике болезней уха, горла, носа. Врач, который работает в этом направлении, называется отоларинголог или ЛОР.ак сложилось, что специалисты в области отоларингологии на сегодняшний день очень востребованы. Это можно объяснить тем, что ротовая полость, уши о нос человека связаны между собой и образуют единую систему. При заболевании одного из этих органов велик риск развития более обширного воспаления, которое затрагивает и остальные органы этой сложной системы.
                        </p>
                        <p className="text2 mt-3">Наиболее распространенное ЛОР-заболевание – насморк или ринит, с которым в своей жизни сталкивался, наверное, каждый человек. Согласно статистическим данным, примерно половина всех людей имеет диагноз «хронический вазомоторный ринит». Ну и мало кто не может себе представить ощущение, когда «стреляет» ухо или болит горло.</p>

                        <p className='mt-5'>
                            {/* <Button1 setShow={setShow} /> */}
                            <div className="pb-3 pt-3 mt-2 mb-3 div__a">
                                <a href={'tel:+996776000000'} style={{ textDecoration: "none" }} className={'p-2 textinfooter2 rounded'}   > Записаться на прием</a>
                            </div>
                        </p>
                    </Col>
                    <Col md={6} xs={8} sm={10}>
                        <Card.Img variant="top" src='https://pngimg.com/uploads/doctor/doctor_PNG16041.png' />
                    </Col>
                </Row>
                <h1 className='mt-3'>С какими симптомами следует<br /> обращаться к лору?</h1>
                <Accordions name={data} />
                <Row>
                    <Col xs={12} md={6} lg={6}>
                        <div className='justify-content-evenly text-center  ' >
                            <img class=" t013__img t-img" src={'https://pngimg.com/uploads/doctor/doctor_PNG15980.png'} imgfield="img" data-tu-max-width="320" data-tu-max-height="320" data-tu-cover="c" alt="" role="presentation">
                            </img>
                            <Card.Title className='text_nav'>Доктор Айдаров Чынгыз</Card.Title>
                            <span className='text_nav' style={{ fontSize: '14px', lineHeight: '18px' }} data-customstyle="yes">Основатель и<br /> главный врач урологии </span>
                        </div>
                    </Col>
                    <Col xs={12} md={6} lg={6}>
                        <div className='justify-content-evenly text_nav mt-3'>
                            <div >
                                Я Айдаров Чынгыз родился в городе Ош. 06.05.1991 год.Окончил школу Карло-Маркса в 2008 году. Поступил в Медицинскую академию 2009 году. Окончил мед – академию 2014 году факультет лечебное дело. Поступил в ординатуру 2014 году по специальности врач уролог. С 2016 года работал в ОМОКБ до 2019года. С 2019 года работаю в частной клинике Айдарова Камалдина Абдурахмановича. Занимаемся хирургическим и терапевтическим лечением урологических заболевании. Особое направления в области мужского бесплодия.Спермограмма
                            </div>

                            <div className='mt-3'>
                            <div className="pb-3 pt-3 mt-2 mb-3 div__a">
                                    <a href={'tel:+996776000000'} style={{ textDecoration: "none" }} className={'p-2 textinfooter2 rounded'}   > Записаться на прием</a>
                                </div>

                            </div>
                        </div>
                    </Col>
                </Row>
                <Row className='mt-5'>
                    <h1 className='text-center mb-3'>
                        Наши пациенты
                    </h1>
                    {patients.map(e => {
                        return (
                            <>
                                <Col md={4} sm={6} xs={12} >
                                    <div>
                                        <Card.Img className='W-100 h-100' src={e.img}></Card.Img>
                                        <Card.Text style={{ color: "white", textAlign: "center" }}>{e.title}</Card.Text>
                                        <Card.Text style={{ color: "white", textAlign: "center" }}>{e.known_for}</Card.Text>
                                    </div>
                                </Col>
                            </>
                        )
                    })}
                </Row>
            </div>
            <RunText name={text} />
            <div className='container'>
                <h1 className='text-center'>Цены на услуги</h1>
                <Col>
                    <Table striped bordered hover variant='dark' >
                        <thead>
                            <tr>
                                <th >№</th>
                                <th>Общий мазок на флору </th>
                                <th>Стоимость услуг</th>
                            </tr>
                        </thead>
                        <tbody>
                            {as.map((a) => {
                                return (
                                    <tr>
                                        <td>{a.id}</td>
                                        <td>{a.title}</td>
                                        <td>{a.price}</td> </tr>
                                )
                            })}
                        </tbody>
                    </Table>
                </Col>
            </div>
        </>

    );
}

export default AboutLor;