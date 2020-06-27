import React from "react"

import Layout from "../components/Layout"
import StyledHeroSection from "../components/Hero"
import About from "../components/About"
import Projects from "../components/Projects"
import Contact from "../components/Contact"



const IndexPage = () => (
    <Layout>
        <StyledHeroSection />
        <About />
        <Projects />
        <Contact />
    </Layout>
)

export default IndexPage
