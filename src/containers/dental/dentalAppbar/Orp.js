import React, { useEffect } from 'react';
import RunText from '../../../components/runText/RunText';
import { Card, Col, Row, Table } from 'react-bootstrap';
import DentalNavbar from './DentalNavbar';
import imgg from '../../../img.aidarov/imgg.jpeg'
import './Appbar.scss'
import Button1 from '../../../Button1';
import AOS from 'aos';

function Orp({setShow}) {
    const text = [
        {
            texts: 'ТЕСТ ДРАЙВ УЛЫБКИ',
            t: '/'
        }, {
            texts: 'ИСПРАВЛЕНИЕ ПРИКУСА',
            t: '/'
        },  {
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
            <h2 className='mt-3 mb-3' style={{ color: "white" }}>Частисное или полное <br/>отсутствия зубов можно <br/>восстанавить с несъемный<br/> мостовидными конструкциями<br/> или съемными.</h2>
            <Col sm={6}>
                <Button1 setShow={setShow} />
            </Col>
           
            <h1 style={{ textAlign: "center", color: "#d3bb7e", fontFamily: 'GraphikTT Arial sans-serif', marginTop: "50px" }}> Ортопедический услуги</h1>
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
                                        {/* <tr>
                                            <td style={{textAlign: "center" }}>04</td>
                                            <td style={{textAlign: "center" }}>Бюгельный</td>
                                            <td style={{textAlign: "center" }}>15000 сом</td>
                                        </tr> */}

                                    </tbody>
                                </Table>
                            </h3>
                        </Card.Body>
                    </div>
                </Col>
            </div>
            <Row className="mt-5">
                    <Col xs={12} md={6} lg={6}>
                        <div data-aos="zoom-in" className='justify-content-evenly text-center' >
                            <img class=" t013__img t-img" src={imgg} imgfield="img" data-tu-max-width="320" data-tu-max-height="320" data-tu-cover="c" alt="" role="presentation">
                            </img>
                            <Card.Title className='text_nav'>Доктор Бекмамат</Card.Title>
                            <span className='text_nav' style={{ fontSize: '14px', lineHeight: '18px' }} data-customstyle="yes">Основатель <br/>врач стоматолог общей <br/>практики и имплантолог</span>
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
            <RunText name={text} />

        </div>
    );
}

export default Orp;