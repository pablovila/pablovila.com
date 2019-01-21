import PropTypes from 'prop-types'
import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import styled from 'styled-components'

import PvLogo from './images/PvLogo'

import {
  BODY_WIDTH,
  COLORS,
  FONT_WEIGHTS,
  MARGIN,
  TRANSITION,
  MEDIA_QUERIES,
  HEADER_HEIGHT,
} from '../styles/constants'

const HeaderBar = styled.div`
  background-color: ${COLORS.white};
  padding: ${MARGIN.default};
  padding-top: 0px;
  padding-bottom: 0px;
  transition: ${TRANSITION};
  border-bottom: ${COLORS.red} 4px solid;
  position: sticky;
  top: 0;
  z-index: 1000;
  @media (max-width: ${MEDIA_QUERIES.mobile}px) {
    padding: ${MARGIN.small};
    padding-top: 0px;
    padding-bottom: 0px;
    padding-left: 30px;
    padding-right: 30px;
  }
`

const HeaderBarContainer = styled.div`
  max-width: ${BODY_WIDTH};
  margin: 0 auto;
  display: flex;
  align-items: center;
`

const LogoContainer = styled.div`
  padding: 10px;
  margin: 0;
  height: ${HEADER_HEIGHT}px;
  width: ${HEADER_HEIGHT}px;
`

const LogoLink = styled(AnchorLink)`
  border: none;
  background-color: transparent !important;
`

const NavLinks = styled.div`
  padding: 20px;
  align-self: flex-end;
  display: grid;
  grid-gap: 30px;
  grid-template-columns: repeat(6, auto);
  align-items: center;
  margin-left: auto;
`

const NavLink = styled(AnchorLink)`
  font-weight: ${FONT_WEIGHTS.bold};

  text-decoration: none;
`
const offset = HEADER_HEIGHT + 24 + 'px'

const Header = () => (
  <HeaderBar>
    <HeaderBarContainer>
      <LogoContainer>
        <LogoLink href="#start">
          <PvLogo />
        </LogoLink>
      </LogoContainer>
      <NavLinks>
        <NavLink offset={offset} href="#about">
          About
        </NavLink>
        <NavLink offset={offset} href="#skills">
          Skills
        </NavLink>
        <NavLink offset={offset} href="#experience">
          Experience
        </NavLink>
        <NavLink offset={offset} href="#contact">
          Contact
        </NavLink>
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
