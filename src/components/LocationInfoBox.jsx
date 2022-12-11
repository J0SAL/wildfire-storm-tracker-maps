const LocationInfoBox = ({ info, onClose }) => {
    return (
        <div className="location-info">
            <h2>Event Location Info</h2>
            <ul>
                <li>latitute: <strong>{info.coordinates[1]}</strong></li>
                <li>longitude: <strong>{info.coordinates[0]}</strong></li>
                <li>ID: <strong>{info.id}</strong></li>
                <li>TITLE: <strong>{info.title}</strong></li>
            </ul>
            <button onClick={onClose}>Close</button>
        </div>
    )
}

export default LocationInfoBox