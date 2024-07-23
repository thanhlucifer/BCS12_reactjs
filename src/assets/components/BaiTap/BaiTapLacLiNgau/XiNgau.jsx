import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { luachonnguoidung } from '../../../../redux/slides/xingauSlide'

const XiNgau = () => {
    const { xingau} = useSelector((state) => state.xingauSlide)
    const dispath = useDispatch()
    return (
        <div className="xingau flex items-center justify-center">
            <button className='btnXingau' onClick={() => {
                dispath(luachonnguoidung(true))
            }}>Tai</button>
            <div className='flex p-3 h-max'>
                <img src={`./public/lacxingau/${xingau.xingau1}.png`} width="100px" alt="" />
                <img src={`./public/lacxingau/${xingau.xingau2}.png`} width="100px" alt="" />
                <img src={`./public/lacxingau/${xingau.xingau3}.png`} width="100px" alt="" />
            </div>
            <button className='btnXingau'
             onClick={() => {
                dispath(luachonnguoidung(false))
            }}>Xiu</button>
        </div>
    )
}

export default XiNgau