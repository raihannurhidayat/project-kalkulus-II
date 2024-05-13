import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'

const MainPage = () => {
  return (
    <>
    <Navbar />
    <Outlet context={{text: "hello"}} />
    </>
  )
}

export default MainPage