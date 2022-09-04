import React from 'react';
import { Card, Col, Row } from 'react-bootstrap'
import Button1 from '../../Button1';
import './xirurg.scss'

function AboutXirurg({ setShow }) {
    return (
        <div className='container aboutXirurg'>
            <h1 className='text-center'>Хирургия Айдаров</h1>

            <Row>
                <Col sm={6} xs={12} md={6} >
                    <p className='text_nav  h5 mt-5'> Хирургический центр "Кортекс" - оснащен всем <br />
                        необходимым качественным современным оборудованием, <br />
                        на котором работают высококвалифицированные врачи.
                        Каждая палата, в нашем центре, подготовлена таким образом, <br /> чтобы все пациенты, вне зависимости от
                        <br /> возраста могли чувствовать себя в ней максимально комфортно.</p>
                    <Col className='mt-3' sm={6}>
                        <Button1 setShow={setShow} />
                    </Col>
                </Col>

                <Col sm={6} xs={12} md={6}>
                    <img className='w-75' src='https://vcim.am/uploads/2021/11/Mirijanian.jpg' />
                </Col>
            </Row>




        </div>
    );
}

export default AboutXirurg;