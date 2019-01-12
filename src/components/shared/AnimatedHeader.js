import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll'

class AnimatedHeader extends React.Component {
  state = {
    animated: false,
  }

  render() {
    const AnimHeader = () => (
      <ScrollAnimation
        animateIn="fadeInLeftBig"
        animateOnce={true}
        duration={0.8}
        afterAnimatedIn={() => {
          this.setState({ animated: true })
        }}
      >
        <h1>{this.props.children}</h1>
      </ScrollAnimation>
    )

    const StaticHeader = () => <h1>{this.props.children}</h1>

    return this.state.animated ? <StaticHeader /> : <AnimHeader />
  }
}

export default AnimatedHeader
