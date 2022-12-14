import Head from 'next/head'
import Image from "next/image"
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'



export default function Home() {
  return (
    <>
      <Head>
        <title>YellowKitchen - Food Court at home</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/Photo.png" />
      </Head>

      <Navbar/>
     <div className='header flex justify-between p-5 flex-col md:flex-row'>
      <div className="mt-[60px] p-4">
        <h1 className=" text-6xl">Your Food Court at home</h1>
        <div className="flex gap-[35px] mt-[100px]"><Image src="/Button.png"  width={100} height={100} alt="btn"/><Image src="/Button (1).png" width={100} height={100} alt="btn"/></div>
      </div>
      <div><Image src="/Photo.png" alt="Photo" width={800} height={700}/></div>
     </div>
     <div>
      <Image src="/USP.png" alt="Photo" width={900} height={200}/>
     </div>
     <div className="restaurantContainer">
     <h3 className="font-bold p-3">Restaurants</h3>
      <div className='flex flex-col md:flex-row gap-[40px]'>
      <Image src="/restaurant.png" alt="restaurant"  width={300} height={400}/>
      <Image src="/restaurant1.png" alt="restaurant"  width={300} height={400}/>
      <Image src="/restaurant2.png" alt="restaurant"  width={300} height={400}/>
      <Image src="/restaurant3.png" alt="restaurant"  width={300} height={400}/>
      </div>
     
     </div>

     <div className='restaurantSearch h-[300px] bg-[#F2F4FA] flex items-center justify-between'>


      <div className="flex w-[80%] mx-auto items-center  justify-between flex-col md:flex-row">
      <div>
        <h2 className="font-bold text-2xl mb-[25px]">Your nearest restaurant</h2>
        <p className="md:w-[400px]">Each kitchen work with own delivery home to deliver food across the whole world</p>
      </div>

      <div className="md:shadow" >
        <input type="text" className="w-[250px] p-3" placeholder="search"/> <button className="bg-[#FFE145] p-3 w-[230px] md:w-[100px] mt-[10px] md:mt-0">send</button>
      </div>
      </div>

     

     </div>

     <div className="specials flex flex-col gap-[20px] mt-[50px] mb-[50px] ">
      <h3 className="font-bold p-3 ml-[30px]">Specialities</h3>
      <div className="flex md:w-[90%] mx-auto flex-col md:flex-row-reverse">
      <Image src="/Frame 29.png" alt="restaurant" width={350} height={250} />
      <Image src="/Frame 30.png" alt="restaurant"  width={350} height={250} />
      <Image src="/Frame 31.png" alt="restaurant"  width={350} height={250}/>
      <Image src="/Frame 32.png" alt="restaurant"  width={350} height={250} />
      <Image src="/Frame 33.png" alt="restaurant"  width={350} height={250} />
      <Image src="/Frame 34.png" alt="restaurant"  width={350} height={250} />
      <Image src="/Frame 35.png" alt="restaurant"  width={350} height={250} />
      </div>
     
     </div>

     <div className="categories md:h-[300px] flex items-center justify-center p-5 " style={{background:'url("/bg.png")',backgroundSize:'cover',backgroundRepeat:'none'}}>

      <div className="flex w-[60%] mx-auto flex-col md:flex-row">
      <Image src="/Component 7.png" alt="restaurant"  width={350} height={300}/>
      <Image src="/Component 8.png" alt="restaurant"  width={350} height={300}/>
      <Image src="/Component 9.png" alt="restaurant"  width={300} height={300}/>
      <Image src="/Component 10.png" alt="restaurant"  width={300} height={300}/>
      </div>


     </div>

     <div className="w-[90%] mx-auto mt-[40px] mb-[40px]">
      <Image src="/Map.png" alt="map" width={1500} height={700}/>
     </div>
      
     <div className="md:p-4 mb-[50px]">
      <h3 className='text-2xl ml-[20px] md:ml-0'>#YellowKitchens <span className='text-[#E3E4E8]'>in Instagram</span></h3>
      <div className='flex items-center justify-around mt-[20px] flex-col md:flex-row gap-[20px] md:gap-[20px]'>
      <Image src="/Rectangle 13.png" alt="restaurant" width={350} height={300}/>
     <Image src="/Rectangle 10.png" alt="restaurant" width={350} height={300}/>
     <Image src="/Rectangle 11.png" alt="restaurant" width={350} height={300}/>
     <Image src="/Rectangle 12.png" alt="restaurant" width={350} height={300}/>
      </div>
   
     </div>

     <Footer/>
    </>
  )
}
