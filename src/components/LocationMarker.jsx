import { Icon } from '@iconify/react'
import FireIcon from '@iconify/icons-mdi/fire-alert'
import { Marker } from 'react-mapbox-gl'

const LocationMarker = ({ coordinates, onClick }) => {
    return (
        <Marker
            coordinates={coordinates}
            anchor="bottom"
            onClick={onClick}
        >
            <Icon icon={FireIcon} className="location-icon" />
        </Marker>
    )
}

export default LocationMarker