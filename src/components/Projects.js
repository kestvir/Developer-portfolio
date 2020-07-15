import React from "react"
import Title from "./Title"
import { graphql, useStaticQuery } from "gatsby"
import Project from "./Project"
import ProjectFilter from "./ProjectFilter"

const query = graphql`
  {
    allStrapiProjects(sort: {fields: created_at, order: ASC}) {
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
    const {
        allStrapiProjects: { nodes: projects }
    } = useStaticQuery(query)

    console.log(projects)

    return (
        <section className="section projects" id="projects-section">
            <Title title={"Projects"} />
            <ProjectFilter />
            <div className="section-center projects-center">
                {projects.map(project => {
                    return <Project key={project.id} {...project} />
                })}
            </div>
        </section>
    )
}

export default Projects