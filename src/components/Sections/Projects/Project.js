import React, { useState } from "react"
import Image from "gatsby-image"
import { Link } from "gatsby"
import { FaExternalLinkAlt } from "react-icons/fa"

const Project = ({ source, live, image, title, Stack_tab, isVisible }) => {
  const technologies = Stack_tab.map(stack => {
    return stack.name
  })

  const technologiesStr = technologies.join(" ")

  return (
    <>
      {isVisible && (
        <div className={`project ${technologiesStr}`}>
          <article>
            <Image
              fluid={image.childImageSharp.fluid}
              className="project-img"
            />
            <div className="project-card">
              <Link
                to={`${live}`}
                target="_blank"
                rel="noreferrer"
                className="project-external-link-icon"
              >
                <FaExternalLinkAlt />
              </Link>
              <h4 className="project-card-title">{title}</h4>
              <div className="project-body">
                {Stack_tab.map(stack => {
                  if(stack.name === "featured") return;
                  return <p key={stack.id}>{stack.name}</p>
                })}
              </div>
              <div className="project-footer">
                <Link to={`${source}`} target="_blank" rel="noreferrer">
                  Source Code
                </Link>
                <Link to={`${live}`} target="_blank" rel="noreferrer">
                  Live App
                </Link>
              </div>
            </div>
          </article>
        </div>
      )}
    </>
  )
}

export default Project
