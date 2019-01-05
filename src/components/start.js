import React from 'react'
import styled from 'styled-components'

import {
  HEADER_BORDER_HEIGHT,
  BACKGROUND_SVG,
  COLORS,
} from '../styles/constants'

import MeImage from './shared/MeImage'

const StartContainer = styled.div`
  width: 100%;
  height: calc(100vh - ${HEADER_BORDER_HEIGHT});
  background-color: ${COLORS.darkGray};
  background-image: ${BACKGROUND_SVG};
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const CenterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const MeContainer = styled.div`
  padding: 1em 0;
`

const TextContainer = styled.div`
  font-size: 32pt;
  line-height: 36pt;
  color: white;
  text-align: center;
`

const Highlight = styled.span`
  color: ${COLORS.red};
`

const Start = () => (
  <StartContainer id="start">
    <CenterContainer>
      <MeContainer>
        <MeImage />
      </MeContainer>
      <TextContainer>
        Hello, I'm <Highlight>Pablo Vila</Highlight>.
        <br />
        I'm a full-stack web developer.
      </TextContainer>
    </CenterContainer>
  </StartContainer>
)

export default Start
