import React from 'react'
import styled from 'styled-components'

import AnimatedHeader from './shared/AnimatedHeader'
import AboutMap from './shared/AboutMap'
import WordCloud from './shared/WordCloud'
import { COLORS } from '../styles/constants'

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  grid-template-areas: 'helloP helloP' 'locationP map' 'journeyP journeyP' 'cloud cloud';
`
const HelloP = styled.div`
  grid-area: helloP;
`

const LocationP = styled.div`
  grid-area: locationP;
  align-self: center;
`

const JourneyP = styled.div`
  grid-area: journeyP;
  padding-top: 1em;
`

const Cloud = styled.div`
  grid-area: cloud;
  height: 380px;
`

const Map = styled.div`
  grid-area: map;
  border-bottom: 2px solid ${COLORS.red};
`

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
        <GridContainer>
          <HelloP>
            <p>
              Hello! I'm <strong>Pablo Vila</strong>, a full-stack web developer
              with over 8 years of experience in a wide range of skills,
              techniques and development. Currently, I'm working at{' '}
              <a href="https://www.cic.es/">CIC</a> as{' '}
              <strong>Senior Software Developer</strong>. I'm an enthusiastic
              developer, I love to learn new things and apply them in my work. I
              think, as a developer, we can never stop to learn and improve our
              skills. I like to build interactive and dynamic webs through clean
              code and solid architecture. I consider myself tenacious, curious,
              collaborative and passionate.
            </p>
          </HelloP>
          <LocationP>
            Currently, I'm living in <strong>Santander, Spain</strong>. It's an
            amazing place to live and work, it's peaceful and beautiful. One of
            my passions is travel around. So, I'm willing to go to more places
            to work and enjoy. Also, maps are one of my other passions, so I've
            added an interactive map where you can see where is{' '}
            <button onClick={this.onHomeClick}>my city</button>, some{' '}
            <button onClick={this.onRandomClick}>random city</button> I've been
            or <button onClick={this.onResetClick}>reset</button> map.
          </LocationP>
          <Map>
            <AboutMap
              toHome={this.state.homeClicked}
              toRandom={this.state.randomClicked}
              toReset={this.state.resetClicked}
            />
          </Map>
          <JourneyP>
            <p>
              My journey began when I was a child, I was gifted with a computer
              and I couldn't stop to investigate and breaking it. I studied
              Systems Administrator course in my hometown. I learned some basic
              programming principles there. I started to work immediately when I
              finished my studies, but I knew it wasn't enough, so I've been
              learning ever since. Then, I was more interested in mobile
              devices, so I attended an{' '}
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
          </JourneyP>
          <Cloud>
            <WordCloud />
          </Cloud>
        </GridContainer>
      </div>
    )
  }
}

export default About
