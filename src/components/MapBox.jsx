import ReactMapboxGl, { Layer, Feature, Marker, Popup } from 'react-mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { useState } from 'react';
import LocationInfoBox from './LocationInfoBox';
import LocationMarker from './LocationMarker';

const NATURAL_EVENT_WILDFIRE = 8;

function MapBox({ eventData }) {
    const markers = eventData.map((ev, index) => {
        if (ev.categories[0].id === NATURAL_EVENT_WILDFIRE) {
            return <LocationMarker
                key={index}
                coordinates={ev.geometries[0].coordinates}
                onClick={() => setLocationInfo({ id: ev.id, title: ev.title, coordinates: ev.geometries[0].coordinates })}
            />
        }
        return null
    })
    const Map = ReactMapboxGl({
        accessToken: process.env.REACT_APP_MAP_BOX,
    });
    const [locationInfo, setLocationInfo] = useState(null)
    return (
        <Map
            style="mapbox://styles/mapbox/streets-v9"
            containerStyle={{
                height: '100vh',
                width: '100vw'
            }}
            center={[78.9629, 20.5037]}
            zoom={[2]}
        >
            {
                markers
            }
            {
                locationInfo && <LocationInfoBox info={
                    {
                        id: locationInfo.id,
                        title: locationInfo.title,
                        coordinates: locationInfo.coordinates
                    }
                }
                    onClose={() => setLocationInfo(null)}
                />
            }
            {/* <Marker
                // longitude, latitude
                coordinates={[78.9629, 20.5037]}
                anchor="bottom">
                <img src="https://img.icons8.com/emoji/48/000000/india-emoji.png" alt="India" />
            </Marker> */}
        </Map>
    )
}

export default MapBox