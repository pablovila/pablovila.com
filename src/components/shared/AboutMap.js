import React from 'react'
import { Map, TileLayer, Marker } from 'react-leaflet'

const SantanderPosition = {
  lat: 43.46472,
  lng: -3.80444,
}

class AboutMap extends React.Component {
  state = {
    latlng: {
      lat: 43.46472,
      lng: -3.80444,
    },
    zoom: 4,
    markerVisible: false,
  }

  constructor(props) {
    super(props)
    this.mapRef = React.createRef()
  }

  componentDidMount() {
    this.map = this.mapRef.current.leafletElement
    this.map.on('zoomend', () => {
      if (this.props.centerOn) this.props.onZoomEnd()
    })
  }

  componentDidUpdate() {
    if (this.props.centerOn) {
      if (this.state.markerVisible) {
        this.setState({ markerVisible: false })
      }
      if (this.map.getZoom() > 11) {
        this.map.flyTo(this.map.getCenter(), 8, {
          animate: true,
          duration: 3,
        })
        setTimeout(() => {
          this.moveToSantander()
        }, 1000)
      } else {
        this.moveToSantander()
      }
    } else if (!this.state.markerVisible) {
      this.setState({ markerVisible: true })
    }
  }

  moveToSantander() {
    this.map.flyTo([SantanderPosition.lat, SantanderPosition.lng], 11, {
      animate: true,
      duration: 3,
    })
  }

  render() {
    const marker = this.state.markerVisible ? (
      <Marker position={SantanderPosition} />
    ) : (
      ''
    )

    return (
      <Map
        style={{ zIndex: 999, height: '100%' }}
        center={this.state.latlng}
        zoom={this.state.zoom}
        ref={this.mapRef}
      >
        <TileLayer
          url="https://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.{ext}"
          subdomains="abcd"
          minZoom={1}
          maxZoom={16}
          ext="jpg"
        />
        <TileLayer
          url="https://stamen-tiles-{s}.a.ssl.fastly.net/toner-hybrid/{z}/{x}/{y}{r}.{ext}"
          subdomains="abcd"
          minZoom={0}
          maxZoom={20}
          ext="png"
        />
        {marker}
      </Map>
    )
  }
}

export default AboutMap
