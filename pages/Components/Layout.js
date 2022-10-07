import React from 'react'
import {AuthProvider} from '../../Context/Contextapi'
import Footer from './Footer'
import Navbar from './Navbar'

function Layout({children}) {
  return (
    <>
   <AuthProvider>
    <Navbar/>
    {children}
    <Footer/>
    </AuthProvider>
    </>
  )
}

export default Layout