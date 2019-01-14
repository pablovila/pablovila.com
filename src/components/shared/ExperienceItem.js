import React from 'react'
import styled from 'styled-components'

import { COLORS } from '../../styles/constants'

const DateContainer = styled.div`
  color: ${COLORS.darkGray};
  font-size: small;
  align-self: center;
  justify-self: end;
`
const PhotoContainer = styled.div`
  align-self: center;
  justify-self: center;
  height: 72px;
  width: 72px;
  padding: 8px;
  position: relative;
`
const DescriptionContainer = styled.div`
  justify-self: start;
  padding: 10px;
  font-size: 15px;
  color: ${COLORS.gray};
`

const ExperienceItem = props => (
  <>
    <DateContainer>{props.date} </DateContainer>
    <PhotoContainer className="experienceImage">
      <props.photo />
    </PhotoContainer>
    <DescriptionContainer>
      <h4>{props.title}</h4>
      <br />
      {props.desc}
    </DescriptionContainer>
  </>
)

export default ExperienceItem
