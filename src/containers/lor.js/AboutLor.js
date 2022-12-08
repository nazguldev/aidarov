import React from 'react';
import { Card, Col, Container, Nav, Navbar, NavDropdown, Row, Table, Carousel } from 'react-bootstrap';
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

    const feedback_lor =[
        {
            name:"Бекзат",
            text:"Никогда не обращалась к ЛОР врачу, а когда пришлось, поняла,что специалистов по этому профилю очень мало.Где я только не была: 6-я поликлиника, КВД, 30-я больница. Нигде мне не помогли как специалисты. Доктор оень внимательный и добрый человек, внимательно выслушает, подробно объяснила сам процесс лечения, проследила за ходом лечения, убедилась что все прошло успешно. Спасибо ей огромное, Всем советую обращаться к этому КЛАССНОМУ СПЕЦИАЛИСТУ.",
        },
        {
            name:"Жылдыз",
            text:"К хорошему врачу под кабинетом очередь, не пробиться. Люди понимают и чувствуют кому довериться, кто поможет.Доктор - Квалифицированный специалист, умная, занимательная. К каждому пациенту найдёт подход, внимательно выслушает ,внимательно осмотрит и назначит лечение , что не мало важно доступное по кошельку, а от себя ещё и даст советы по улучшению состояния здоровья. Дай Бог ей здоровья!",
        },
        {
            name:"Руслан",
            text:"У меня хронический тонзиллит. Мне посоветовали обратиться в МЦ Айдаровой к лор врачу. Доктор Чынгыз Айдаров проводит эффективное и правильно подобранное лечение. Советую всем , не пожалеете!",
        },
        {
            name:"Анваржон",
            text:"Хочу выразить свою благодарность доктору Чынгызу Айдарову. Замечательный специалист. Очень рад, что 3 года назад в эту клинику Айдарова случайно попал по рекомендациям моего друга на прием именно к этому лор-врачу. Моя проблема была - заложенность носа на протяжении многих лет, без капель для носа не могла дышать. Доктор профессионально подошел к изучению истории болезни, постановки диагноза, проведению лазерной вазотомии. После этого, могу жить и свободно дышать носом! Огромное Вам спасибо, удачи и всех благ.",
        },
        {
            name:"Ислам",
            text:"Сегодня побывали на приеме.Хочу всем порекомендовать доктора.Очень профессионально,стерильно,не больно.Доступные цены за отличный сервис.Дети счастливы.",
        },
      

    ]
    return (
        <>


            <div className='container AboutUrolog'>
                <Navbar bg="dark" expand="lg" variant='dark'>
                    <Container>
                        <Navbar.Brand href="/"><img style={{ width: '50px', height: '50px', borderRadius: '50%' }} src={'https://vvclinic.com.ua/images/news/lor_vrach_kiev.jpg'} /></Navbar.Brand>
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
                <h1 className='text-center'>СХЕМА ЭФФЕКТИВНОГО ЛЕЧЕНИЯ</h1>
                <div style={{
                    width: 'auto',
                    // textAlign: "center",
                    border: '2px solid #d3bb7e',
                    padding: "15px"
                }}>
                    <Row>
                        <Col xs={12} md={6} lg={6}>

                            <h3 className='justify-content-evenly text-center text2 mt-3' >
                                ШАГ 1 первечный прием
                            </h3>
                            <p className='text2 text-center mt-3'>При первом посещении врач проктолог «Клиника Айдаров» проводит комплексное обследование пациента.  Длительность первичного приема 30 минут. Выбор методов лечения проктологических заболеваний основан на данных высокоточной диагностики, которая включает ряд процедур для оценки состояния и функций органов  и систем организма.</p>
                        </Col>
                        <Col xs={12} md={6} lg={6}>
                            <h3 className='justify-content-evenly text-center text2 mt-3' >
                                МЕТОДЫ ДИАГНОСТИКИ:
                            </h3>
                            <ol className='mt-3' style={{ color: "white" }}>
                                <li>сбор анамнеза</li>
                                <li>осмотр пациента</li>
                                <li>эндоскопическое обследование уха, горла, носа</li>
                                <li>сдача анализов крови</li>
                            </ol>
                        </Col>
                    </Row>
                </div>
                <div style={{
                    width: 'auto',
                    // textAlign: "center",
                    border: '2px solid #d3bb7e',
                    padding: "15px",
                    marginTop:"15px"
                    
                }}>
                <Row>
                    <Col xs={12} md={6} lg={6}>
                        <h3 className='justify-content-evenly text-center text2 mt-3' >
                            ШАГ 2 лечение
                        </h3>
                        <p className='text2 text-center mt-3'>Лечение в нашей клинике проводится не только традиционными, но и инновационными методами, которые доказали свою эффективность.</p>
                    </Col>
                    <Col xs={12} md={6} lg={6}>
                        <h3 className='justify-content-evenly text-center text2 mt-3' >
                            МЕТОДЫ ЛЕЧЕНИЯ:
                        </h3>
                        <ol className='mt-3' style={{ color: "white" }}>
                            <li>медикаментозная терапия</li>
                            <li>ингаляции</li>
                            <li>соляная комната</li>
                            <li>лечебный плазмаферез</li>
                        </ol>
                    </Col>
                </Row>
                </div>
                <div style={{
                    width: 'auto',
                    // textAlign: "center",
                    border: '2px solid #d3bb7e',
                    padding: "15px",
                    marginTop:"15px"
                }}>
                <Row>
                    <Col xs={12} md={6} lg={6}>
                        <h3 className='justify-content-evenly text-center text2 mt-3' >
                            ШАГ 3 прафилактический прием
                        </h3>
                        <p className='text2 text-center mt-3'>С особым вниманием наши врачи относятся к вопросам профилактики патологий. В зависимости от диагноза необходимо посещать врача для планового медицинского осмотра раз в 3, 6 или 12 месяцев.</p>
                    </Col>
                    <Col xs={12} md={6} lg={6}>
                        <h3 className='justify-content-evenly text-center text2 mt-3' >
                            МЕТОДЫ ДИАГНОСТИКИ:
                        </h3>
                        <ol className='mt-3' style={{ color: "white" }}>
                            <li>плановый медицинский осмотр</li>

                        </ol>
                    </Col>
                </Row>
                </div>
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
            <Row className="justify-content-center mt-5">
                <Col sm={10} md={8} xs={10}>
                <h1 className='text-center pt-5 pb-5'>Отзывы</h1>
                <Carousel >
                        {
                            feedback_lor.map(e => {
                                return (
                                    <Carousel.Item >
                                        <div className='feedback_div'>
                                        <h4>{e.name}</h4>
                                       <p>
                                           {e.text}
                                       </p>
                                        </div>
                                           
                                        
                                    </Carousel.Item>
                                )
                            })
                        }
                    </Carousel>
                    </Col>
                    </Row>
        </>

    );
}

export default AboutLor;