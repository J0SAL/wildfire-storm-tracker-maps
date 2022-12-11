import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { useState } from 'react';



function MapBox() {
    const Map = ReactMapboxGl({
        accessToken: process.env.REACT_APP_MAP_BOX,
    });

    return (
        <div>
            <Map
                style="mapbox://styles/mapbox/streets-v9"
                containerStyle={{
                    height: '100vh',
                    width: '100vw'
                }}
                center={[78.9629, 20.5037]}
                zoom={[4.5]}
            >
                <Layer type="symbol" id="marker" layout={{ 'icon-image': 'marker-15' }}>
                    <Feature coordinates={[78.9629, 20.5037]} />
                </Layer>
            </Map>
        </div >
    )
}

export default MapBox