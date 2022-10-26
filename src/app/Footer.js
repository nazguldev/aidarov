import React from 'react'
import image from '.././containers/dental/Image/doctor.jpg'
import './Footer.scss'

function Footer() {
  return (
    <>
      <div className="main-footer mt-5" style={{
        background: '#060608',
        opacity: 0.9,
        color: 'white',
        padding: '20px',
        position: 'relative',
        bottom: 0,
        width: '100%',
      }}>
        <div className="container">
          <div className="row">
            {/* collumn1 */}
            <div className="col">
              <h5 className="textinfooter">
                <img
                  style={{ width: '80px', height: '80px', borderRadius: '50%' }}
                  src={image} /> КЛИНИКА АЙДАРОВ
              </h5>
              <p className="textdoctor">Медицинская лицензия</p>
            </div>
           
            <div className="col">
              <div className="textinfooter">Адресс</div>
              <div className="textinfooter2">г. Ош, ст. Масалиева 73,</div>
              {/* <div className="textinfooter2">Оболенский переулок, д. 9, корп. 8</div> */}
              <a  href={'tel:+996776000000'} className={'p-2 textinfooter2 rounded'}>
                +996 (776) 000 000
              </a>
              <div className="div__a"><a href={'tel:+996776000000'} style={{textDecoration:"none"}} className={'p-2 textinfooter2 rounded'}   > Записаться на прием</a></div>
            </div>
            <div className="col">
              <div className="textinfooter">Услуги</div>
              <h6 className="textinfooter2">Терапия</h6>
              <h6 className="textinfooter2">Хирургия</h6>
              <h6 className="textinfooter2">Стоматология</h6>
            </div>

            <div className="col">
              <div className="textinfooter">Услуги</div>
              <h6 className="textinfooter2"> Лаборатория</h6>
              <h6 className="textinfooter2"> Гинекология</h6>
              <h6 className="textinfooter2"> Урология</h6>
            </div>
          </div>
          <div className="col">
            <hr />
            <p style={{ textAlign: 'center', padding: '2px', fontSize: '15px' }}>&copy; {new Date().getFullYear()} г.</p>
          </div>
        </div>
      </div>
    </>


  )
}

export default Footer
