import PropTypes from 'prop-types'
import React from 'react'
import { Link } from 'gatsby'
import AnchorLink from 'react-anchor-link-smooth-scroll'

import Image, { images } from './shared/Image'

const offset = '96px'

const Header = () => (
  <header className="header-bar">
    <div className="header-bar-container">
      <div className="logo-container">
        <AnchorLink className="link" offset={offset} href="#start">
          <Image image={images.smallPv} />
        </AnchorLink>
      </div>
      <div className="nav-container">
        <AnchorLink className="nav-link" offset={offset} href="#about">
          About
        </AnchorLink>
        <AnchorLink className="nav-link" offset={offset} href="#skills">
          Skills
        </AnchorLink>
        <AnchorLink className="nav-link" offset={offset} href="#experience">
          Experience
        </AnchorLink>
        <AnchorLink className="nav-link" offset={offset} href="#contact">
          Contact
        </AnchorLink>
        <Link className="nav-link resume-link" to="cv">
          Resume
        </Link>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
