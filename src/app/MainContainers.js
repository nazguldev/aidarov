import React from 'react';
import { Card, Carousel, Col, Row } from 'react-bootstrap';
import Button1 from '../Button1';
import AutoVideo from '../components/Vidoe/AutoVideo';
import _Navbar from './nav/_Navbar'
import imgg from '../img.aidarov/imgg.jpeg'
import './MainContainer.scss'
import RunText from '../components/runText/RunText';
import { useEffect } from 'react';
import AOS from "aos"
import Accordions from '../components/accrdion/Accordions';
import patient1 from '../containers/dental/Image/patient1.jpg'
import patient2 from '../containers/dental/Image/patient2.jpg'
import patient5 from '../containers/dental/Image/patient5.jpg'

function MainContainers({ setShow }) {
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
            img: `${patient1}`,
            text: ' «Я ходил в разные клиники, и мне всё время всё не нравилось. Всегда вырывали зубы, было больно, я потом ходил мучился.  И я как-то попал в клинику доктора Эльмара, и тут всё было как по волшебству.  Пришёл, у меня была дикая зубная боль, сажусь к доктору на кресло, проходит 5 минут, и я пишу доктору (говорить-то я не могу):  „Можно уже говорить?“. А он такой: „А я уже всё тебе сделал“. Невероятно просто! Здесь происходит реальная магия, прямо так, как делаю я.  Приходите лечиться к доктору Эльмару!» «Я ходил в разные клиники, и мне всё время всё не нравилось.Всегда вырывали зубы, было больно, я потом ходил мучился. И я как-то попал в клинику доктора Эльмара, и тут всё было как по волшебству.Пришёл, у меня была дикая зубная боль, сажусь к доктору на кресло, проходит 5 минут, и я пишу доктору (говорить-то я не могу): „Можно уже говорить?“. А он такой: „А я уже всё тебе сделал“. Невероятно просто! Здесь происходит реальная магия, прямо так, как делаю я. Приходите лечиться к доктору Эльмару!»«Я ходил в разные клиники, и мне всё время всё не нравилось.Всегда вырывали зубы, было больно, я потом ходил мучился. И я как-то попал в клинику доктора Эльмара, и тут всё было как по волшебству.Пришёл, у меня была дикая зубная боль, сажусь к доктору на кресло, проходит 5 минут, и я пишу доктору (говорить-то я не могу): „Можно уже говорить?“. А он такой: „А я уже всё тебе сделал“. Невероятно просто! Здесь происходит реальная магия, прямо так, как делаю я. Приходите лечиться к доктору Эльмару!»',
        },
        {
            img: `${patient2}`,
            text: '«Я ходил в разные клиники, и мне всё время всё не нравилось.Всегда вырывали зубы, было больно, я потом ходил мучился.  И я как-то попал в клинику доктора Эльмара, и тут всё было как по волшебству.Пришёл, у меня была дикая зубная боль, сажусь к доктору на кресло, проходит 5 минут, и я пишу доктору (говорить-то я не могу):  „Можно уже говорить?“. А он такой: „А я уже всё тебе сделал“. Невероятно просто! Здесь происходит реальная магия, прямо так, как делаю я.  Приходите лечиться к доктору Эльмару!» «Я ходил в разные клиники, и мне всё время всё не нравилось.Всегда вырывали зубы, было больно, я потом ходил мучился. И я как-то попал в клинику доктора Эльмара, и тут всё было как по волшебству.Пришёл, у меня была дикая зубная боль, сажусь к доктору на кресло, проходит 5 минут, и я пишу доктору (говорить-то я не могу): „Можно уже говорить?“. А он такой: „А я уже всё тебе сделал“. Невероятно просто! Здесь происходит реальная магия, прямо так, как делаю я. Приходите лечиться к доктору Эльмару!»«Я ходил в разные клиники, и мне всё время всё не нравилось.Всегда вырывали зубы, было больно, я потом ходил мучился. И я как-то попал в клинику доктора Эльмара, и тут всё было как по волшебству.Пришёл, у меня была дикая зубная боль, сажусь к доктору на кресло, проходит 5 минут, и я пишу доктору (говорить-то я не могу): „Можно уже говорить?“. А он такой: „А я уже всё тебе сделал“. Невероятно просто! Здесь происходит реальная магия, прямо так, как делаю я. Приходите лечиться к доктору Эльмару!»',
        },
        {
            img: `${patient5}`,
            text: '«Я ходил в разные клиники, и мне всё время всё не нравилось.Всегда вырывали зубы, было больно, я потом ходил мучился.  И я как-то попал в клинику доктора Эльмара, и тут всё было как по волшебству.Пришёл, у меня была дикая зубная боль, сажусь к доктору на кресло, проходит 5 минут, и я пишу доктору (говорить-то я не могу):  „Можно уже говорить?“. А он такой: „А я уже всё тебе сделал“. Невероятно просто! Здесь происходит реальная магия, прямо так, как делаю я.  Приходите лечиться к доктору Эльмару!» «Я ходил в разные клиники, и мне всё время всё не нравилось.Всегда вырывали зубы, было больно, я потом ходил мучился. И я как-то попал в клинику доктора Эльмара, и тут всё было как по волшебству.Пришёл, у меня была дикая зубная боль, сажусь к доктору на кресло, проходит 5 минут, и я пишу доктору (говорить-то я не могу): „Можно уже говорить?“. А он такой: „А я уже всё тебе сделал“. Невероятно просто! Здесь происходит реальная магия, прямо так, как делаю я. Приходите лечиться к доктору Эльмару!»«Я ходил в разные клиники, и мне всё время всё не нравилось.Всегда вырывали зубы, было больно, я потом ходил мучился. И я как-то попал в клинику доктора Эльмара, и тут всё было как по волшебству.Пришёл, у меня была дикая зубная боль, сажусь к доктору на кресло, проходит 5 минут, и я пишу доктору (говорить-то я не могу): „Можно уже говорить?“. А он такой: „А я уже всё тебе сделал“. Невероятно просто! Здесь происходит реальная магия, прямо так, как делаю я. Приходите лечиться к доктору Эльмару!»',
        },
        {
            img: `${patient1}`,
            text: '«Я ходил в разные клиники, и мне всё время всё не нравилось.Всегда вырывали зубы, было больно, я потом ходил мучился.  И я как-то попал в клинику доктора Эльмара, и тут всё было как по волшебству.Пришёл, у меня была дикая зубная боль, сажусь к доктору на кресло, проходит 5 минут, и я пишу доктору (говорить-то я не могу):  „Можно уже говорить?“. А он такой: „А я уже всё тебе сделал“. Невероятно просто! Здесь происходит реальная магия, прямо так, как делаю я.  Приходите лечиться к доктору Эльмару!» «Я ходил в разные клиники, и мне всё время всё не нравилось.Всегда вырывали зубы, было больно, я потом ходил мучился. И я как-то попал в клинику доктора Эльмара, и тут всё было как по волшебству.Пришёл, у меня была дикая зубная боль, сажусь к доктору на кресло, проходит 5 минут, и я пишу доктору (говорить-то я не могу): „Можно уже говорить?“. А он такой: „А я уже всё тебе сделал“. Невероятно просто! Здесь происходит реальная магия, прямо так, как делаю я. Приходите лечиться к доктору Эльмару!»«Я ходил в разные клиники, и мне всё время всё не нравилось.Всегда вырывали зубы, было больно, я потом ходил мучился. И я как-то попал в клинику доктора Эльмара, и тут всё было как по волшебству.Пришёл, у меня была дикая зубная боль, сажусь к доктору на кресло, проходит 5 минут, и я пишу доктору (говорить-то я не могу): „Можно уже говорить?“. А он такой: „А я уже всё тебе сделал“. Невероятно просто! Здесь происходит реальная магия, прямо так, как делаю я. Приходите лечиться к доктору Эльмару!»',
        },
        {
            img: `${patient2}`,
            text: '«Я ходил в разные клиники, и мне всё время всё не нравилось.Всегда вырывали зубы, было больно, я потом ходил мучился.  И я как-то попал в клинику доктора Эльмара, и тут всё было как по волшебству.Пришёл, у меня была дикая зубная боль, сажусь к доктору на кресло, проходит 5 минут, и я пишу доктору (говорить-то я не могу):  „Можно уже говорить?“. А он такой: „А я уже всё тебе сделал“. Невероятно просто! Здесь происходит реальная магия, прямо так, как делаю я.  Приходите лечиться к доктору Эльмару!» «Я ходил в разные клиники, и мне всё время всё не нравилось.Всегда вырывали зубы, было больно, я потом ходил мучился. И я как-то попал в клинику доктора Эльмара, и тут всё было как по волшебству.Пришёл, у меня была дикая зубная боль, сажусь к доктору на кресло, проходит 5 минут, и я пишу доктору (говорить-то я не могу): „Можно уже говорить?“. А он такой: „А я уже всё тебе сделал“. Невероятно просто! Здесь происходит реальная магия, прямо так, как делаю я. Приходите лечиться к доктору Эльмару!»«Я ходил в разные клиники, и мне всё время всё не нравилось.Всегда вырывали зубы, было больно, я потом ходил мучился. И я как-то попал в клинику доктора Эльмара, и тут всё было как по волшебству.Пришёл, у меня была дикая зубная боль, сажусь к доктору на кресло, проходит 5 минут, и я пишу доктору (говорить-то я не могу): „Можно уже говорить?“. А он такой: „А я уже всё тебе сделал“. Невероятно просто! Здесь происходит реальная магия, прямо так, как делаю я. Приходите лечиться к доктору Эльмару!»',
        },
    ]
    return (
        <>

            <div className='mainContainers'>
                <_Navbar />
                <div className='header_banner  w-100 h-100 '>
                    <div className='container'>
                        <h1 className='text-center pt-5'>Добро пожаловать </h1>
                        <p className=' h5 mt-5 mb-5'>
                            Клиника профессора Айдарова организована в 2003 году.<br /> Имеет соответствия и лицензию МЗ КР.<br /> В клинике работают более 100 сотрудников:<br /> профессора, доценты, доктора и кандидаты <br />медицинских наук; акушеры-гинекологи, <br />неонатологи, педиатры,<br /> анестезиологи, терапевты, врачи смежных специальностей,<br /> акушерки и медсестры с высшей категорией.
                        </p>
                        <p className='mt-5 mb-5 pb-0 h5'>
                            Лечебная работа клиники основана на<br /> международных стандартах, по которым <br />работают ведущие учреждения зарубежных стран.
                            <div className="pb-3 pt-3">
                                <Button1 setShow={setShow} />

                            </div>
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
                <RunText />

                <div className='container'>
                    <h1 className='text-center pt-5 pb-5 '>УСЛУГИ  КЛИНИКИ:</h1>

                    <Row>
                        <Col sm={6} xs={12} md={4}>
                            <a href='/aboutDental'>
                                <div style={{ marginTop: "10px" }}>
                                    <Card.Body>

                                        <Card.Title className='text-center pb-3'>Стоматология</Card.Title>
                                        <Card.Img className='images_item' variant="top" src='https://zub.ru/upload/iblock/041/04174025b93d0621168a8712e846e9ca.jpg' />
                                    </Card.Body>
                                </div>
                            </a>
                        </Col>
                        <Col sm={6} xs={12} md={4} >
                            <a href='/AboutXirurg'>
                                <div style={{ marginTop: "10px" }}>
                                    <Card.Body>
                                        <Card.Title className='text-center pb-3'>Хирургия</Card.Title>
                                        <Card.Img className=' images_item ' variant="top" src='https://di-center.ru/upload/images/hiryrgia.jpg' />

                                    </Card.Body>
                                </div>
                            </a>
                        </Col>
                        <Col sm={6} xs={12} md={4} >
                            <a href='/AboutTerapiya'>
                                <div style={{ marginTop: "10px" }}>
                                    <Card.Body>
                                        <Card.Title className='text-center pb-3'>Терапия</Card.Title>
                                        <Card.Img className='images_item' variant="top" src='https://www.promedicina.clinic/assets/images/vlok.jpg' />

                                    </Card.Body>
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
                        </Col> <Col sm={6} xs={12} md={4} >
                            <a href='/AboutUrologi'>
                                <div style={{ marginTop: "10px" }}>
                                    <Card.Title className='text-center pb-3'>Урология
                                    </Card.Title>
                                    <Card.Img className=' images_item ' variant="top" src='https://www.medicanahealthpoint.com/wp-content/uploads/2020/10/urology-medicana-health-point.jpg' />
                                </div>
                            </a>
                        </Col>
                    </Row>
                    <Row className="mt-5">
                        <Col xs={12} md={6} lg={6}>
                            <div className='justify-content-evenly text-center  ' >
                                <img class=" t013__img t-img" src={imgg} imgfield="img" data-tu-max-width="320" data-tu-max-height="320" data-tu-cover="c" alt="" role="presentation">
                                </img>
                                <Card.Title className='text_nav'>Доктор Айдаров</Card.Title>
                                <span className='text_nav' style={{ fontSize: '14px', lineHeight: '18px' }} data-customstyle="yes">Основатель и<br /> главный врач клиники, </span>
                            </div>
                        </Col>
                        <Col xs={12} md={6} lg={6}>
                            <div className='justify-content-evenly text_nav m-3'>
                                <div >
                                    Выступая на фестивале ATX, авторы и актёры сериала «Клиника» поделились мыслями о возможном ребуте шоу.
                                    Создатель шоу Билл Лоуренс так прокомментировал планы на воссоединение «Клиники»:
                                </div>
                                <div className='mt-5'>
                                    «Мы собираемся сделать это, потому что людям не всё равно. Нам нравится проводить время друг с другом. Если у вас когда-нибудь появится повод поработать с людьми, с которыми вы всегда хотели поработать, воспользуйтесь им».
                                    <div className='mt-3'>
                                        <Button1 setShow={setShow} />

                                    </div>
                                </div>
                            </div>
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
                    <Row className="mt-5">
                        <Col xs={12} md={4}  >
                            <h3 data-aos="fade-up"
                                data-aos-anchor-placement="top-bottom" class="tn-atom text-center  p-2 m-2">01</h3>
                            <p style={{ color: "white" }} className="text-center p-2 m-2">Стоматология
                            </p>

                        </Col>
                        <Col xs={12} md={4} >
                            <h3 data-aos="fade-up"
                                data-aos-anchor-placement="top-bottom" class="tn-atom text-center  p-2 m-2">02</h3>
                            <p style={{ color: "white" }} className="text-center p-2 m-2">Хирургия </p>
                        </Col>
                        <Col xs={12} md={4} >
                            <h3 data-aos="fade-up"
                                data-aos-anchor-placement="top-bottom" class="tn-atom text-center  p-2 m-2">03</h3>
                            <p style={{ color: "white" }} className="text-center p-2 m-2">Терапия

                            </p>
                        </Col>
                        <Col xs={12} md={4} >
                            <h3 data-aos="fade-up"
                                data-aos-anchor-placement="top-bottom" class="tn-atom text-center  p-2 m-2">04</h3>
                            <p style={{ color: "white" }} className="text-center p-2 m-2">Лаборатория</p>

                        </Col>
                        <Col xs={12} md={4} >
                            <h3 data-aos="fade-up"
                                data-aos-anchor-placement="top-bottom" class="tn-atom text-center  p-2 m-2">05</h3>
                            <p style={{ color: "white" }} className="text-center p-2 m-2">
                                Гинекология</p>
                        </Col>
                        <Col xs={12} md={4} >
                            <h3 data-aos="fade-up"
                                data-aos-anchor-placement="top-bottom" class="tn-atom text-center  p-2 m-2">06  </h3>
                            <p style={{ color: "white" }} className="text-center p-2 m-2">
                                Гинекология</p>
                        </Col>

                    </Row>
                    <Row className=" justify-content-center mt-5">
                        <Col md={8} xs={10}>
                            <h1 className='mb-5'>
                                Часто задаваемые вопросы
                            </h1>
                        </Col>
                        <Col md={10} xs={10}  >
                            <Accordions name={accordion2} />
                        </Col>

                    </Row>
                    <Carousel fade>
                        {
                            feedback.map(e => {
                                return (
                                    <Carousel.Item style={{ color: 'white' }}>
                                        <Row>
                                            <Col sm={6} xs={12} md={6}>
                                                <img
                                                    className="d-block w-100"
                                                    src={e.img}
                                                    alt="First slide"
                                                />
                                            </Col>
                                            <Col sm={6} xs={12} md={6}>
                                                <p>
                                                    {e.text}
                                                </p>
                                            </Col>
                                        </Row>
                                    </Carousel.Item>
                                )
                            })
                        }
                    </Carousel>


                </div>

                <div className='text-center'>
                    <RunText />
                </div>


            </div>

        </>
    );
}

export default MainContainers;