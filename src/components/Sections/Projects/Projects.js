import React, { useState, useRef } from "react"
import Title from "../../UI/Title"
import { graphql, useStaticQuery } from "gatsby"
import Project from "./Project"
import ProjectFilter from "./ProjectFilter"

const query = graphql`
  {
    allStrapiProjects(sort: { fields: created_at, order: ASC }) {
      nodes {
        id
        live
        source
        title
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        Stack_tab {
          id
          name
        }
      }
    }
  }
`

const Projects = () => {
  const [filterValue, setFilterValue] = useState("ALL")

  const selectTechRef = useRef(null)

  const {
    allStrapiProjects: { nodes: projects },
  } = useStaticQuery(query)

  const checkProjectTech = techName => {
    console.log(projects)
  }

  return (
    <section className="section projects" id="projects-section">
      <Title title="Projects" />
      <ProjectFilter
        onProjectTechChange={setFilterValue}
        filterValue={filterValue}
        forwardedRef={selectTechRef}
      />
      <div className="section-center projects-center">
        {projects.map(project => {
          checkProjectTech()
          return <Project key={project.id} {...project} isVisible={true} />
        })}
      </div>
    </section>
  )
}

export default Projects
