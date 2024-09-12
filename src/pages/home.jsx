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
    </>
  )
}

export default Home;
