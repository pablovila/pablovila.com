import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import About from '../components/about'
import Skills from '../components/skills'
import Experience from '../components/experience'

const IndexPage = () => (
  <Layout>
    <SEO title="HOME" keywords={[`gatsby`, `application`, `react`]} />
    <About />
    <Experience />
    <Skills />
  </Layout>
)

export default IndexPage
