import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import "leaflet/dist/leaflet.css";
import style from '../src/styles/Home.module.css'

function InteractiveMap() {
    const center = [51.505, -0.09]
    const persons = [
        {
            name:'X',
            position: [51.505, -0.09]
        },
        {
            name:'Y',
            position: [51.505, -0.09]
        },
        {
            name:'Z',
            position: [51.505, -0.09]
        },
    ]

  return (
    <div style={{ marginBottom:'80px'}} >
    <MapContainer style={{width:'480px'}}  center={center} zoom={14} scrollWheelZoom={true}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={center}>
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </Marker>
  </MapContainer>
  </div>
  )
}

export default InteractiveMap