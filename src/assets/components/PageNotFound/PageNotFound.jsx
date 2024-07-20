import React from 'react'
import animation404 from './../../animations/Animation - 1721103834912.json'
import Lottie from 'lottie-react'
import { Link, useNavigate } from 'react-router-dom'
const PageNotFound = () => {
  const navigate = useNavigate()
  return (
    <div className='h-screen flex justify-center items-center flex-col'>
        <Lottie animationData={animation404} loop={true} style={{width: '600px', height: '600px'}}/>
        {/* <Link to={'/'} className='py-2 px-5 bg-red-500 text-white rounded-lg'>Back To Home</Link> */}
        <button onClick={() => navigate('/')} className='py-2 px-5 bg-red-500 text-white rounded-lg'>Back To Home</button>
    </div>
  )
}

export default PageNotFound