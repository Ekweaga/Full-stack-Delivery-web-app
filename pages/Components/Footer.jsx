import React from 'react'
import Image from "next/image"



function Footer() {
  return (
    <>
    <footer className='bg-[#3F4255]  text-white  py-[60px] '>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-[30px]  w-[80%] mx-auto"> 
        
        <div>
        <Image src="/Logo1.png"  width={150} height={30} alt="logo"/>

<div> <Image src="/Group 32.png" className="mt-[40px]" alt="Group32" width={150} height={30}/></div>
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
      <div className="p-5"> <Image alt="logo" src="/Group 23.png" className="mt-[40px]"  width={1300} height={50}/></div>
    </footer>
    
    </>
  )
}

export default Footer