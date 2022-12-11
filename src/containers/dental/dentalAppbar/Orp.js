import React, { useEffect } from 'react';
import RunText from '../../../components/runText/RunText';
import { Card, Carousel, Col, Row, Table } from 'react-bootstrap';
import DentalNavbar from './DentalNavbar';
import imgg from '../../../img.aidarov/imgg.png'
import './Appbar.scss'
import Button1 from '../../../Button1';
import implants from '../dental.img/implants.png'
import orp from '../dental.img/orp.jpg'
import orp2 from '../dental.img/orp2.jpg'
import AOS from 'aos';

function Orp({ setShow }) {
    const text = [
        {
            texts: 'ТЕСТ ДРАЙВ УЛЫБКИ',
            t: '/'
        }, {
            texts: 'ИСПРАВЛЕНИЕ ПРИКУСА',
            t: '/'
        }, {
            texts: 'ЛЕЧЕНИЕ ВО СНЕ',
            t: '/'
        }, {
            texts: ' БЕЗ БОЛИ',
            t: '/'
        }, {
            texts: 'ТЕСТ ДРАЙВ УЛЫБКИ',
            t: '/'
        }, {
            texts: 'ИСПРАВЛЕНИЕ ПРИКУСА',
            t: '/'
        }, {
            texts: 'ЛЕЧЕНИЕ ВО СНЕ',
            t: '/'
        }, {
            texts: ' БЕЗ БОЛИ',
            t: '/'
        },]
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
    return (
        <div className='container'>
            <DentalNavbar />
            <h1 className=''>Ортопедия
            </h1>
            <Row>           <Col sm={6}>
                <h2 className='mt-3 mb-3' style={{ color: "white" }}>Частичное или полное <br />отсутствия зубов можно <br />восстановить с несъемный<br /> мостовидными конструкциями<br /> или съемными.</h2>
                <div className="pb-3 pt-3 mt-2 mb-3 div__a">
                    <a href={'tel:+996776000000'} style={{ textDecoration: "none" }} className={'p-2 textinfooter2 rounded'}   > Записаться на прием</a>
                </div>
            </Col>
                <Col sm={6}>
                    <img src={implants} />
                </Col></Row>


            <h1 style={{ textAlign: "center", color: "#d3bb7e", fontFamily: 'GraphikTT Arial sans-serif', marginTop: "50px" }}> Ортопедические услуги</h1>
            <h2 style={{ textAlign: "center", color: "#d3bb7e", fontFamily: 'GraphikTT Arial sans-serif', marginTop: "30px" }}>
                Выбор способа зависит от клинической ситуации пациента
            </h2>

            <div>
                <Col className="mt-3">
                    <div style={{
                        width: 'auto', textAlign: "center", border: '2px solid #d3bb7e',
                    }}>
                        <Card.Body>
                            <h3 style={{ color: "#d3bb7e", fontFamily: 'GraphikTT Arial sans-serif', marginTop: "30px" }}>СЪЕМНЫЙ</h3>
                            <h3 style={{ color: "white", fontFamily: 'GraphikTT Arial sans-serif', margin: "10px", textAlign: "center" }}>
                                <Table striped bordered hover variant='dark'>
                                    <thead>
                                        <tr>
                                            <th style={{ textAlign: "center" }}>№</th>
                                            <th style={{ textAlign: "center" }}>Протезы</th>
                                            <th style={{ textAlign: "center" }}>Цены за одну челюсть</th>

                                        </tr>
                                    </thead>
                                    <tbody>

                                        <tr>
                                            <td style={{ textAlign: "center" }}>01</td>
                                            <td style={{ textAlign: "center" }}>Простой протез</td>
                                            <td style={{ textAlign: "center" }}>6000 сом</td>
                                        </tr>
                                        <tr>
                                            <td style={{ textAlign: "center" }}>02</td>
                                            <td style={{ textAlign: "center" }}>Мягкий</td>
                                            <td style={{ textAlign: "center" }}>10000 сом</td>
                                        </tr>
                                        <tr>
                                            <td style={{ textAlign: "center" }}>03</td>
                                            <td style={{ textAlign: "center" }}>Нейлоновый</td>
                                            <td style={{ textAlign: "center" }}>10000 сом</td>
                                        </tr>
                                        <tr>
                                            <td style={{ textAlign: "center" }}>04</td>
                                            <td style={{ textAlign: "center" }}>Бюгельный</td>
                                            <td style={{ textAlign: "center" }}>15000 сом</td>
                                        </tr>

                                    </tbody>
                                </Table>
                            </h3>
                        </Card.Body>
                    </div>
                </Col>
                <Col className="mt-3">
                    <div style={{
                        width: 'auto', textAlign: "center", border: '2px solid #d3bb7e',
                    }}>
                        <Card.Body>
                            <h3 style={{ color: "#d3bb7e", fontFamily: 'GraphikTT Arial sans-serif', marginTop: "30px" }}>НЕСЪЁМНОЕ</h3>
                            <h3 style={{ color: "white", fontFamily: 'GraphikTT Arial sans-serif', margin: "10px", textAlign: "center" }}>
                                <Table striped bordered hover variant='dark'>
                                    <thead>
                                        <tr>
                                            <th style={{ textAlign: "center" }}>№</th>
                                            <th style={{ textAlign: "center" }}>Протезы</th>
                                            <th style={{ textAlign: "center" }}>Цены за одну челюсть</th>

                                        </tr>
                                    </thead>
                                    <tbody>

                                        <tr>
                                            <td style={{ textAlign: "center" }}>01</td>
                                            <td style={{ textAlign: "center" }}>Металлокерамика</td>
                                            <td style={{ textAlign: "center" }}>3000 сом</td>
                                        </tr>
                                        <tr>
                                            <td style={{ textAlign: "center" }}>02</td>
                                            <td style={{ textAlign: "center" }}>Позолоченные  коронки</td>
                                            <td style={{ textAlign: "center" }}>1000 сом</td>
                                        </tr>
                                        <tr>
                                            <td style={{ textAlign: "center" }}>03</td>
                                            <td style={{ textAlign: "center" }}>Пластмасса</td>
                                            <td style={{ textAlign: "center" }}>1000 сом</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </h3>
                        </Card.Body>
                    </div>
                </Col>
            </div>
            <Row className="mt-5">
                <Col xs={12} md={6} lg={6}>
                    <h1 className='text-center'>СЪЕМНЫЙ</h1>
                    <img width={'100%'} src="https://implant-expert.ru/wp-content/uploads/2018/12/%D1%81%D1%8A%D0%B5%D0%BC%D0%BD%D1%8B%D0%B5-%D0%BF%D1%80%D0%BE%D1%82%D0%B5%D0%B7%D1%8B.png" />

                </Col>
                <Col xs={12} md={6} lg={6}>
                    <h1 className='text-center'>HEСЪЕМНЫЙ</h1>
                    <img width={'100%'} src="https://megadenta.ru/sites/default/files/2022-01/13156861497599927_0.jpg" />

                </Col>
            </Row>
            <Row className="mt-5">
                <Col xs={12} md={6} lg={6}>
                    <div data-aos="zoom-in" className='justify-content-evenly text-center' >
                        <img class=" t013__img t-img" src={imgg} imgfield="img" data-tu-max-width="320" data-tu-max-height="320" data-tu-cover="c" alt="" role="presentation">
                        </img>
                        <Card.Title className='text_nav'>Доктор Бекмамат</Card.Title>
                        <span className='text_nav' style={{ fontSize: '14px', lineHeight: '18px' }} data-customstyle="yes">Основатель <br />врач стоматолог общей <br />практики и имплантолог</span>
                    </div>
                </Col>
                <Col xs={12} md={6} lg={6}>
                    <div data-aos="zoom-in-up" className='justify-content-evenly text_nav m-3'>
                        <div >
                            Я хотел, чтобы клиника не напоминала больницу. Поэтому мы создали пространство, которое настраивает<br />
                            на правильную волну совместного творчества. Если люди приходят лечить зубы как на каторгу, то сложно <br />
                            ожидать от них высокогоуровня мотивации. Все мы немного нервничаем, если вокруг больничные<br /> белые стены.  где во время ожидания можно <br />послушать музыку, почитать
                            что-нибудь интересное или выпить чашечку кофе.
                        </div>
                    </div>
                </Col>
            </Row>
            <h1 className='text-center'>Результаты нашей работы</h1>
            <Row>
            <Col xs={12} md={6} lg={6}>
           
                    <img
                        className="d-block mt-3 w-100"
                        src={orp}
                        alt="First slide"
                    />
                    </Col>
                    <Col xs={12} md={6} lg={6}>
                    <img
                        className="d-block mt-3 w-100"
                        src={orp2}
                        alt="Second slide"
                    />                   
              </Col>
           
            </Row>
            <RunText name={text} />

        </div>
    );
}

export default Orp;