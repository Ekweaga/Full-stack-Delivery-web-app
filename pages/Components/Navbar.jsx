import React,{useState} from 'react'
import {AiOutlineShoppingCart} from "react-icons/ai"
import {AiOutlineUserAdd} from "react-icons/ai"
import Link from 'next/link'
import { useContext } from 'react'
import { AuthContext } from '../../Context/Contextapi'
import {  signOut } from "firebase/auth";
import {useRouter} from "next/router"
import { onAuthStateChanged,getAuth } from "firebase/auth";
import {auth} from "../../Firebase/firbase"
function Navbar() {
  const [open,setOpen] = useState(false)
  const {user} = useContext(AuthContext)
  const router = useRouter()

  const logout = async ()=>{
   await signOut(auth)
    localStorage.clear();
    router.replace("/login")
}
  return (
    <>
    <nav className="shadow h-[60px] flex justify-between items-center p-5">
      <Link href="/"><img src="/Logo.png" className="cursor-pointer"/></Link>

      <div className="flex items-center justify-center mr-[100px] gap-[20px]">
        {
          user ? 
          (
           <> 
            <button className="border-2 border-yellow-500 p-1" onClick={logout}>Sign Out</button>
           <div> <AiOutlineShoppingCart/></div>
            <img src={open ? "/Btn2.png":"/Btn1.png"} className="cursor-pointer w-[80px] mt-[20px]"   onClick={() => setOpen(!open)}/>
           
            </>
          ) : ( <div className="flex gap-[25px] items-center justify-center">
            <Link href="/login"><img src='/log-in.png' className="cursor-pointer"/></Link>
            <button className="border-2 border-yellow-500 p-1" onClick={()=>router.replace("/signup")}>Sign Up</button>
              </div>)
        }
       
     
      </div>
    </nav>
    <ul className={`text-sm flex flex-col gap-[15px] bg-white absolute top-[60px] right-0 z-50 h-[250px] p-3 w-[300px]  duration-300 ${
        open ? "right-0 block" : "hidden" }`} style={{boxShadow:'1px 10px 10px rgba(0,0,0,0.1)'}}>
            <li>About Us</li>
            <li  onClick={() => setOpen(!open)}>Sign Up</li>
            <li  onClick={() => setOpen(!open)}><Link href="/menu">Menu</Link></li>
            <li>Business</li>
          </ul>
      
    </>
  )
}

export default Navbar
