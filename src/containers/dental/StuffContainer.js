import React from 'react';
import { Col, Container, Row, Card, } from 'react-bootstrap';
import Button1 from '../../Button1';
import imgg from '../../img.aidarov/imgg.jpeg'
import patient1 from './Image/patient1.jpg'
import patient2 from './Image/patient2.jpg'
import patient5 from './Image/patient5.jpg'
import  '../dental.scss'


function StuffContainer({setShow}) {
    const doctors = [
        {
            id: 1,
            img: "https://thumb.tildacdn.com/tild6632-3766-4534-a530-643333336637/-/cover/520x800/center/center/-/format/webp/IMG_9457_1.JPG",
            title: "Гасанова Шахризат Магомедовна",
            position: "Стамотолог-ортодонт",
            experience: "4",
            detail: "Гасанова Шахризат Магомедовна Врач стоматолог-ортодонт, стаж — 4 года «В своей работе важным считаю не только лечение зубов, прикуса и ВНЧС, но и влияние на психосоматический фон пациента, так как в длительные сроки лечения важно иметь доверительные отношения» Специализация Лечение сложных зубочелюстных аномалий различной этиологии, лечение дистального, мезиального и перекрёстного прикуса Преображение улыбки с помощью современных усовершенствованных технологий и методов диагностики, использование 3D-сканирования. Комплексное лечение пациентов с дисфункцией ВНЧС, устранение спазма мышечной системы челюстно-лицевой области (миогимнастика).Образование 2017 г. — Дагестанский государственный медицинский университет. 2020 г. — ординатура в Центральном научно-исследовательском институте стоматологии и челюстно-лицевой хирургии. Карьера 2018–2020 гг. — ординатура в ЦНИИС и ЧЛХ. 2020–2021 гг. — стоматология «Юнидент». С 2020 г. по настоящее время — стоматология «Для своих» С 2020 г. по настоящее время — «Лаборатория улыбок Dr. Elmar». Ассоциации Dental Society Цифровая стоматология Ortodontic Professional Стоматологическая ассоциация России Ассоциация стоматологов и челюстно-лицевых хирургов Независимая ассоциация пародонтологов Регулярное повышение квалификации у специалистов мирового уровня и спикеров России.Сертификаты и повышение квалификации Chris Chang, «Лечение сложных случаев с применением современных технологий», 2020 г.Giorgio Fiorelli, «Возможности биомеханики в лечении на элайнерах», 2021 г. Сертифицированный специалист академии Eurokappa «Секреты успеха при работе на элайнерах», «Разрушая мифы об элайнерах», 2019 г. Нуртдинов И. Р., «Ортодонтическая резидентура. Современные принципы ортодонтического лечения, основы диагностики», 2019 г.Кочкаров Пулат Г., Сплинт-терапия. «Работа с ВНЧС», 2020 г.Насиб Балют, «Выбор правильного торка при лечении на брекет-системе системе Damon», 2020 г. Юрий Милутка, «Мануальная работа с мышцами, остеопатия для ортодонтов», 2021 г. Участник междисциплинарного дискуссионного клуба Dental Practice Talk, 2020.Участник конференции с междисциплинарным подходом Пародонтология объединит всех, 2019 г.Участник ежегодных научно-практических конференций «Современные аспекты клиники, диагностики и лечения заболеваний пульпы и периодонта», «Современные достижения в детской челюстно-лицевой хирургии и стоматологии»Участник съезда ортодонтов Московской области «Дисфункция ВНЧС — синтез науки и практики», 2019 г.",
        },
        {
            id: 2,
            img: "https://thumb.tildacdn.com/tild3736-3436-4734-b538-616235646636/-/cover/520x800/center/center/-/format/webp/IMG_9509_1.JPG",
            title: "Базарбаев Фарух Фархадович",
            position: "Стамотолог-ортодонт",
            experience: "5",
        },
        {
            id: 3,
            img: "https://thumb.tildacdn.com/tild3331-3539-4934-b536-666565376664/-/cover/520x800/center/center/-/format/webp/IMG_9425_1.JPG",
            title: "Матняк Дмитрий Николаевич",
            position: "Стамотолог-ортодонт",
            experience: "7",
        },
        {
            id: 4,
            img: "https://thumb.tildacdn.com/tild6661-6531-4662-b632-386161616536/-/cover/520x800/center/center/-/format/webp/IMG_9426_1.JPG",
            title: "Тедеева Мария Маратовна",
            position: "Стамотолог-ортодонт",
            experience: "8",
        },
        {
            id: 5,
            img: "https://thumb.tildacdn.com/tild3331-3539-4934-b536-666565376664/-/cover/520x800/center/center/-/format/webp/IMG_9425_1.JPG",
            title: "Матняк Дмитрий Николаевич",
            position: "Стамотолог-ортодонт",
            experience: "9",
            detail: "fggh",
        },
    ]
    const patients = [
        {
            img: `${patient1}`,
            title: "TITLE",
            known_for: "TEXT",
        },
        {
            img: `${patient2}`,
            title: "TITLE",
            known_for: "TEXT",
        },
        {
            img: `${patient5}`,
            title: "TITLE",
            known_for: "TEXT",
        }
    ]
    return (
        <>
            <Container style={{marginTop:"100px"}}>
                <h1 style={{ color: "#d3bb7e", fontFamily: 'GraphikTT Arial sans-serif', marginTop: "50px" }}>
                    Врачи, которым доверяют
                </h1>
                <Row>
                    <Col md={6} >
                        <h3 style={{ color: "white",  }}>
                            Команда клиники «Лаборатория улыбок Dr. Elmar» специализируется на тотальном преображении улыбки и оказывает все виды стоматологических услуг
                        </h3>
                        <Col sm={6}>
                        <Button1 setShow={setShow}/>

                        </Col>
                    </Col>
                    <Col className='mt-5'>
                        <Card.Img width={'200px'} src='https://static.tildacdn.com/tild3331-3833-4964-b366-656665383262/photo.svg'>

                        </Card.Img>
                    </Col>
                    <Col md={10} className="m-5">
                        <h1 style={{ color: "#d3bb7e" }}>Наша команда</h1>
                    </Col>
                    <Col md={6} >
                        <Card.Img className='w-75 h-100 mt-3' src={imgg}>
                        </Card.Img>
                    </Col>
                    <Col md={6} className='mt-5'>
                        <h4 style={{ color: "white" }}>
                            Бекмамат Айдаров — основатель и главный врач клиники «Лаборатория улыбок Dr. Elmar». Кандидат медицинских наук, стоматолог-ортопед.   </h4>
                        <p className='textdoctor'>
                            Благодаря высокому качеству оказываемых услуг, к доктору Эльмару приезжают пациенты из разных точек мира.
                            Трудолюбие, уважительное отношение к каждому пациенту и любовь к красоте делают доктора Эльмара настоящим профессионалом в сфере стоматологии.
                        </p>

                        <p className='textdoctor'>
                            Улыбки, созданные доктором Эльмаром, отличаются естественностью, высоким уровнем эстетики, а его обаяние и душевная теплота создают в клинике приятную, дружескую атмосферу.

                        </p>
                        <p className='textdoctor'>
                            Звезды шоу-бизнеса, спорта, популярные блогеры доверили свои улыбки именно доктору Эльмару и стали обладателями ослепительных улыбок.
                        </p >
                        <Row>
                            <Col >
                                <div className='div_b'>
                                    Образование
                                </div>
                            </Col>
                            <Col className=''>
                                <div className='div_b '>
                                    Социальные сети
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row className='mt-5'>
                    {doctors.map(e => {
                        return (
                            <>
                                <Col md={3} sm={6} xs={12} className="mt-5">
                                    <Card.Img src={e.img}></Card.Img>
                                    <Card.Text style={{ color: "white", textAlign: "center" }}> {e.title}</Card.Text>
                                    <Card.Text style={{ color: "white", textAlign: "center" }}>{e.position}</Card.Text>
                                    <Card.Text style={{ color: "white", textAlign: "center" }}>{e.experience}</Card.Text>
                                  <Button1 setShow={setShow}/>
                                </Col>
                            </>
                        )
                    })}
                   
                </Row>
                <Row className='mt-5'>
                    <p style={{ color: "#d3bb7e", fontSize: "50px", fontFamily: 'GraphikTT Arial sans-serif', marginTop: "50px" }}>
                        Наши пациенты
                    </p>
                    {patients.map(e => {
                        return (
                            <>
                                <Col md={4} sm={6} xs={12} >
                                    <div>
                                        <Card.Img src={e.img}></Card.Img>
                                        <Card.Text style={{ color: "white", textAlign: "center" }}>{e.title}</Card.Text>
                                        <Card.Text style={{ color: "white", textAlign: "center" }}>{e.known_for}</Card.Text>
                                    </div>
                                </Col>
                            </>
                        )
                    })}
                </Row>
            </Container>
        </>
    );
}

export default StuffContainer;