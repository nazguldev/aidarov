import React, { useEffect } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import RunText from '../../../components/runText/RunText';
import AOS from 'aos'
import AutoVideo from '../../../components/Vidoe/AutoVideo';
import StuffContainer from './StuffContainer';
import imgg from '../../../img.aidarov/imgg.jpeg'
import './Appbar.scss'
import Button1 from '../../../Button1';
import DentalNavbar from '../dentalAppbar/DentalNavbar'



function Vinery({setShow}) {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
    const text= [
        { 
         texts:'ТЕСТ ДРАЙВ УЛЫБКИ',
         t:'/'
     },  { 
         texts:'ИСПРАВЛЕНИЕ ПРИКУСА',
         t:'/'
     },  { 
         texts:'ГАРАНТИЯ 25 ЛЕТ',
         t:'/'
     },  { 
         texts:'ГАРАНТИЯ 25 ЛЕТ',
         t:'/'
     },  { 
         texts:' АВТОРСКИЕ ВИНИРЫ',
         t:'/'
     },  { 
         texts:'ЛЕЧЕНИЕ ВО СНЕ',
         t:'/'
     },  { 
         texts:' БЕЗ БОЛИ',
         t:'/'
     }, { 
         texts:'ТЕСТ ДРАЙВ УЛЫБКИ',
         t:'/'
     },  { 
         texts:'ИСПРАВЛЕНИЕ ПРИКУСА',
         t:'/'
     },  { 
         texts:'ГАРАНТИЯ 25 ЛЕТ',
         t:'/'
     },  { 
         texts:'ГАРАНТИЯ 25 ЛЕТ',
         t:'/'
     },  { 
         texts:' АВТОРСКИЕ ВИНИРЫ',
         t:'/'
     },  { 
         texts:'ЛЕЧЕНИЕ ВО СНЕ',
         t:'/'
     },  { 
         texts:' БЕЗ БОЛИ',
         t:'/'
     }, 
     
     ]  
    return (
        <div className="container">
            <DentalNavbar/>
            <Row>

                <h1 className='mt-5'>
                    Получите улыбку как у звёзд благодаря<br/> сверхтонким винирам от доктора<br/> Айдарова
                </h1>
                <Col md={6} >
                    <h2 style={{ color: "white", marginTop: "40px" }} >
                        С помощью передовых методик создаём белоснежную улыбку, которой хочется делиться с окружающими
                    </h2>
                    <Col sm={6}>
                   <Button1 setShow={setShow}/>
                    </Col>
                </Col>
                <Col className='mt-5'>
                    <AutoVideo />
                </Col>
            </Row>
            <RunText name={text}/>
            <div className="container">

                
            </div>
            <Row>
                <Col xs={12} md={6} lg={6} className='mt-5'>
                    <Card.Img className="h-100 w-100" src='https://thumb.tildacdn.com/tild6663-6334-4062-b764-356234363039/-/format/webp/diagnostika-min.jpg'>
                    </Card.Img>
                </Col>
                <Col xs={12} md={6} lg={6}>
                    <h2 style={{ color: "#d3bb7e", marginTop:"100px",fontFamily: 'GraphikTT Arial sans-serif', }}>
                        Любое правильное ортодонтическое лечение (исправление прикуса, имплантация зубов или виниры) начинается с полной диагностики текущего состояния пациента, — чекапа.
                    </h2>
                    <Card.Text style={{ color: "white", fontFamily: 'GraphikTT Arial sans-serif', marginTop: "5px" }}>
                        В нашей клинике чекап не растягивается на несколько приемов, его можно пройти всего за 40-60 минут
                    </Card.Text>
                </Col>
            </Row>

           
           
            <div className="container">
                <h1 style={{ color: "white",  fontFamily: 'GraphikTT Arial sans-serif',marginTop:"50px" }}>
                    Получите пошаговый план к здоровой и красивой улыбке на консультации
                </h1>
                <Row>
              
                <Col md={6} >
                    <Card.Title style={{ color: "#d3bb7e", fontFamily: 'GraphikTT Arial sans-serif',marginTop:"150px" }}>
                    В стоматологической клинике «Клиника Айдарова» проводится первичная консультация для оценки состояния зубов и дёсен с помощью сверхточного рентгеновского аппарата Sirona ORTHOPHOS XG, который обеспечивает высокое качество снимков при минимальной дозе облучения.
                    </Card.Title>
                    <Card.Title style={{ color: "white", fontFamily: 'GraphikTT Arial sans-serif', marginTop: "50px" }}>
                    С его помощью изготавливаются 2D-, 3D- и ОПТГ- (панорамные) снимки, наличие которых обязательно для постановки правильного диагноза и выбора метода лечения.
                    </Card.Title>
                    <Col sm={6} className="mt-4">
                  <Button1 setShow={setShow}/>  
                    </Col>
                </Col> 
                <Col  sm={6} xs={12} md={4}   className='mt-5'>
                    <Card.Img className="" src='https://static.tildacdn.com/tild3765-3739-4430-a535-323165376139/IMG_3201.JPG'>
                    </Card.Img>

                </Col>
            </Row>
            </div>
        </div>
    );
}

export default Vinery;