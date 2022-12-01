import React from 'react';
import { Card, Col, Container, Nav, Navbar, NavDropdown, Row, Table } from 'react-bootstrap'
import Button1 from '../../Button1';
import './gynecolog.scss'
import Accordions from '../../components/accrdion/Accordions';
import RunText from '../../components/runText/RunText';
function AboutGynecology({ setShow }) {
    const data = [
        {
            title: "Отсутствие месячных",
            text: "Девочке исполнилось 15 лет, а месячные у нее еще не начались."
        }, {
            title: "Возможно ли узнать рейтинг акушеров-гинекологов?",
            text: "Да, возможно. На нашем портале у каждого акушера-гинеколога свой рейтинг. Вы можете посмотреть отзывы пациентов об акушерах-гинекологах и выбрать подходящего доктора. Также стоит обратить внимание на образование и опыт работы специалиста, указанные в анкете"
        }, {
            title: "Как проходит осмотр у акушера-гинеколога?",
            text: "На первичном приеме специалист проводит опрос, собирает анамнез и осматривает пациента на гинекологическом кресле. В случае необходимости врачом может быть выполнено УЗИ органов малого таза для выявления и предупреждения возможных патологий и осложнений."
        }, {
            title: "В каком случае нужно обращаться к гинекологу?",
            text: "Взрослая женщина уже хорошо знает свой цикл и любые допустимые изменения. Посещение гинеколога требуется, если стали регулярно происходить несвойственные задержки, менструации стали необычно скудными или, наоборот, обильными, стали сопровождаться несвойственными ранее головными болями, тошнотой и обмороками."
        }, {
            title: "Какие болезни лечит акушер гинеколог?",
            text: "Акушер-гинеколог – врач, который занимается ведением беременности и родов. Акушер-гинеколог помогает в случае проблем с зачатием, бесплодия, необходимости ведения беременности и родов, наличия патологических состояний при беременности. Также он оказывает помощь в послеродовом периоде."
        }, {
            title: "Чем отличается гинеколог от акушер гинеколог?",
            text: "Акушер-гинеколог - это врач, специализирующийся на ведении беременности и родов. Он отличается и от акушера, и от гинеколога: акушер - это не врач, а медицинский сотрудник, принимающий роды, а гинеколог специализируется не на беременности а родах, а на лечении заболеваний женской репродуктивной системы."
        }, {
            title: "Нужно ли подмываться перед походом к гинекологу?",
            text: "Когда принять душ или подмыться? Лучше сделать это вечером накануне перед походом к гинекологу. Мыться за несколько часов до осмотра нежелательно, так как ты можешь «смыть улики» - выделения, которые могут оказаться признаком воспаления."
        }, {
            title: "Климакс",
            text: "При первых признаках климакса и вегето-сосудистых проявлений."
        },
        {
            title: "Беременность",
            text: "Не наступление беременности, при регулярной половой жизни без контрацепции, в течении года."
        },
        {
            title: "Лапароскопия",
            text: "Лапароскопия – это один из методов оперативной гинекологии (и хирургии вообще), который позволяет обходиться без послойного разреза брюшной стенки."
        },
        {
            title: "Гистероскопия",
            text: "Гистероскопия — метод лечения и диагностики заболеваний в полости матки. Используется в гинекологии как малотравматичный метод обследования и лечения заболеваний матки. Гистероскопическая операция — это безболезненный, комфортный, безопасный и эффективный способ избавиться от различных патологических состояний матки."
        },
        {
            title: "Какой врач проверяет женские гормоны?",
            text: "Какой врач лечит гормональные нарушения? Диагностику и лечение гормональных нарушений проводит врач-эндокринолог."
        },
    ]
    const patients = [
        {
            img: 'https://img.freepik.com/free-photo/elder-patient-with-medical-mask-and-covid-recovery-center-female-doctor-look-together-at-results_23-2148847861.jpg',
            title: "TITLE",
            known_for: "TEXT",
        },
        {
            img: `https://n1s2.hsmedia.ru/7e/82/a6/7e82a6f11cb2816561372474f9ec82ec/1920x1152_0xac120003_14017473821644308034.jpeg`,
            title: "TITLE",
            known_for: "TEXT",
        },
        {
            img: 'https://img.freepik.com/free-photo/elder-patient-with-medical-mask-and-covid-recovery-center-female-doctor-look-together-at-results_23-2148847861.jpg',
            title: "TITLE",
            known_for: "TEXT",
        }
    ]
    const as = [
        {
            id: 1,
            title: "Гинекологические операции ",
            price: "42 500 сом"
        },
        {
            id: 2,
            title: "Надбавка к двухэтапной операции ",
            price: "8 500 сом"
        }, {
            id: 3,
            title: "Лапароскопия",
            price: "34 000 сом"
        }, {
            id: 4,
            title: "Гистероскопия",
            price: "	17 000 сом"
        }, {
            id: 5,
            title: "Гистерорезектоскопия",
            price: "25 500 сом"
        }, {
            id: 6,
            title: "Лапароскопия",
            price: "34 000 сом"
        }, {
            id: 7,
            title: "Гинекологические операции ",
            price: "85 000 сом"
        }, {
            id: 8,
            title: "Дополнительные медицинские расходные материалы",
            price: "2000 сом"
        },
    ]
    const text = [
        {
            texts: "Зуд и жжение",
            t: "/"
        },
        {
            texts: "Болевой синдром",
            t: "/"
        }, {
            texts: "Новообразования",
            t: "/"
        }, {
            texts: "Нарушение цикла",
            t: "/"
        }, {
            texts: "Кровянистые выделения",
            t: "/"
        }, {
            texts: "Контрацептивы",
            t: "/"
        }, {
            texts: "Климакс",
            t: "/"
        }, {
            texts: "Беременность",
            t: "/"
        }, {
            texts: "Лапароскопия",
            t: "/"
        }, {
            texts: "Гистероскопия",
            t: "/"
        }, {
            texts: "Влагалищные гинекологические операции",
            t: "/"
        },
    ]
    return (
        <>
            <div className='AboutGynecology'>
                <div className='container'>
                    <Navbar bg="dark" expand="lg" variant='dark'>
                        <Container>
                            <Navbar.Brand href="/"><img width="50px" src={'https://agsmedico.com/img/especialidades/GinecologiayObstetricia.png'} /></Navbar.Brand>
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
                    <Row >

                        <Col md={6}>
                            <h1 className="mt-3 text">Кто такой акушер-гинеколог ?</h1>
                            <p className="text2 mt-3">
                                – врач узкой специализации, занимающийся вопросами планирования и консультирования во время беременности, а также рождения ребёнка. Послеродовой период и возможные клинические ситуации также входят в сферу обязанностей врача. Этот специалист помогает решить проблемы с зачатием и вынашиванием плода, а также констатирует факт наступления беременности, проводит наблюдение женщины вплоть до момента завершения родов.
                            </p>

                            <p className='mt-5'>
                                {/* <Button1 setShow={setShow} /> */}
                                <div className="pb-3 pt-3 mt-2 mb-3 div__a">
                                    <a href={'tel:+996776000000'} style={{ textDecoration: "none" }} className={'p-2 textinfooter2 rounded'}   > Записаться на прием</a>
                                </div>
                            </p>
                        </Col>
                        <Col md={6} xs={8} sm={10}>
                            <Card.Img variant="top" src='https://static.wixstatic.com/media/4d529b_fd65a8ced6ed4be397af12a22b44a238~mv2.png/v1/fill/w_470,h_390,al_c,q_95,enc_auto/main3.png' />
                        </Col>
                    </Row>
                    <h1 className='mt-3'>С какими симптомами следует<br /> обращаться к акушер-гинекологу?</h1>
                    <Accordions name={data} />
                    <Row>
                        <Col xs={12} md={6} lg={6}>
                            <div className='justify-content-evenly text-center  ' >
                                <img class=" t013__img t-img" src={'https://onclinic.ua/storage/media/doctors/654/CdvNDNDgHZ5JOcsdUwFEWfwA6JZ0Wyva3bgenHgp_900.png'} imgfield="img" data-tu-max-width="320" data-tu-max-height="320" data-tu-cover="c" alt="" role="presentation">
                                </img>
                                <Card.Title className='text_nav'>Доктор врач <br />акушер- гинеколог </Card.Title>
                                <span className='text_nav' style={{ fontSize: '14px', lineHeight: '18px' }} data-customstyle="yes">Айдаров Камалдин Абдурахманович.</span>
                            </div>
                        </Col>
                        <Col xs={12} md={6} lg={6}>
                            <div className='justify-content-evenly text_nav mt-3'>
                                <div >
                                    Оснаватель ОсОО Медицинского центра Айдарова Камалдина заслуженный врач акушер-гинеколог и директор МЦ Айдаров Камалдин Абдурахманович.

                                    Родился 16.03.1964году в ЖалалАбадской области р Базар-Коргон село Карача. В 1988году закончил КГМА имени Ахунбаева в г Бишкек после прошол ординатуру в г Ош родильном стационаре Ошской териториальной городской больницы. Там же работал с 1989года по 2003год после открыл свою первую частную клинику возле ТГБ№2.
                                </div>

                                <div className='mt-3'>
                                    {/* <Button1 setShow={setShow} /> */}
                                    <div className="pb-3 pt-3 mt-2 mb-3 div__a">
                                    <a href={'tel:+996776000000'} style={{ textDecoration: "none" }} className={'p-2 textinfooter2 rounded'}   > Записаться на прием</a>
                                </div>

                                </div>
                            </div>
                        </Col>
                    </Row>
                    <div>
                        <h1 className='text-center mt-3'>ГИНЕКОЛОГИЧЕСКИЕ ОПЕРАЦИИ</h1>
                        <p className='text_nav'>
                            Гинекологические операции – это один из методов лечения заболеваний женской половой системы. Операции в гинекологии имеют огромное значение. Они позволяют справляться с заболеваниями, которые ранее считались неизлечимыми. Но детородная функция женщины устроена очень тонко, и потому решение о хирургическом вмешательстве принимается врачом лишь в исключительных случаях, когда медикаментозное лечение не помогает.
                        </p>
                        <p className='text_nav pt-3 '>
                            В медицине различают большие и малые гинекологические операции. Каждый вид оперативного вмешательства имеет свои особенности, и используется при определенных медицинских показаниях. В клинике профессора Асымбековой работают врачи-хирурги с огромным практическим опытом в оперативной гинекологии. Наши специалисты – это не просто высококлассные хирурги и гинекологи, но и обладатели ученых степеней. Многие из них являются авторами инновационных хирургических методик.
                        </p>
                    </div>
                    <Row className='mt-5'>
                        <h1 className='text-center mb-3'>
                            Наши пациенты
                        </h1>
                        {patients.map(e => {
                            return (
                                <>
                                    <Col md={4} sm={6} xs={12} >
                                        <div>
                                            <Card.Img className='w-100 h-100' src={e.img}></Card.Img>
                                            <Card.Text style={{ color: "white", textAlign: "center" }}>{e.title}</Card.Text>
                                            <Card.Text style={{ color: "white", textAlign: "center" }}>{e.known_for}</Card.Text>
                                        </div>
                                    </Col>
                                </>
                            )
                        })}
                    </Row>
                </div>
            </div>
            <RunText name={text} />
            <div className='container'>
                <Row>
                    <Col xs={12} md={6} lg={6}>
                        <div className='justify-content-evenly text-center  ' >
                            <img class=" t013__img t-img" src={'https://onclinic.ua/storage/media/doctors/654/CdvNDNDgHZ5JOcsdUwFEWfwA6JZ0Wyva3bgenHgp_900.png'} imgfield="img" data-tu-max-width="320" data-tu-max-height="320" data-tu-cover="c" alt="" role="presentation">
                            </img>
                            <Card.Title className='text_nav'>Доктор врач <br />акушер- гинеколог </Card.Title>
                            <span className='text_nav' style={{ fontSize: '14px', lineHeight: '18px' }} data-customstyle="yes">	Айдарова Маргарита Камалдиновна </span>
                        </div>
                    </Col>
                    <Col xs={12} md={6} lg={6}>
                        <div className='justify-content-evenly text_nav mt-3'>
                            <div >
                                Айдарова Маргарита Камалдиновна в 2012году окончила ОшГУ медицинский факультет лечебное дело. С 2012 по 2013год проходила интернатуру в Ошской городской териториальной больнице родильном стационаре. В 2014году  устроилась ассистеном кафедры «Акушерства и гинекологии» ЮФКГМИПиПК имени С.Б.Даниярова. где работаю по совместительству по сей день.  В 2015 году устроилась ночным дежурным врачом акушер-гинекологом в родильный стационар при ТГБ. С 2013года работаю на основной ставке в частном медицинском центре ОсОО Айдарова Камалдина Абдурахмановича, на должности врача акушер-гинеколога и врача ультразвуковой диагностики  </div>

                            <div className='mt-3'>
                                {/* <Button1 setShow={setShow} /> */}
                                <div className="pb-3 pt-3 mt-2 mb-3 div__a">
                                    <a href={'tel:+996776000000'} style={{ textDecoration: "none" }} className={'p-2 textinfooter2 rounded'}   > Записаться на прием</a>
                                </div>

                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
            <div className='container mt-3 '>
                <h1 className='text-center'>Симптомы для обращения к врачу акушер-гинекологу</h1>
                <Row style={{ textAlign: "center" }}>
                    <Col md={6} className="mt-3">
                        <div style={{
                            width: 'auto', textAlign: "center", border: '2px solid #d3bb7e',
                        }}>
                            <Card.Body>
                                {/* <h3 style={{ color: "#d3bb7e", fontFamily: 'GraphikTT Arial sans-serif', marginTop: "50px" }}>КЛАССИЧЕСКИЙ</h3> */}
                                <h3 style={{ color: "white", fontFamily: 'GraphikTT Arial sans-serif', margin: "20px", textAlign: "center" }}>
                                    1.Hастоящая  время омоложение интимной зоны очень актуальна среди женщин разных ворастных котегории.
                                </h3>
                            </Card.Body>
                        </div>
                    </Col>
                    <Col md={6} className="mt-3">
                        <div style={{
                            width: 'auto', textAlign: "center", border: '2px solid #d3bb7e',
                        }}>
                            <Card.Body>

                                <h3 style={{ color: "white", fontFamily: 'GraphikTT Arial sans-serif', margin: "20px", textAlign: "center" }}>
                                    2.	Эстетическая гинекология. Это омоложение интимной зоны: проходила повышение квалифкации  в г Москва.
                                </h3>
                                <p className='text_nav'> (a)Хирургический метод</p>
                                <p className='text_nav'>.клитеропластика</p>
                                <p className='text_nav'>.перинеопластика</p>
                                <p className='text_nav'>.лабиопластика</p>
                                <p className='text_nav'>.кольпоррафия</p>
                                <p className='text_nav'>.диссекци</p>
                                <p className='text_nav'>(b)Инъекционный метод </p>
                                <p className='text_nav'>. введ подкраш фиилл </p>
                                <p className='text_nav'>.недержание мочи </p>
                                <p className='text_nav'>.усление чувствительности точки G</p>
                            </Card.Body>
                        </div>
                    </Col>
                </Row>
                <h1 className='text-center'>ЦЕНЫ</h1>
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
                                        <td >{a.title}</td>
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

export default AboutGynecology;