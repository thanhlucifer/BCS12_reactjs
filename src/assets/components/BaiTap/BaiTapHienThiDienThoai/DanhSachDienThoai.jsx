import React from 'react'

const DanhSachDienThoai = ({ listPhone , title, updateDienThoai}) => {
    return (
        <>
        <h3>{title}</h3>
            <div className='grid grid-cols-4'>
                {listPhone.map((iphone, index) => {
                    const { name, image } = iphone
                    return <div className="card" key={index}>
                        <img src={image} alt={name} />
                        <h3>{name}</h3>
                        <button className='py-2 px-5 bg-green-500 text-white rounded-lg' onClick={() => updateDienThoai(iphone)}>Xem chi tiet</button>
                    </div>
                })}
            </div>
        </>
    )
}

export default DanhSachDienThoai