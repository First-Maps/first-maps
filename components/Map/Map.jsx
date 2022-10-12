//import 'leaflet/dist/leaflet.css'
import style from '../../styles/Home.module.css'

import "leaflet/dist/leaflet.css"
import "leaflet/dist/images/marker-shadow.png"

import { MapContainer, TileLayer, Marker, Popup, Tooltip } from 'react-leaflet'

export default function Map() {
  const position = [49.2833, -123.1152]
  return (
    <MapContainer 
      className={style.map} 
      center={position} 
      zoom={13} 
      scrollWheelZoom={true}>
      
      <TileLayer 
        attribution='&copy; <a href="https://www.maptiler.com/copyright">MapTiler</a> | &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url='https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=27UbwLtYuQZu5sAt2zAj'
      />

      <Marker position={position}>
        <Popup>Vancouver or thereabouts</Popup>
        <Tooltip>This is a tooltip for the marker</Tooltip>
      </Marker>

    </MapContainer>
  )
}
