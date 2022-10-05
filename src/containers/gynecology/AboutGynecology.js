import React, { useEffect } from 'react';
import { Card, Col, Row, Table } from 'react-bootstrap'
import Button1 from '../../Button1';
import './gynecolog.scss'
import _Navbar from "../../app/nav/_Navbar"
import Accordions from '../../components/accrdion/Accordions';
import RunText from '../../components/runText/RunText';
function AboutGynecology({ setShow }) {
    const data = [
        {
            title: "Отсутствие месячных",
            text: "Девочке исполнилось 15 лет, а месячные у нее еще не начались."
        }, {
            title: "Зуд и жжение",
            text: "Вас беспокоит зуд, жжение, выделения с неприятным запахом, боли внизу живота."
        }, {
            title: "Болевой синдром",
            text: "Менструации сопровождаются сильным болевым синдромом. Ее продолжительность превышает 7 дней. Месячные обильные, или, наоборот, скудные."
        }, {
            title: "Новообразования",
            text: "В зоне гениталий отмечаются потертости, шероховатости, какие-то новообразования, безболезненные или сопровождающиеся неприятными ощущениями. "
        }, {
            title: "Нарушение цикла",
            text: "Вы отмечаете нарушение характера и продолжительности менструаций. Цикл нарушается. Кровянистые выделения Отмечаются кровянистые выделения в межменструальный период."
        }, {
            title: "Кровянистые выделения",
            text: "Отмечаются кровянистые выделения в межменструальный период."
        }, {
            title: "Контрацептивы",
            text: "Для грамотного подбора средств контрацепции."
        }, {
            title: "Климакс",
            text: "При первых признаках климакса и вегето-сосудистых проявлений."
        },
        {
            title: "Беременность",
            text: "Не наступление беременности, при регулярной половой жизни без контрацепции, в течении года."
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
    return (
        <>
            <div className='AboutGynecology'>
                <div className='container'>
                    <_Navbar />
                    <Row >

                        <Col md={6}>
                            <h1 className="mt-3 text">Кто такой гинеколог?</h1>
                            <p className="text2 mt-3">
                                Гинеколог - это врач, который занимается профилактикой, диагностикой и лечением заболеваний женской половой сферы с учетом возраста женщины и её индивидуальных особенностей.
                            </p><p className="text2 mt-3">
                                Гинеколог - врач узкой специализации, занимающийся диагностикой, профилактикой и лечением болезней женской репродуктивной системы.
                                Врач-гинеколог наблюдает за здоровьем, развитием девочек в детском и подростковом возрасте, позднее — оценивает состояние женского организма, репродуктивную и сексуальную функцию, участвует в планировании семьи, решает проблемы контрацепции. Вместе с акушером отвечает за дородовое состояние женщины, проводит скрининг-тестирование, выявляет венерические заболевания, нарушения репродуктивной функции.
                                Основные специальности гинекологов
                            </p>

                            <p className='mt-5'>
                                <Button1 setShow={setShow} />
                            </p>
                        </Col>
                        <Col md={6} xs={8} sm={10}>
                            <Card.Img variant="top" src='https://static.wixstatic.com/media/4d529b_fd65a8ced6ed4be397af12a22b44a238~mv2.png/v1/fill/w_470,h_390,al_c,q_95,enc_auto/main3.png' />
                        </Col>
                    </Row>
                    <h1 className='mt-3'>С какими симптомами следует<br /> обращаться к гинекологу?</h1>
                    <Accordions name={data} />
                    <Row>
                        <Col xs={12} md={6} lg={6}>
                            <div className='justify-content-evenly text-center  ' >
                                <img class=" t013__img t-img" src={'https://onclinic.ua/storage/media/doctors/654/CdvNDNDgHZ5JOcsdUwFEWfwA6JZ0Wyva3bgenHgp_900.png'} imgfield="img" data-tu-max-width="320" data-tu-max-height="320" data-tu-cover="c" alt="" role="presentation">
                                </img>
                                <Card.Title className='text_nav'>Доктор Айдаров</Card.Title>
                                <span className='text_nav' style={{ fontSize: '14px', lineHeight: '18px' }} data-customstyle="yes">Основатель и<br /> главный врач гинекологии </span>
                            </div>
                        </Col>
                        <Col xs={12} md={6} lg={6}>
                            <div className='justify-content-evenly text_nav mt-3'>
                                <div >
                                    ОПЫТНЫЕ ВРАЧИ. КАЧЕСТВЕННЫЙ СЕРВИС. ОПТИМАЛЬНЫЕ ПРОГРАММЫ.
                                    Prime Сlinic - это современная клиника. Мы поможем вам пройти обследования у квалифицированных врачей и подберём оптимальные программы лечения.
                                </div>

                                <div className='mt-3'>
                                    <Button1 setShow={setShow} />

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
            <RunText />
            <div className='container'>
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