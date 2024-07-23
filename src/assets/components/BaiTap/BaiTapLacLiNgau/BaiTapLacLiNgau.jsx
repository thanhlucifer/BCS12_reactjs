import React from 'react'
import './style.scss'
import XiNgau from './XiNgau'
import KetQua from './KetQua'
import { useDispatch } from 'react-redux'
import { playgame } from '../../../../redux/slides/xingauSlide'
const BaiTapLacLiNgau = () => {
  const dispath = useDispatch()
  return (
    <div className='bt2'>
      <h1 className='uppercase '>Game Đổ Xúc Xắc</h1>
      <XiNgau />
      <KetQua />
      <button className='btnPlay' onClick={() => dispath(playgame())}>Play Game</button>
    </div>
  )
}

export default BaiTapLacLiNgau