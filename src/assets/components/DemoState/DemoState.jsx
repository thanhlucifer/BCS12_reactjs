import React, { useState } from 'react'

const DemoState = () => {
    //luon khai bao hook dau component
    //hooks khong duoc khai bao trong cac function hay bat ki dieu kien if else, chi duoc khai bao bao trong function component
    const [state, setState] = useState(8);
    const [hoten, setHoten] = useState('Default');
    let diemToan = 9;
    return (
        <div>
            <h2>Demo Ve State</h2>
            <p className='text-red-500 text-center text-3xl font-bold'>{diemToan}</p>
            <p>Gia tri cua state la: {state}</p>
            <button onClick={() => {
                setState(state + 1)
                console.log(diemToan)
            }} className='bg-red-500 py-2 px-5 rounded-lg text-white'>Tang Diem</button>
            <div>
                <label htmlFor="">Nhap Ten</label>
                <input onChange={(e) => setHoten(e.target.value)} type="text" className='border p-2' placeholder='Ho ten'/>
                <p className='text-red-500 text-center'>{hoten}</p>
            </div>
            <img src="./public/products/black-car.jpg" alt="" />
        </div>
    )
}

export default DemoState