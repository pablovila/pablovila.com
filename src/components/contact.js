import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { StyledLink } from './shared/StyledComponents'

const ContactContainer = styled.div`
  text-align: center;
`

const GridContainer = styled.div`
  display: inline-grid;
  grid-template-columns: repeat(4, auto);
  grid-gap: 1em;
  padding-bottom: 1.58rem;
`

const ContactLink = styled.a`
  background: #262f38;
  border: none;
  color: white;
  padding: 10px 15px;
  font-size: 30px;
`

const Contact = () => (
  <ContactContainer id="contact">
    <p>
      Feel free to contact me and say "Hi", <br /> via{' '}
      <StyledLink href="mailto:pablo.vilafer@gmail.com">email</StyledLink> or
      find me online.
    </p>
    <GridContainer>
      <ContactLink href="https://twitter.com/pablovilafer" target="_blank">
        <FontAwesomeIcon icon={['fab', 'twitter']} fixedWidth />
      </ContactLink>
      <ContactLink href="https://www.linkedin.com/in/pablovila" target="_blank">
        <FontAwesomeIcon icon={['fab', 'linkedin-in']} fixedWidth />
      </ContactLink>
      <ContactLink href="https://github.com/pablovila/" target="_blank">
        <FontAwesomeIcon icon={['fab', 'github']} fixedWidth />
      </ContactLink>
      <ContactLink href="https://medium.com/@pablovilafer" target="_blank">
        <FontAwesomeIcon icon={['fab', 'medium-m']} fixedWidth />
      </ContactLink>
    </GridContainer>
  </ContactContainer>
)

export default Contact
