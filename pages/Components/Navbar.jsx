import React from 'react'
import {AiOutlineShoppingCart} from "react-icons/ai"
import {AiOutlineUserAdd} from "react-icons/ai"
import Link from 'next/link'

function Navbar() {
  return (
    <>
    <nav className="shadow h-[60px] flex justify-between items-center p-5">
      <Link href="/"><img src="/Logo.png" className="cursor-pointer"/></Link>

      <div className="flex items-center justify-center mr-[100px] gap-[10px]"><Link href="/login"><img src='/log-in.png' className="cursor-pointer"/></Link>
      <div> <AiOutlineShoppingCart/></div>
     
      </div>
    </nav>
      
    </>
  )
}

export default Navbar
