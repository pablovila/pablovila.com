import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import AnimatedHeader from './shared/AnimatedHeader'
import ExperienceItem from './shared/ExperienceItem'

import CesineImage from './images/CesineImage'
import CicImage from './images/CicImage'
import EsriImage from './images/EsriImage'
import UpvImage from './images/UpvImage'
import YoungerImage from './images/YoungerImage'

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto 1fr;
  grid-gap: 10px;
`

const pabloExperience = [
  {
    date: 'Jan 2016 - Current',
    photo: CicImage,
    title: (
      <>
        Senior Software Developer - <strong>CIC</strong>
      </>
    ),
    desc: (
      <ul>
        <li>
          <FontAwesomeIcon icon="code-branch" listItem />
          Built and maintained a web platform to manage job orders within a
          business structure. #<strong>React.js</strong> #<strong>GIS</strong> #
          <strong>Redux</strong> #<strong>ArcGIS JavaScript API</strong>
        </li>
        <li>
          <FontAwesomeIcon icon="code-branch" listItem />
          Created a front-end solution integrating ArcGIS web map and Vaadin
          web. #<strong>Vaadin</strong> #<strong>Dojo</strong>
        </li>
        <li>
          <FontAwesomeIcon icon="code-branch" listItem />
          Development of integration back-end services negotiating between
          several inputs. #<strong>Java</strong> #<strong>Spring</strong> #
          <strong>Mule ESB</strong>
        </li>
      </ul>
    ),
  },
  {
    date: 'Jul 2018',
    photo: EsriImage,
    title: (
      <>
        Web Application Developer Associate Certification -{' '}
        <strong>ESRI</strong>
      </>
    ),
    desc: (
      <>
        Proficiency using ArcGIS technologies to build web applications with
        object-oriented programming, application documentation, maintenance,
        performance, and implementing client-side and server-side security, and
        with Esri's ArcGIS technologies and best practices.
      </>
    ),
  },
  {
    date: 'Jan 2013 - May 2013',
    photo: UpvImage,
    title: (
      <>
        Android Programming - <strong>UPV</strong>
      </>
    ),
    desc: (
      <>
        Entry-level android programming course. Builted a cloud-connected
        Android app, and learned best practices of mobile development, and
        Android development in particular. #<strong>Java</strong> #
        <strong>Android</strong>
      </>
    ),
  },
  {
    date: 'May 2011 - Jul 2013',
    photo: CesineImage,
    title: (
      <>
        Java Programming - <strong>CESINE</strong>
      </>
    ),
    desc: (
      <>
        Intense course in one of most prestigious universities of Spain. I
        learned basic concepts, design patterns, computer structure,
        object-oriented programming, functional programming and algorithms among
        other topics. #<strong>Java</strong>
      </>
    ),
  },
  {
    date: 'May 2011 - Jan 2016',
    photo: YoungerImage,
    title: (
      <span>
        Software Developer - <strong>CIC</strong>
      </span>
    ),
    desc: (
      <ul>
        <li>
          <FontAwesomeIcon icon="code-branch" listItem />
          GIS web app to create and manage renewable projects for important
          electric company. Also, geoprocessing tools to locate and calculate
          complex situations to place business features. #
          <strong>Python</strong> #<strong>JavaScript</strong> #
          <strong>arcPy</strong>
        </li>
      </ul>
    ),
  },
]

const Experience = () => (
  <div id="experience" className="experience">
    <AnimatedHeader>Experience</AnimatedHeader>
    <GridContainer>
      {pabloExperience.map((exp, index) => (
        <ExperienceItem
          key={index}
          date={exp.date}
          photo={exp.photo}
          title={exp.title}
          desc={exp.desc}
        />
      ))}
    </GridContainer>
  </div>
)

export default Experience
