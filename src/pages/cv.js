import React, { Component } from 'react'
import Highlight from 'react-highlight'

import SEO from '../components/seo'
import Header from '../components/cv/Header'
import Experience from '../components/cv/Experience'
import Skills from '../components/cv/Skills'
import Education from '../components/cv/Education'

import CvJson from '../data/cv.json'

import '../styles/cv.css'
import 'highlight.js/styles/github.css'

class Cv extends Component {
  state = {
    codeView: false,
  }

  constructor() {
    super()
    this.onViewCodeClick = this.onViewCodeClick.bind(this)
  }

  onViewCodeClick() {
    this.setState(state => ({
      codeView: !state.codeView,
    }))
  }

  render() {
    let cv = <></>
    if (this.state.codeView) {
      cv = (
        <>
          <div className="cv-json-container">
            <Highlight className="json">
              {JSON.stringify(CvJson, null, '\t')}
            </Highlight>
          </div>
          <div className="cv-switcher" onClick={this.onViewCodeClick}>
            View CV
          </div>
        </>
      )
    } else {
      cv = (
        <>
          <Header />
          <Experience />
          <Skills />
          <Education />
          <div className="cv-switcher" onClick={this.onViewCodeClick}>
            View code
          </div>
        </>
      )
    }

    return (
      <>
        <SEO
          title="CV"
          keywords={[`resume`, `cv`, `curriculum vitae`, `curriculum`]}
        />
        <div className="cv-page">{cv}</div>
      </>
    )
  }
}
export default Cv
