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
                  src={image} /> Dr.Aidarov
              </h5>
              <p className="textdoctor">Медицинская лицензия</p>
            </div>
            <div className="col">
              <h6 className="textinfooter">Хиты</h6>
              <h6 className="textinfooter2">Hollywood Smile</h6>
              <h6 className="textinfooter2"> Выравнивание зубов </h6>
              <h6 className="textinfooter2"> Эффект бриллиант</h6>

            </div>
            {/* colum2 */}
            <div className="col">
              <div className="textinfooter">Услуги</div>
              <div className="textinfooter2">Консультация</div>
              <div className="textinfooter2">Полное обследование</div>
              <div className="textinfooter2">Виниры / Люминиры</div>
              <div className="textinfooter2">Элайнеры</div>
              <div className="textinfooter2">Отбеливание</div>
              <div className="textinfooter2">Профессиональная гиена полости рта</div>
              <div className="textinfooter2"> Лечение</div>
              <div className="textinfooter2"> Брекеты</div>
              <div className="textinfooter2"> Имплантация</div>
              <div className="textinfooter2"> Протезирование</div>
            </div>
            {/* colum3 */}
            <div className="col">
              <div className="textinfooter">Адресс</div>
              <div className="textinfooter2">г. Ош, ст. Фрунзенская,</div>
              <div className="textinfooter2">Оболенский переулок, д. 9, корп. 8</div>
              <a href={'tel:+996776000000'} className={'p-2 textinfooter2 rounded'}>
                +996 (776) 000 000
              </a>
              <div className="div_a"><p> Записаться на прием</p></div>
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
