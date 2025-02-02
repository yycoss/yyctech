'use client'
import { APIProvider, Map, Marker } from '@vis.gl/react-google-maps'

interface LocationMapProps {
  position: {
    lat: number
    lng: number
  }
}

const LocationMap = (position: LocationMapProps) => {
  return (
    <APIProvider apiKey={process.env.NEXT_PUBLIC_MAPS_API_KEY || ''}>
      <Map defaultCenter={position.position} defaultZoom={15}>
        <Marker position={position.position} />
      </Map>
    </APIProvider>
  )
}

export default LocationMap
