import React from 'react';
import { Card, Carousel, Col, Row } from 'react-bootstrap';
import Button1 from '../Button1';
import AutoVideo from '../components/Vidoe/AutoVideo';
import _Navbar from './nav/_Navbar'
import './MainContainer.scss'

function MainContainers({ setShow }) {
    const carusel = [
        {
            img:"https://thumbs.dreamstime.com/z/doctors-nurses-8151221.jpg",
            title:"First slide label",
            text:"Nulla vitae elit libero, a pharetra augue mollis interdum."

        },
        {
            img:"https://gutaclinic.ru/upload/iblock/a94/a9459d1ec8873b06a501b5f63ef4f4ef.jpg",
            title:"First slide label",
            text:"Nulla vitae elit libero, a pharetra augue mollis interdum."

        },
        {
            img:"https://gutaclinic.ru/upload/iblock/a94/a9459d1ec8873b06a501b5f63ef4f4ef.jpg",
            title:"First slide label",
            text:"Nulla vitae elit libero, a pharetra augue mollis interdum."

        },
        {
            img:"https://www.promedicina.clinic/assets/images/vlok.jpg",
            title:"First slide label",
            text:"Nulla vitae elit libero, a pharetra augue mollis interdum."

        },{
            img:"https://www.promedicina.clinic/assets/images/vlok.jpg",
            title:"First slide label",
            text:"Nulla vitae elit libero, a pharetra augue mollis interdum."

        },

    ]
    return (
        <div className='mainContainers'>
            <_Navbar />
            <div className='header_banner  w-100 h-100 '>
                <div className='container'>
                    <h1 className='text-center pt-5'>Добро пожаловать </h1>
                    <p className='text_nav h5 mt-5 mb-5'>
                        Клиника профессора Асымбековой организована в 2003 году.<br /> Имеет соответствия и лицензию МЗ КР.<br /> В клинике работают более 100 сотрудников:<br /> профессора, доценты, доктора и кандидаты <br />медицинских наук; акушеры-гинекологи, <br />неонатологи, педиатры,<br /> анестезиологи, терапевты, врачи смежных специальностей,<br /> акушерки и медсестры с высшей категорией.
                    </p>
                    <p className='mt-5 mb-5 pb-5 h5'>
                        Лечебная работа клиники основана на<br /> международных стандартах, по которым <br />работают ведущие учреждения зарубежных стран.
                    </p>
                </div>
            </div>
            <div className='container'>
                <h1 className='text-center pt-5 pb-5 '>УСЛУГИ  КЛИНИКИ:</h1>
                <Row>
                    <Col sm={6} xs={12} md={4} className="text-center">
                        <a href='/aboutDental'>
                            <Card style={{ marginTop: "10px" }}>
                                <Card.Body>
                                    <Card.Title className='text-center'>Стоматология</Card.Title>
                                    <Card.Img className='images_item' variant="top" src='https://zub.ru/upload/iblock/041/04174025b93d0621168a8712e846e9ca.jpg' />

                                </Card.Body>
                            </Card>
                        </a>
                    </Col>
                    <Col sm={6} xs={12} md={4} >
                        <a href='/AboutXirurg'>
                            <Card style={{ marginTop: "10px" }}>
                                <Card.Body>
                                    <Card.Title className='text-center'>Хирургия</Card.Title>
                                    <Card.Img className=' images_item ' variant="top" src='https://di-center.ru/upload/images/hiryrgia.jpg' />

                                </Card.Body>
                            </Card>
                        </a>
                    </Col>
                    <Col sm={6} xs={12} md={4} >
                        <a href='/AboutTerapiya'>
                            <Card style={{ marginTop: "10px" }}>
                                <Card.Body>
                                    <Card.Title className='text-center'>Терапия</Card.Title>
                                    <Card.Img className='images_item' variant="top" src='https://www.promedicina.clinic/assets/images/vlok.jpg' />

                                </Card.Body>
                            </Card>
                        </a>
                    </Col>
                    <Col sm={6} xs={12} md={4} className="text-center">
                        <a href='/aboutDental'>
                            <Card style={{ marginTop: "10px" }}>
                                <Card.Body>
                                    <Card.Title className='text-center'>Стоматология</Card.Title>
                                    <Card.Img className='images_item' variant="top" src='https://zub.ru/upload/iblock/041/04174025b93d0621168a8712e846e9ca.jpg' />

                                </Card.Body>
                            </Card>
                        </a>
                    </Col>
                    <Col sm={6} xs={12} md={4} >
                        <a href='/AboutXirurg'>
                            <Card style={{ marginTop: "10px" }}>
                                <Card.Body>
                                    <Card.Title className='text-center'>Хирургия</Card.Title>
                                    <Card.Img className=' images_item ' variant="top" src='https://di-center.ru/upload/images/hiryrgia.jpg' />
                                </Card.Body>
                            </Card>
                        </a>
                    </Col>
                    <Col sm={6} xs={12} md={4} >
                        <a href='/AboutTerapiya'>
                            <Card style={{ marginTop: "10px" }}>
                                <Card.Body>
                                    <Card.Title className='text-center'>Терапия</Card.Title>
                                    <Card.Img className='images_item' variant="top" src='https://www.promedicina.clinic/assets/images/vlok.jpg' />

                                </Card.Body>
                            </Card>
                        </a>
                    </Col>
                </Row>
            </div>
            <div className='container'>
                <h1 className='text-center pt-5 pb-5'>Наши Врачи</h1>
                <Carousel variant="dark">
                    {carusel.map((e)=>{
                        return(
                            <Carousel.Item>
                            <img
                                className="d-block"
                                style={{width:"100%", height:"700px"}}
                                src={e.img}
                                alt="First slide"
                            />
                            <Carousel.Caption>
                                <h5>{e.title}</h5>
                                <p>{e.text}</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        )
                    })}
                   
                    
                </Carousel>
            </div>

        </div>
    );
}

export default MainContainers;