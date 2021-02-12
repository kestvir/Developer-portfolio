import React from "react"
import Navbar from "./Nav/Navbar"
import Sidebar from "./Nav/Sidebar"

const Header = ({ toggleSidebar, isOpenSidebar }) => {
  return (
    <header>
      <Navbar toggleSidebar={toggleSidebar} />
      <Sidebar toggleSidebar={toggleSidebar} isOpenSidebar={isOpenSidebar} />
    </header>
  )
}

export default Header
