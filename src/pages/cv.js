import React from 'react'
import SEO from '../components/seo'

import Header from '../components/cv/Header'
import Experience from '../components/cv/Experience'
import Skills from '../components/cv/Skills'
import Education from '../components/cv/Education'

import '../styles/cv.css'

const cv = () => (
  <>
    <SEO
      title="resume"
      keywords={[`resume`, `cv`, `curriculum vitae`, `curriculum`]}
    />
    <div className="cv-page">
      <Header />
      <Experience />
      <Skills />
      <Education />
    </div>
  </>
)

export default cv
