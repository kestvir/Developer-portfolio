import React from "react"

import LayoutComponent from "../components/LayoutComponent"
import StyledHeroSection from "../components/Hero"
import About from "../components/About"
import Projects from "../components/Projects"
import Contact from "../components/Contact"



const IndexPage = () => (
    <LayoutComponent>
        <StyledHeroSection />
        <About />
        <Projects />
        <Contact />
    </LayoutComponent>
)

export default IndexPage
