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
import { connect } from 'react-redux';
import Cart from './Cart'
import Image from "next/image"
function Navbar({qty,cartItems}) {
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
    <nav className="shadow h-[60px] flex justify-between items-center md:p-5 p-2">
      <Link href="/"><Image alt="logo" width={100} height={30} src="/Logo.png" className="cursor-pointer w-[100px] md:w-[150px] px-3"/></Link>

      <div className="flex items-center justify-center md:mr-[100px] gap-[20px] px-3">
        {
          user ? 
          (
           <> 
            <button className="border-2 border-yellow-500 p-1" onClick={logout}>Sign Out</button>
           <div className="relative"> <AiOutlineShoppingCart className="cursor-pointer"/><span className="absolute -top-[15px] right-0 text-sm"></span></div>
          <div>  <Image alt="btn" width={50} height={50} src={open ? "/Btn2.png":"/Btn1.png"} className="cursor-pointer w-[60px] mt-[20px]" onClick={() => setOpen(!open)}/></div>
           
            </>
          ) : ( <div className="flex md:gap-[25px] items-center justify-center gap-[25px]">
            <Link href="/login"><Image alt="btn" width={50} height={30} src='/log-in.png' className="cursor-pointer"/></Link>
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

          <div className={`text-sm bg-white absolute top-[60px] right-0 h-[250px] p-3 w-[300px]  duration-300 ${
        open ? "right-[400px] block" : "hidden" }`} style={{boxShadow:'1px 10px 10px rgba(0,0,0,0.1)'}}>
           <Cart/>
            
          </div>
      
    </>
  )
}
const  mapStateToProps = ({cart})=>{
  const {totalQuantity,itemsList} = cart
return {
  qty : totalQuantity,
  cartItems:itemsList
}
}
export default connect(mapStateToProps)(Navbar)
