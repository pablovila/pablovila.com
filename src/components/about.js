import React from 'react'

import AnimatedHeader from './shared/AnimatedHeader'
import AboutMap from './shared/AboutMap'
import WordCloud from './shared/WordCloud'

class About extends React.Component {
  state = {
    homeClicked: 0,
    randomClicked: 0,
    resetClicked: 0,
  }

  constructor(props) {
    super(props)
    this.onHomeClick = this.onHomeClick.bind(this)
    this.onRandomClick = this.onRandomClick.bind(this)
    this.onResetClick = this.onResetClick.bind(this)
  }

  onHomeClick() {
    this.setState({ homeClicked: this.state.homeClicked + 1 })
  }

  onRandomClick() {
    this.setState({ randomClicked: this.state.randomClicked + 1 })
  }

  onResetClick() {
    this.setState({ resetClicked: this.state.resetClicked + 1 })
  }

  render() {
    return (
      <div id="about">
        <AnimatedHeader>About Me</AnimatedHeader>
        <div className="grid-container">
          <div className="hello">
            <p>
              I'm a full-stack web developer with more than 8 years of
              experience and a wide range of skills and techniques. Currently,
              I'm a <em>Senior Software Developer</em> at{' '}
              <a href="https://www.cic.es/">CIC</a>. I'm an enthusiastic
              developer, I love to learn new things and apply them in my work.
              As a developer, it's critical to continue learning and improving
              our skills. I enjoy building interactive and dynamic websites with
              clean code and solid architecture. I consider myself tenacious,
              curious, collaborative and passionate.
            </p>
          </div>
          <div className="location">
            <p>
              Currently, I live in <em>Santander, Spain</em>. It's a peaceful,
              beautiful city and an amazing place to live and work. Travelling
              is one of my passions, so I'm open to relocation and work-related
              travel. I've done extensive geographic information systems work,
              and maps are another of my passions. Check out this map of where
              <button onClick={this.onHomeClick}>I live</button> and some of the
              places <button onClick={this.onRandomClick}> I've visited</button>
              .
            </p>
          </div>
          <div className="map">
            <AboutMap
              toHome={this.state.homeClicked}
              toRandom={this.state.randomClicked}
              toReset={this.state.resetClicked}
            />
          </div>
          <div className="journey">
            <p>
              My journey began when I was a child, I was gifted with a computer
              and I couldn't stop to investigate and breaking it. I've{' '}
              <em>Senior Technician in computer systems</em> degree. I learned
              some basic programming principles there. I started to work
              immediately when I finished my studies, but I knew it wasn't
              enough, so I've been learning ever since. Then, I was more
              interested in mobile devices, so I attended an{' '}
              <a href="https://www.edx.org/es/course/android-introduccion-a-la-programacion">
                Android development
              </a>{' '}
              course by UPV. In two years, I changed from systems team to mobile
              development team. My first big project was a GIS-oriented web with
              several tools for geoprocessing. I'm certified in{' '}
              <a href="https://www.youracclaim.com/badges/0778ec9f-13b5-4181-996e-92bad14dcf43/">
                Web Application Developer Associate
              </a>{' '}
              by ESRI. Since then, I've done many projects, some as back-end
              developer, some as front-end developer and others as full-stack
              developer. In many of my professional projects, I've developed
              complete GIS, web maps or geoprocessing tools. At present, I'm
              attending to{' '}
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
  }
}

export default About
