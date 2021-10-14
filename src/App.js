import React, { useState, useEffect } from "react";

export default function App() {
  const [location, setLocation] = useState({});

  useEffect(() => {
    const whatchId = navigator.geolocation.watchPosition(
      handlePositionReceveid
    );

    return () => navigator.geolocation.clearWatch(whatchId);
  }, []);

  function handlePositionReceveid({ coords }) {
    const { latitude, longitude } = coords;
    setLocation({ latitude, longitude });
  }
  return (
    <>
      Latitude: {location.latitude} <br />
      Longitude: {location.longitude}
    </>
  );
}
