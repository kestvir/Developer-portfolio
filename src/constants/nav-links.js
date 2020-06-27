import React from "react"
import { Link, animateScroll as scroll } from "react-scroll";
const data = [
    {
        id: 1,
        text: "home",
        url: "hero-section",
    },
    {
        id: 2,
        text: "about",
        url: "about-section",
    },
    {
        id: 3,
        text: "projects",
        url: "projects-section",
    },
    {
        id: 4,
        text: "contact",
        url: "contact-section",
    },
]


export default ({ styleClass, hideSidebar }) => {
    return (
        <ul className={`page-links ${styleClass ? styleClass : ""}`}>
            {data.map(link => {
                return (
                    <li key={link.id}>
                        <Link
                            onClick={hideSidebar}
                            to={link.url}
                            activeClass="active"
                            spy={true}
                            smooth={true}
                            duration={500}>
                            {link.text}
                        </Link>
                    </li>
                )
            })}
        </ul>
    )
}