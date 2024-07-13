import React from 'react'

const ChiTietDienThoai = ({dienthoai}) => {
  return (
    <div className='flex'>
        <div className='w-3/12'>
            <img src={dienthoai.image} alt=""  className=''/>
            <h3 className='text-xl font-bold text-center'>{dienthoai.name}</h3>
        </div>
        <div className='w-8/12'>
            <h3 className='text-xl font-bold'>Thong so ky thuat</h3>
            <table border={2} cellPadding={10}>
                <tr>
                    <td>Man hinh: </td>
                    <td>{dienthoai.screen}</td>
                </tr>
                <tr>
                    <td>He dieu hanh: </td>
                    <td>{dienthoai.os}</td>
                </tr>
                <tr>
                    <td>Camera truoc: </td>
                    <td>{dienthoai.front_camera}</td>
                </tr>
                <tr>
                    <td>Camera sau: </td>
                    <td>{dienthoai.rear_camera}</td>
                </tr>
                <tr>
                    <td>RAM: </td>
                    <td>{dienthoai.ram}</td>
                </tr>
                <tr>
                    <td>ROM: </td>
                    <td>{dienthoai.rom}</td>
                </tr>
            </table>
        </div>
    </div>
  )
}

export default ChiTietDienThoai