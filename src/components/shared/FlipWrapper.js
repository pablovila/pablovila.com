import React from 'react'
import '../../styles/flip.css'

class FlipWrapper extends React.Component {
  state = {
    hovering: false,
  }

  render() {
    const className = this.state.hovering
      ? 'flip-container hover'
      : 'flip-container'
    return (
      <div
        className={className}
        onMouseEnter={() => this.setState({ hovering: true })}
        onMouseLeave={() => this.setState({ hovering: false })}
      >
        <div className="flipper">
          <div className="front">
            <this.props.front />
          </div>
          <div className="back">
            <this.props.back />
          </div>
        </div>
      </div>
    )
  }
}

export default FlipWrapper
