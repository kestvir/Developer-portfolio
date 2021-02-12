import React, { useEffect } from "react"
import PageLinks from "../constants/nav-links"
import SocialLinks from "../constants/social-links"
import { FaCode, FaAlignRight } from "react-icons/fa"

const Navbar = ({ toggleSidebar }) => {
  useEffect(() => {
    window.addEventListener("scroll", resizeHeaderOnScroll)
  }, [])

  const resizeHeaderOnScroll = () => {
    const distanceY = window.pageYOffset || document.documentElement.scrollTop,
      shrinkOn = 200,
      headerEl = document.getElementById("header-nav")

    if (distanceY > shrinkOn) {
      headerEl.classList.add("smaller-header-nav")
    } else {
      headerEl.classList.remove("smaller-header-nav")
    }
  }

  return (
    <nav className="navbar" id="header-nav">
      <div className="nav-center">
        <div className="page-nav">
          <FaCode className="logo" />
          <PageLinks styleClass="nav-links" />
        </div>
        <button type="button" className="toggle-btn" onClick={toggleSidebar}>
          <FaAlignRight />
        </button>
        <SocialLinks styleClass="nav-links" />
      </div>
    </nav>
  )
}

export default Navbar
