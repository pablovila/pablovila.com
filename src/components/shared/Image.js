import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

export const images = {
  cesine: 'cesine',
  cic: 'cic',
  esri: 'esri',
  me: 'me',
  pv: 'pv',
  smallPv: 'smallpv',
  upv: 'upv',
  youngerMe: 'youngerme',
}

const Image = props => (
  <StaticQuery
    query={graphql`
      fragment fixedImage on File {
        childImageSharp {
          fixed(width: 150) {
            ...GatsbyImageSharpFixed
          }
        }
      }

      fragment experienceImage on File {
        childImageSharp {
          fixed(width: 64) {
            ...GatsbyImageSharpFixed
          }
        }
      }

      query {
        cesine: file(relativePath: { eq: "logotipo-cesine-color.png" }) {
          ...experienceImage
        }
        cic: file(relativePath: { eq: "logotipo-cic-color.png" }) {
          ...experienceImage
        }
        esri: file(relativePath: { eq: "logotipo-esri-color.png" }) {
          ...experienceImage
        }
        me: file(relativePath: { eq: "me.png" }) {
          ...fixedImage
        }
        pv: file(relativePath: { eq: "pv-red.png" }) {
          ...fixedImage
        }
        smallpv: file(relativePath: { eq: "pv-red.png" }) {
          childImageSharp {
            fixed(width: 52) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        upv: file(relativePath: { eq: "logotipo-upv-color.png" }) {
          ...experienceImage
        }
        youngerme: file(relativePath: { eq: "younger-me.png" }) {
          ...experienceImage
        }
      }
    `}
    render={data => <Img fixed={data[props.image].childImageSharp.fixed} />}
  />
)
export default Image
