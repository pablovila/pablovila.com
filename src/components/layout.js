import React from 'react'
import PropTypes from 'prop-types'

import Start from './start'
import Header from './header'
import Contact from '../components/contact'

import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faLinkedinIn,
  faMediumM,
  faTwitter,
  faGithub,
} from '@fortawesome/free-brands-svg-icons'
import {
  faLightbulb,
  faLaptop,
  faAlignJustify,
  faCodeBranch,
} from '@fortawesome/free-solid-svg-icons'

library.add(
  faLinkedinIn,
  faMediumM,
  faTwitter,
  faGithub,
  faLightbulb,
  faLaptop,
  faAlignJustify,
  faCodeBranch
)

const Layout = ({ children }) => (
  <>
    <Header />
    <Start />
    <div>
      <div className="body-container">{children}</div>
      <footer className="footer">
        <div className="footer-container">
          <Contact />© {new Date().getFullYear()} — Web app coded and designed
          by{' '}
          <a className="red" href="https://twitter.com/pablovilafer">
            Pablo Vila
          </a>{' '}
          using{' '}
          <a className="red" href="https://www.gatsbyjs.org">
            Gatsby
          </a>
        </div>
      </footer>
    </div>
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
