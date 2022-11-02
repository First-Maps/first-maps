import styled from "styled-components"
import { useState, useEffect, useRef } from 'react'
import axios from 'axios'

import "leaflet/dist/leaflet.css"
import "leaflet/dist/images/marker-shadow.png"

import { MapContainer, TileLayer, Marker, Popup, Tooltip, ZoomControl } from "react-leaflet"
import { useMapEvents } from "react-leaflet"

<<<<<<< HEAD
import Bubble from '../Card/Bubble'

// import L from "leaflet"
=======
>>>>>>> dev

// this is how we can style exotic components that styled-components doesn't support directly
const MyMapContainer = styled(MapContainer)`
  &[style] {
    min-width: 100%;
    min-height: ${props => props.fullSize ? "calc(100vh - 60px)" : "calc(40vh - 60px)"
  };
    @media (min-width: 768px) {
      min-height: ${props => props.fullSize ? "100vh" : "50vh"};
    }
  }
`

// dark mode for the map
const MyTileLayer = styled(TileLayer)`
  &[style] {
    filter: 
      brightness(0.9)
      contrast(1.3)
      saturate(1.3);

    @media (prefers-color-scheme: dark) {
      filter: 
        brightness(0.67)
        invert() 
        contrast(3.4)
        hue-rotate(167deg)
        saturate(0.6);
    }
  }
`

const MyPopup = styled(Popup)`
  &[style] {
    .leaflet-popup-content-wrapper { 
      background: #333333;
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
  allowAddingMarkers,
  currentResult,
}) {
  const mapRef = useRef()
  const center = [49.2833, -123.1152]

  const [markers, setMarkers] = useState([])
  const [currentLocation, setCurrentLocation] = useState({})
  const [lastResult, setLastResult] = useState({
    coordinates: [0, 0],
  })

  const MapClick = () => {
    const map = useMapEvents({
      click: (e) => {
        handleMapClick(e.latlng)
      }
    })
  }

  const MoveEnd = () => {
    const map = useMapEvents({
      moveend: (e) => {
        setCurrentLocation(e.target.getCenter())
      }
    })
    if (currentResult.coordinates && currentResult.coordinates[0] !== lastResult.coordinates[0]) {
      setLastResult(currentResult)
      map.flyTo(currentResult.coordinates, 12)
      // console.log((map._targets)) 
    }
  }

  // fetch locationsOfInterest data from database, setMarkers to the data.
  useEffect(() => {
    (async () => {
      if (markers.length > 0) {
        return
      }
      try {
        let request
        let locationsOfInterestArray

        // CHOOSE A DATABASE TO FETCH FROM: "staging" or "dev"
        let databaseToFetchFrom = "dev"

        // call API based on chosen database 
        if (databaseToFetchFrom === "staging") {
          request = await axios.get("/api/locationsOfInterest")
          locationsOfInterestArray = request.data.Results
        } else if (databaseToFetchFrom === "dev") {
          request = await axios.get("/api/devLocationsOfInterest")
          locationsOfInterestArray = request.data.Results
        } else {
          console.error('`databaseToFetchFrom` is not a valid database. See Map.jsx')
        }

        // reverses cordinates to match leaflet's format
        locationsOfInterestArray.map((location) => {
          // the map expects latitude-first, but the db has longitude-first
          location.coordinates = [location.coordinates[1], location.coordinates[0]]
        })

        setMarkers(locationsOfInterestArray)

      } catch (error) {
        console.error(error)

        if (axios.isCancel(error)) {
          return
        }
      }
    })()
  }, [])

  function locateUser(event) {
    console.log('map loaded')
    navigator.geolocation.getCurrentPosition((position) => {
      console.log('coordinates from browser', position.coords)
    }, (error) => {
      axios.get("https://ipgeolocation.abstractapi.com/v1/?api_key=c44875213f7047a6bf726151678530cb")
        .then((response) => {
          const { latitude, longitude } = response.data
          console.log('coordinates from api:', latitude, longitude)
          event.target.flyTo([latitude, longitude], event.target.getZoom())
        }).catch((error) => {
          console.log(error)
        })
    }, { timeout: 500 })
  }

  return (
    <MyMapContainer
      ref={mapRef}
      center={center}
      zoom={12}
      scrollWheelZoom={true}
      zoomControl={false}
      fullSize={fullSize}
      whenReady={(event) => {locateUser(event)}}
    >
      <MyTileLayer
        attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
        url="https://tiles.stadiamaps.com/tiles/outdoors/{z}/{x}/{y}{r}.png"
      />

      <ZoomControl position="bottomright" />

      {markers.map((marker, index) => {
        return (
          <Marker
            position={marker.coordinates}
            name={marker.name}
            description={marker.description}
            category={marker.category}
            key={index}
            // icon={GetIcon(25)}
          >
            <MyPopup>
<<<<<<< HEAD
              <Bubble 
              name={marker.name}
              content={marker.description}
=======
              <h2>{marker.name}</h2>
              <div className="popup-text-content">
                <p>Description: {marker.description}</p>
                <p>Category: {marker.category}</p>
                {
                  marker.languages.length > 0
                  &&
                  <p>
                    Languages: {marker.languages.map((language) => language.name).join(", ")}
                  </p>
                }
                <p>Coordinates: {marker.coordinates.join(', ')}</p>
              </div>
>>>>>>> dev

              />
            </MyPopup>
            <Tooltip>{marker.name}</Tooltip>
          </Marker>
        )
      })}
      {!allowAddingMarkers && <MoveEnd />}
      
      {allowAddingMarkers && <MapClick />}
      {allowAddingMarkers
        && newMarkerPosition
        && <Marker position={newMarkerPosition} key={newMarkerPosition[0]}/>}

    </MyMapContainer>
  )
}
