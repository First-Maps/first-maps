import styled, { ThemeProvider } from "styled-components"
import { useState, useEffect } from 'react'
import axios from 'axios'

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

  // fetch locationsOfInterest data from database, setMarkers to the data
  useEffect(() => {
    const abortController = new AbortController()

    ; (async () => {
      try {
        //let Data = await axios.get("/api/locationsOfInterest", { signal: abortController.signal })
        let Data = await axios.get("/api/devLocationsOfInterest", { signal: abortController.signal })


        let locationsOfInterestArray = Data.data.data

        for (let location of locationsOfInterestArray) {
          let temp = location.coordinates[0]
          location.coordinates[0] = location.coordinates[1]
          location.coordinates[1] = temp
          console.log(location)
        }
        setMarkers(locationsOfInterestArray)

      } catch (error) {
        console.error(error)
        
        if (axios.isCancel(error)) {
          return
        }
      }
    })()

    // unmount component
    return () => {
      abortController.abort()
    }
  }, [])



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
      {markers.map(marker => {
        return (
          <Marker position={marker.coordinates} description={marker.description} category={marker.category} >
            <Popup>
              <p><b>Location: {marker.name}</b></p>
              <p>Description: {marker.description}</p>
              <p>Category: {marker.category}</p>
              <p>Coordinates: {marker.coordinates}</p>
            </Popup>
          </Marker>
        )
      })}


      <Marker position={position}>
        <Popup>Vancouver or thereabouts</Popup>
        <Tooltip>This is a tooltip for the marker</Tooltip>
      </Marker>
    </MyMapContainer>
  )
}
