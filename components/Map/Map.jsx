import styled from "styled-components"
import { useState, useEffect } from 'react'
import axios from 'axios'

import "leaflet/dist/leaflet.css"
import "leaflet/dist/images/marker-shadow.png"

import { MapContainer, TileLayer, Marker, Popup, Tooltip, ZoomControl } from "react-leaflet"
import { useMapEvents } from "react-leaflet"

// this is how we can style exotic components that styled-components doesn't support directly
const MyMapContainer = styled(MapContainer)`
  &[style] {
    min-width: 100%;
    min-height: ${
      props => props.fullSize ? "calc(100vh - 60px)" : "calc(40vh - 60px)"
    };
    @media (min-width: 768px) {
      min-height: ${props => props.fullSize ? "100vh" : "50vh"};
    }
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

const MyPopup = styled(Popup)`
  &[style] {
    .leaflet-popup-content-wrapper { 
      background: #E5E5E5;
      border-radius: 1em;
    }

    a.leaflet-popup-close-button {
      top: 0.25em;
      right: 0.25em;
    }

    div.popup-text-content {
      background: white;
      border-radius: 0.5em;
      padding: 0.75em;
    }

    p {
      margin: 0.25em 0 0.5em 0;
    }
  }
`

export default function Map({
  fullSize,
  handleMapClick,
  newMarkerPosition,
  allowAddingMarkers
}) {
  const center = [49.2833, -123.1152]

  const [markers, setMarkers] = useState([])

  const MapClick = () => {
    const map = useMapEvents({
      click: (e) => {
        handleMapClick(e.latlng)
      }
    })
  }

  // fetch locationsOfInterest data from database, setMarkers to the data.
  useEffect(() => {
    (async () => {
      try {
        let request;
        let locationsOfInterestArray;

        // CHOOSE A DATABASE TO FETCH FROM: "staging" or "dev"
        let databaseToFetchFrom = "dev";

        // call API based on chosen database 
        if (databaseToFetchFrom === "staging") {
          request = await axios.get("/api/locationsOfInterest")
          locationsOfInterestArray = request.data.results;
        } else if(databaseToFetchFrom === "dev") {
          request = await axios.get("/api/devLocationsOfInterest")
          locationsOfInterestArray = request.data.data;
          console.log(locationsOfInterestArray)
        } else {
          console.error('`databaseToFetchFrom` is not a valid database. See Map.jsx')
        }

        // reverses cordinates to match leaflet's format
        locationsOfInterestArray.map((location) => {
          location.coordinates = [location.coordinates[1], location.coordinates[0]]
        });
        
        setMarkers(locationsOfInterestArray);

      } catch (error) {
        console.error(error)

        if (axios.isCancel(error)) {
          return
        }
      }
    })()
  }, [])

  return (
    <MyMapContainer
      center={center}
      zoom={12}
      scrollWheelZoom={true}
      zoomControl={false}
      fullSize={fullSize}
    >
      <MyTileLayer
        attribution='&copy; <a href="https://www.maptiler.com/copyright">MapTiler</a> | &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=27UbwLtYuQZu5sAt2zAj"
      />

      <ZoomControl position="bottomright" />

      {markers.map((marker, index) => {
        return (
          <Marker position={marker.coordinates} description={marker.description} category={marker.category} key={index}>
            <MyPopup>
              <h2>{marker.name}</h2>
              <div className="popup-text-content">
                <p>Description: {marker.description}</p>
                <p>Category: {marker.category}</p>
                { 
                  marker.languages.length > 0 
                  && 
                  <p>
                    Languages: { marker.languages.map((language) => language.name).join(", ")}
                  </p>
                }
                <p>Coordinates: { marker.coordinates.join(', ') }</p>
              </div>

            </MyPopup>
            <Tooltip>{marker.name}</Tooltip>
          </Marker>
        )
      })}

      {newMarkerPosition && <Marker position={newMarkerPosition} />}

      {allowAddingMarkers && <MapClick />}

    </MyMapContainer>
  )
}
