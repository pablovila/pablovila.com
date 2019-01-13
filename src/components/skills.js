import React from 'react'
import styled from 'styled-components'

import AnimatedHeader from './shared/AnimatedHeader'
import WordCloud from './WordCloud'
import { COLORS } from '../styles/constants'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const CardContainer = styled.div`
  display: inline-grid;
  grid-template-columns: repeat(3, ${100 / 3}%);
  grid-gap: 2em;
  padding-bottom: 1.58rem;
`

const Card = styled.div`
  border-radius: 6px;
  border-top: 6px solid ${COLORS.red};
  background: ${COLORS.lightGray};
  padding: 20px;
  text-align: center;
`
const IconContainer = styled.div`
  color: ${COLORS.red};
  font-size: 40px;
`

const Header2 = styled.h2`
  margin-top: 0;
  min-height: 62px;
`

const SkillsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-gap: 1em;
`

const CloudContainer = styled.div`
  grid-area: 2 / 1 / 3 / 3;
`

const Skills = () => (
  <div id="skills">
    <AnimatedHeader>Skills</AnimatedHeader>
    <CardContainer>
      <Card>
        <IconContainer>
          <FontAwesomeIcon icon="lightbulb" />
        </IconContainer>
        <Header2>Web Design</Header2>
        <h4>Responsive and fast</h4>
        <p>
          I like to build beautiful web apps considering responsiveness and
          speed. For each web there are some suitable solution.
        </p>
      </Card>
      <Card>
        <IconContainer>
          <FontAwesomeIcon icon="align-justify" />
        </IconContainer>
        <Header2>Clean and Solid Architecture</Header2>
        <h4>Design patterns</h4>
        <p>
          One of my priorities is apply design patterns. Not always it's
          required but I try to think if it's good for the solution I'm
          developing.
        </p>
      </Card>
      <Card>
        <IconContainer>
          <FontAwesomeIcon icon="laptop" />
        </IconContainer>
        <Header2>Full-Stack Development</Header2>
        <h4>Thinking big</h4>
        <p>
          Although I'm not an expert in every aspect of the stack, I have enough
          knowledge of the stack to apply best solution that the project
          requires.
        </p>
      </Card>
    </CardContainer>
    <SkillsContainer>
      <p>
        Main area of my expertise is <strong>front-end</strong> development,
        I've developed several projects mixing my knowledge in HTML, CSS and
        JavaScript (<strong>React.js</strong>, TypeScript). I've developed too
        some <strong>back-end</strong> projects using different technologies
        like C# and EntityFramework, Java, Hibernate and Spring or Python, Flask
        and SQLAlchemy. In the past, I've developed webs using jQuery and
        Bootstrap. I've developed too some desktop tools like geoprocessing
        tools using Python and arcpy.
      </p>
      <p>
        Also, I've done some experiments with Android apps and Swift iOS apps.
        Other skills that I have are Photoshop design, sense of humour or
        practicing sports. Also, I love learning new languages, traveling
        around, hiking or going to coding conferences. Of course, I can't be as
        good in every aspect I told. So, I've added a word cloud with some of my
        most important skills.
      </p>
      <CloudContainer>
        <WordCloud />
      </CloudContainer>
    </SkillsContainer>
  </div>
)

export default Skills
