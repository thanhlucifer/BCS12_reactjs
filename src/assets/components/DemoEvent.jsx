import React from 'react'

const DemoEvent = () => {
  function chaomungSVmoi(hoten) {
    alert(`Xin chao sinh vien ${hoten}`)
  }
  return (
    <div className='container'>
        <h2 className='text-2xl font-bold'>Demo ve xu ly xu kien trong react</h2>
        <button onClick={()=> {
            chaomungSVmoi('Thanh Lucifer')
        }} className='bg-black text-white py-2 px-5 rounded-md'>Click</button>
        <label htmlFor="" className='block'>Ho Ten</label>
        <input type="text" className='mb-10 border block rounded-md p-2' onChange={(e) => console.log(e.target.value)}/>
    </div>
  )
}

export default DemoEvent