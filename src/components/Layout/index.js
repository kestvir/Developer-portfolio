import React, { useState } from "react"
import Navbar from "./Nav/Navbar"
import Sidebar from "./Nav/Sidebar"
import Footer from "./Footer"

const Layout = ({ children, backgroundColor }) => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <Navbar
        backgroundColor={backgroundColor ? backgroundColor : null}
        toggleSidebar={toggleSidebar}
      />
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
      {children}
      <Footer />
    </>
  )
}

export default Layout
