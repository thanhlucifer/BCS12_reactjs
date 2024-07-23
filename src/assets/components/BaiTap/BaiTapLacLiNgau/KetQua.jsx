import React from 'react'
import { useSelector } from 'react-redux'
const KetQua = () => {
    const {tongsobanthang, tongsobanchoi, banchon} = useSelector((state) => state.xingauSlide)
    console.log(tongsobanchoi, tongsobanthang, banchon)
    return (
        <div className='ketqua'>
            <p>Ban chon: <span className='text-red-500'>{banchon==true?"Tài":"Xỉu"}</span></p>
            <p>Tong so ban thang: <span className='text-orange-500'>{tongsobanthang}</span></p>
            <p>Tong so ban choi: <span className='text-blue-500'>{tongsobanchoi}</span></p>
        </div>
    )
}

export default KetQua