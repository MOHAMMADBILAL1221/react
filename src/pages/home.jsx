import React from 'react'
import Section from '../components/section';
import Steps from '../components/step';
import { Link } from 'react-router-dom';




function Home() {
  return (
    <>
    <Section />
    <Steps />
    <button className='px-20 py-4  bg-teal-800 rounded-md text-white font-bold'><Link  to={"product"}>See Products.....</Link></button>
    <div className='my-1'>
    <video className='my-20 m-auto rounded-xl shadow-2xl hover:scale-105 transition-all ease-in-out border border-teal-700' width={800} src='./public/money.mp4' controls>
    </video>
    </div>
    </>
  )
}

export default Home;
