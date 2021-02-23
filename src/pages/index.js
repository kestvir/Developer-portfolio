import React from "react"
import { Helmet } from "react-helmet"

import Layout from "../components/Layout"
import StyledHeroSection from "../components/Sections/Hero"
import About from "../components/Sections/About"
import Projects from "../components/Sections/Projects/Projects"
import Contact from "../components/Sections/Contact"

const IndexPage = () => (
  <>
    <Helmet>
      <meta charSet="utf-8" />
      <title>KV developer portfolio</title>
    </Helmet>
    <Layout>
      <StyledHeroSection />
      <About />
      <Projects />
      <Contact />
    </Layout>
  </>
)

export default IndexPage
