import Head from 'next/head'
import React from 'react'
import Image from "next/image"

function Checkout() {
  return (
    <>

    <Head>
      <title>Checkout Page</title>
    </Head>
    <div className='flex items-center justify-center md:justify-around flex-col md:flex-row'>
    <div className="text-white">
      <div style={{backgroundImage:"url(/bgmaindesktop.png)",backgroundRepeat:'no-repeat',backgroundSize:'cover'}} className="h-[250px] rounded shadow flex flex-col items-center justify-end ">
      
      </div>
     
      <Image alt="btn" width={500} height={250} src="/bgcardback.png" className="md:ml-[100px]"/>
    </div>
    <div>
      <div>
        <h3 className='font-bold mt-[100px] text-2xl'>Total</h3>
      </div>
      <form className='flex flex-col gap-[20px] items-center justify-center h-[400px]'>
        <div className='flex flex-col justify-center gap-[10px]'>
          <label className='text-sm'>CARD HOLDER NAME</label>
          <input type="text" placeholder='Card-Holder Name' className='w-[350px] p-2 rounded focus:outline-[#FB9333] border-2 border-[#EAB308]'/>
        </div>
        <div className='flex flex-col justify-center gap-[10px]'>
        <label className='text-sm'>CARD NUMBER</label>
          <input type="text" placeholder='Card-Holder Name' className='w-[350px] p-2 rounded focus:outline-[#FB9333] border-2 border-[#EAB308]'/>
        </div>
        <div className='flex items-center justify-center gap-[10px]'>
          <input type="text" placeholder='MM' className='w-[60px] p-2 focus:outline-[#EAB308]'/>
          <input type="text" placeholder='YY' className='w-[60px] p-2 focus:outline-[#EAB308]'/>
          <input type="text" placeholder='CVC' className='p-2 focus:outline-[#EAB308]'/>
        </div>
        <div>
          <button className='bg-[#EAB308] w-[350px] p-2 shadow rounded text-white'>Confirm</button>
        </div>
      </form>
    </div>

  </div>
  
    </>
  )
}

export default Checkout