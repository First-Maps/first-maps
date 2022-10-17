import styled, { ThemeProvider } from "styled-components"
import { useState, useEffect } from 'react'

import "leaflet/dist/leaflet.css"
import "leaflet/dist/images/marker-shadow.png"

import { MapContainer, TileLayer, Marker, Popup, Tooltip, ZoomControl } from "react-leaflet";

// this is how we can style exotic components that styled-components doesn't support directly
const MyMapContainer = styled(MapContainer)`
  &[style] {
  min-height: 100vh;
  min-width: 100vw;
  }
`

// dark mode for the map
const MyTileLayer = styled(TileLayer)`
  &[style] {
    @media (prefers-color-scheme: dark) {
      filter: brightness(0.65) invert(1) contrast(4) hue-rotate(180deg)
        saturate(0.4);
    }
  }
`


export default function Map() {
  
  const position = [49.2833, -123.1152]
  const [markers, setMarkers] = useState([]);

  // TODO: useEffect to fetch data from API, then setMarkers
  useEffect(() => {
    fetch('/api/locationsOfInterest')
      .then(response => response.json())
      .then(pointsOfInterestData => {
        let coordinatesData = pointsOfInterestData.data
        console.log(coordinatesData)
        setMarkers(coordinatesData)
      })
      // setMarkers(data)
  }, [])


  const handleMarkers = () => {
    setMarkers()
  }

  return (
      <MyMapContainer
        center={position}
        zoom={13}
        scrollWheelZoom={true}
        zoomControl={false}
      >
        
        <MyTileLayer
          attribution='&copy; <a href="https://www.maptiler.com/copyright">MapTiler</a> | &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=27UbwLtYuQZu5sAt2zAj"
        />

        <ZoomControl position="bottomright" />

        <Marker position={position}>
          <Popup>Vancouver or thereabouts</Popup>
          <Tooltip>This is a tooltip for the marker</Tooltip>
        </Marker>
      </MyMapContainer>
  )
}
