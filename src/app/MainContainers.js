import React, { useState } from 'react';
import { Card, Carousel, Col, Row, Table } from 'react-bootstrap';
import _Navbar from './nav/_Navbar'
import imgg from '../img.aidarov/imgg.png'
import './MainContainer.scss'
import RunText from '../components/runText/RunText';
import { useEffect } from 'react';
import AOS from "aos"
import Accordions from '../components/accrdion/Accordions';
import price1 from './PriceMain'
import stiff1 from '../containers/dental/dental.img/stiff1.jpg'
import ftiff2 from '../containers/dental/dental.img/ftiff2.jpg'
import foto from '../containers/dental/dental.img/foto.jpg'
import stom from '../logoImage/stom.png'
import gin from '../logoImage/gin.png'
import ur from '../logoImage/ur.png'
import lor from '../logoImage/lor.png'
import xir from '../logoImage/xir.png'
import labs from '../logoImage/labs.png'
import ok from '../logoImage/ok.png'
import ter from '../logoImage/ter.png'
function MainContainers({ setShow }) {
    const t = price1
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
    const carusel = [
        {
            img: "https://proforientator.ru/upload/img/publications/stati/vrach1.jpg",
            title: "First slide label",
            text: "Nulla vitae elit libero, a pharetra augue mollis interdum."

        },
        {
            img: "https://proforientator.ru/upload/img/publications/stati/vrach1.jpg",
            title: "First slide label",
            text: "Nulla vitae elit libero, a pharetra augue mollis interdum."

        },
        {
            img: "https://kharkov.comments.ua/img/publications/3BOjm9PtNzQQehS8RkVuEgu7zxihMNLV.jpg",
            title: "First slide label",
            text: "Nulla vitae elit libero, a pharetra augue mollis interdum."

        },




    ]
    const info = [
        {
            name: "Стоматология",
            text: "Заболевания зубов являются наиболее распространёнными болезнями человека. По статистическим данным, более 90 % населения земного шара страдает болезнями зубов. Столь значительное распространение этого недуга ставит перед органами здравоохранения задачи, направленные на разработку мер профилактики возникновения болезней зубов, совершенствование методов лечения, изучение причин, порождающих эти заболевания. К болезням зуба относятся кариес, пульпит, периодонтит. Кроме того, в клинике встречаются проявления различных форм недостаточности эмали и дентина (гипоплазия, клиновидный дефект, стирание зубов), которые имеют совершенно иную этиологию и клинику”"
        },
        {
            name: "Хирургия",
            text: "Хирургия является одной из самых древних отраслей медицины. Старейший хирургический метод, в отношении которого есть доказательства, - это трепанация, в котором отверстие сверлили или выскребали в черепе, чем вскрывали твёрдую мозговую оболочку в целях лечения проблем со здоровьем, связанных с внутричерепным давлением и другими заболеваниями[2].”"
        }, {
            name: "Терапия",
            text: "Терапевтические подходы: Этиотропная терапия направлена на устранение причины заболевания (например, антибактериальная терапия при инфекционных болезнях). Патогенетическая терапия направлена на механизмы развития заболевания. Она применяется при невозможности этиотропной терапии (например, заместительная терапия инсулином при сахарном диабете в связи с недостаточной продукцией этого гормона поджелудочной железой и невозможностью, на современном уровне развития медицины, восстановить эту функцию). Симптоматическая (паллиативная) терапия применяется для устранения отдельных симптомов заболевания (например, применение анальгетиков при боли, жаропонижающих препаратов при «высокой температуре» и др.) Она может применяться в дополнение к этиотропной и патогенетической терапии. Симптоматическая терапия при невозможности радикального излечения (терминальная стадия онкологического заболевания и др.) осуществляется в рамках спектра лечебно-социальных мероприятий, называемого паллиативной помощью.”"

        }, {
            name: "Лаборатория",
            text: "Лаборатория (средн. лат. laboratorium, от laboro «работаю») — оборудованное помещение, приспособленное для научных опытов и исследований: химических, физических, технических, механических, физиологических, психологических и других. Часто лаборатории работают при высших учебных заведениях, заводах, аптеках и других организациях. Опытно-промышленные участки, находящиеся при металлургическом, обогатительном и ином производстве, не аккредитованные на проведение испытаний продукции не относятся к разряду лабораторий.”"
        },
        {
            name: "Гинекология",
            text: "Гинеколо́гия — отрасль медицины, изучающая заболевания, характерные только для организма женщины, прежде всего — заболевания женской репродуктивной системы[2].Врач-гинеколог занимается наблюдением состояния женских половых органов и при наличии заболеваний их лечением в динамике, профилактикой возможных осложнений.Врач-акушер наблюдает в динамике за развитием беременности предпочтительно с малых сроков, следит за состоянием внутренних органов беременной, направляет в стационар на родоразрешение. В последнее время в российском здравоохранении введено ограничение на работу в родильных домах врачей женских консультаций. То есть российский акушер — врач родильного дома, наблюдающий за здоровьем беременных, рожениц, родильниц.”"
        }, {
            name: "Урология",
            text: "Уроло́гия — область клинической медицины, изучающая этиологию, патогенез, диагностику заболеваний органов мочевой системы, половой системы и других патологических процессов в забрюшинном пространстве и разрабатывающая методы их лечения и профилактики[1].Урология — хирургическая дисциплина, ветвь хирургии. Поэтому, в отличие от нефрологии, урология занимается в основном вопросами хирургического лечения заболеваний вышеперечисленных органов и систем.”"
        },
    ]
    const accordion2 = [
        {
            key: 0,
            title: 'Как вы относитесь к остеопатам?',
            text: 'Да. Самый Все, что делается руками, должно быть красиво и осмысленно. Или хотя бы приносить удовольствие. С последним условием остеопаты, похоже, справляются. В Кыргызстане остеопатия получила статус вида медицинской деятельности, в то время как в США и многих других странах — это парамедицинские оздоровительные услуги. Остеопатия как направление весьма неоднородна. Она может включать в себя и вполне действенные методы, такие как массаж триггерных точек при болевых синдромах, но по большей части содержит полумистические ненаучные представления о неправильном положении костей черепа и т. д. В целом остеопатия — ненаучное направление, включающее крупинки полезных рукодельных методов. В научной медицине ее функцию выполняет физическая терапия (не путать с постсоветской физиотерапией!).',
        },
        {
            key: 1,
            title: 'Хотелось бы больше узнать про статины. Клеточный ли это яд?',
            text: 'Возможно, они клеточный яд. Вот варфарин абсолютно точно — крысиный яд. Им много лет травили крыс, прежде чем оказалось, что он спасает от тромбозов. Статины можно как угодно называть, но эти препараты многим людям позволяют жить дольше и жить не инвалидами.',
        },
        {
            key: 2,
            title: 'Санаторное лечение - плацебо?',
            text: 'Да, конечно. Но, к сожалению иногда и во вред. Поскольку в санаториях любят активно полечить с помощью разнообразных методов.',
        },
        {
            key: 3,
            title: 'Всегда ли нужно лечить хеликобактер?',
            text: 'Консенсус Маастрихт V говорит, когда точно нужно: при атрофическом гастрите, тотальном активном гастрите, при метаплазии и дисплазии, при полипозе, при язве, при регулярном употреблении обезболивающих, при железодефиците, при отягощенной наследственности по раку желудка. Этот список не исчерпывающий и постоянно пополняется.',
        },
        {
            key: 4,
            title: 'Если при гастроскопии взяли анализ и нашли хеликобактер - это достоверно? Надо ли его лечить/избавляться?',
            text: 'Если тест быстрый, готов сразу после гастроскопии — в России он почти всегда недостоверен. Цитологический тест, который готов через несколько дней — достоверно выявляет хеликобактер, положительному тесту можно верить, но тест часто бывает ложноотрицательным.',
        },

    ]
    const feedback = [
        {     
            name:"Айжан",      
            text: "Высочайший уровень, самые прогрессивные технологии нацеленные на сохранение жизни и здоровья матери и ребёнка. Применение современных методов лечения и профилактики. Чуткие и отзывчивые люди. Врачи с большой буквы. Айдаров Бекмамат  Камалдинович, Айдарова Гулнара и весь персонал Клиники заслуживает самого глубокого уважения и доверия. Спасибо большое за Ваш вклад в жизнь каждого ребёнка и нашего сына."
        },
        {      
            name:"Динара",    
            text:"Всем привет.  Я хочу поделиться отзывом о своих родах в клинике профессора  Айдарова.Я прям  очень благодарна каждому человеку принимавшему участие в появлении на свет моей девочки. Все проявили такую заботу, такое внимание… просто до слез.Это были мои вторые роды. Первую дочь я рожала в государственном роддоме 2.5 года назад.  Тут я могу отметить комфорт в палатах, конечно.  Врачи очень внимательные! Такую заботу и мне и малышу оказывали. На каждый плач малышки, заходили и помогали успокоить. Брали на руки и помогали животик массажировать и днём и ночью!Я вам желаю успехов и только процветания! Спасибо вам большое и долгой жизни всем кто помог мне!"
        },
        {
            name:"Акылбек",
            text:"Хочу выразить огромную благодарность всему коллективу, сотрудникам клиники Айдарова . Здесь я прошла оперативное лечение и встретилась с очень ответственными, чуткими и внимательными медицинскими работниками, настоящими профессионалами.   Медсестры все просто замечательные, знающие свое дело. Ведь от такой заботливой, комфортной обстановки вокруг пациента и зависит скорейшее выздоровление. Особая благодарность моему лечащему врачу Гульнаре Айдарове за успешно проведенную операцию, за грамотное ведение послеоперационного лечения и вообще за ее высокие человеческие качества. Спасибо Гульнара Айдарова и низкий Вам поклон."
        },
        {
            name:"Байгазы",
            text:"Консультации, обследования, послеоперационное наблюдение - все на 100%. Отличные доктора, всем рекомендую! Причины болезни, с которой обратился, полностью устранены."
        },
        {
            name:"Актилек",
            text:"Выражаю огромную благодарность врачу Чынгызу Айдарову за Ваш врачебный талант, труд, внимательность и чуткость, умение найти подход к пациенту. Считаю, мне очень повезло, что именно ВЫ оказались рядом со мной в трудную для меня минуту жизни."
        },
        {
            name:"Светлана",
            text:"Обратилась на приём с очень больным глазом (краснота, боль сильная). Доктор тщательно осмотрела, назначила лечение. На следующее утро боли не было, все прошло через 4 дня. Понравилось отношение к пациенту.",
        },
        {
            name:"Марина",
            text:"Очень понравился под­ход клиники, проводить прием с фотография­ми и подробным разъя­снением «до и после». Все прошло отлично.",
        },
        {
            name:"Дастан",
            text:"В клинику «МЦ Айдаров» пришла 3 года назад на консультацию по ортодонтическому лечению. Я очень довольна тем, что осталась в этой клинике.",
        }
    ]
    const text = [
        {
            texts: "Клининика Айдарова",
            t: "/"
        },
        {
            texts: "Стоматология",
            t: "/"
        }, {
            texts: "Хирургия",
            t: "/"
        }, {
            texts: "Лаборатория",
            t: "/"
        }, {
            texts: "Гинекология",
            t: "/"
        }, {
            texts: "Урология",
            t: "/"
        }, {
            texts: "Клининика Айдарова",
            t: "/"
        },
        {
            texts: "Стоматология",
            t: "/"
        }, {
            texts: "Хирургия",
            t: "/"
        }, {
            texts: "Лаборатория",
            t: "/"
        }, {
            texts: "Гинекология",
            t: "/"
        }, {
            texts: "Урология",
            t: "/"
        }, {
            texts: "Лор",
            t: "/"
        }, {
            texts: "Окулист",
            t: "/"
        },
    ]
    return (
        <>

            <div className='mainContainers'>
                <_Navbar />
                <div className='header_banner  w-100 h-100 '>
                    <div className='container'>
                        <h1 className='text-center pt-3'>Добро пожаловать </h1>
                        <Col sm={8} md={6} lg={6}>
                            <p className=' h5 mt-3 mb-3' >
                                Оснаватель  ОсОО Медицинского центра Айдарова Камалдина  заслуженный врач акушер-гинеколог и директор МЦ Айдаров Камалдин Абдурахманович.<p />
                                <p> Родился 16.03.1964году в ЖалалАбадской области р Базар-Коргон село Карача. В 1988году закончил КГМА имени Ахунбаева в г Бишкек после прошол ординатуру в г Ош родильном стационаре Ошской териториальной городской больницы. Там же работал с 1989года по 2003год после открыл свою первую частную клинику возле ТГБ№2.</p>
                                <p>Работая не покладая рук, проведя своевременное диагностирование и лечение гинекологических и репродуктивных заболевании с уверенностью может заявить о сохранении супружеской жизни более 3000 семейных пар. Клиника начала расширяться, в 2019году  переехали по адресу г.Ош ул Масалиева 73 и стал многопрофильным ОсОО Медицинским центром Айдарова Камалдина где работают лучшие специалисты своего дела.</p>
                            </p>
                        </Col>
                        <Col sm={8} md={6} lg={6}>
                            <p className='mt-5 mb-5 pb-0 h5'>
                                В ОсОО МЦ Айдарова К.А есть широкий спектр медицинских услуг:
                                Хирургия,
                                Урология,
                                Акушерство и Гинекология,
                                Терапия,
                                Кардиология,
                                Стоматология,
                                Неврология
                                <div className="pb-3 pt-3 mt-5 mb-5 div__a">
                                    <a href={'tel:+996776000000'} style={{ textDecoration: "none" }} className={'p-2 textinfooter2 rounded'}> Записаться на прием</a>
                                </div>
                            </p>
                        </Col>
                    </div>
                </div>
                <div className='container mt-2'>
                    <h1 className='text-center pt-3 pb-3'>УСЛУГИ  КЛИНИКИ:</h1>
                    <Row >
                        <Col sm={6} xs={12} md={4}>
                            <a href='/aboutDental'>
                                <div style={{ marginTop: "10px", backgroundColor: "white" }}>
                                    <Card.Body>

                                        <Card.Title className='text-center pb-3'>Стоматология</Card.Title>
                                        <Card.Img className='images_item' variant="top" src={stom} />
                                    </Card.Body>
                                </div>
                            </a>
                        </Col>
                        <Col sm={6} xs={12} md={4} >
                            <a href='/AboutXirurg'>
                                <div style={{ marginTop: "10px", backgroundColor: "white" }}>
                                    <Card.Body>
                                        <Card.Title className='text-center pb-3'>Хирургия</Card.Title>
                                        <Card.Img className=' images_item ' variant="top" src={xir} />

                                    </Card.Body>
                                </div>
                            </a>
                        </Col>
                        <Col sm={6} xs={12} md={4} >
                            <a href='/AboutTerapiya'>
                                <div style={{ marginTop: "10px", backgroundColor: "white" }}>
                                    <Card.Body>
                                        <Card.Title className='text-center pb-3'>Терапия</Card.Title>
                                        <Card.Img className='images_item' variant="top" src={ter} />

                                    </Card.Body>
                                </div>
                            </a>
                        </Col>

                        <Col sm={6} xs={12} md={4} className="text-center ">
                            <a href='/AboutLaboratory'>
                                <div style={{ marginTop: "10px", backgroundColor: "white" }}>
                                    <Card.Title className='text-center pb-3'>Лаборатория</Card.Title>
                                    <Card.Img className='images_item' variant="top" src={labs} />

                                </div>
                            </a>
                        </Col>
                        <Col sm={6} xs={12} md={4} >
                            <a href='/AboutGynecology'>
                                <div style={{ marginTop: "10px", backgroundColor: "white" }}>
                                    <Card.Title className='text-center pb-3'>Гинекология
                                    </Card.Title>
                                    <Card.Img className=' images_item ' variant="top" src={gin} />
                                </div>
                            </a>
                        </Col>
                        <Col sm={6} xs={12} md={4} >
                            <a href='/AboutUrologi'>
                                <div style={{ marginTop: "10px", backgroundColor: "white" }}>
                                    <Card.Title className='text-center pb-3'>Урология
                                    </Card.Title>
                                    <Card.Img className=' images_item ' variant="top" src={ur} />
                                </div>
                            </a>
                        </Col>
                        <Col sm={6} xs={12} md={4} >
                            <a href='/AboutLor'>
                                <div style={{ marginTop: "10px", backgroundColor: "white" }}>
                                    <Card.Title className='text-center pb-3'>Лор
                                    </Card.Title>
                                    <Card.Img className=' images_item ' variant="top" src={lor} />
                                </div>
                            </a>
                        </Col>
                        <Col sm={6} xs={12} md={4} >
                            <a href='/Okilist'>
                                <div style={{ marginTop: "10px", backgroundColor: "white" }}>
                                    <Card.Title className='text-center pb-3'>Окулист
                                    </Card.Title>
                                    <Card.Img className=' images_item ' variant="top" src={ok} />
                                </div>
                            </a>
                        </Col>   </Row>
                    <Col>
                        <Table striped bordered hover variant='dark' >
                            <thead>
                                <tr>
                                    <th >№</th>
                                    <th>Прейскурант </th>
                                    <th>Стоимость услуг</th>
                                </tr>
                            </thead>
                            <tbody>
                                {t.map((b) => {
                                    return (
                                        <tr>
                                            <td>{b.id}</td>
                                            <td>{b.title}</td>
                                            <td>{b.price}</td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </Table>
                    </Col>

                    <Row className="mt-5">
                        <Col xs={12} md={6} lg={6}>
                            <div className='justify-content-evenly text-center  ' >
                                <img class=" t013__img t-img" src={imgg} imgfield="img" data-tu-max-width="320" data-tu-max-height="320" data-tu-cover="c" alt="" role="presentation">
                                </img>
                                <Card.Title className='text_nav'>Доктор К.А
                                    Айдаров</Card.Title>
                                <span className='text_nav' style={{ fontSize: '14px', lineHeight: '18px' }} data-customstyle="yes">Основатель и<br /> главный врач клиники, </span>
                            </div>
                        </Col>
                        <Col xs={12} md={6} lg={6}>
                            <div className='justify-content-evenly text_nav m-3'>
                                <div >
                                    <p> Оснаватель  ОсОО Медицинского центра Айдарова Камалдина  заслуженный врач акушер-гинеколог и директор МЦ Айдаров Камалдин Абдурахманович.</p>
                                    <p>Родился 16.03.1964году в ЖалалАбадской области р Базар-Коргон село Карача. В 1988году закончил КГМА имени Ахунбаева в г Бишкек после прошол ординатуру в г Ош родильном стационаре Ошской териториальной городской больницы. Там же работал с 1989года по 2003год после открыл свою первую частную клинику возле ТГБ№2.</p>


                                </div>

                                <div className='mt-3'>
                                    {/* <Button1 setShow={setShow} /> */}
                                    <div className="pb-3 pt-3 mt-2 mb-3 div__a">
                                        <a href={'tel:+996776000000'} style={{ textDecoration: "none" }} className={'p-2 textinfooter2 rounded'}   > Записаться на прием</a>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>


                <div className='container'>
                    <h1 className='text-center pt-5 pb-5'>Наши Врачи</h1>
                    <Row className='text-center'>
                        <Col sm={6} xs={12} md={4} >
                        <Card.Img variant="top" className='mt-3' style={{width:"100%"}} src={stiff1} />
                        </Col>
                        <Col sm={6} xs={12} md={4} >
                        <Card.Img variant="top" className='mt-3' style={{width:"100%"}} src={ftiff2} />
                        </Col> <Col sm={6} xs={12} md={4} >
                        <Card.Img variant="top" className='mt-3' style={{width:"100%"}} src={foto} />
                        </Col>
                    </Row>
                    <Row className="mt-5">
                        <Col xs={12} md={4}  >
                            <h3 data-aos="fade-up"
                                data-aos-anchor-placement="top-bottom" className="tn-atom text-center  p-2 ">01</h3>
                            <p style={{ color: "white" }} className="text-center p-2 m-2">Стоматология
                            </p>
                        </Col>
                        <Col xs={12} md={4} >
                            <h3 data-aos="fade-up"
                                data-aos-anchor-placement="top-bottom" class="tn-atom text-center  p-2 ">02</h3>
                            <p style={{ color: "white" }} className="text-center p-2 m-2">Хирургия </p>
                        </Col>
                        <Col xs={12} md={4} >
                            <h3 data-aos="fade-up"
                                data-aos-anchor-placement="top-bottom" class="tn-atom text-center  p-2 ">03</h3>
                            <p style={{ color: "white" }} className="text-center p-2 m-2">Терапия

                            </p>
                        </Col>
                        <Col xs={12} md={4} >
                            <h3 data-aos="fade-up"
                                data-aos-anchor-placement="top-bottom" class="tn-atom text-center  p-2 ">04</h3>
                            <p style={{ color: "white" }} className="text-center p-2 m-2">Лаборатория</p>

                        </Col>
                        <Col xs={12} md={4} >
                            <h3 data-aos="fade-up"
                                data-aos-anchor-placement="top-bottom" class="tn-atom text-center  p-2 ">05</h3>
                            <p style={{ color: "white" }} className="text-center p-2 m-2">
                                Гинекология</p>
                        </Col>
                        <Col xs={12} md={4} >
                            <h3 data-aos="fade-up"
                                data-aos-anchor-placement="top-bottom" class="tn-atom text-center  p-2 ">06  </h3>
                            <p style={{ color: "white" }} className="text-center p-2 m-2">
                                Урология</p>
                        </Col>
                        <Col xs={12} md={4} >
                            <h3 data-aos="fade-up"
                                data-aos-anchor-placement="top-bottom" class="tn-atom text-center  p-2 ">06  </h3>
                            <p style={{ color: "white" }} className="text-center p-2 m-2">Лор
                            </p>
                        </Col> <Col xs={12} md={4} >
                            <h3 data-aos="fade-up"
                                data-aos-anchor-placement="top-bottom" class="tn-atom text-center  p-2 ">07  </h3>
                            <p style={{ color: "white" }} className="text-center p-2 m-2">Окулист
                            </p>
                        </Col>

                    </Row>
                    <div className='text-center'>
                        <RunText name={text} />
                    </div>
                    <Row className="justify-content-center mt-5">
                        <Col md={8} xs={10}>
                            <h1 className='mb-5'>
                                Часто задаваемые вопросы
                            </h1>
                        </Col>
                        <Col md={10} xs={10}  >
                            <Accordions name={accordion2} />
                        </Col>
                        <Col sm={10} md={8} xs={10}>
                            <h1 className='text-center pt-5 pb-5'>”
                                Добрые слова от наших пациентов</h1>
                            <Carousel >
                                { feedback.map(e => {
                                    return (
                                        <Carousel.Item >
                                            <div className='feedback_div'>
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
                    <RunText name={text}/>
                </div>
            </div>
        </>
    );
}
export default MainContainers;