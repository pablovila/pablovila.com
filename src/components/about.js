import React from 'react'

import AnimatedHeader from './shared/AnimatedHeader'
import WordCloud from './shared/WordCloud'

const About = () => (
  <div id="about">
    <AnimatedHeader>About Me</AnimatedHeader>
    <div className="grid-container">
      <div className="hello">
        <p>
          I'm a front-end developer with more than 8 years of experience and a
          wide range of skills and techniques. Currently, I'm a{' '}
          <em>Senior Software Developer</em> at{' '}
          <a href="https://www.cic.es/">CIC</a>. I'm an enthusiastic developer,
          I love to learn new things and apply them in my work. As a developer,
          it's critical to continue learning and improving our skills. I enjoy
          building interactive and dynamic websites with clean code and solid
          architecture. I consider myself tenacious, curious, collaborative and
          passionate.
        </p>
      </div>
      <div className="location">
        <p>
          Currently, I live in <em>Santander, Spain</em>. It's a peaceful,
          beautiful city and an amazing place to live and work. Travelling is
          one of my passions, so I'm open to relocation and work-related travel.
        </p>
      </div>
      <div className="journey1">
        <p>
          My journey began when I was a child, I was gifted with a computer and
          I couldn't stop to investigate and breaking it. I graduated as{' '}
          <em>Senior Technician in Computer Systems</em>. I learned some basic
          programming principles there. I started to work immediately when I
          finished my studies, but I knew it wasn't enough, so I've been
          learning ever since. Then, I was more interested in mobile programming
          and apps.
        </p>
      </div>
      <div className="journey2">
        <p>
          So I attended an{' '}
          <a href="https://www.edx.org/es/course/android-introduccion-a-la-programacion">
            Android development
          </a>{' '}
          course by UPV. My first big project was a GIS-oriented web with
          several tools for geoprocessing. I'm certified as{' '}
          <a href="https://www.youracclaim.com/badges/0778ec9f-13b5-4181-996e-92bad14dcf43/">
            Web Application Developer Associate
          </a>{' '}
          by ESRI. Since then, I've done many projects, some as back-end
          developer, some as front-end developer and others as full-stack
          developer. At present, I'm attending to{' '}
          <a href="https://www.esri.es/cursos-y-master/experto-desarrollo/">
            GIS Development Expert
          </a>{' '}
          course by ESRI.
        </p>
      </div>
      <div className="cloud">
        <WordCloud />
      </div>
    </div>
  </div>
)

export default About
