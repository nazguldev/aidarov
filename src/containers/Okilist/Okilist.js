import AOS from 'aos';
import React from 'react';
import { useEffect } from 'react';
import { Card, Col, Container, Nav, Navbar, NavDropdown, Row } from 'react-bootstrap';
import Button1 from '../../Button1';
import Accordions from '../../components/accrdion/Accordions';
import ok from '../../logoImage/ok.png'

function Okilist({ setShow }) {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
    const a = [
        {
            title: "Как называется врач, который лечит глаза",
            text: "Глазных врачей в нашей стране традиционно называют окулистами. Какой же это врач — офтальмолог и в чем специфика его работы? На самом деле с точки зрения терминологии «окулист» и «офтальмолог» — синонимы. Слово «oculus» имеет латинское происхождение и означает «глаз». «Ophthalmos» — это тоже «глаз», только на древнегреческом. Таким образом, различия между названиями профессий нет. Исходя из этимологии, можно понять, что значит офтальмолог — доктор, занимающийся лечением болезней глаз."
        },
        {
            title: "Какие болезни лечит окулист?",
            text: "нарушение рефракции: близорукость, дальнозоркость, астигматизм;нарушения работы мышц: косоглазие, опущение верхнего века,невозможность смыкать веки и  воспаления: ячмень, конъюнктивит, кератит, блефарит, склери"
        },
        {
            title: "Что может увидеть окулист?",
            text: "На глазном дне врач осматривает и оценивает состояние сетчатки, сосудов и зрительного нерва. Осмотр вначале проводится с узким зрачком. Однако желательно, а в некоторых состояниях обязательно осматривать глазное дно с расширением зрачков "
        },
        {
            title: "Как понять что нужно идти к окулисту?",
            text: "боль в глазах, независимо от ее характера и локализации, а также боль и дискомфорт, ощущающиеся в непосредственной близости от глазного яблока;сильное или длительное покраснение глаз – как самого глазного яблока, так и слизистой оболочки век;сильный или длительный зуд в глазах;"
        }, {
            title: "Как проходит осмотр у окулиста            ?",
            text: "Как проходит прием у врача-офтальмолога? Офтальмолог беседует с пациентом, затем проводит подробный осмотр, который включает оценку слёзных протоков и век, положение и подвижность глазных яблок, исследование глазного дна, состояния зрачков и их реакции на свет."
        },
    ]
    const litext = [
        {
            text: " Глаукома."
        },
        {
            text: " Катаракта."
        }, {
            text: "Нарушения рефракции — близорукость, дальнозоркость, астигматизм."
        }, {
            text: " Косоглазие."
        }, {
            text: " Птоз."
        }, {
            text: " Заболевания сетчатки (отслойка, дистрофия)."
        }, {
            text: " Травмы глаз, век, слезных желез."
        }, {
            text: " Воспалительные заболевания глаз (конъюнктивит, кератит, ячмень и др.)."
        }, {
            text: " Нарушения цветовосприятия."
        }, {
            text: "Кровоизлияния."
        },
    ]
    const ultext = [
        {
            text: ". резь, жжение, сильный зуд в глазах;"
        }, {
            text: ". покраснения век или глазного яблока;"
        }, {
            text: ". отечность век при отсутствии объективных причин;"
        }, {
            text: ". туман перед глазами;"
        }, {
            text: ". двоение зрения"
        }, {
            text: ". двоение зрения"
        }, {
            text: ". изменение поля зрения (сужение, выпадение каких-то участков);"
        }, {
            text: ". искажения предметов;"
        }, {
            text: ". снижение остроты зрения;"
        }, {
            text: ". повышенное слезотечение;"
        },
    ]
    return (
        <div className='container'>
            <Navbar bg="dark" expand="lg" variant='dark'>
                <Container>
                    <Navbar.Brand href="/"><img style={{ width: '50px', height: '50px', borderRadius: '50%' }} src={ok} /></Navbar.Brand>
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

                <Col sm={6} xs={12} md={6} >
                    <h1 className='pt-5 text-center '>Какой это врач — офтальмолог? </h1>
                    <p className='text_nav   mt-5'> Воспалились глаза? Ухудшилось зрение? Болезненно реагируете на яркий свет? Значит, пришло время обратиться к специалисту. Глазной врач — окулист, или офтальмолог. Он специализируется на диагностике, лечении и профилактике болезней и травм глаз, а также органов зрительной системы (век, слезных желез, конъюнктивы, глазницы). Какой это врач — офтальмолог и что он лечит, мы расскажем в статье.
                        <p />
                        <p> Детская офтальмология – подраздел офтальмологии, занимающийся исследованием особенностей детского зрения. Зрение ребенка в отличие от зрения взрослого человека постоянно изменяется. Детская офтальмология призвана изучить особенности этих изменений и связанных с ними патологий.</p>

                    </p>
                    <Col className='mt-3' sm={6}>
                        {/* <Button1 setShow={setShow} /> */}
                        <div className="pb-3 pt-3 mt-2 mb-3 div__a">
                            <a href={'tel:+996776000000'} style={{ textDecoration: "none" }} className={'p-2 textinfooter2 rounded'}   > Записаться на прием</a>
                        </div>
                    </Col>
                </Col>
                <Col sm={6} xs={12} md={6} className=" mb-3">
                    <img className='w-100' src='https://deti-euromed.ru/wp-content/uploads/2022/01/8.png' />
                </Col>
            </Row>

            <h1 className=' mt-5'>НАПРАВЛЕНИЯ РАБОТЫ</h1>
            <Accordions name={a} />
            <div className='mt-5'>
                <h1 className='text-center mt-5'>Что лечит врач-офтальмолог?</h1>
                <Row>

                    <Col sm={6} xs={12} md={6} >
                        <p className='text_nav mt-2'>
                            В ОсОО МЦ Айдарова К.А.  вы можете обращаться по следующим распространенным видом заболеваний
                        </p>
                        <ol style={{ color: "white" }}>
                            {litext.map(a => {
                                return (
                                    <li>{a.text}</li>
                                )
                            })}
                        </ol>
                    </Col>
                    <Col sm={6} xs={12} md={6} >
                        <img style={{ maxWidth: '340px', marginTop: "10px" }} src='https://www.lensmaster.ru/upload/medialibrary/151/151ff9fa7ebf68806acbaf610fa172dd.png' />
                    </Col>
                </Row>
                <h1 className='mt-4'>Записаться к офтальмологу?</h1>
                <p className='text_nav '>
                    Офтальмолог — это глазной врач. Поэтому записаться к нему нужно при проявлении любых проблем с глазами. Лучше не затягивать с визитом к доктору: некоторые заболевания, которые кажутся несерьезными, такие как конъюнктивит, могут иметь тяжелые осложнения: воспаление роговицы, образование бельма, снижение зрения и др.
                </p>
                <p className='text_nav mt-2' style={{ color: "#d3bb7e" }}>
                    Тревожными сигналами, с которыми желательно попасть к окулисту, являются:
                </p>
                {ultext.map(a => (
                    <p className='text_nav'>{a.text}</p>
                ))}


                <div className='text-center'>
                    <img style={{ maxHeight: '340px', maxWidth: '100%', marginTop: "10px" }} src='https://www.lensmaster.ru/upload/medialibrary/f2f/f2faab1d0eb69fef931bee6f9415e7f0.jpg' />
                </div>
                <h3 style={{ color: "#d3bb7e", marginTop: "15px" }}>Проверка зрения у детей</h3>
                <p className='text_nav mt-2'>Проверка зрения у детей должна проводиться регулярно: в младшем возрасте она позволит убедиться, что у ребенка нет врожденных патологий и развитие органов зрения проходит в соответствии с нормой, а в старшем — предотвратить развитие близорукости. Самый уязвимый возраст для миопатии — 8-14 лет, когда резко возрастает нагрузка на глаза, а соблюдать гигиену рабочего места дети еще не приучены.</p>
                <p className='text_nav mt-3'>Обязательно нужно посещать окулиста детям с плохой наследственностью. В детском возрасте проще выявить и вылечить многие нарушения — астигматизм, косоглазие, дальнозоркость, близорукость и др. Своевременное назначение коррекции позволит избежать развития других заболеваний — косоглазия и амблиопии. Наблюдаться у окулиста детям желательно как минимум раз в год. </p>
            </div>

            <h3 style={{ color: "#d3bb7e", marginTop: "15px", textAlign: "center" }}>Что лучше очки или линзы для глаз?</h3>
            <div className='text-center'>
                <img style={{ maxHeight: '100%', maxWidth: '100%', marginTop: "10px" }} src="https://img.tsn.ua/cached/075/tsn-ed71814124f95cefb3093cdb7dd2dd14/thumbs/1200x630/5b/17/f318eef54fa6734f40fef55598fa175b.jpeg" />
            </div>
            <div style={{
                width: 'auto',
                border: '2px solid #d3bb7e',
                padding: "15px",
                marginTop: "15px"
            }}>

                <Col >
                    <h3 style={{ color: "#d3bb7e" }}>➕️Плюсы ношения очков :</h3>
                    <ul style={{ color: "white" }}>
                        <li>Оказывают лечебный эффект (помогают остановить процесс ухудшения зрения)</li>
                        <li>простой уход;</li>
                        <li>минимум противопоказаний;</li>
                        <li>простота в использовании для всех людей, в том числе для детей;
                        </li>
                    </ul>
                </Col>
            </div>
            <div style={{
                width: 'auto',
                // textAlign: "center",
                border: '2px solid #d3bb7e',
                padding: "15px",
                marginTop: "15px"
            }}>

                <Col >
                    <h3 style={{ color: "#d3bb7e" }}>➖️Минусы ношения очков :</h3>
                    <ul style={{ color: "white" }}>
                        <li>Изменение внешнего вида;</li>
                        <li>ограничения по некоторым видам деятельности и профессий;</li>
                        <li>зрительные искажения и ограниченный боковой обзор;</li>
                        <li>малоэффективны при сочетанных дефектах зрения;
                        </li>
                    </ul>
                </Col>
            </div>

            <div style={{
                width: 'auto',
                // textAlign: "center",
                border: '2px solid white',
                padding: "15px",
                marginTop: "15px"
            }}>

                <Col >
                    <h3 style={{ color: "white" }}>➕️Плюсы ношения контактных линз :</h3>
                    <ol style={{ color: "#d3bb7e" }}>
                        <li>Зрительный комфорт (улучшенная чёткость изображения, более высокое качество зрения, в том числе боковое, по сравнению с очковыми линзами);</li>
                        <li>возможность подбора для каждого глаза в отдельности (важно при разнице больше 2 диоптрий);</li>
                        <li>защита от микротравм, атмосферного воздействия и УФ-излучения;</li>
                    </ol>
                </Col>
            </div>
            <div style={{
                width: 'auto',
                // textAlign: "center",
                border: '2px solid white',
                padding: "15px",
                marginTop: "15px"
            }}>

                <Col >
                    <h3 style={{ color: "white" }}>➖️Минусы ношения контактных линз :</h3>
                    <ol style={{ color: "#d3bb7e" }}>
                        <li>Установка и снятие линз требует определённых навыков;
                        </li>
                        <li>нуждаются в ежедневном уходе с использованием специальных средств;</li>
                        <li>опасность травмирования или инфицирования глаза;</li>
                        <li>традиционные мягкие контактные линзы не дают лечебного эффекта</li>
                    </ol>
                </Col>
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