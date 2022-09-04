import React from 'react';
import { Card, Col, Row, Table } from 'react-bootstrap';
import Button1 from '../../../Button1';
import Accordions from '../../../components/accrdion/Accordions';
import RunText from '../../../components/runText/RunText';
import AutoVideo from '../../../components/Vidoe/AutoVideo';
import imgg from '../../../img.aidarov/imgg.jpeg'
import './Appbar.scss'
import DentalNavbar from '../dentalAppbar/DentalNavbar'

function Iplant({ setShow }) {
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
    const data = [
        {
            title: "Большой опыт проведения операций"
        }, {
            title: "Индивидуальный подбор имплантов"
        }, {
            title: "Современное оборудование"
        }, {
            title: "Зарубежные материалы"
        }, {
            title: "Высокоточное обследование и тщательное планирование всего процесса"
        },
    ]
    const data1 = [
        {
            title: "Большой опыт проведения операций",
            ptitile: "Да, такое возможно. В этом случае врач составляет план поэтапного восстановления с расписанием операций, чтобы снизить нагрузку на организм."

        },
        {
            title: "Существует ли риск отторжения импланта?",
            ptitile: "Если операция проводится опытным врачом, соблюдается протокол установки и используется качественный материал, то риск отторжения сводится к минимуму."

        },
        {
            title: "Почему используют именно титановые стержни?",
            ptitile: "Биосовместимы с тканями"

        },
        {
            title: "Почему не всегда назначают одномоментную имплантацию?",
            ptitile: "Решение о способе имплантации принимает только врач после проведения тщательной диагностики. В ходе обследования специалист оценивает не только состояние зубов и дёсен, но и объём костной ткани, а также выявляет возможные патологии. Как и при любой операции, всё зависит от индивидуальных особенностей отдельного пациента.."

        },
        {
            title: "Если удалили зуб, лучше сразу обратиться за имплантацией или можно подождать несколько лет?",
            ptitile: "Своевременная установка очень важна, так как костная ткань со временем истончается, и провести операцию без дополнительного вмешательства становится всё сложнее с каждым годом."

        },
    ]
    return (
        <>
            <div className="container">
                <DentalNavbar/>
                <Row>
                    <h1 style={{ color: "#d3bb7e", fontFamily: 'GraphikTT Arial sans-serif', marginTop: "50px" }}>
                        Имплантация зубов. Беремся за самые сложные случаи
                    </h1>
                    <h3 style={{ color: "#d3bb7e", fontFamily: 'GraphikTT Arial sans-serif', marginTop: "20px" }}>
                        Потеря зубов — это не преграда для здоровой<br /> и красивой улыбки. Имплантация поможет <br /> вернуть утраченные зубы с помощью самых<br /> современных технологий.
                    </h3>
                    <Col md={6} className={""}>
                        <Card.Text style={{ color: "white", fontSize: "20px" }}>
                            -Современное оборудование,
                        </Card.Text>
                        <Card.Text style={{ color: "white", fontSize: "20px" }}>
                            -высокоточный рентген,
                        </Card.Text>
                        <Card.Text style={{ color: "white", fontSize: "20px" }}>
                            -использование импортных имплантатов
                        </Card.Text>
                        <Card.Text style={{ color: "white", fontSize: "20px" }}>
                            -большой опыт работы
                        </Card.Text>
                        <Card.Text style={{ color: "#d3bb7e", fontSize: "20px" }}>
                            Всё это позволяет вернуть нашим<br /> пациентам здоровье и красоту зубов.
                        </Card.Text>
                        <Col sm={6}>
                            <Button1 setShow={setShow} />
                        </Col>
                    </Col>
                    <Col className='mt-5'>
                        <AutoVideo />
                    </Col>
                </Row>
            </div>

            <RunText />
            <div className="container">
                <h1 style={{ color: "#d3bb7e", fontFamily: 'GraphikTT Arial sans-serif', marginTop: "50px" }}>
                    Звезды и знаменитости, сделавшие тотальное<br /> преображение улыбки у доктора Эльмара
                </h1>
                <Row className='mt-5'>

                    {patients.map(e => {
                        return (
                            <>
                                <Col md={4} sm={6} xs={12}>
                                    <div>
                                        <Card.Img src={e.img}></Card.Img>
                                        <Card.Title class="mt-3 h4" style={{ color: "white", }}>{e.title}</Card.Title>
                                        <Card.Text style={{ color: "white", }}>{e.known_for}</Card.Text>
                                    </div>
                                </Col>
                            </>
                        )
                    })}

                </Row>
                <Row className="mt-5">
                    <Col xs={12} md={6} lg={6}>
                        <div className='justify-content-evenly text-center  ' >
                            <img class=" t013__img t-img" src={imgg} imgfield="img" data-tu-max-width="320" data-tu-max-height="320" data-tu-cover="c" alt="" role="presentation">
                            </img>
                            <Card.Title className='text_nav'>Доктор Айдаров</Card.Title>
                            <span className='text_nav' style={{ fontSize: '14px', lineHeight: '18px' }} data-customstyle="yes">Основатель и<br /> главный врач клиники, <br />стоматолог-ортопед</span>
                        </div>
                    </Col>
                    <Col xs={12} md={6} lg={6}>
                        <div className='justify-content-evenly text_nav m-3'>
                            <div >
                                Звезды и знаменитости, доверяющие нам свои улыбки, люди состоятельные. Но даже они ценят и считают свои деньги. А к нам в клинику приходят за высочайшим качеством в стоматологии по демократичной цене, без необходимости выезжать заграницу.
                            </div>
                            <div className='mt-5'>
                                Поэтому наши двери всегда открыты, и открыты для всех. А высочайшее качество и сервис мы гарантируем каждому, как популярным людям, так и людям не столь публичным.
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
                        <h3 style={{ color: "#d3bb7e", }}>
                            Любое правильное ортодонтическое лечение (исправление прикуса, имплантация зубов или виниры) начинается с полной диагностики текущего состояния пациента, — чекапа.
                        </h3>   
                        <h3 style={{ color: "white", fontFamily: 'GraphikTT Arial sans-serif', marginTop: "5px" }}>
                            В нашей клинике чекап не растягивается на несколько приемов, его можно пройти всего за 40-60 минут
                        </h3>
                    </Col>
                </Row>
            </div>
            <div className="container mt-5">
                <h1 className="mb-3" style={{ color: "#d3bb7e",  fontFamily: 'GraphikTT Arial sans-serif', }}>
                    Запишитесь на бесплатный чекап полости рта.<br /> Экономия 25 тысяч*.
                </h1>
                <Col sm={3}> 
                <Button1 setShow={setShow} />
                </Col>
                <p className="mb-5" style={{ color: "#d3bb7e", fontFamily: 'GraphikTT Arial sans-serif', }}>* эта сумма будет зачислена вам на баланс для последующего лечения</p>
                <p className="mt-5 text-center" style={{ color: "white", fontSize: "50px", fontFamily: 'GraphikTT Arial sans-serif', }}>
                    Какие проблемы решает имплантация зубов?
                </p>
                <p className="text-center mt-3" style={{ color: "white", fontSize: "25px", fontFamily: 'GraphikTT Arial sans-serif', }}>
                    Имплантат изготавливается из титана, долго служит, отлично приживается в<br /> организме  и заменяет естественный корень зуба.
                </p>
                <p className="text-center mt-3" style={{ color: "#d3bb7e", fontSize: "20px", fontFamily: 'GraphikTT Arial sans-serif', }}>
                    После установки на него устанавливается коронка, которая визуально не отличается от родного зуба.
                </p>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th style={{ color: 'white', textAlign: "center" }}>01</th>
                            <th style={{ color: 'white', textAlign: "center" }}>Восполняет отсутствие родного зуба с сохранением его функциональной и эстетической значимости.</th>
                        </tr>
                    </thead>
                    <tbody>

                        <tr>
                            <td style={{ color: 'white', textAlign: "center" }}>02</td>
                            <td style={{ color: 'white', textAlign: "center" }}>Устраняет психологический дискомфорт, связанный с неидеальностью улыбки.</td>
                        </tr>
                        <tr>
                            <td style={{ color: 'white', textAlign: "center" }}>03</td>
                            <td style={{ color: 'white', textAlign: "center" }}>Предотвращает смещение зубов, изменение прикуса и черт лица.</td>
                        </tr>
                        <tr>
                            <td style={{ color: 'white', textAlign: "center" }}>04</td>
                            <td style={{ color: 'white', textAlign: "center" }}>Снижает возникновение кариеса, который появляется из-за увеличения межзубного пространства.</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
            <div className="container mt-5 text-center">
                <h1 style={{ color: "#d3bb7e",  fontFamily: 'GraphikTT Arial sans-serif', marginTop: "100px" }}>
                    Преимущества имплантации в клинике <br/>«Лаборатория улыбок Dr. Aidarov
                </h1>
                <Accordions name={data} />
                <p style={{ color: "#d3bb7e", fontSize: "50px", fontFamily: 'GraphikTT Arial sans-serif', marginTop: "50px" }}>
                    Виды имплантации
                </p>
                <p style={{ color: "#d3bb7e", fontSize: "20px", fontFamily: 'GraphikTT Arial sans-serif', marginTop: "50px" }}>
                    Выбор способа зависит от клинической ситуации пациента
                </p>
                <Row style={{ textAlign: "center" }}>
                    <Col md={6} className="mt-3">
                        <div style={{
                            width: 'auto', textAlign: "center", border: '2px solid #d3bb7e',
                        }}>
                            <Card.Body>
                                <h3 style={{ color: "#d3bb7e", fontFamily: 'GraphikTT Arial sans-serif', marginTop: "50px" }}>КЛАССИЧЕСКИЙ</h3>
                                <h3 style={{ color: "white",  fontFamily: 'GraphikTT Arial sans-serif', margin: "20px", textAlign: "center" }}>
                                    Имплантация происходит после 2<br /> месяцев с момента удаления зуба,<br /> а установка коронки ещё через<br /> несколько месяцев.
                                </h3>
                            </Card.Body>
                        </div>
                    </Col>
                    <Col md={6} className="mt-3">
                        <div style={{
                            width: 'auto', textAlign: "center", border: '2px solid #d3bb7e',
                        }}>
                            <Card.Body>
                                <h3 style={{ color: "#d3bb7e",  fontFamily: 'GraphikTT Arial sans-serif', marginTop: "50px" }}>ОДНОМОМЕНТНЫЙ</h3>
                                <h3 style={{ color: "white",  fontFamily: 'GraphikTT Arial sans-serif', margin: "50px", textAlign: "center" }}>
                                    Установка имплантата проходит<br /> сразу после удаления зуба.
                                </h3>
                            </Card.Body>
                        </div>
                    </Col>
                </Row>

            </div>
            <div className="container">
                <h1 style={{ color: "#d3bb7e", fontFamily: 'GraphikTT Arial sans-serif', marginTop: "100px" }}>
                    Частые вопросы
                </h1>
                <Accordions name={data1} />
            </div>
            <RunText />

        </>
    );
}

export default Iplant;