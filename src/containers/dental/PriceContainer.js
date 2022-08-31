import React from 'react';
import { Row, Col, Card } from "react-bootstrap"
import Accordion from '../../../components/accrdion/Accordion'
import RunText from '../../../components/runText/RunText'
import imgg from '../../../img/imgg.jpeg'
import './dental.scss'

const data = [
    {
        title: "Консультация",
        text: "Первичный прием  консультация врача-стоматолога — 1 500 сом.",
        text1: "Первичный главного врача клиники Доктора Эльмара — 5 000 сом.",
        ptitile: "Дополнительные исследования (назначает врач):",
        price: "ОПТГ снимок — 1 500 сом.",
        price1: "Цифровые слепки — 10 000 сом.",
        price2: "КТ сегментов — 3 000 сом.",
        price3: "КТ общее — 5 500 сом.",
        price4: "Составление плана лечения— 5 000 сом.",
        price_price: "Полный чекап — 25 000 сом."

    },
    {
        title: "Седация",
        ptitile: "Любую процедуру в нашей клинике мы можем провести под сидацией (во сне).",
        price: "Седация 1 час  —15 000 сом.",
    },
    {
        title: "Брекеты",
        ptitile: "Исправить прикус",
        price: "Лечение и брекет-системы (1-й степени сложности) — 90000 сом",
        price1: "Лечение и брекет-системы (1-й степени сложности) — 180000 сом",
        price2: "Лечение и брекет-системы (1-й степени сложности) — 240000 сом",
        price3: "Металлические брекеты — 110 000 сом.",
        price4: "Керамическая брекет-система — 140 000 сом.",
    },
    {
        title: "Элайнеры",
        ptitile: "Исправить прикус",
        price: "элайнеров (1-я степень сложности) — 240 000 сом.",
        price1: " элайнеров (2-я степень сложности) — 360 000 сом.",
        price2: "элайнеров (3-я степень сложности) — 500 000 сом.",
    },
    {
        title: "Отбеливание",
        ptitile: "Получить белоснежную улыбку",
        price: "Кабинетное отбеливание системой ZOOM 4 — 27 000 сом.",
        price1: " Отбеливание Домашнее Opalescence — 17 000 сом.",
        price2: "Индивидуальные капы для отбеливания — 10 000 сом.",
        price3: "Отбеливание Внутрикоронковое (1 посещение) — 4000 сом.",
    },
    {
        title: "Лечение зубов",
        ptitile: "Вылечить зубы ",
        price: "Комплексная гигиена полости рта — 10 000 сом.",
        price1: " Препарирование кариозной полости — 5 000 сом.",
        price2: "Препарирование кариозной полости — 5 000 сом.",
        price3: "Временная пломба — 2  000 сом.",
        price4: "Первичное эндодонтическое лечение 1-го канального зуба — 10 000 сом.",
        price5: "Первичное эндодонтическое лечение 2-х канального зуба — 15 000 сом.",
        price6: "Первичное эндодонтическое лечение 3-х канального зуба —  20 000 сом.",
        price7: "Распломбировка и перелечивание 1-го канального зуба — 20 000 сом.",
        price8: "Распломбировка и перелечивание 2-х канального зуба — 25 000 сом.",
        price9: "Пародонтологическое лечение — 15 000 сом",
        price10: " Закрытый кюретаж в области одного зуба — 1 500 сом",
        price11: "Авторский витаминный коктейль — 15 000 сом",
        price12: "Аппликация лекарственных препаратов в области одного зуба  — 2 000 сом",
    },
    {
        title: "Удаление зубов",
        price: "Сложное удаление зуба — 25 000 сом.",
    },
]

function PriceContainer(props) {
    return (
        <div className={'priceContainer'}>
            <div className='container_price container'>
                <h1 className='price' style={{color:"white"}}>Прайс</h1>
            </div>

            <div className=' container mt-5'>
                <Row>
                    <Col xs={12} md={6} lg={6}>
                        <div className='justify-content-center text-center' >
                            <img class=" t013__img t-img" src={imgg} imgfield="img" data-tu-max-width="320" data-tu-max-height="320" data-tu-cover="c" alt="" role="presentation">
                            </img>
                            <Card.Title className='text_nav'>Доктор Эльмар</Card.Title>
                            <span className='text_nav' style={{ fontSize: '14px', lineHeight: '18px' }} data-customstyle="yes">Основатель и<br /> главный врач клиники, <br />стоматолог-ортопед</span>
                        </div>
                    </Col>
                    <Col xs={12} lg={6}>
                        <div className='justify-content-center text_nav m-3'>
                            <p >
                                Мы заботимся о своих клиентах, поэтому подготовили для вас два способа фильтрации прайса. Вы можете выбрать задачу, которую хотели бы решить и посмотреть варианты или услугу, если точно знаете, что вам нужно.
                            </p>
                        </div>
                    </Col>
                </Row>
            </div>
            <div className='text-center container clinick col-sm-5 mt-5 p-2'>
                <h2>Услуги клиники</h2>
            </div>
            <div >
                <Accordion name={data} />
            </div>
            <div className='container '>
                <h1 className='h'>
                    Запишитесь на бесплатный чекап полости рта.</h1>
                <h1 className='h mt-2'>
                    Экономия 25 тысяч*.
                </h1>
                <div className='h mt-5'>
                    Оставьте контакты, и мы свяжемся с вами, чтобы
                </div>
                <div className='h mt-2'>
                    подобрать удобное время для записи на консультацию.
                </div>
            </div>
            
            <RunText/>
        </div>
    );
}

export default PriceContainer;