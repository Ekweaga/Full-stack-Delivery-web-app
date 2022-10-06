import React from 'react'

function Footer() {
  return (
    <>
    <footer className='bg-[#3F4255]  text-white  py-[60px] '>
      <div className="grid grid-cols-4 gap-[10px]  w-[80%] mx-auto"> 
        
        <div>
        <img src="/Logo1.png"/>

<div> <img src="/Group 32.png" className="mt-[40px]" alt="Group 32"/></div>
        </div>

        <div className="flex flex-col justify-center">
          <h3 className="font-bold">About Us</h3>
          <ul className="text-sm flex flex-col gap-[15px]">
            <li>Concept</li>
            <li>Sign Up</li>
            <li>Franhise</li>
            <li>Business</li>
          </ul>
        </div>

        <div className="flex flex-col justify-center">
          <h3 className="font-bold">Contact Us</h3>
          <ul className="text-sm flex flex-col gap-[15px]">
            <li>Concept</li>
            <li>Sign Up</li>
            <li>Franhise</li>
            <li>Business</li>
          </ul>
        </div>

        <div className="flex flex-col justify-center">
          <h3 className="font-bold">Get help</h3>
          <ul className="text-sm flex flex-col gap-[15px]">
            <li>FAQs</li>
            <li>Specialists</li>
            <li>Franhise</li>
            <li>Business</li>
          </ul>
        </div>

        
      </div>
      <div className="p-5"> <img src="/Group 23.png" className="mt-[40px]"/></div>
    </footer>
    
    </>
  )
}

export default Footer