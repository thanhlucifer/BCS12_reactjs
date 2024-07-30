import React, { useState } from 'react'
import { useFormik } from 'formik'
import InputCustom from './InputCustom'
import { DatePicker } from 'antd';
import ButtonCustom from './ButtonCustom';
import TableNhanVien from './TableNhanVien';
const DemoFormReact = () => {
    // const [value, setValue] = useState({
    //     hoten: "",
    //     email: ""
    // })
    // const handleChange = (e) => {
    //     const id = e.target.id
    //     setValue({...value, [id]: e.target.value})
    // }
    //mssv, hoten, email, matkhau, namsinh, gioitinh, so dien thoai, 
    //form nhap du lieu nguoi dung thuan, ,table cua antd 
    const [ arrNhanVien, setArrNhanVien ] = useState([])
    const { handleSubmit, handleChange, values, setFieldValue } = useFormik({
        initialValues: {
            hoten: "",
            msnv: "",
            email: "",
            matkhau: "",
            ngaysinh: "",
            gioitinh: "",
            sodienthoai: "",
        },
        //su kien onsubmit duoc thuc thi khi form bat dau chay su kien submit, param values la tham so dai dien cho field trong form
        onSubmit: (values) => {
            console.log(values)
            // const newArrNhanVien = [...arrNhanVien, values]
            // newArrNhanVien.push(values)
            // setArrNhanVien(newArrNhanVien)
            setArrNhanVien([...arrNhanVien, values])
        }
    })

    return (
      <>
        <div>
            <form onSubmit={handleSubmit}>
                <div className='grid grid-cols-2 gap-5'>
                    <InputCustom
                        lablecontent={"MSNV"}
                        id={"msnv"}
                        placeholder={"Vui long nhap MSNV"} required
                        name={'msnv'}
                        onChange={handleChange}
                        value={values.mssv} />
                    <InputCustom
                        lablecontent={"Ho ten"}
                        id={"hoten"}
                        placeholder={"Vui long nhap ho ten"} required
                        name={'hoten'}
                        onChange={handleChange}
                        value={values.hoten} />
                    <InputCustom
                        lablecontent={"Email"}
                        id={"email"}
                        placeholder={"Vui long nhap Email"} required
                        name={'email'}
                        onChange={handleChange}
                        value={values.email} />
                    <InputCustom
                        lablecontent={"So dien thoai"}
                        id={"sodienthoai"}
                        placeholder={"Vui long nhap so dien thoai"} required
                        name={'sodienthoai'}
                        onChange={handleChange}
                        value={values.sodienthoai} />
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 ">Ngay sinh</label>
                        <DatePicker className='!w-full'
                            format="DD/MM/YYYY"
                            onChange={(date, dateString) => setFieldValue('ngaysinh', dateString)}
                        />
                    </div>
                    <div>
                        <div>
                            <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900 ">Gioi tinh</label>
                            <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                value={values.gioitinh}
                                onChange={handleChange}
                                name={'gioitinh'}
                            >
                                <option value="">Vui long chon gioi tinh</option>
                                <option value="Nam">Nam</option>
                                <option value="Nu">Nu</option>
                            </select>
                        </div>
                    </div>
                    <InputCustom
                        lablecontent={"Mat khau"}
                        id={"matkhau"}
                        placeholder={"Vui long nhap mat khau"} required
                        name={'matkhau'}
                        onChange={handleChange}
                        value={values.matkhau} />
                    <div className='grid grid-cols-3 gap-5'>
                        <ButtonCustom content={"Them nhan vien "} bgColor={"bg-blue-500"} type={"submit"} />
                        <ButtonCustom content={"Reset Form "} bgColor={"bg-black"} type={"submit"} />
                        <ButtonCustom content={"Update "} bgColor={"bg-yellow-500"} type={"submit"} />
                    </div>
                </div>
                {/* <InputCustom lablecontent={"Họ Tên"} id={"hoten"} placeholder={"vui long nhap họ tên"} required name={'hoten'} onChange={handleChange} value={values.hoten} /> */}

            </form>
        </div>
        <TableNhanVien arrNhanVien={arrNhanVien} />
      </>
        
    )
}

export default DemoFormReact