import React, { Component } from 'react'
import TagCloud from 'react-tag-cloud'
import randomColor from 'randomcolor'

import { COLORS } from '../../styles/constants'

const styles = {
  default: {
    fontFamily: 'sans-serif',
    fontSize: 30,
    fontStyle: 'italic',
    padding: 6,
  },
  large: {
    fontSize: 60,
    fontWeight: 'bold',
    color: COLORS.red,
  },
  small: {
    fontSize: 16,
  },
}

const words = {
  large: ['Node.js', 'JavaScript', 'React.js', 'GIS'],
  default: [
    'Swift',
    'Android',
    'Spring',
    'Animations',
    'Java',
    'Github',
    'C#',
    'Full Stack',
    'Python',
    'arcpy',
    'Hibernate',
    'Redux',
    'MySQL',
    'HTML',
    'CSS',
    'ES6',
    'REST',
    'JSON',
    'Bootstrap',
    'Cypress',
    'Design',
    'C++',
    'SQL',
    'JSX',
    'Git',
    'TypeScript',
    'npm',
    'EntityFramework',
  ],
  small: [
    'SQLAlchemy',
    'Sass',
    'LESS',
    'OpenSource',
    'Cordova',
    'Flask',
    'Dojo',
    'TDD',
    'Angular',
    'Vaadin',
    'jQuery',
    'Vue.js',
    'Polymer',
    'Webpack',
    'Yarn',
    'Jest',
  ],
}

class WordCloud extends Component {
  componentDidMount() {
    setInterval(() => {
      this.forceUpdate()
    }, 10000)
  }

  renderWords() {
    const result = []
    for (const key in words) {
      words[key].forEach(word => {
        const style = { ...styles[key] }
        if (key === 'default') {
          style.color = randomColor({
            luminosity: 'dark',
            hue: 'red',
            format: 'rgba',
            alpha: 2 / 3,
          })
        }
        if (key === 'small') {
          style.color = randomColor({
            luminosity: 'dark',
            hue: 'red',
            format: 'rgba',
            alpha: 1 / 3,
          })
        }
        result.push(
          <div key={word} style={style}>
            {word}
          </div>
        )
      })
    }
    return result
  }

  render() {
    return (
      <TagCloud className="cloud" style={styles.default}>
        {this.renderWords()}
      </TagCloud>
    )
  }
}

export default WordCloud
