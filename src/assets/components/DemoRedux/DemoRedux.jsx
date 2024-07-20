import React from 'react'
import { useDispatch } from 'react-redux'
import { capnhathoten } from '../../../redux/slides/userSlide';

const DemoRedux = () => {
    const Dispatch = useDispatch();
  return (
    <div>
      <h1 >Demo ve xu ly chuc nang voi redux toolkit</h1>
      <label htmlFor="">Ten nguoi dung</label>
      <input type="text" className='border p-2 rounded-md' placeholder='Ho ten' onChange={(e) => Dispatch(capnhathoten(e.target.value))}/>
    </div>
  )
}

export default DemoRedux