import React, { useEffect } from 'react';
import { Card, Col, Row } from 'react-bootstrap'
import Button1 from '../../Button1';
import './xirurg.scss'
import _Navbar from "../../app/nav/_Navbar"
import Accordion from '../../components/accrdion/Accordion'
import AOS from 'aos';
import Adoctors from './Adoctors';
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
        <div className='container aboutXirurg'>
            <_Navbar />
            <h1 className='text-center'>Хирургия Айдаров</h1>
            <Row>
                <Col sm={6} xs={12} md={6} >
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

                <Col sm={6} xs={12} md={6} className="mt-5">
                    <img className='w-75' src='https://vcim.am/uploads/2021/11/Mirijanian.jpg' />
                </Col>
            </Row>
            <div className='container'>
                <h1 className='text-center'>Наша Хурургия</h1>
                <Accordion name={data} />
                <div className='mt-3'>
                    <Row>
                        <Col xs={12} md={4} >
                            <img  data-aos="fade-up-right" className='p-2 h-100 w-100' src='https://med122.com/news/1/2867775.jpg' alt='' />
                        </Col>
                        <Col xs={12} md={4} >
                            <img  data-aos="fade-down"
                                data-aos-easing="linear"
                                data-aos-duration="1500" className='w-100 p-2 h-100' src='https://thumbs.dreamstime.com/b/%D1%85%D0%B8%D1%80%D1%83%D1%80%D0%B3%D0%B8%D1%8F-11-7465323.jpg' alt='' /></Col>
                        <Col xs={12} md={4}>
                            <img data-aos="fade-left" className='w-100 h-100 p-2' src='https://www.anadolumedicalcenter.ru/wp-content/uploads/2020/12/hirurgiya-golovy.jpg' alt='' />
                        </Col>
                    </Row>
                </div>
                <Row className='mt-5'>
                    <Col xs={12} md={6} lg={6}>
                        <div data-aos="zoom-in" className='justify-content-evenly a text-center' >
                            <img class=" t013__img t-img" src={'https://www.cchp.ru/upload/iblock/60f/60f75d25040a7b4b1cb0e484e4e7c322.jpg'} imgfield="img" data-tu-max-width="320" data-tu-max-height="320" data-tu-cover="c" alt="" role="presentation">
                            </img>
                            <Card.Title className='text_nav'>Доктор Айдаров</Card.Title>
                            <span className='text_nav' style={{ fontSize: '14px', lineHeight: '18px' }} data-customstyle="yes">Основатель и<br /> главный врач клиники, <br />стоматолог-ортопед</span>
                        </div>
                    </Col>
                    <Col xs={12} md={6} lg={6}>
                        <div data-aos="zoom-in-up" className='justify-content-evenly text_nav m-3'>
                            <div >
                                Я хотел, чтобы клиника не напоминала больницу. Поэтому мы создали пространство, которое настраивает<br />
                                на правильную волну совместного творчества. Если люди приходят лечить зубы как на каторгу, то сложно <br />
                                ожидать от них высокогоуровня мотивации. Все мы немного нервничаем, если вокруг больничные<br /> белые стены. А у нас даже зона
                                ресепшена больше похожа на лобби-бар в отеле, где во время ожидания можно <br />послушать музыку, почитать
                                что-нибудь интересное или выпить чашечку кофе.
                            </div>
                            <div className='mt-5'>
                                Все пациенты — наши друзья! Те, кто приходит сюда впервые, знакомятся с нами и, пройдя вместе путь <br />от стоматологического кресла до красивой улыбки и здоровых зубов, остаются с нашей командой в прекрасных отношениях.
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
            <Adoctors/>
            <Price/>




        </div>
    );
}

export default AboutXirurg;