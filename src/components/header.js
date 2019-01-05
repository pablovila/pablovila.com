import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import styled from 'styled-components'

import {
  COLORS,
  FONT_WEIGHTS,
  MARGIN,
  TRANSITION,
  MEDIA_QUERIES,
} from '../styles/constants'
import PvImage from './pv-image'

const HeaderBar = styled.div`
  background: ${COLORS.white};
  padding: ${MARGIN.default};
  padding-top: 0px;
  padding-bottom: 0px;
  transition: ${TRANSITION};
  border-top: ${COLORS.red} 2px solid;
  border-image: ${`linear-gradient(to right, ${COLORS.red} 0%, ${
    COLORS.semiRed
  } 100%)`};
  border-image-slice: 1;

  @media (max-width: ${MEDIA_QUERIES.mobile}px) {
    padding: ${MARGIN.small};
    padding-top: 0px;
    padding-bottom: 0px;
    padding-left: 30px;
    padding-right: 30px;
  }
`

const HeaderBarContainer = styled.div`
  max-width: 960px;
  margin: 0 auto;
  display: flex;
  align-items: center;
`

const LogoContainer = styled.div`
  padding: 1em;
`

const LogoLink = styled(Link)`
  border: none;
  background-color: transparent !important;
`

const NavLinks = styled.div`
  padding: 1em;
  align-self: flex-end;
  display: grid;
  grid-gap: 30px;
  grid-template-columns: repeat(6, auto);
  align-items: center;
  margin-left: auto;
`

const NavLink = styled(AnchorLink)`
  font-weight: ${FONT_WEIGHTS.bold};
  color: ${COLORS.red};
  text-decoration: none;
`

const Header = () => (
  <HeaderBar>
    <HeaderBarContainer>
      <LogoContainer>
        <LogoLink to="/">
          <PvImage />
        </LogoLink>
      </LogoContainer>
      <NavLinks>
        <NavLink href="#about">About</NavLink>
        <NavLink href="#experience">Experience</NavLink>
        <NavLink href="#projects">Work</NavLink>
        <NavLink href="#learning">Learning</NavLink>
        <NavLink href="#contact">Contact</NavLink>
      </NavLinks>
    </HeaderBarContainer>
  </HeaderBar>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
