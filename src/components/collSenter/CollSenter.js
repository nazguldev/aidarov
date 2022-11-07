import React, { useState } from 'react';
import { Modal, Form } from 'react-bootstrap';
import axios from 'axios';

function CollSenter(props) {
  const [show, setShow] = useState(false);
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const token = "bot5271502598:AAG6wzuiEkLl2MTbKTMh8m6T-XAxQi0ZMdo";

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const setTelegram = () => {
    axios.get(`https://api.telegram.org/${token}/sendMessage`, {
      params: {
        parse_mode: "HTML",
        chat_id: "917139606",
        text: `<i>Name: </i> ${name} \n <i>Phone number: </i>${number} \n`,
      }
    })
    
    props.setShow(false)
    handleClose();
  }


  return (
  //   <div className="col">
  //   <div className="textinfooter">Услуги</div>
  //   <div className="textinfooter2">г. Ош, ст. Фрунзенская,</div>
  //   <div className="textinfooter2">Оболенский переулок, д. 9, корп. 8</div>
  //   <a href={'tel:+996776000000'} className={'p-2 textinfooter2 rounded'}>
  //     +996 (776) 000 000
  //   </a>
  //   <div className="div_a"><p> Записаться на прием</p></div>
  // </div>
    <div>
      <Modal show={props.show}
        onHide={handleClose}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton onClick={() => props.setShow(false)}
          style={{ backgroundColor: "#d3bb7e", color: "white" }}>
          <Modal.Title>Запись на консультацию</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ backgroundColor: "black" }}>
          <p style={{ color: "white" }}>В ближайшее время с вами свяжется администратор и подберет для вас удобное время для записи на онлайн- или офлайн-консультацию.</p>
          <Form style={{ backgroundColor: "black", color: "white" }}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1"
            >
              <Form.Label >Ваше имя</Form.Label>
              <Form.Control
                type="text"
                placeholder="name@example.com"
                autoFocus
                style={{ backgroundColor: "black", color: "white" }}
                onChange={e => setName(e.target.value)}
              />
              <Form.Label >Телефон номер</Form.Label>
              <Form.Control
                type="number"
                  placeholder="+996773000000"
                autoFocus
                style={{ backgroundColor: "black", color: "white" }}
                onChange={e => setNumber(e.target.value)}
              />
            </Form.Group>

          </Form>
          <button className='div_a button' style={{ justifyContent: "center", alignItems: "center" }}
            onClick={setTelegram}
            disabled={!name || !number}>
            Отправить
          </button>
        </Modal.Body>

      </Modal>
    </div>
  );
}

export default CollSenter;