import React from 'react'

const InputCustom = ({ lablecontent, id, placeholder, name, onChange, value, classWrapper='' }) => {
    return (
        <div className={classWrapper}>
            <label htmlFor={id} className="block mb-2 text-sm font-medium text-gray-900 ">{lablecontent}</label>
            <input type="text" id={id} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder={placeholder} 
                name={name}
                onChange={onChange}
                value={value} />
        </div>

    )
}

export default InputCustom