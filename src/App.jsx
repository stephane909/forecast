import { useState, useEffect } from "react";
import "./App.css";
import SearchLocation from "./components/SearchLocation";
import List from "./components/List";
import ForecastResult from "./components/ForecastResult";

function App() {
  const [address, setAddress] = useState(null);
  const [coords, setCoords] = useState({ lat: "", lon: "" });

  function submitSearch(newAddres) {
    setAddress(newAddres);
  }

  function handleCoords(latitude, longitude) {
    const newCoords = {
      lat: latitude,
      lon: longitude,
    };
    setCoords(newCoords);
  }

  return (
    <>
      <SearchLocation type="text" submitSearch={submitSearch} />
      <List address={address} getCoords={handleCoords} />
      <ForecastResult coordsToCheck={coords} />
    </>
  );
}

export default App;
