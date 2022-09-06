import React, { useEffect, useState } from 'react';
import './Laboratory.scss'
import _Navbar from "../../app/nav/_Navbar"
import { Button, Col, Form, Table } from 'react-bootstrap';
import lab from './product';
import Button1 from '../../Button1';

function AboutLaboratory({ setShow }) {
    const [filter, setFilter] = useState('')

    const searchText = (e) => {
        setFilter(e.target.value)
    }
    console.log(filter)

    let as = lab.filter(item => {
        return Object.keys(item).some(key =>
            item[key].toString().toLowerCase().includes(filter.toString().toLowerCase()))
    })



    return (
        <div className={'Laboratory'}>
            <_Navbar />
            <div class={"slider__item "}>
                <div className='container'>
                    <h1 className='text-center pt-2' style={{ color: "#d3bb7e" }}>Лаборатория </h1>
                    <p className='text_nav h5 pb-3 mb-2' style={{ color: "black" }}>
                        - это лаборатория надежных и <br />качественных исследований! Это наш большой <br />труд и гордость потому что у нас <br />работают самые лучшие специалисты, имеющие<br /> огромный опыт работы. Все наши лаборанты имеют<br /> высшее образование и специализацию в <br />сфере медико-биологической диагностики.<br /> Весь коллектив лаборатории успешно прошел <br />сертификацию отделом лицензирования Министерства<br /> здравоохранения Кыргызской Республики.
                    </p>
<Button1 setShow={setShow}/>
                </div>
            </div>
            <h1 className='text-center'>Анализы и цены</h1>
            <div className='container'>
                <div className='pt-3 pb-3'>
                    <input type='text'
                        className="form-control"
                        placeholder='Введите название анализа...'
                        value={filter}
                        onChange={searchText.bind(this)}
                    /></div>

                <Col>
                    <Table striped bordered hover variant='dark' >
                        <thead>
                            <tr>
                                <th >№</th>
                                <th>Общий мазок на флору    </th>
                                <th>Стоимость услуг</th>
                            </tr>
                        </thead>
                        <tbody>
                            {as.map((a) => {
                                return (
                                    <tr>
                                        <td>{a.id}</td>
                                        <td>{a.title.length > 0 ? a.title : "не найдено"}</td>
                                        <td>{a.price}</td> </tr>
                                )
                            })}
                        </tbody>
                    </Table>
                </Col>
            </div>

        </div>
    );
}

export default AboutLaboratory;