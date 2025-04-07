import React, { Component } from 'react'
import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

export class GeodicTracker extends Component {
  render() {
    const [position, setPosition] = useState(null);
    
      // Function to fetch the user's location
      const fetchLocation = () => {
          if ("geolocation" in navigator) {
              navigator.geolocation.getCurrentPosition(
                  (location) => {
                      setPosition({
                          lat: location.coords.latitude,
                          lng: location.coords.longitude,
                      });
                  },
                  (error) => {
                      console.error("Error getting location:", error);
                  }
              );
          } else {
              console.error("Geolocation is not supported by this browser.");
          }
      };

       useEffect(() => {
            fetchLocation();
        }, []);

    return (
      <div style={{ textAlign: "center" }}>
                <h2>Geodetic System</h2>
      
                {position ? (
                    <>
                        <p><strong>Latitude:</strong> {position.lat}</p>
                        <p><strong>Longitude:</strong> {position.lng}</p>
      
                        {/* Refresh Button */}
                        <button onClick={fetchLocation} className="btn btn-primary">
                            Refresh Location
                        </button>
      
                        {/* Map */}
                        <MapContainer center={[position.lat, position.lng]} zoom={13} style={{ height: "800px", width: "100%", marginTop: "20px" }}>
                            <TileLayer
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />
                            <Marker position={[position.lat, position.lng]}>
                                <Popup>You are here!</Popup>
                            </Marker>
                        </MapContainer>
                    </>
                ) : (
                    <p>Loading location...</p>
                )}
            </div>
    )
  }
}

export default GeodicTracker
