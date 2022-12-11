import { Icon } from "@iconify/react";
import FireIcon from "@iconify/icons-mdi/fire-alert";
import StormIcon from "@iconify/icons-mdi/storm";
import { Marker } from "react-mapbox-gl";

const LocationMarker = ({ coordinates, category, onClick }) => {
  return (
    <Marker coordinates={coordinates} anchor="bottom" onClick={onClick}>
      {category === 8 ? (
        <Icon icon={FireIcon} className="location-icon" />
      ) : (
        <Icon icon={StormIcon} className="storm-icon" />
      )}
    </Marker>
  );
};

export default LocationMarker;
