import React, { useState } from 'react'

const BaiTap1 = (props) => {
    const [seletcar, setSeletcar] = useState('black-car.jpg');

    const arrButton = [
        {
            icon: './public/icons/icon-black.jpg',
            title: 'Crystal Black',
            subtitle: 'Pearl',
            seletcar: 'black-car.jpg'
        },
        {
            icon: './public/icons/icon-steel.jpg',
            title: 'Modern Steel',
            subtitle: 'Pearl',
            seletcar: 'steel-car.jpg'
        },
        {
            icon: './public/icons/icon-silver.jpg',
            title: 'Lunar Silver',
            subtitle: 'Pearl',
            seletcar: 'silver-car.jpg'
        },
        {
            icon: './public/icons/icon-red.jpg',
            title: 'Rallye Red',
            subtitle: 'Pearl',
            seletcar: 'red-car.jpg'
        }
    ]
    return (
        <div>
            <h2 className='text-center'>Bai Tap Hien Thi Loai Xe Tuong Ung Bang State {props.abc}</h2>
            <button className='bg-red-500 py-5 px-2 rounded-lg' onClick={props.updateCount}>Tang count</button>
            <div className="flex gap-3">
                <div className='w-2/3'>
                    <img src={`./public/products/${seletcar}`} alt="" />
                </div>
                <div className='w-1/3 space-y-3'>
                    {arrButton.map((item, index) => (
                        <button onClick={() => setSeletcar(item.seletcar)} key={index} className='flex items-center py-2 px-5 border border-black rounded-lg space-x-3 w-60'>
                            <img width={40} src={item.icon} alt="" />
                            <div className='text-left'>
                                <p>{item.title}</p>
                                <p>{item.subtitle}</p>
                            </div>
                        </button>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default BaiTap1