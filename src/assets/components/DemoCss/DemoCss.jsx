import React from 'react'
import './democss.css'
import style from './democss.module.css'
const DemoCss = () => {
  return (
    <div className='demo_css'>
        <h2 className={style.h2}>Demo Ve Su dung CSS trong du an React</h2>
        <p className={style.sub_title}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    </div>
  )
}

export default DemoCss