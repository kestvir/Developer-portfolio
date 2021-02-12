import React, { useState } from "react"
import Footer from "./Footer"
import Header from "./Header"

const Layout = ({ children }) => {
  const [isOpenSidebar, setIsOpenSidebar] = useState(false)

  const toggleSidebar = () => {
    setIsOpenSidebar(prevState => !prevState)
  }

  return (
    <>
      <Header toggleSidebar={toggleSidebar} isOpenSidebar={isOpenSidebar} />
      {children}
      <Footer />
    </>
  )
}

export default Layout
