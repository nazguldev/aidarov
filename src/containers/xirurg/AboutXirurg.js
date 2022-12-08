import React, { useEffect } from 'react';
import { Card, Col, Container, Nav, Navbar, NavDropdown, Row,Carousel } from 'react-bootstrap'
import Button1 from '../../Button1';
import './xirurg.scss'
import _Navbar from "../../app/nav/_Navbar"
import Accordions from '../../components/accrdion/Accordions'
import AOS from 'aos';
import Adoctors from './Adoctors';
import Price from './Price';

function AboutXirurg({ setShow }) {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
    const data = [
        {
            title: "Травматология ",
            text: "оперативное лечение переломов костей конечностей любой сложности (с использованием всех видов остеосинтеза); оперативное лечение внутрисуставных переломов крупных и мелких суставов оперативное лечение острых травм мышц, сухожилий и связок верхних и нижних конечностей с применением малоинвазивных технологий; вправление вывихов; оперативное лечение при травмах кисти и стопы"
        },
        {
            title: "Терапевтический стационар",
            text: "Терапевтический стационар открыт для пациентов:  с заболеваниями сердца и сосудов, последствиями инсультов, болезнями эндокринной и периферической нервной системы.  "
        },
        {
            title: "Ведение беременности",
            text: "команда врачей - признанных специалистов в своей области;врач всегда на связи;удобный график визитов к врачу и сдачи анализов: мы подстроимся под вас; собственная лаборатория, имеющая международный сертификат качества; возможность забора крови для проведения неинвазвного пренатального скрининга (НИПТ); результаты анализов, назначения врача, запись к специалисту – всегда под рукой, в вашем смартфоне;возможность при необходимости подключить любых узких специалистов клиники «УГМК-Здоровье»;"
        },
        {
            title: "Медицинский профосмотр",
            text: "Медицинский профосмотр – это востребованная и важная услуга как для сотрудников, так и для работодателя. У работников Вашего предприятия есть возможность посетить врачей основных специальностей, пройти необходимую диагностику и сдать анализы. А это, в свою очередь, позволяет выявить до 90% заболеваний на ранней стадии, своевременно  начать лечение, а знание истинной картины здоровья сотрудников позволяет избежать длительных больничных и потери квалифицированных кадров. "
        },
        {
            title:"Ортопедия",
            text:"Коррекция деформаций конечностей, как после травм, так и вследствие заболеваний (в том числе и врожденных); органосохраняющие (малоинвазивные, артроскопические операции) при заболеваниях и травмах суставов конечностей; малоинвазивные операции при свежих и застарелых повреждениях связок, хрящей и сухожилий;  операции при заболеваниях, травмах и последствиях травм кисти; ортопедические (в том числе и малоинвазивные) операции при деформациях стопы любой сложности; эндопротезирование суставов нижних конечностей."
        },
        {
            title:"Вызов врача на дом",
            text:"Мы заботимся о вашем здоровье – это значит, мы рядом в любой день и любое время – днем и ночью!"
        }
    ]
        
    const feedback_xirurg =[
        {
            name:"Анара",
            text:"Обратилась к доктору МЦ Айдарова с неприятными симптомами. Врач обследовала, взяла необходимые анализы, назначила предварительное решение. На повторной консультации по результатам анализов лечение продолжила, оно помогло. Как уже писали, врач вежливая и тактичная, все очень деликатно, строго по делу, Наталья Алексеевна делает от себя все возможное, даже звонила мне оповестить о результатах согласования моих анализов страховой! Благодарна за лечение. От себя рекомендую!",
        },
        {
            name:"Тимур",
            text:"Выражаю искреннюю, глубокую благодарность своему операционному хирургу и лечащему врачу  за чуткое отношение к моей деликатной проблеме, за внимание и нужные слова, за операцию (которая длилась дольше чем у большинства пациентов), за профессионализм, за советы в послеоперационный период!!!Также, благодарю врачей, медицинских сестёр, администраторов (анализы, врачей и предоперационную подготовку проходила в клинике Айдарова причастных к мероприятиям проводимых с моей персоной.Будьте счастливы, любимы, здоровы!!!Вы - отличная профессиональная медицинская команда!С уважением, Тимур!",
        },
        {
            name:"Жаныбек",
            text:"Обратился к врачу с острой болью. И сразу же назначили эффективное лечение, которое помогло мне избежать госпитализации и привело к выздоровлению. Благодарю хирургам за спокойствие и уверенность в своих действиях, особенно хочется отметить дружественную и легкую атмосферу, а так же уважительное и внимательное отношение к пациенту.",
        },
      
    ]
    return (
        <>
            <div className='container aboutXirurg mt-4'>
            <Navbar bg="dark" expand="lg" variant='dark'>
          <Container>
            <Navbar.Brand href="/"><img style={{ width: '50px', height: '50px', borderRadius: '50%' }} src={'https://images.squarespace-cdn.com/content/v1/5d752f9b79dbbb3fce1ecf1b/1578856941630-IS6RIUSYKXOWHUMG2YBH/Meta_Icons-08.png'} /></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/">О Клинике</Nav.Link>
                {/* <Nav.Link href="/ContactClinick">Контакты</Nav.Link> */}
                <NavDropdown title="Услуги" id="basic-nav-dropdown">
                  <NavDropdown.Item href="/aboutDental">Стоматология</NavDropdown.Item>
                  <NavDropdown.Item href="/AboutGynecology">Гинекология</NavDropdown.Item>
                  <NavDropdown.Item href="/AboutUrologi">Урология
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/AboutXirurg">Хирургия
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/AboutTerapiya">Терапия</NavDropdown.Item>
                  <NavDropdown.Item href="/AboutLaboratory">Лаборатория</NavDropdown.Item>

                </NavDropdown>
              </Nav>
             <Nav>
             <NavDropdown title="Контакты" id="basic-nav-dropdown">
                <NavDropdown.Item href='tel:+996709545487' > +996709545487 </NavDropdown.Item>
                <NavDropdown.Item href='tel:+996779545487' >+996779545487 </NavDropdown.Item>
                <NavDropdown.Item href='tel:+996555545487' >+996555545487 </NavDropdown.Item>
                </NavDropdown>

             </Nav>
             
            
            </Navbar.Collapse>

          </Container>
        </Navbar>
                <Row>
                <Col sm={6} xs={12} md={6} className=" mb-3">
                        <img className='w-100' src='https://deti-euromed.ru/wp-content/uploads/2022/01/8.png' />
                    </Col>
                    <Col sm={6} xs={12} md={6} >
                        <h1 className='pt-5 text-center '>Хирургия</h1>
                        <p className='text_nav   mt-5'> Хирургическое отделение МЦ Айдарова К.А - оснащен всем 
                            необходимым качественным современным оборудованием, 
                            на котором работают высококвалифицированные врачи.<p/>
                            <p> Каждая палата, в нашем центре, подготовлена таким образом, чтобы все пациенты, вне зависимости от
                            возраста могли чувствовать себя в ней максимально комфортно. </p>
                           <p>Современная медицина ставит перед хирургами задачу минимизировать воздействие на организм пациента и добиться того, 
                            чтобы он как можно быстрее вернулся к привычному образу жизни.</p> 
                            <p>В отделении хирургии успешно решаются обе задачи: мы имеем возможность оказывать высокотехнологичную помощь и 
                             проводить операции по самым передовым методикам</p> 
                        </p> 
                        <Col className='mt-3' sm={6}>
                            {/* <Button1 setShow={setShow}/> */}
                            <div className="pb-3 pt-3 mt-2 mb-3 div__a">
                                    <a href={'tel:+996776000000'} style={{ textDecoration: "none" }} className={'p-2 textinfooter2 rounded'}   > Записаться на прием</a>
                                </div>
                        </Col>
                    </Col>

                    
                </Row>
            </div>

            <div className='container'>
                <p className='text_nav mt-5'>
                В частном МЦ Айдарова К.А у вас есть возможность пройти хирургии внешним путем эндоскопии и лапороскопии где лучшие и опытные специалисты своего дела в первую очередь в 100% случаях решаются провести оргонасохраняющую хирургическую вмешательству
                <p>В МЦ Айдарова К.А  возможно пройти все этапы в условиях клиники премиум-класса — с точной диагностикой на цифровых томографах, с высокотехнологичным оборудованием операционных, лечением у опытных врачей.</p> 
               <p>После операции Вы будете находиться в комфортном стационаре госпиталя под круглосуточным наблюдением персонала.</p>  
               <p>При необходимости Вас проконсультируют профильные специалисты других отделений. А в период реабилитации Вы сможете наблюдаться у наших специалистов амбулаторно.</p>
                </p>
                <h1 className='text-center mt-5'>НАПРАВЛЕНИЯ РАБОТЫ</h1>
                <Accordions name={data} />
                <div className='mt-5'>
                    <Row>
                        <Col xs={12} md={4} >
                            <img data-aos="zoom-in" className='pt-3 h-100 w-100' src='https://med122.com/news/1/2867775.jpg' alt='' />
                        </Col>
                        <Col xs={12} md={4} >
                            <img data-aos="zoom-in" className='pt-3 h-100 w-100' src='https://thumbs.dreamstime.com/b/%D1%85%D0%B8%D1%80%D1%83%D1%80%D0%B3%D0%B8%D1%8F-11-7465323.jpg' alt='' />
                        </Col>
                        <Col xs={12} md={4}>
                            <img data-aos="zoom-in" className=' pt-3 h-100 w-100' src='https://www.anadolumedicalcenter.ru/wp-content/uploads/2020/12/hirurgiya-golovy.jpg' alt='' />
                        </Col>
                    </Row>
                </div>
                <Row className='mt-5'>
                    <Col xs={12} md={6} lg={6}>
                        <div data-aos="zoom-in" className='justify-content-evenly mt-5 text-center' >
                            <img class=" t013__img t-img" src={'https://www.cchp.ru/upload/iblock/60f/60f75d25040a7b4b1cb0e484e4e7c322.jpg'} imgfield="img" data-tu-max-width="320" data-tu-max-height="320" data-tu-cover="c" alt="" role="presentation">
                            </img>
                            <Card.Title className='text_nav'>Доктор Айдаров</Card.Title>
                            <h6 className='text_nav' data-customstyle="yes">Основатель и<br /> главный врач хирургии</h6>
                        </div>
                    </Col>
                    <Col xs={12} md={6} lg={6}>
                        <div data-aos="zoom-in-up" className='container justify-content-evenly text_nav '>
                            <div  className=''>
                            Центр хирургии оказывает плановую медицинскую помощь. Оперативное лечение осуществляется в соответствии с современными тенденциями развития хирургии. При этом используются новейшие операционные методики: малоинвазивные (малотравматичные) оперативные вмешательства с коротким периодом реабилитации, современный шовный материал, новейшее эндоскопическое оборудование. Для послеоперационной реабилитации широко применяются новые гипоаллергенные перевязочные средства, одноразовые инструменты, современные фармпрепараты.
                            </div>
                            <div className='mt-4'> 
                            Коллектив отделения постоянно трудится над освоением и внедрением новейших методов диагностики и лечения своих пациентов.  <br/> Имеется опыт совместного проведения операций, мастер-классов. В сложных случаях проводятся консультации больных посредством on-line консультаций.
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
            <Adoctors />
            <Price />
            {/* <RunText /> */}
            <div className='container'>

           
            <h1 className='text-center mt-5'> ПРЕИМУЩЕСТВА ОТДЕЛЕНИИ</h1>
            <Row className="mt-5">
                        <Col xs={12} md={4}  >
                            <h3 data-aos="fade-up"
                                data-aos-anchor-placement="top-bottom" class="tn-atom text-center  p-2 m-2">01</h3>
                                
                            <p style={{ color: "white" }} className="text-center p-2 m-2">БОЛЕЕ 100 СПЕЦИАЛИСТОВ
                            </p>

                        </Col>
                        <Col xs={12} md={4} >
                            <h3 data-aos="fade-up"
                                data-aos-anchor-placement="top-bottom" class="tn-atom text-center  p-2 m-2">02</h3>
                            <p style={{ color: "white" }} className="text-center p-2 m-2">БОЛЕЕ 35 000 ДОВОЛЬНЫХ КЛИЕНТОВ </p>
                        </Col>
                        <Col xs={12} md={4} >
                            <h3 data-aos="fade-up"
                                data-aos-anchor-placement="top-bottom" class="tn-atom text-center  p-2 m-2">03</h3>
                            <p style={{ color: "white" }} className="text-center p-2 m-2">СТАЦИОНАР НА 15 КОЙКО-МЕСТ

                            </p>
                        </Col>
                        <Col xs={12} md={4} >
                            <h3 data-aos="fade-up"
                                data-aos-anchor-placement="top-bottom" class="tn-atom text-center  p-2 m-2">04</h3>
                            <p style={{ color: "white" }} className="text-center p-2 m-2">БОЛЕЕ 30 СПЕЦИАЛЬНОСТЕЙ</p>

                        </Col>
                        <Col xs={12} md={4} >
                            <h3 data-aos="fade-up"
                                data-aos-anchor-placement="top-bottom" class="tn-atom text-center  p-2 m-2">05</h3>
                            <p style={{ color: "white" }} className="text-center p-2 m-2">
                                Современные оборудования</p>
                        </Col>
                        <Col xs={12} md={4} >
                            <h3 data-aos="fade-up"
                                data-aos-anchor-placement="top-bottom" class="tn-atom text-center  p-2 m-2">06  </h3>
                            <p style={{ color: "white" }} className="text-center p-2 m-2">
                            Высококвалифицированные специалисты</p>
                        </Col>

                    </Row>
                    <Row className="justify-content-center mt-5">
                <Col sm={10} md={8} xs={10}>
                <h1 className='text-center pt-5 pb-5'>Отзывы</h1>
                <Carousel >
                        {
                            feedback_xirurg.map(e => {
                                return (
                                    <Carousel.Item >
                                        <div className='feedback_xirurg'>
                                        <h4>{e.name}</h4>
                                       <p>
                                           {e.text}
                                       </p>
                                        </div>
                                           
                                        
                                    </Carousel.Item>
                                )
                            })
                        }
                    </Carousel>
                    </Col>
                    </Row>
                    </div>
        </>
    );
}

export default AboutXirurg;