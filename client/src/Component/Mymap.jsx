import React from 'react'
import {MapContainer,TileLayer,Marker,Popup} from 'react-leaflet'
import "leaflet/dist/leaflet.css"

export default function Mymap() {
    const position = [51.505, -0.09];
  return (
    <div style={{ height: "100%", width: "100%", boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.2)" }}>
       <MapContainer center={position} zoom={13} style={{ height: "100%", width: "100%" }}>
        
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />

        <Marker position={position}>
          <Popup>
            A pretty popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer> 
    </div>
  )
}
