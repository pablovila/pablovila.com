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
                skills
              }
            }
          }
        }
      }
    `}
    render={data => {
      const skillsData = data.allFile.edges[0].node.childDataJson.skills
      return (
        <>
          <div className="cv-section">
            <div />
            <h3 className="cv-section-title">Skills</h3>
          </div>
          <div className="cv-section">
            <div className="cv-section-sideline" />
            <div className="cv-section-main">
              {skillsData.map((s, index) => (
                <div key={index} className="cv-section-skill">
                  {s}
                </div>
              ))}
            </div>
          </div>
        </>
      )
    }}
  />
)

export default Header
