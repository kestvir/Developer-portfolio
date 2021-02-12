import React from "react"

import Layout from "../components/Layout/Layout"
import StyledHeroSection from "../components/Sections/Hero"
import About from "../components/About"
import Projects from "../components/Sections/Projects/Projects"
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
