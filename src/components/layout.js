import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Start from './start'
import Header from './header'
import { BODY_WIDTH } from '../styles/constants'
import '../styles/layout.css'
import 'animate.css/animate.min.css'

const BodyContainer = styled.div`
  margin: 0 auto;
  max-width: ${BODY_WIDTH};
  padding: 0px 1.0875rem 1.45rem;
`

const Layout = ({ children }) => (
  <>
    <Start />
    <Header />
    <BodyContainer>
      {children}
      <footer>
        © {new Date().getFullYear()} — Web app designed and coded by{' '}
        <a href="https://www.twitter.com/pablovilafer">Pablo Vila</a> using{' '}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </BodyContainer>
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
