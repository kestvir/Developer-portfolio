import React from "react"
import Links from "../constants/nav-links"
import SocialLinks from "../constants/social-links"
import { FaTimes } from "react-icons/fa"

const Sidebar = ({ isOpenSidebar, toggleSidebar }) => {
  return (
    <aside className={`sidebar ${isOpenSidebar ? "show-sidebar" : ""} `}>
      <button className="close-btn" onClick={toggleSidebar}>
        <FaTimes />
      </button>
      <div className="side-container">
        <Links
          hideSidebar={toggleSidebar}
          styleClass={`${isOpenSidebar ? "sidebar-links" : ""}`}
        />
        <SocialLinks styleClass={`${isOpenSidebar ? "sidebar-icons" : ""}`} />
      </div>
    </aside>
  )
}

export default Sidebar
