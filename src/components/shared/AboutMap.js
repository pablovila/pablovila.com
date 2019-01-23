import React, { Component } from 'react'
import {
  ComposableMap,
  ZoomableGroup,
  Geographies,
  Geography,
  Markers,
  Marker,
} from 'react-simple-maps'
import { StaticQuery, graphql } from 'gatsby'
import { Motion, spring } from 'react-motion'

import { COLORS } from '../../styles/constants'
import { relevantCountries } from '../../data/relevant-countries'

const wrapperStyles = {
  width: '100%',
  height: '100%',
  margin: '0 auto',
}

const cities = [
  { name: 'Santander', coordinates: [-3.8, 43.46], home: true },
  { name: 'Paris', coordinates: [2.349, 48.8647] },
  { name: 'Berlin', coordinates: [13.4049, 52.52] },
  { name: 'London', coordinates: [-0.118, 51.5098] },
  { name: 'Rome', coordinates: [12.4963, 41.9027] },
  { name: 'Madrid', coordinates: [-3.703, 40.4167] },
  { name: 'Barcelona', coordinates: [2.154, 41.39] },
  { name: 'Amsterdam', coordinates: [4.9418, 52.314] },
  { name: 'Moscow', coordinates: [37.618, 55.7512] },
]

const getRandomCity = () => {
  const randomIndex = Math.random() * (cities.length - 1) + 1
  return cities[Math.floor(randomIndex)]
}

class AboutMap extends Component {
  constructor(props) {
    super(props)
    this.state = {
      center: cities.find(c => c.name === 'Santander').coordinates,
      zoom: 1,
      toHome: props.toHome,
      toRandom: props.toRandom,
      toReset: props.toReset,
    }
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.toHome !== prevState.toHome)
      return { toHome: nextProps.toHome }
    if (nextProps.toRandom !== prevState.toRandom)
      return { toRandom: nextProps.toRandom }
    if (nextProps.toReset !== prevState.toReset)
      return { toReset: nextProps.toReset }
    return null
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.toHome !== this.props.toHome) {
      this.setState({ toHome: this.props.toHome })
      this.handleCityClick(cities.find(c => c.home).name)
    } else if (prevProps.toRandom !== this.props.toRandom) {
      this.setState({ toRandom: this.props.toRandom })
      this.handleCityClick('random')
    } else if (prevProps.toReset !== this.props.toReset) {
      this.setState({ toReset: this.props.toReset })
      this.handleReset()
    }
  }

  handleCityClick(cityName) {
    let city = cities.find(c => c.name === cityName)
    if (cityName === 'random') {
      city = getRandomCity()
    }
    this.setState({
      zoom: 2,
      center: city.coordinates,
    })
  }

  handleReset() {
    this.setState({
      center: cities.find(c => c.name === 'Santander').coordinates,
      zoom: 1,
    })
  }

  render() {
    const renderMap = data => (
      <div style={wrapperStyles}>
        <Motion
          defaultStyle={{
            zoom: 1,
            x: 0,
            y: 20,
          }}
          style={{
            zoom: spring(this.state.zoom, { stiffness: 210, damping: 20 }),
            x: spring(this.state.center[0], { stiffness: 210, damping: 20 }),
            y: spring(this.state.center[1], { stiffness: 210, damping: 20 }),
          }}
        >
          {({ zoom, x, y }) => (
            <ComposableMap
              projectionConfig={{
                scale: 450,
                rotation: [-11, 0, 0],
              }}
              width={500}
              height={300}
              style={{
                width: '100%',
                height: '100%',
              }}
            >
              <ZoomableGroup center={[x, y]} zoom={zoom} disablePanning>
                <Geographies geography={data.world.publicURL}>
                  {(geographies, projection) =>
                    geographies.map(
                      (geography, i) =>
                        relevantCountries.indexOf(geography.id) !== -1 && (
                          <Geography
                            key={i}
                            geography={geography}
                            projection={projection}
                            style={{
                              default: {
                                fill: COLORS.lightGray,
                                stroke: COLORS.gray,
                                strokeWidth: 1,
                                outline: 'none',
                              },
                              hover: {
                                fill: COLORS.gray,
                                stroke: COLORS.gray,
                                strokeWidth: 1,
                                outline: 'none',
                              },
                              pressed: {
                                fill: COLORS.red,
                                stroke: COLORS.gray,
                                strokeWidth: 1.5,
                                outline: 'none',
                              },
                            }}
                          />
                        )
                    )
                  }
                </Geographies>
                <Markers>
                  {cities.map((city, i) => (
                    <Marker key={i} marker={city} onClick={null}>
                      <circle
                        fill={city.home ? COLORS.red : COLORS.gray}
                        stroke={COLORS.darkerGray}
                        cx="0"
                        cy="0"
                        r={city.home ? 6 : 2}
                      />
                    </Marker>
                  ))}
                </Markers>
              </ZoomableGroup>
            </ComposableMap>
          )}
        </Motion>
      </div>
    )
    return (
      <StaticQuery
        query={graphql`
          query {
            world: file(relativePath: { eq: "world-50m.json" }) {
              publicURL
            }
          }
        `}
        render={data => renderMap(data)}
      />
    )
  }
}

export default AboutMap
