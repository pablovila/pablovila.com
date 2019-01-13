import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Start from './start'
import Header from './header'
import { BODY_WIDTH, COLORS } from '../styles/constants'
import { StyledLink } from './shared/StyledComponents'
import Contact from '../components/contact'

import '../styles/layout.css'
import 'animate.css/animate.min.css'

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
} from '@fortawesome/free-solid-svg-icons'

library.add(
  faLinkedinIn,
  faMediumM,
  faTwitter,
  faGithub,
  faLightbulb,
  faLaptop,
  faAlignJustify
)

const Body = styled.div``

const BodyContainer = styled.div`
  margin: 0 auto;
  max-width: ${BODY_WIDTH};
  padding: 0px 1.0875rem 1.45rem;
`

const StyledFooter = styled('footer')`
  background: ${COLORS.darkerGray};
  color: white;
`

const FooterContent = styled.div`
  margin: 0 auto;
  max-width: ${BODY_WIDTH};
  padding: 2em;
`

const Layout = ({ children }) => (
  <>
    <Start />
    <Header />
    <Body>
      <BodyContainer>{children}</BodyContainer>
      <StyledFooter>
        <FooterContent>
          <Contact />© {new Date().getFullYear()} — Web app coded and designed
          by{' '}
          <StyledLink href="https://twitter.com/pablovilafer">
            Pablo Vila
          </StyledLink>{' '}
          using <StyledLink href="https://www.gatsbyjs.org">Gatsby</StyledLink>
        </FooterContent>
      </StyledFooter>
    </Body>
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
