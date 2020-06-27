
import React from "react"
import SocialLinks from "../constants/social-links"
const Footer = () => {
    return (
        <footer className="footer">
            <div>
                <SocialLinks styleClass="footer-links" />
                <h4>
                    copyright&copy;{new Date().getFullYear()}
                    <span> Kestutis Virbickas </span> all rights reserved
                </h4>
            </div>
        </footer>
    )
}

export default Footer