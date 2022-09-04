import React from 'react';
import { Card, Carousel, Col, Row } from 'react-bootstrap';
import _Navbar from './nav/_Navbar'
import './MainContainer.scss'

function MainContainers({ setShow }) {
    const carusel = [
        {
            img: "https://thumbs.dreamstime.com/z/doctors-nurses-8151221.jpg",
            title: "First slide label",
            text: "Nulla vitae elit libero, a pharetra augue mollis interdum."

        },
        {
            img: "https://gutaclinic.ru/upload/iblock/a94/a9459d1ec8873b06a501b5f63ef4f4ef.jpg",
            title: "First slide label",
            text: "Nulla vitae elit libero, a pharetra augue mollis interdum."

        },
        {
            img: "https://gutaclinic.ru/upload/iblock/a94/a9459d1ec8873b06a501b5f63ef4f4ef.jpg",
            title: "First slide label",
            text: "Nulla vitae elit libero, a pharetra augue mollis interdum."

        },
        {
            img: "https://www.promedicina.clinic/assets/images/vlok.jpg",
            title: "First slide label",
            text: "Nulla vitae elit libero, a pharetra augue mollis interdum."

        }, {
            img: "https://www.promedicina.clinic/assets/images/vlok.jpg",
            title: "First slide label",
            text: "Nulla vitae elit libero, a pharetra augue mollis interdum."

        },

    ]
    const info = [
        {
            name: "Стоматология",
            text: "Многопрофильный реабилитационный центр клиники профессора Асымбековой.Оказываем профессиональную и эффективную помощь по реабилитации пациентов после инсульта и инфаркта миокарда, черепно-мозговых и спинальных травм, операций на позвоночнике, восстановительное лечение после Covid-19, а также медицинскую и сестринскую помощь пациентам с ограниченными возможностями. Мы помогаем даже в самых сложных ситуациях, обусловленных сопутствующими заболеваниями (рассеянный склероз, болезнь Паркинсона)Учредителями являются ОсОО “Клиника профессора Асымбековой”"
        },
        {
            name: "Хирургия",
            text: "Многопрофильный реабилитационный центр клиники профессора Асымбековой.Оказываем профессиональную и эффективную помощь по реабилитации пациентов после инсульта и инфаркта миокарда, черепно-мозговых и спинальных травм, операций на позвоночнике, восстановительное лечение после Covid-19, а также медицинскую и сестринскую помощь пациентам с ограниченными возможностями. Мы помогаем даже в самых сложных ситуациях, обусловленных сопутствующими заболеваниями (рассеянный склероз, болезнь Паркинсона)Учредителями являются ОсОО “Клиника профессора Асымбековой”"
        }, {
            name: "Терапия",
            text: "Многопрофильный реабилитационный центр клиники профессора Асымбековой.Оказываем профессиональную и эффективную помощь по реабилитации пациентов после инсульта и инфаркта миокарда, черепно-мозговых и спинальных травм, операций на позвоночнике, восстановительное лечение после Covid-19, а также медицинскую и сестринскую помощь пациентам с ограниченными возможностями. Мы помогаем даже в самых сложных ситуациях, обусловленных сопутствующими заболеваниями (рассеянный склероз, болезнь Паркинсона)Учредителями являются ОсОО “Клиника профессора Асымбековой”"
        }, {
            name: "Лаборатория",
            text: "Многопрофильный реабилитационный центр клиники профессора Асымбековой.Оказываем профессиональную и эффективную помощь по реабилитации пациентов после инсульта и инфаркта миокарда, черепно-мозговых и спинальных травм, операций на позвоночнике, восстановительное лечение после Covid-19, а также медицинскую и сестринскую помощь пациентам с ограниченными возможностями. Мы помогаем даже в самых сложных ситуациях, обусловленных сопутствующими заболеваниями (рассеянный склероз, болезнь Паркинсона)Учредителями являются ОсОО “Клиника профессора Асымбековой”"
        },
    ]
    return (
        <div className='mainContainers'>
            <_Navbar />
            <div className='header_banner  w-100 h-100 '>
                <div className='container'>
                    <h1 className='text-center pt-5'>Добро пожаловать </h1>
                    <p className=' h5 mt-5 mb-5'>
                        Клиника профессора Асымбековой организована в 2003 году.<br /> Имеет соответствия и лицензию МЗ КР.<br /> В клинике работают более 100 сотрудников:<br /> профессора, доценты, доктора и кандидаты <br />медицинских наук; акушеры-гинекологи, <br />неонатологи, педиатры,<br /> анестезиологи, терапевты, врачи смежных специальностей,<br /> акушерки и медсестры с высшей категорией.
                    </p>
                    <p className='mt-5 mb-5 pb-5 h5'>
                        Лечебная работа клиники основана на<br /> международных стандартах, по которым <br />работают ведущие учреждения зарубежных стран.
                    </p>
                </div>
            </div>
            <div className='container'>
                <Carousel className=' text-center container'>
                    {info.map((e) => {
                        return (
                            <Carousel.Item>

                                <h1>{e.name}</h1>
                                <h5 style={{ color: "white" }}>{e.text} </h5>
                            </Carousel.Item>
                        )
                    })}
                </Carousel>
            </div>
            <div className='container'>
                <h1 className='text-center pt-3 pb-5 '>УСЛУГИ  КЛИНИКИ:</h1>
                <Row>
                    <Col sm={6} xs={12} md={4} className="text-center">
                        <a href='/aboutDental'>
                            <div style={{ marginTop: "10px" }}>
                                    <Card.Title className='text-center pb-3'>Стоматология</Card.Title>
                                    <Card.Img className='images_item' variant="top" src='https://zub.ru/upload/iblock/041/04174025b93d0621168a8712e846e9ca.jpg' />
                            </div>
                        </a>
                    </Col>
                    <Col sm={6} xs={12} md={4} >
                        <a href='/AboutXirurg'>
                            <div style={{ marginTop: "10px" }}>
                                    <Card.Title className='text-center pb-3'>Хирургия</Card.Title>
                                    <Card.Img className=' images_item ' variant="top" src='https://di-center.ru/upload/images/hiryrgia.jpg' />

                            </div>
                        </a>
                    </Col>
                    <Col sm={6} xs={12} md={4} >
                        <a href='/AboutTerapiya'>
                            <div style={{ marginTop: "10px" }}>
                                    <Card.Title className='text-center pb-3'>Терапия</Card.Title>
                                    <Card.Img className='images_item' variant="top" src='https://www.promedicina.clinic/assets/images/vlok.jpg' />

                            </div>
                        </a>
                    </Col>
                    <Col sm={6} xs={12} md={4} className="text-center ">
                        <a href='/AboutLaboratory'>
                            <div style={{ marginTop: "10px" }}>
                                    <Card.Title className='text-center pb-3'>Лаборатория</Card.Title>
                                    <Card.Img className='images_item' variant="top" src='https://alterainvest.ru/upload/iblock/45a/45ad6847ad7e96d427a0523f2cb2ade0.jpg' />

                            </div>
                        </a>
                    </Col>
                    <Col sm={6} xs={12} md={4} >
                        <a href='/AboutGynecology'>
                            <div style={{ marginTop: "10px" }}>
                                    <Card.Title className='text-center pb-3'>Гинекология
                                    </Card.Title>
                                    <Card.Img className=' images_item ' variant="top" src='https://clinic.kg/wp-content/uploads/2018/12/ginekologicheskie_operacii.jpg' />
                            </div>
                        </a>
                    </Col>
                    <Col sm={6} xs={12} md={4} >
                        <a href='/AboutTerapiya'>
                            <div style={{ marginTop: "10px" }}>
                                    <Card.Title className='text-center pb-3'>Терапия</Card.Title>
                                    <Card.Img className='images_item' variant="top" src='https://www.promedicina.clinic/assets/images/vlok.jpg' />

                            </div>
                        </a>
                    </Col>
                </Row>
            </div>
            <div className='container'>
                <h1 className='text-center pt-5 pb-5'>Наши Врачи</h1>
                <Row>
                    <Col xl={12} md={12} sm={12}>
                        <Carousel>
                            {carusel.map((e) => {
                                return (
                                    <Carousel.Item>

                                        <img
                                            className="d-block w-100 text-center"
                                            src={e.img}
                                            alt="First slide" />
                                        <Carousel.Caption>
                                            <h3>{e.title}</h3>
                                            <h5>{e.text}</h5>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                )
                            })}

                        </Carousel>
                    </Col>

                </Row>
                <h1 className='text-center pt-5 pb-5'>Результаты</h1>
            </div>

        </div>
    );
}

export default MainContainers;