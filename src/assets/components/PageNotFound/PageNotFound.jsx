import React from 'react'
import animation404 from './../../animations/Animation - 1721103834912.json'
import Lottie from 'lottie-react'
const PageNotFound = () => {
  return (
    <div className='h-screen flex justify-center items-center flex-col'>
        <Lottie animationData={animation404} loop={true} style={{width: '600px', height: '600px'}}/>
        <button className='py-2 px-5 bg-red-500 text-white rounded-lg'>Back To Home</button>
    </div>
  )
}

export default PageNotFound