import React from 'react'

const ExperienceItem = props => (
  <>
    <div className="date-container">{props.date} </div>
    <div className="experience-image">
      <props.photo />
    </div>
    <div className="description-container">
      <h4>{props.title}</h4>
      <br />
      {props.desc}
    </div>
  </>
)

export default ExperienceItem
