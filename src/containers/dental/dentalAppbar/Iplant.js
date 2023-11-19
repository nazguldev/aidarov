import React, { useEffect } from 'react';
import { Card, Col, Row, Table } from 'react-bootstrap';
import Button1 from '../../../Button1';
import Accordions from '../../../components/accrdion/Accordions';
import RunText from '../../../components/runText/RunText';
import AutoVideo from '../../../components/Vidoe/AutoVideo';
import imgg from '../../../img.aidarov/imgg.jpeg'
import './Appbar.scss'
import DentalNavbar from '../dentalAppbar/DentalNavbar'
import AOS from 'aos'

function Iplant({ setShow }) {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
    
    const data = [
        {
            title: "1. Опытный хирург имплантолог"
        }, {
            title: "2. Большой опыт проведения операций"
        }, {
            title: "3. Индивидуальный подбор имплантов"
        }, {
            title: "4. Современное оборудование"
        }, {
            title: "5. Зарубежные материалы"
        },  {
            title: "6. Высокоточное обследование и тщательное планирование всего процесса"
        },{
            title: "7. Навигационная технология"
        }, {
            title: "8. 3дня курс лечения "
        }, {
            title: "9. Лабораторная исследования"
        }, {
            title: "10.  ALL ON 4 "
        }, {
            title: "11. 5 ALL ON 6"
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
        },]
    return (
        <>
            <div className="container">
                <DentalNavbar />
                <Row>
                    <h1 style={{ color: "#d3bb7e", fontFamily: 'GraphikTT Arial sans-serif', marginTop: "50px" }}>
                        Имплантация зубов. Беремся за самые сложные моменты
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
                            -использование импортных сертифицированных имплантатов
                        </Card.Text>
                        <Card.Text style={{ color: "white", fontSize: "20px" }}>
                            -большой опыт работы
                        </Card.Text>
                        <Card.Text style={{ color: "#d3bb7e", fontSize: "20px" }}>
                            Всё это позволяет вернуть нашим<br /> пациентам здоровье и красоту зубов.
                        </Card.Text>
                        <Col sm={6}>
                        <div className="pb-3 pt-3 mt-2 mb-3 div__a">
                                    <a href={'tel:+996776000000'} style={{ textDecoration: "none" }} className={'p-2 textinfooter2 rounded'}   > Записаться на прием</a>
                                </div>
                        </Col>
                    </Col>
                    <Col>
                    <img src="https://ortholove.ru/upload/implantaciya-zubov/konstrukciya-all-on-6-2.png"/>
                    </Col>

                </Row>
            </div>

            <RunText name={text} />

            <div className="container mt-5">



                <h1 className="mt-5 text-center" style={{ fontFamily: 'GraphikTT Arial sans-serif', }}>
                    Какие проблемы решает имплантация зубов?
                </h1>
                <p className="text-center mt-3" style={{ color: "white", fontSize: "25px", fontFamily: 'GraphikTT Arial sans-serif', }}>
                    Имплантат изготовливается из титана, долго служит, отлично приживается в<br /> организме  и заменяет естественный корень зуба.
                </p>
                <p className="text-center mt-3" style={{ color: "#d3bb7e", fontSize: "20px", fontFamily: 'GraphikTT Arial sans-serif', }}>
                    После установки на него установливается коронка, которая визуально не отличается от родного зуба.
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
                <h1 style={{ color: "#d3bb7e", fontFamily: 'GraphikTT Arial sans-serif', marginTop: "100px" }}>
                    Преимущества имплантации в клинике <br /> Доктора Айдарова
                </h1>
                <Accordions name={data} />
                <h2 style={{ color: "#d3bb7e",  fontFamily: 'GraphikTT Arial sans-serif', marginTop: "50px" }}>
                    Виды имплантации
                </h2>
                <h2 style={{ color: "#d3bb7e", fontFamily: 'GraphikTT Arial sans-serif', marginTop: "50px" }}>
                    Выбор способа зависит от клинической ситуации пациента
                </h2>
                <Row >
                    <Col md={6} className="mt-3">
                        <div style={{
                            width: 'auto', textAlign: "center", border: '2px solid #d3bb7e',
                        }}>
                            <Card.Body>
                                <h3 style={{ color: "#d3bb7e", fontFamily: 'GraphikTT Arial sans-serif', marginTop: "50px" }}>КЛАССИЧЕСКИЙ</h3>
                                <h3 style={{ color: "white", fontFamily: 'GraphikTT Arial sans-serif', margin: "20px", textAlign: "center" }}>
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
                                <h3 style={{ color: "#d3bb7e", fontFamily: 'GraphikTT Arial sans-serif', marginTop: "50px" }}>ОДНОМОМЕНТНЫЙ</h3>
                                <h3 style={{ color: "white", fontFamily: 'GraphikTT Arial sans-serif', margin: "50px", textAlign: "center" }}>
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
            <RunText name={text} />

        </>
    );
}

export default Iplant;