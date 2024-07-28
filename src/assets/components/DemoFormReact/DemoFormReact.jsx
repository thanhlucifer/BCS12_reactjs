import React, { useState } from 'react'

const DemoFormReact = () => {
    const [value, setValue] = useState({
        hoten: "",
        email: ""
    })
    const handleChange = (e) => {
        const id = e.target.id
        setValue({...value, [id]: e.target.value})
    }
    return (
        <div>
            <form action="">
                <div>
                    <label htmlFor="hoten" className="block mb-2 text-sm font-medium text-gray-900 ">Họ Tên </label>
                    <input type="text" id="hoten" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="vui lòng nhập họ tên" required 
                    value={value.hoten}
                    onChange={handleChange}/>
                </div>
                <div>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">Email</label>
                    <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="vui lòng nhập email" required 
                    value={value.email}
                    onChange={handleChange}/>
                </div>
            </form>
        </div>
    )
}

export default DemoFormReact