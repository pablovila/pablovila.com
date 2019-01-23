import React from 'react'

import AnimatedHeader from './shared/AnimatedHeader'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Skills = () => (
  <div id="skills">
    <AnimatedHeader>Skills</AnimatedHeader>
    <div className="card-container">
      <div className="card card1">
        <div className="icon-container red">
          <FontAwesomeIcon icon="lightbulb" />
        </div>
        <h2 className="header">Web Design</h2>
        <h4>Responsive and fast</h4>
        <p>
          I like to build beautiful web apps considering responsiveness and
          speed. For each web there's some suitable solution.
        </p>
      </div>
      <div className="card card2">
        <div className="icon-container red">
          <FontAwesomeIcon icon="align-justify" />
        </div>
        <h2 className="header">Clean and Solid Architecture</h2>
        <h4>Design patterns</h4>
        <p>
          One of my priorities is apply design patterns. Not always it's
          required but I try to think if it's good for the solution I'm
          developing.
        </p>
      </div>
      <div className="card card3">
        <div className="icon-container red">
          <FontAwesomeIcon icon="laptop" />
        </div>
        <h2 className="header">Full-Stack Development</h2>
        <h4>Thinking big</h4>
        <p>
          Although I'm not an expert in every aspect of the stack, I have enough
          knowledge of the stack to apply best solution that the project
          requires.
        </p>
      </div>
    </div>
    <div className="skills-container">
      <p>
        Main area of my expertise is front-end development, I've developed
        several projects mixing my knowledge in HTML, CSS and JavaScript (
        <em>React.js</em>, <em>Ionic</em>, <em>TypeScript</em>). Also, I've
        built some back-end projects using different technologies like{' '}
        <em>C#</em> and <em>EntityFramework</em>, <em>Java</em>,{' '}
        <em>Hibernate</em> and <em>Spring</em> or <em>Python</em>,{' '}
        <em>Flask</em> and <em>SQLAlchemy</em>. In the past, I used{' '}
        <em>jQuery</em> and <em>Bootstrap</em> for web developing.
      </p>
      <p>
        Altough it's not my priority, I've done too some projects for desktop
        like geoprocessing tools using <em>Python</em> and <em>arcpy</em>. Also,
        I've done some experiments with Android apps and Swift iOS apps. Other
        skills that I have are Photoshop design, sense of humour or practicing
        sports. Also, I love learning new languages, traveling around, hiking or
        going to coding conferences.
      </p>
    </div>
  </div>
)

export default Skills
