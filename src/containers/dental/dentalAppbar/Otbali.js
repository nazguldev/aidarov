import React, { useEffect } from 'react';
import { Card, Col, Row, Table } from 'react-bootstrap';
import RunText from '../../../components/runText/RunText';
import AOS from 'aos'
import AutoVideo from '../../../components/Vidoe/AutoVideo';
import Accordion from '../../../components/accrdion/Accordion';
import imgg from '../../../img.aidarov/imgg.jpeg'
import './Appbar.scss'
import Button1 from '../../../Button1';
import DentalNavbar from '../dentalAppbar/DentalNavbar'


function Otbali({setShow}) {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

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
    const datas = [
        {
            title: "Кабинетное отбеливание",
            text: `Philips Zoom 4
            Самая современная и популярная система отбеливания от Philips.
            Amazing White
            Безопасное отбеливание зубов до 7−9 тонов за одно посещение.
            Внутрикоронковое отбеливание
            Быстро и просто восстанавливает эстетику изменивших цвет зубов, из которых ранее удалили нерв.`
        },
        {
            title: "Домашнее отбеливание",
            text: `Opalescence
            Система отбеливания на основе перекиси карбамида. Состав щадяще воздействует на эмаль зубов, питая и отбеливая их.`
        }, {
            title: `Отбеливание «Эффект бриллианта»`,
            text: `Кабинетное отбеливание зубов на аппарате Philips ZOOM 4 +
            Домашнее отбеливание с созданными специально для пациента капами`
        }
    ]
    return (
        <>
            <div className="container">
                <DentalNavbar/>
                <Row>
                    <Col xs={12} md={6}>
                        <h1 style={{ color: "white", fontFamily: 'GraphikTT Arial sans-serif', marginTop: "50px" }}>
                            Станьте обладателем<br /> ослепительной<br /> улыбки с помощью<br /> современных<br /> технологий <br /> отбеливания зубов
                        </h1>
                    </Col>
                    <Col xs={12} md={6} className="mt-5">
                        <AutoVideo />
                    </Col>
                    <Col xs={12} md={6}>
                        <h4  style={{ color: "#d3bb7e", }}>
                            Белоснежная улыбка без вреда для зубов
                        </h4>
                    </Col>
                    <Col xs={12} md={3}>
                        <Button1 setShow={setShow} />
                    </Col>
                </Row>
            </div>
            <div className="mt-5">
                <RunText />
            </div>
            <div className="container">
                <h1 className="mt-5 text-center" style={{ color: "#d3bb7e",  }}>
                    Звезды и знаменитости, сделавшие тотальное <br />преображение улыбки у доктора Эльмара
                </h1>
                <Row className='mt-5'>
                    {patients.map(e => {
                        return (
                            <>
                                <Col md={4} sm={6} xs={12}>
                                    <div>
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
                            <Card.Title className='text_nav'>Доктор Эльмар</Card.Title>
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
                    <Col md={6}>
                        <h4 style={{ color: "#d3bb7e", marginTop: "100px", }}>
                            Любое правильное ортодонтическое лечение (исправление прикуса, имплантация зубов или виниры) начинается с полной диагностики текущего состояния пациента, — чекапа.
                        </h4>
                        <Card.Text style={{ color: "white", fontFamily: 'GraphikTT Arial sans-serif', marginTop: "5px" }}>
                            В нашей клинике чекап не растягивается на несколько приемов, его можно пройти всего за 40-60 минут
                        </Card.Text>
                    </Col>
                </Row>
            </div>
            <div className="container">

                <h1 className="mt-5" style={{ color: "#d3bb7e",  fontFamily: 'GraphikTT Arial sans-serif', }}>
                    Запишитесь на бесплатный чекап полости рта.<br /> Экономия 25 тысяч* .
                </h1>
                <h4 style={{ color: "white", fontFamily: 'GraphikTT Arial sans-serif',  }}>Оставьте контакты, и мы свяжемся с вами, чтобы <br />подобрать удобное время для записи на консультацию.</h4>
                <Col sm={3}>
                <Button1 setShow={setShow}/>
                </Col>
                <p style={{ color: "#d3bb7e", fontFamily: 'GraphikTT Arial sans-serif', marginTop: "20px" }}>* эта сумма будет зачислена вам на баланс для последующего лечения</p>
            </div>
            <div className="container">
                <Row className="mt-5">
                    <Col md={6} className={"m-5"}>
                        <h1 style={{ color: "#d3bb7e",  }}>
                            Виды <br />отбеливания
                        </h1>
                    </Col>
                    <Col className='mt-5'>
                        <Card.Text style={{ color: "#d3bb7e", fontSize: "25px", }}>
                            Все системы отбеливания, которые мы применяем    в «Лаборатории улыбок Dr. Aidarov», являются щадящими
                            и сертифицированными, а также не вызывают дискомфорта и болезненных ощущений
                        </Card.Text>
                    </Col>
                </Row>
            </div>
            <div className="container text-center">
                <h3 style={{ color: "white", marginTop:"20px" }}>
                    Какую систему отбеливания выбрать?
                </h3>
                <Accordion name={datas} />
                <h3 style={{ color: "#d3bb7e", marginBottom:"20px" }}>
                    5 шагов до улыбки мечты
                </h3>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th style={{ color: 'white', textAlign: "center" }}>01</th>
                            <th style={{ color: 'white', textAlign: "center" }}>ВЗапись на консультацию.</th>
                        </tr>
                    </thead>
                    <tbody>

                        <tr>
                            <th style={{ color: 'white', textAlign: "center" }}>02</th>
                            <th style={{ color: 'white', textAlign: "center" }}>Первичная консультация у врача-специалиста для оценки состояния зубов и дёсен.</th>
                        </tr>
                        <tr>
                            <th style={{ color: 'white', textAlign: "center" }}>03</th>
                            <th style={{ color: 'white', textAlign: "center" }}>Проведение профессиональной гигиены полости рта для устранения налёта, чтобы ничего не помешало качественному отбеливанию.</th>
                        </tr>
                        <tr>
                            <th style={{ color: 'white', textAlign: "center" }}>04</th>
                            <th style={{ color: 'white', textAlign: "center" }}>Отбеливание.</th>
                        </tr>
                        <tr>
                            <th style={{ color: 'white', textAlign: "center" }}>05</th>
                            <th style={{ color: 'white', textAlign: "center" }}>Белоснежная улыбка.</th>
                        </tr>
                    </tbody>
                </Table>
            </div>
            <RunText />
        </>

    );
}

export default Otbali;