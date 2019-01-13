import React from 'react'
import styled from 'styled-components'

import { COLORS } from '../styles/constants'
import AnimatedHeader from './shared/AnimatedHeader'

import CesineImage from './images/CesineImage'
import CicImage from './images/CicImage'
import EsriImage from './images/EsriImage'
import UpvImage from './images/UpvImage'
import YoungerImage from './images/YoungerImage'

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto 1fr;
  grid-gap: 10px;
`

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
`

const Experience = () => (
  <div id="experience" className="experience">
    <AnimatedHeader>Experience</AnimatedHeader>
    <GridContainer>
      <DateContainer>Jan 2016 - Current</DateContainer>
      <PhotoContainer className="experienceImage">
        <CicImage />
      </PhotoContainer>
      <DescriptionContainer>
        Senior Software Developer - <strong>CIC</strong>
      </DescriptionContainer>

      <DateContainer>Jul 2018</DateContainer>
      <PhotoContainer className="experienceImage">
        <EsriImage />
      </PhotoContainer>
      <DescriptionContainer>
        Web Application Developer Associate Certification -{' '}
        <strong>ESRI</strong>
      </DescriptionContainer>

      <DateContainer>Jan 2013 - May 2013</DateContainer>
      <PhotoContainer className="experienceImage">
        <UpvImage />
      </PhotoContainer>
      <DescriptionContainer>
        Android Programming - <strong>UPV</strong>
      </DescriptionContainer>

      <DateContainer>May 2011 - Jul 2013</DateContainer>
      <PhotoContainer className="experienceImage">
        <CesineImage />
      </PhotoContainer>
      <DescriptionContainer>
        Java Programming - <strong>CESINE</strong>
      </DescriptionContainer>

      <DateContainer>May 2011 - Jan 2016</DateContainer>
      <PhotoContainer className="experienceImage">
        <YoungerImage />
      </PhotoContainer>
      <DescriptionContainer>
        Software Developer - <strong>CIC</strong>
      </DescriptionContainer>
    </GridContainer>
  </div>
)

export default Experience
