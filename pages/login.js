import React,{useState} from 'react'
import Head from 'next/head'
import Link from "next/Link"
import { signInWithEmailAndPassword} from 'firebase/auth';

function Login() {
  const [error, seterror] = useState(null);
  const [success, setsuccess] = useState(null)
  const [email,setEmail] = useState('')
  const [password, setPassword] = useState('')

  const  login = async (e)=>{
    e.preventDefault();
    //setLoading(true)

    if(email === "" || !password === "" ){
      seterror("Fields are empty")
      //setLoading(false)
    }

   else{
    try{
      await signInWithEmailAndPassword(auth,email,password)
    // setLoading(false)
     history.replace("");
     setsuccess("Welcome to Movella")
     
   }
   catch(err){
     console.log(err)
     seterror(err.message)
   }

   }
   
   
  

  }
  return (
    <>
       <Head>
        <title>Login page</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/Photo.png" />
      </Head>
    <div className="h-screen flex items-center justify-center">

      <div className="flex items-center justify-center flex-col">
      {error?(<div className='flex items-center justify-center text-red-600 border border-red-600  w-[300px] p-2'><p>{error}</p></div>):null}
                    {success?(<div className="text-green-300 flex items-center justify-center p-2"><p>{success}</p></div>):null}
        <form className="flex items-center justify-center flex-col" onSubmit={login}>
          <div className="m-[20px]"><h2 className="font-bold text-center text-2xl">SIGN IN</h2>
          <p className="text-center">Welcome back, <br/>please login to continue</p>
          </div>
          <div><input type="email" placeholder="info@gmail.com" className="border-2 border-yellow-200 focus:outline-none w-[300px] p-2"/></div>
          <div><input type="password" placeholder="*******"  className="border-2 border-yellow-200 focus:outline-none w-[300px] p-2 mt-[20px]"/></div>
          <div className="mt-[10px]"><p>Dont have an account ? <Link href="/signup" className="text-yellow-200">Sign Up</Link></p></div>
          <div><button  className="border-2 border-yellow-200 bg-yellow-200 mt-[20px] focus:outline-none w-[300px] p-2">Log in</button></div>
        </form>
      </div>

    </div>
    </>
  )
}

export default Login