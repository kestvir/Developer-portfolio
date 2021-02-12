import React from "react"
import { Link } from "gatsby"
import SocialLinks from "../../constants/social-links"

const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <SocialLinks styleClass="footer-links" />
        <h4>
          copyright&copy;{new Date().getFullYear()}
          <span> Kestutis Virbickas </span> all rights reserved
        </h4>
        <h5>
          Website source
          <Link
            to="https://github.com/kestvir/Developer-portfolio"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            code
          </Link>
        </h5>
      </div>
    </footer>
  )
}

export default Footer
