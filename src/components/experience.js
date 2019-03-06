import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import AnimatedHeader from './shared/AnimatedHeader'
import ExperienceItem from './shared/ExperienceItem'

import Image, { images } from './shared/Image'

const pabloExperience = [
  {
    date: 'Jan 2016 - Current',
    photo: () => <Image image={images.cic} />,
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
          business structure. #React.js #GIS #.NET #Oracle
        </li>
        <li>
          <FontAwesomeIcon icon="code-branch" listItem />
          Created a front-end solution integrating ArcGIS web map and Vaadin
          web. #ArcGIS API for JavaScript
        </li>
        <li>
          <FontAwesomeIcon icon="code-branch" listItem />
          Development of integration back-end service that manage several
          systems. #Java #Spring #Hibernate #MySQL
        </li>
      </ul>
    ),
  },
  {
    date: 'Jul 2018',
    photo: () => <Image image={images.esri} />,
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
    photo: () => <Image image={images.upv} />,
    title: (
      <>
        Android Programming - <strong>UPV</strong>
      </>
    ),
    desc: (
      <>
        Entry-level android programming course. Built a cloud-connected Android
        app, and learned best practices of mobile development, and Android
        development in particular. #Java #Android
      </>
    ),
  },
  {
    date: 'May 2011 - Jul 2013',
    photo: () => <Image image={images.cesine} />,
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
        other topics. #Java
      </>
    ),
  },
  {
    date: 'May 2011 - Jan 2016',
    photo: () => <Image image={images.youngerMe} />,
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
          complex situations to place business features. #Python #JavaScript
          #arcpy
        </li>
        <li>
          <FontAwesomeIcon icon="code-branch" listItem />
          Android app for technology company. Optimized launcher for children.
          #Android
        </li>
      </ul>
    ),
  },
]

const Experience = () => (
  <div id="experience">
    <AnimatedHeader>Experience</AnimatedHeader>
    <div className="grid-container">
      {pabloExperience.map((exp, index) => (
        <ExperienceItem
          key={index}
          date={exp.date}
          photo={exp.photo}
          title={exp.title}
          desc={exp.desc}
        />
      ))}
    </div>
  </div>
)

export default Experience
