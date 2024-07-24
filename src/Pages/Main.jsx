import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Components/Header.jsx'
import Footer from '../Components/Footer.jsx'

const Main = () => {

  const [loader , setLoader]  = useState(false);


  useEffect(
    () => {

        setLoader(true);

        setTimeout(
            () => {
                setLoader(false)
            } , 5000
        )

    }, [])


  return (
    <div>


  
      <Header/>
      <Outlet />
      <Footer/>


    </div>
  )
}

export default Main