import React from 'react'

const HeaderComponent = () => {
  const arrMonAn = [
    {
      tenMon: "Caesar Salad",
      giaTien: 4.99
    },
    {
      tenMon: "Caesar Salad",
      giaTien: 4.99
    },
    {
      tenMon: "Caesar Salad",
     giaTien: 4.99
    }
  ]
  const classbutton = "bg-purple-500 text-white py-2 px-4 rounded-md bg"
  return (
   
    <div className='bg-black text-white p-10'>
       <button className={classbutton} id='dangnhap'>Dang Nhap</button>
       <button className={classbutton}>Dang Ky</button>
      {arrMonAn.map((item, index) => {
        return (
          <div>
            <h3>{item.tenMon}</h3>
            <p>{item.giaTien}</p>
          </div>
        );
      })}
    </div>
  )
}

export default HeaderComponent