import React from 'react'

import FlipWrapper from './shared/FlipWrapper'
import MeImage from './images/MeImage'
import PvImage from './images/PvImage'

const Start = () => (
  <div id="start">
    <div className="center-container">
      <div className="me">
        <FlipWrapper front={MeImage} back={PvImage} />
      </div>
      <div className="text">
        Hi, I'm <strong>Pablo Vila</strong>.
        <br />
        I'm a full-stack developer.
      </div>
    </div>
  </div>
)

export default Start
