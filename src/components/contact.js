import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const twitter = 'https://twitter.com/pablovilafer'
const linkedin = 'https://www.linkedin.com/in/pablovila'
const github = 'https://github.com/pablovila/'
const medium = 'https://medium.com/@pablovilafer'

const ExternalLink = props => (
  <a
    className="link"
    href={props.href}
    target="_blank"
    rel="noopener noreferrer"
  >
    {props.children}
  </a>
)

const Contact = () => (
  <div id="contact">
    <p>
      Feel free to contact me and say "Hi", <br /> via{' '}
      <a className="red" href="mailto:pablo.vilafer@gmail.com">
        email
      </a>{' '}
      or find me online.
    </p>
    <div className="grid-container">
      <ExternalLink href={twitter}>
        <FontAwesomeIcon icon={['fab', 'twitter']} fixedWidth />
      </ExternalLink>
      <ExternalLink href={linkedin}>
        <FontAwesomeIcon icon={['fab', 'linkedin-in']} fixedWidth />
      </ExternalLink>
      <ExternalLink href={github}>
        <FontAwesomeIcon icon={['fab', 'github']} fixedWidth />
      </ExternalLink>
      <ExternalLink href={medium}>
        <FontAwesomeIcon icon={['fab', 'medium-m']} fixedWidth />
      </ExternalLink>
    </div>
  </div>
)

export default Contact
