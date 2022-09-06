import React from 'react';
import { Card, Col, Row,Table } from 'react-bootstrap';
import _Navbar from "../../app/nav/_Navbar"
import Button1 from '../../Button1';
import RunText from '../../components/runText/RunText';
import './urolog.scss'
import Accordions from '../../components/accrdion/Accordions';


function AboutUrologi({ setShow }) {
    const data =[
        {
        title:"text",
        text:"text"
    },
    {
        title:"text",
        text:"text"
    },
    {
        title:"text",
        text:"text"
    },
    {
        title:"text",
        text:"text"
    },
]
const patients = [
    { img: `https://crb-vyksa.ru/netcat_files/11/1/deontlogiya.jpg`,
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
const as= [
    {
        id:1,
        title:"Прием врача терапевта, гастроэнтеролога",
        price:"	700 сом",

    },
    {
        id:2,
        title:"Прием врача невролога",
        price:"		1000 сом",

    },
    {
        id:3,
        title:"Прием врача эндокринолога",
        price:"	700 сом",

    },
    {
        id:4,
        title:"Прием врача иммунолога первичный (прием только с анализами)",
        price:"	1000 сом",

    },
    {
        id:5,
        title:"Прием врача уролог (с осмотром)",
        price:"	700 сом",

    },
    

]
    return (
        <>        <_Navbar />
            <div className='container AboutUrolog'>

                <Row>

                    <Col className="mt-5" md={6} >
                        <h1 className="mt-3 text">Кто такой уролог?</h1>
                        <p className="text2 mt-3">
                            Уролог является врачом, который осуществляет диагностику, профилактику и лечение заболеваний мочеполовой системы. Записаться на прием к нему могут как женщины, так и мужчины. Специалисты оказывают комплексную медицинскую помощь при нарушениях работы мочеточников, мочевого пузыря, почек и уретры. Также врачи занимаются расстройствами половой системы у мужчин.
                        </p>
                        <p className="text2 mt-3">Урология является не только терапевтической, но и хирургической специальностью. Поэтому врачи обеспечивают и проведение оперативных вмешательств, которые могут быть направлены как на устранение различных патологий, так и врожденных и приобретенных эстетических дефектов.</p>

                        <p className='mt-5'>
                            <Button1 setShow={setShow} />
                        </p>
                    </Col>
                    <Col md={6} xs={8} sm={10}>
                        <Card.Img variant="top" src='https://pngimg.com/uploads/doctor/doctor_PNG16041.png' />
                    </Col>
                </Row>
                <h1 className='mt-3'>С какими симптомами следует<br /> обращаться к урологу?</h1>
                <Accordions name={data} />
                <Row>
                        <Col xs={12} md={6} lg={6}>
                            <div className='justify-content-evenly text-center  ' >
                                <img class=" t013__img t-img" src={'https://pngimg.com/uploads/doctor/doctor_PNG15980.png'} imgfield="img" data-tu-max-width="320" data-tu-max-height="320" data-tu-cover="c" alt="" role="presentation">
                                </img>
                                <Card.Title className='text_nav'>Доктор Айдаров</Card.Title>
                                <span className='text_nav' style={{ fontSize: '14px', lineHeight: '18px' }} data-customstyle="yes">Основатель и<br /> главный врач урологии </span>
                            </div>
                        </Col>
                        <Col xs={12} md={6} lg={6}>
                            <div className='justify-content-evenly text_nav mt-3'>
                                <div >
                                    ОПЫТНЫЕ ВРАЧИ. КАЧЕСТВЕННЫЙ СЕРВИС. ОПТИМАЛЬНЫЕ ПРОГРАММЫ.
                                    Prime Сlinic - это современная клиника. Мы поможем вам пройти обследования у квалифицированных врачей и подберём оптимальные программы лечения.
                                </div>

                                <div className='mt-3'>
                                <Button1 setShow={setShow}/>

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
            <RunText />
            <div className='container'>
                <h1 className='text-center'>PRICE</h1>
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

export default AboutUrologi;