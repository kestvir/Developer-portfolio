import React from "react"
import {
    FaFacebookF,
    FaTwitter,
    FaGithub,
} from "react-icons/fa"

const data = [
    {
        id: 1,
        icon: <FaFacebookF className="social-icon"></FaFacebookF>,
        url: "https://www.facebook.com/kestutis.virbickas",
    },
    {
        id: 2,
        icon: <FaTwitter className="social-icon"></FaTwitter>,
        url: "https://twitter.com/VKestutis",
    },
    {
        id: 3,
        icon: <FaGithub className="social-icon"></FaGithub>,
        url: "https://github.com/kestvir",
    },
]
const links = data.map(link => {
    return (
        <li key={link.id}>
            <a href={link.url} target="_blank" rel="noreferrer" className="social-link">
                {link.icon}
            </a>
        </li>
    )
})

export default ({ styleClass }) => {
    return (
        <ul className={`social-links ${styleClass ? styleClass : ""}`}>{links}</ul>
    )
}