import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import About from '../components/about'
import Skills from '../components/skills'
import Experience from '../components/experience'
import Contact from '../components/contact'

const IndexPage = () => (
  <Layout>
    <SEO title="HOME" keywords={[`gatsby`, `application`, `react`]} />
    <About />
    <Experience />
    <Skills />
    <Contact />
  </Layout>
)

export default IndexPage
