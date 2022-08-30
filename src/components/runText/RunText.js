import React from 'react'
import Marquee from 'react-fast-marquee'
import '../index.scss'

function RunText(props) {
  return (
    <div className="mt-5 mb-5">
      {/*
            <marquee direction="left"  speed={100} >
              <div className='d-flex'>
              <div className="text ">
                ТЕСТ ДРАЙВ УЛЫБКИ
                </div>
                <div className="text">
                ИСПРАВЛЕНИЕ ПРИКУСА


                </div>
                <div className="text ">
                ГАРАНТИЯ 25 ЛЕТ


                </div>
                <div className="text">
                СТОМАТОЛОГ ЗВЁЗД

                </div>
                <div className='text'>
                АВТОРСКИЕ ВИНИРЫ

                </div>
                <div className="text">
                ЛЕЧЕНИЕ ВО СНЕ


                </div>
                <div className="text">
                БЕЗ БОЛИ

                </div>

              </div>
            </marquee> */}
      <Marquee direction="left" speed={50}>
        <div className="d-flex">
          <div className="text ">
            ТЕСТ ДРАЙВ УЛЫБКИ
          </div>
          <div className="text ">/
          </div>
          <div className="text">
            ИСПРАВЛЕНИЕ ПРИКУСА
          </div>
          <div className="text ">/
          </div>
          <div className="text ">
            ГАРАНТИЯ 25 ЛЕТ
          </div>
          <div className="text ">/
          </div>
          <div className="text">
            СТОМАТОЛОГ ЗВЁЗД
          </div>
          <div className="text ">/
          </div>
          <div className="text">
            АВТОРСКИЕ ВИНИРЫ
          </div>
          <div className="text ">/
          </div>
          <div className="text">
            ЛЕЧЕНИЕ ВО СНЕ
          </div>
          <div className="text ">/
          </div>
          <div className="text">
            БЕЗ БОЛИ
          </div>
          <div className="text ">/
          </div>
        </div>
      </Marquee>

    </div>


  )
}

export default RunText
