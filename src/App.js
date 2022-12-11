import { useState, useEffect } from "react";
import MapView from "./components/Map";
import Loader from "./components/Loader";
import Header from "./components/Header";
import MapBox from "./components/MapBox";

function App() {
  const [eventData, setEventData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true);
      const res = await fetch(process.env.REACT_APP_NASA_URL);
      const { events } = await res.json();

      setEventData(events);
      setLoading(false);
    };

    fetchEvents();
  }, []);

  return (
    <div>
      <Header />
      {/* {!loading ? <MapView eventData={eventData} /> : <Loader />} */}
      <MapBox eventData={eventData} />
    </div>
  );
}

export default App;
