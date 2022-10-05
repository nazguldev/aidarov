import React, { useEffect } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import AOS from 'aos'
import Accordions from '../../../components/accrdion/Accordions'
import imgg from '../../../img.aidarov/imgg.jpeg'
import Button1 from '../../../Button1';
import RunText from '../../../components/runText/RunText';
import DentalNavbar from '../dentalAppbar/DentalNavbar'
import AutoVideo from '../../../components/Vidoe/AutoVideo';
import './Appbar.scss'

function Brekety({ setShow }) {
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
    const patients = [
        {
            img: "https://thumb.tildacdn.com/tild3534-3033-4632-b064-356232633331/-/cover/720x1100/center/center/-/format/webp/G_98zN2SdVE.jpg",
            title: "Гусейн Гасанов",
            known_for: "Популярный блогер",
        },
        {
            img: "https://thumb.tildacdn.com/tild3732-3830-4331-a262-666239323531/-/cover/720x1100/center/center/-/format/webp/sQWk_o_d9Lg.jpg",
            title: "Walter",
            known_for: "Совладелец Black Star ",
        },
        {
            img: "https://thumb.tildacdn.com/tild3761-3534-4239-b039-323636666563/-/cover/720x1100/center/center/-/format/webp/nhlrP-q6gb4.jpg",
            title: "Клаво Кока",
            known_for: "Black Star",
        }
    ]
    const a = [
        {
            title: "А взрослым можно установить брекеты, чтобы исправить прикус?",
            text: "Коррекцию прикуса можно проводить вне зависимости от возраста. Однако стоит учитывать, что у взрослых этот процесс занимает большее количество времени, чем у детей и подростков."
        },
        {
            title: "Как часто потребуется посещать врача?",
            text: "В среднем одного раза в месяц достаточно. Врач проверяет ход лечения и контролирует перемещение зубов в необходимом направлении. На последних этапах, когда ортодонт уже создаёт детализирующие изгибы, количество посещений увеличивается. Их частота зависит от конкретной ситуации.",
            text1: "Преимущество брекет-систем заключается в том, что если по каким-либо причинам вы пропустили посещение врача в назначенный срок, то лечение не прерывается. Система работает постоянно, плавно меняя положение зубов."
        },
        {
            title: "Как чистить зубы в брекетах?",
            text: "Так как необходимо очищать не только зубы, но и пространство вокруг замочков, обычная зубная щётка с этим не справится. Для ухода за брекетами потребуется приобрести ортодонтическую щётку, ёршики и нить. Также хорошим дополнением к уходу станет ирригатор. Эти приспособления помогают эффективно очистить зубы и пространство вокруг замков.",
            text1: "Гигиену полости рта потребуется проводить не только утром и вечером, но и после каждого приёма пищи, чтобы исключить появление кариеса."
        },
        {
            title: "Как устроена брекет-система?",
            text: "Брекеты состоят из микрозамочков и закреплённой в них дуги. Для каждого зуба изготавливается свой замочек в зависимости от того, как требуется переместить зуб. Замочек с помощью специального состава крепится к зубу, а в его паз помещается дуга. Именно благодаря ей и происходит плавное перемещение зубов."
        },
        {
            title: "Нужно ли корректировать питание при лечении брекетами?",
            text: "Твёрдая пища (сухарики, орехи, морковь, мясо) оказывает на дуги дополнительную нагрузку. Поэтому мясо и овощи следует разрезать на мелкие кусочки, а от сухарей и орехов желательно отказаться вовсе."
        },
    ]
    return (
        <>
            <div className="container">
                <DentalNavbar />

                <Row>
                    <h1 style={{ color: "#d3bb7e", fontFamily: 'GraphikTT Arial sans-serif', marginTop: "50px" }}>
                        Получите обворожительную и функциональную<br />  улыбку с удобными брекет-системами
                    </h1>
                    <Col xs={12} md={6}>

                        <h5 className="mt-2" style={{ color: "white", }}>
                            Исправление прикуса с помощью несъёмных<br /> ортодонтических конструкций. Эффективный<br /> способ борьбы с проблемой искривлённых<br /> зубов и неправильного прикуса.
                        </h5>
                        <Col sm={6} className="mt-2">
                            <Button1 className="mt-2" setShow={setShow} />
                        </Col>
                    </Col>
                    <Col xs={12} md={6}>
                        <AutoVideo />
                    </Col>
                </Row>
            </div>
            <RunText />
            <div className="container">
                <h1 style={{ color: "#d3bb7e", fontFamily: 'GraphikTT Arial sans-serif', }}>
                    Звезды и знаменитости, сделавшие<br /> тотальное преображение улыбки<br /> у доктора Айдарова
                </h1>
                <Row className='mt-5'>
                    <h1 className="text-center" style={{ color: "#d3bb7e", fontFamily: 'GraphikTT Arial sans-serif' }}>
                        Наши пациенты
                    </h1>
                    {patients.map(e => {
                        return (
                            <>
                                <Col md={4} sm={6} xs={12}>
                                    <div className='mt-5'>
                                        <Card.Img src={e.img}></Card.Img>
                                        <Card.Title className="mt-3" style={{ color: "white", }}>{e.title}</Card.Title>
                                        <Card.Text className="mt-1" style={{ color: "white", }}>{e.known_for}</Card.Text>
                                    </div>
                                </Col>
                            </>
                        )
                    })}

                </Row>
                <Row className="mt-5">
                    <Col xs={12} md={6} lg={6}>
                        <div data-aos="zoom-in" className='justify-content-evenly text-center' >
                            <img class=" t013__img t-img" src={imgg} imgfield="img" data-tu-max-width="320" data-tu-max-height="320" data-tu-cover="c" alt="" role="presentation">
                            </img>
                            <Card.Title className='text_nav'>Доктор Бекмамат</Card.Title>
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
                <Row className="mt-5">
                    <Col className='mt-5'>
                        <Card.Img className="h-100 w-100" src='https://thumb.tildacdn.com/tild6663-6334-4062-b764-356234363039/-/format/webp/diagnostika-min.jpg'>
                        </Card.Img>
                    </Col>
                    <Col md={6} >
                        <Card.Text style={{ color: "#d3bb7e", fontSize: "30px", marginTop: "50px" }}>
                            Любое правильное ортодонтическое лечение (исправление прикуса, имплантация зубов или виниры) начинается с полной диагностики текущего состояния пациента, — чекапа.
                        </Card.Text>
                        <Card.Text style={{ color: "white", fontFamily: 'GraphikTT Arial sans-serif', marginTop: "5px" }}>
                            В нашей клинике чекап не растягивается на несколько приемов, его можно пройти всего за 40-60 минут
                        </Card.Text>
                    </Col>
                </Row>
                <div className="container">
                    <h1 className="mt-3" style={{ color: "#d3bb7e", fontFamily: 'GraphikTT Arial sans-serif', }}>
                        Запишитесь на бесплатный чекап полости рта.<br /> Экономия 25 тысяч* .
                    </h1>
                    <Col sm={3}>
                        <Button1 setShow={setShow} />
                    </Col>
                    <p style={{ color: "#d3bb7e", fontFamily: 'GraphikTT Arial sans-serif', }}>* эта сумма будет зачислена вам на баланс для последующего лечения</p>
                </div>
            </div>
            <div className="container">
                <h1 style={{ color: "#d3bb7e", fontFamily: 'GraphikTT Arial sans-serif', marginTop: "50px" }}>
                    В каких случаях помогут брекеты?
                </h1>
                <Row className="mt-2">
                    <Col className='mt-5'>
                        <Card.Img className="h-75 w-75" src='https://thumb.tildacdn.com/tild3566-6431-4366-b763-623237323237/-/resize/864x/-/format/webp/Typodont_Teeth_Model.png'>
                        </Card.Img>
                    </Col>
                    <Col md={6} >
                        <h2 style={{ color: "#d3bb7e", fontSize: "25px", }}>
                            Несъёмная конструкция  зубной ряд
                        </h2>
                        <span style={{ color: "white", fontSize: "25px" }}>
                            , которая фиксируется на наружную или внутреннюю поверхность зубов и  плавно выравнивает
                        </span>
                        <span style={{ color: "#d3bb7e", fontSize: "25px", padding: "3px" }}>
                            зубной ряд
                        </span>
                        <Col>
                            <h3 data-aos="fade-up"
                                data-aos-anchor-placement="top-bottom" class="tn-atom text-center p-2 m-2">Неправильное расположение зубов</h3>
                        </Col>
                        <Col>
                            <h3 data-aos="fade-up"
                                data-aos-anchor-placement="top-bottom" class="tn-atom text-center  p-2 m-2">Диастема (щели)</h3>
                        </Col>
                        <Col>
                            <h3 data-aos="fade-up"
                                data-aos-anchor-placement="top-bottom" class="tn-atom text-center  p-2 m-2">Скученность зубов</h3>
                        </Col>
                        <Col>
                            <h3 data-aos="fade-up"
                                data-aos-anchor-placement="top-bottom" class="tn-atom text-center  p-2 m-2">Смещение верхней или нижней челюсти</h3>
                        </Col>
                        <Col>
                            <h3 data-aos="fade-up"
                                data-aos-anchor-placement="top-bottom" class="tn-atom text-center  p-2 m-2">Сложные случаи</h3>
                        </Col>
                    </Col>
                </Row>
                <h1 style={{ color: "#d3bb7e", fontFamily: 'GraphikTT Arial sans-serif', marginTop: "50px" }}>
                    Преимущества брекетов
                </h1>
                <Card.Text style={{ color: "white", fontSize: "20px", }}>
                    Мы используем высокотехнологичную, усовершенствованную,<br /> индивидуализированную американскую брекет-систему Damon.<br /> Обтекаемая и самолигирующая система обеспечивает плавное<br /> и естественное перемещение зубов без дискомфортных ощущений.</Card.Text>
                <Row>
                    <Col xs={12} md={4} >
                        <h3 data-aos="fade-up"
                            data-aos-anchor-placement="top-bottom" class="tn-atom text-center  p-2 m-2">01</h3>
                        <p style={{ color: "white" }} className="text-center p-2 m-2">Запись на консультацию</p>

                    </Col>
                    <Col xs={12} md={4} >
                        <h3 data-aos="fade-up"
                            data-aos-anchor-placement="top-bottom" class="tn-atom text-center  p-2 m-2">02</h3>
                        <p style={{ color: "white" }} className="text-center p-2 m-2">Первичная консультация у врача-специалиста для оценки состояния зубов и дёсен с использованием сверхточного рентгеновского аппарата Sirona Orthophos XG</p>
                    </Col>
                    <Col xs={12} md={4} >
                        <h3 data-aos="fade-up"
                            data-aos-anchor-placement="top-bottom" class="tn-atom text-center  p-2 m-2">03</h3>
                        <p style={{ color: "white" }} className="text-center p-2 m-2">Составление плана лечения с указанием всех вариантов, этапов и стоимости каждого из них</p>
                    </Col>
                    <Col xs={12} md={4} >
                        <h3 data-aos="fade-up"
                            data-aos-anchor-placement="top-bottom" class="tn-atom text-center  p-2 m-2">04</h3>
                        <p style={{ color: "white" }} className="text-center p-2 m-2">Проведение предварительных работ</p>

                    </Col>
                    <Col xs={12} md={4} >
                        <h3 data-aos="fade-up"
                            data-aos-anchor-placement="top-bottom" class="tn-atom text-center  p-2 m-2">05</h3>
                        <p style={{ color: "white" }} className="text-center p-2 m-2">Выравнивание зубов с помощью несъёмных ортодонтических конструкций. Сроки ношения брекетов зависят от сложности конкретного случая и индивидуальных особенностей пациента</p>
                    </Col>
                    <Col xs={12} md={4} >
                        <h3 data-aos="fade-up"
                            data-aos-anchor-placement="top-bottom" class="tn-atom text-center  p-2 m-2">06  </h3>
                        <p style={{ color: "white" }} className="text-center p-2 m-2">Ровная и здоровая улыбка</p>
                    </Col>
                </Row>
                <h1 style={{ color: "#d3bb7e", fontFamily: 'GraphikTT Arial sans-serif', marginTop: "50px" }}>
                    Сколько будет стоить лечение?
                </h1>
                <Row>
                    <Col xs={12} md={4} >
                        <h3 data-aos="fade-up"
                            data-aos-anchor-placement="top-bottom" class="tn-atom text-center  p-2 m-2">01. Чек-ап</h3>
                        <span style={{ color: "white", fontSize: "1rem" }}>-полный осмотр и диагностика;</span><br />
                        <span style={{ color: "white", fontSize: "1rem" }}>-создание цифровых слепков нижней<br /> и верхней челюстей;</span><br />
                        <span style={{ color: "white", fontSize: "1rem" }}>-3D-моделирование зубов;</span><br />
                        <span style={{ color: "white", fontSize: "1rem" }}> -консультация врача;</span><br />
                        <span style={{ color: "white", fontSize: "1rem" }}>-консилиум врачей с опытом<br /> работы более 15 лет;</span><br />
                    </Col>
                    <Col xs={12} md={4} >
                        <h3 data-aos="fade-up"
                            data-aos-anchor-placement="top-bottom" class="tn-atom text-center  p-2 m-2">02. Лечение</h3>
                        <p style={{ color: "white" }} className="text-center p-2 m-2">Терапевтическое<br /> и хирургическое лечение<br /> при необходимости.</p>
                    </Col>
                    <Col xs={12} md={4} >
                        <h3 data-aos="fade-up"
                            data-aos-anchor-placement="top-bottom" class="tn-atom text-center  p-2 m-2">03. Брекеты</h3>
                        <p style={{ color: "white" }} className="text-center p-2 m-2">1 степень <span style={{
                            fontSize: "15px"
                        }}>60 000 сом.</span>
                            (на одну челюсть)</p>
                        <p style={{ color: "white" }} className="text-center p-2 m-2">2 степень<span style={{
                            fontSize: "15px"
                        }}>90 000 сом.</span>
                            (на одну челюсть)</p>
                        <p style={{ color: "white" }} className="text-center p-2 m-2">3 степень<span style={{
                            fontSize: "15px"
                        }}>120 000 сом.</span>
                            (на одну челюсть)</p>
                    </Col>
                </Row>

            </div>
            <div className="container">
                <h1 style={{ color: "#d3bb7e", fontFamily: 'GraphikTT Arial sans-serif', marginTop: "50px" }}>Частые вопросы</h1>
                <Accordions name={a} />


                <Row>

                    <Col sm={6} xs={12} md={6}>
                        <h1 style={{ color: "#d3bb7e", fontFamily: 'GraphikTT Arial sans-serif', marginTop: "50px" }}>Получите пошаговый план к здоровой <br />и красивой улыбке на консультации</h1>
                        <h3 style={{ color: "white", fontFamily: 'GraphikTT Arial sans-serif', }}>
                            Получите пошаговый план к здоровой и красивой улыбке на консультацииВ стоматологической клинике «Лаборатории улыбок Dr. Elmar» проводится первичная консультация для оценки состояния зубов и дёсен с помощью сверхточного рентгеновского аппарата Sirona Orthophos XG, который обеспечивает высокое качество снимков при минимальной дозе облучения.
                        </h3>
                        <Card.Text style={{ color: "white", fontSize: "20px", fontFamily: 'GraphikTT Arial sans-serif', marginTop: "5px" }}>
                            С его помощью изготавливаются 2D-, 3D- и ОПТГ- (панорамные) снимки, наличие которых обязательно для постановки правильного диагноза и выбора метода лечения.
                        </Card.Text>
                        <Col sm={6}>
                            <Button1 setShow={setShow} />
                        </Col>
                    </Col>
                    <Col sm={6} xs={12} md={4} className='mt-5'>
                        <Card.Img  src='https://static.tildacdn.com/tild3765-3739-4430-a535-323165376139/IMG_3201.JPG'>
                        </Card.Img>
                    </Col>
                </Row>
            </div>
        </>
    );
}

export default Brekety;