import React, { useEffect } from 'react';
import { Card, Col, Row } from 'react-bootstrap'
import Button1 from '../../Button1';
import './gynecolog.scss'
import _Navbar from "../../app/nav/_Navbar"
function AboutGynecology({ setShow }) {
    return (
        <div className='AboutGynecology'>
            <div className='container'>

                <_Navbar />
                <Row >

                    <Col className="mt-5" md={6}>
                        <h1 className="mt-5 text">ГИНЕКОЛОГ</h1>
                        <p className="text2 mt-5">
                            Гинеколог - врач узкой специализации, занимающийся диагностикой, профилактикой и лечением болезней женской репродуктивной системы.
                            Врач-гинеколог наблюдает за здоровьем, развитием девочек в детском и подростковом возрасте, позднее — оценивает состояние женского организма, репродуктивную и сексуальную функцию, участвует в планировании семьи, решает проблемы контрацепции. Вместе с акушером отвечает за дородовое состояние женщины, проводит скрининг-тестирование, выявляет венерические заболевания, нарушения репродуктивной функции.
                            Основные специальности гинекологов
                        </p>

                        <p className='mt-5'>
                            <Button1 setShow={setShow} />
                        </p>
                    </Col>
                    <Col md={6} xs={8} sm={10}>
                        <Card.Img variant="top"src='https://static.wixstatic.com/media/4d529b_fd65a8ced6ed4be397af12a22b44a238~mv2.png/v1/fill/w_470,h_390,al_c,q_95,enc_auto/main3.png' />
                    </Col>


                </Row>
            </div>
        </div>
    );
}

export default AboutGynecology;