import React from 'react'
import styled from 'styled-components'

import { BACKGROUND_SVG, COLORS } from '../styles/constants'

import FlipWrapper from './shared/FlipWrapper'
import MeImage from './images/MeImage'
import PvImage from './images/PvImage'

const StartContainer = styled.div`
  width: 100%;
  height: 760px;
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

const Start = () => (
  <StartContainer id="start">
    <CenterContainer>
      <MeContainer>
        <FlipWrapper front={MeImage} back={PvImage} />
      </MeContainer>
      <TextContainer>
        Hello, I'm <strong>Pablo Vila</strong>.
        <br />
        I'm a full-stack developer.
      </TextContainer>
    </CenterContainer>
  </StartContainer>
)

export default Start
