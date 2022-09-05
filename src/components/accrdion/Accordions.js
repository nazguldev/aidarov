
import React, { useState ,useEffect} from 'react';
import { Col } from 'react-bootstrap';
import AOS from "aos";
import '../index.scss'


function Accordions(props) {
    const [selected, setSelected] = useState(null)
    const toggle = (i) => {
        if (selected === i) {
            return setSelected(null)
        }
        setSelected(i)
    }
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
    return (

        <div className=' container mt-5 '>
            <hr />

            <Col sm={6} xs={12} md={6}>
                <div className='accordion '>
                    {props.name.map((item, i) => {
                        return (
                            <>
                                <div className='item'>
                                    <hr />
                                    <div className='title' onClick={() => toggle(i)}>
                                        <p className='h5 text-center' data-aos="fade-up"
                                            data-aos-anchor-placement="top-center">{item.title}</p>
                                        <span data-aos="fade-up"
                                            data-aos-anchor-placement="top-center"  className='selecteds'>
                                            {selected === i ? "x" : "+"}
                                        </span>
                                    </div>
                                    <div className={selected === i ? "content show" : "content"}>
                                        <p>{item.text}</p>
                                        <p className='text1'>{item.text1}</p>
                                        <div>
                                            {' '}
                                        </div>
                                        <h5 className='text1'>{item.ptitile}</h5>
                                        {/* <hr/> */}
                                        <p className='text1'>{item.price}</p>
                                        <p className='text1'>{item.price1}</p>
                                        <p className='text1'>{item.price2}</p>
                                        <p className='text1'>{item.price3}</p>
                                        <p className='text1'>{item.price4}</p>
                                        <p className='text1'>{item.price5}</p>
                                        <p className='text1'>{item.price6}</p>
                                        <p className='text1'>{item.price7}</p>
                                        <p className='text1'>{item.price8}</p>
                                        <p className='text1'>{item.price9}</p>
                                        <p className='text1'>{item.price10}</p>
                                        <p className='text1'>{item.price11}</p>
                                        <p className='text1'>{item.price12}</p>
                                        <h5 className='text1'>{item.price_price}</h5>

                                    </div>
                                </div>
                                <hr />

                            </>
                        )
                    })}
                </div>
            </Col>
        </div>
    );
}


export default Accordions;