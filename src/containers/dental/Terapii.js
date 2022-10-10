import React, { useEffect } from 'react';
import { Row, Card, Col, Table, } from 'react-bootstrap';
import Accordions from '../../components/accrdion/Accordions';
import './dental.scss'
import AOS from "aos";
import imgg from '../../img.aidarov/imgg.jpeg'
import Button1 from '../../Button1';
import DentalNavbar from './dentalAppbar/DentalNavbar';



function Terapii({ setShow }) {
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
        },
    ]
    return (
        <>
            <div className={'container aboutClinic '}>
                <div className='mt-2'>
                    <DentalNavbar />
                    <h1 className=''>Терапевтическая стоматология</h1>
                    <Row>
                        <Col sm={6} xs={12} md={6} >
                            <p className='text_nav  h5 mt-3'>Терапевтическая стоматология – раздел медицины, занимающийся диагностикой и лечением болезней зубов, околозубных тканей и слизистой оболочки полости рта. Здоровые зубы – неотъемлемый атрибут успешного современного человека.</p>
                            <p className='text_nav  h5 mt-3'><i> Будущее вашего зуба, будет зависить от эндодонтического лечение!</i></p>
                            <Col className='mt-3' sm={6}>
                                <Button1 setShow={setShow} />
                            </Col>
                        </Col>
                    </Row>

                </div>

                <div className='text-center ' data-aos="fade-up">
                    <h1 className='mt-5'>5 причин доверить нам улыбку</h1>
                </div>
                <div className=''>
                    <Accordions name={data} />
                </div>

                <div className=' mt-5'>
                    <Row>
                        <Col xs={12} md={6} lg={6}>
                            <div data-aos="zoom-in" className='justify-content-evenly text-center' >
                                <img class=" t013__img t-img" src={imgg} imgfield="img" data-tu-max-width="320" data-tu-max-height="320" data-tu-cover="c" alt="" role="presentation">
                                </img>
                                <Card.Title className='text_nav'>Доктор Айдаров</Card.Title>
                                <h6 className='text_nav' data-customstyle="yes">Основатель и<br /> главный врач клиники, <br />стоматолог-ортопед</h6>
                            </div>
                        </Col>
                        <Col xs={12} md={6} lg={6}>
                            <div data-aos="zoom-in-up" className='justify-content-evenly text_nav '>
                                <div >
                                Я хотел, чтобы клиника не напоминала больницу. Поэтому мы создали пространство, которое настраивает<br />
                                на правильную волну совместного творчества. Если люди приходят лечить зубы как на каторгу, то сложно <br />
                                ожидать от них высокогоуровня мотивации. Все мы немного нервничаем, если вокруг больничные<br /> белые стены.  где во время ожидания можно <br />послушать музыку, почитать
                                что-нибудь интересное или выпить чашечку кофе.
                                </div>
                                <div className='mt-5'>
                                    Все пациенты — наши друзья! Те, кто приходит сюда впервые, знакомятся с нами и, пройдя вместе путь <br />от стоматологического кресла до красивой улыбки и здоровых зубов, остаются с нашей командой в прекрасных отношениях.
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>

                <div className='mt-5'>
                    <h1 className='text-center'>Услуги</h1>
                    <Table striped bordered hover size="sm" variant="dark">
                        <thead>
                            <tr>
                                <td>Лечения</td>
                                <td>1 канала</td>
                                <td>500c</td>

                            </tr></thead></Table>

                    <Table striped bordered hover size="sm" variant="dark">
                        <thead>
                            <tr>
                                <th>№</th>
                                <th>Пломба</th>
                                <th>Цена</th>

                            </tr>
                        </thead>
                        <tbody style={{ color: "white" }}>
                            <tr>
                                <td>1</td>
                                <td>3M Espe filltek in USA</td>
                                <td>2000c</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>GRADIA in JAPON</td>
                                <td>1500</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>ESTELITE in JAPON</td>
                                <td>1300C</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>ES COM in KOREA</td>
                                <td>1000C</td>
                            </tr> <tr>
                                <td>5</td>
                                <td>CHARISMA in german</td>
                                <td>1000C</td>
                            </tr> <tr>
                                <td>6</td>
                                <td>I FLOW in KOREA</td>
                                <td>700C</td>
                            </tr>

                        </tbody>
                    </Table>
                </div>
                <h1 data-aos="fade-up" data-aos-anchor-placement="top-bottom" className='text_nav text-center mt-5'>Здесь вы можете:</h1>
                <div className='container row mt-3 pt-3'>
                    <Col xs={10} md={6} lg={5} sm={6} className=''>
                        <h3 data-aos="fade-up"
                            data-aos-anchor-placement="top-bottom" class="tn-atom text-center pt-2 pb-2">почитать журналы</h3>
                    </Col>
                    <Col xs={10} md={6} lg={5} className=''>
                        <h3 data-aos="fade-up"
                            data-aos-anchor-placement="top-bottom" class="tn-atom text-center pt-2 pb-2">выпить чашечку кофе</h3>
                    </Col>
                    <Col xs={10} md={6} lg={5}>
                        <h3 data-aos="fade-up"
                            data-aos-anchor-placement="top-bottom" class="tn-atom text-center pt-2 pb-2">послушать музыку</h3>
                    </Col> <Col xs={10} md={6} lg={5}>
                        <h3 data-aos="fade-up"
                            data-aos-anchor-placement="top-bottom" class="tn-atom text-center pt-2 pb-2">пообщаться с сотрудниками</h3>
                    </Col>
                </div>
            </div>

        </>

    );
}

export default Terapii;

