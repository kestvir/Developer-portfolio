import React from "react"
import Image from "gatsby-image"
import Title from "../UI/Title"
import { graphql, useStaticQuery } from "gatsby"

const query = graphql`
  {
    allStrapiAbout {
      nodes {
        info
      }
    }
    file(relativePath: { eq: "cat.jpg" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const About = () => {
  const {
    file: {
      childImageSharp: { fluid },
    },
    allStrapiAbout: { nodes: info },
  } = useStaticQuery(query)

  const aboutMeText = info[0].info

  return (
    <section className="section about-page" id="about-section">
      <Title title="About Me" />
      <div className="section-center about-center">
        <Image fluid={fluid} className="about-img" />
        <article className="about-text">
          <p>{aboutMeText}</p>
        </article>
      </div>
    </section>
  )
}

export default About
