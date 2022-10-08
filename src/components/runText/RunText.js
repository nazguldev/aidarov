import React from 'react'
import Marquee from 'react-fast-marquee'
import '../index.scss'

function RunText(props) {
  return (
    <div className="mt-5 mb-5">


      <Marquee direction="left" speed={50}>
        {props.name.map((item, i) => {
          return (
            <div className="d-flex">
              <div className="text ">{item.texts}</div>
              <div className="text ">{item.t}</div>

            </div>
          )
        })}

      </Marquee>

    </div>


  )
}

export default RunText
