import React from 'react'

import FlipWrapper from './shared/FlipWrapper'
import Image, { images } from './shared/Image'

const Start = () => (
  <div id="start">
    <div className="center-container">
      <div className="me">
        <FlipWrapper
          front={() => <Image image={images.me} />}
          back={() => <Image image={images.pv} />}
        />
      </div>
      <div className="text">
        Hi, I'm <strong>Pablo Vila</strong>.
        <br />
        I'm a Front-End Developer.
      </div>
    </div>
  </div>
)

export default Start
