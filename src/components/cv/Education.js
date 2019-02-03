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
                education {
                  college
                  period
                  title
                  summary
                }
              }
            }
          }
        }
      }
    `}
    render={data => {
      const educationData = data.allFile.edges[0].node.childDataJson.education
      return (
        <>
          <div className="cv-section">
            <div />
            <h3 className="cv-section-title">Education</h3>
          </div>
          {educationData.map((e, index) => (
            <div className="cv-section" key={index}>
              <div className="cv-section-sideline">
                <div className="cv-section-company">{e.college}</div>
                <div className="cv-section-period">{e.period}</div>
              </div>
              <div className="cv-section-main">
                <h4 className="cv-section-position">{e.title}</h4>
                <div className="cv-section-summary">{e.summary}</div>
              </div>
            </div>
          ))}
        </>
      )
    }}
  />
)

export default Header
