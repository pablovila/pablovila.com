import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import MeImage from './MeImage'

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
                fullName
                position
                description
                location
                photo
                contactInfo {
                  email
                  phone
                  web
                  github
                  linkedin
                  twitter
                }
              }
            }
          }
        }
      }
    `}
    render={data => {
      const headerData = data.allFile.edges[0].node.childDataJson
      return (
        <div className="cv-section cv-header">
          <div className="cv-header-photo">
            <MeImage />
          </div>
          <div className="cv-header-info">
            <h1 className="cv-header-name">{headerData.fullName}</h1>
            <h2 className="cv-header-position">{headerData.position}</h2>
            <div className="cv-header-text">{headerData.description}</div>
            <div className="cv-header-location">{headerData.location}</div>
          </div>
          <div className="cv-header-contact">
            <div className="cv-header-contact-row">
              <a href={`mailto:${headerData.contactInfo.email}`}>
                {headerData.contactInfo.email}
              </a>
            </div>
            <div className="cv-header-contact-row">
              {headerData.contactInfo.phone}
            </div>
            <div className="cv-header-contact-row">
              <a href={`https://twitter.com/${headerData.contactInfo.twitter}`}>
                {headerData.contactInfo.twitter}
              </a>
            </div>
            <div className="cv-header-contact-row">
              <a href={`https://${headerData.contactInfo.web}`}>
                {headerData.contactInfo.web}
              </a>
            </div>
            <div className="cv-header-contact-row">
              <a href={`https://${headerData.contactInfo.github}`}>
                {headerData.contactInfo.github}
              </a>
            </div>
            <div className="cv-header-contact-row">
              <a href={`https://${headerData.contactInfo.linkedin}`}>
                {headerData.contactInfo.linkedin}
              </a>
            </div>
          </div>
        </div>
      )
    }}
  />
)

export default Header
