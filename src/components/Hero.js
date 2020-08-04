import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Link, animateScroll as scroll } from "react-scroll";
import BackgroundImage from 'gatsby-background-image'
import styled from 'styled-components';


const query = graphql`
  {
    file(relativePath: { eq: "hero.jpg" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
      }
    }
  }
`

const StyledBackground = styled(BackgroundImage)`
  &::before,
  &::after {
    filter: brightness(
      60%
    );
  }
  background-attachment: fixed;
`


const Hero = ({ className }) => {
    const {
        file: {
            childImageSharp: { fluid },
        },
    } = useStaticQuery(query)

    const imageData = fluid


    return (
        <header className="hero" id="hero-section">
            <div className="section-center hero-center">
                <StyledBackground
                    fluid={imageData}
                    className={className}
                    style={{ position: "static" }}
                >
                    <div className="text-center">
                        <h2 className="hero-name">Hello, I'm Kestutis</h2>
                        <h3 className="hero-description-position">Designer and Full Stack Developer</h3>
                        <Link href="#"
                            className="hero-btn"
                            to="about-section"
                            activeClass="active"
                            spy={true}
                            smooth={true}
                            duration={500}>
                            learn more
                        </Link>
                    </div>
                </StyledBackground>
            </div >
        </header>
    )
}


export default Hero;
