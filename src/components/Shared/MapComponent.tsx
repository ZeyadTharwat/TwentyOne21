import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "100%",
};

const center = {
  lat: 37.7749, // Example latitude (San Francisco)
  lng: -122.4194, // Example longitude (San Francisco)
};

const MapComponent = () => {
  return (
    <LoadScript googleMapsApiKey="YOUR_API_KEY">
        <div className="sm:h-[500px] h-[320px]">
        <GoogleMap  mapContainerStyle={containerStyle} center={center} zoom={10}>
        {/* Add markers or other components here */}
        <Marker position={center} />
      </GoogleMap>
        </div>
    </LoadScript>
  );
};

export default MapComponent;
