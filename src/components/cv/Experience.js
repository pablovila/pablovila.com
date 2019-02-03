import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

const Header = () => (
  <StaticQuery
    query={graphql`
      {
        allFile(
          filter: { name: { eq: "cv" }, sourceInstanceName: { eq: "data" } }
        ) {
          edges {
            node {
              childDataJson {
                experience {
                  company
                  period
                  url
                  position
                  summary
                  projects
                }
              }
            }
          }
        }
      }
    `}
    render={data => {
      const experienceData = data.allFile.edges[0].node.childDataJson.experience
      return (
        <>
          <div className="cv-section">
            <div />
            <h3 className="cv-section-title">Experience</h3>
          </div>
          {experienceData.map((e, index) => (
            <div key={index} className="cv-section">
              <div className="cv-section-sideline">
                <div className="cv-section-company">{e.company}</div>
                <div className="cv-section-period">{e.period}</div>
                <div className="cv-section-url">
                  <a href={`https://${e.url}`}>{e.url}</a>
                </div>
              </div>
              <div className="cv-section-main">
                <h4 className="cv-section-position">{e.position}</h4>
                <div className="cv-section-summary">{e.summary}</div>
                <div className="cv-section-projects">
                  {e.projects.map((p, index) => (
                    <li key={index}>{p}</li>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </>
      )
    }}
  />
)

export default Header
