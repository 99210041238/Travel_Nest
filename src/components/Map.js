import React, { useEffect, useState, useCallback } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import { useNavigate } from 'react-router-dom';
import 'leaflet/dist/leaflet.css';
import axios from 'axios';
import L from 'leaflet';
import 'leaflet-routing-machine';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: markerIcon,
    shadowUrl: markerShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41]
});

L.Marker.prototype.options.icon = DefaultIcon;

const MapComponent = () => {
    const [userLocation, setUserLocation] = useState([51.505, -0.09]);
    const [nearbyLocations, setNearbyLocations] = useState([]);
    const [selectedHotel, setSelectedHotel] = useState(null);
    const [travelTimes, setTravelTimes] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const { latitude, longitude } = position.coords;
                setUserLocation([latitude, longitude]);
                fetchNearbyLocations(latitude, longitude);
            },
            (error) => console.error('Error fetching location:', error)
        );
    }, []);

    const fetchNearbyLocations = useCallback(async (latitude, longitude) => {
        const apiKey = 'AlzaSyxd4bHPTKS3QUbEiwSKPBp1PYO4Cq5uERP';
        const query = 'hotel';

        try {
            const response = await axios.get(
                `https://maps.gomaps.pro/maps/api/place/textsearch/json?query=${query}&location=${latitude},${longitude}&key=${apiKey}`
            );
            
            const places = response.data.results;
            const detailedPlaces = places.map((place) => ({
                name: place.name,
                latitude: place.geometry.location.lat,
                longitude: place.geometry.location.lng,
                address: place.formatted_address,
                distance: calculateDistance(latitude, longitude, place.geometry.location.lat, place.geometry.location.lng)
            }));
            setNearbyLocations(detailedPlaces);
        } catch (error) {
            console.error('Error fetching nearby locations:', error);
        }
    }, []);

    const calculateDistance = (lat1, lon1, lat2, lon2) => {
        const R = 6371;
        const dLat = ((lat2 - lat1) * Math.PI) / 180;
        const dLon = ((lon2 - lon1) * Math.PI) / 180;
        const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos((lat1 * Math.PI) / 180) *
            Math.cos((lat2 * Math.PI) / 180) *
            Math.sin(dLon / 2) * Math.sin(dLon / 2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        return (R * c).toFixed(2);
    };

    const handleShowRoute = (hotel) => {
        setSelectedHotel(hotel);
        const speeds = { bike: 70, car: 60, cycle: 15, walk: 5 };
        setTravelTimes({
            bike: (hotel.distance / speeds.bike) * 60,
            car: (hotel.distance / speeds.car) * 60,
            cycle: (hotel.distance / speeds.cycle) * 60,
            walk: (hotel.distance / speeds.walk) * 60,
        });
    };

    const formatTravelTime = (mins) => {
        if (mins >= 60) {
            const hours = Math.floor(mins / 60);
            const minutes = Math.round(mins % 60);
            return `${hours}hr ${minutes > 0 ? minutes + "mins" : ""}`;
        }
        return `${Math.round(mins)}mins`;
    };

    const handleBooking = (hotel) => {
        navigate(`/roombooking?hotel=${encodeURIComponent(hotel.name)}`);
    };
    

    return (
        <div style={{ height: "500px", width: "100%" }}>
            <MapContainer center={userLocation} zoom={13} style={{ height: "100%", width: "100%" }}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                <Marker position={userLocation}>
                    <Popup>You are here</Popup>
                </Marker>
                {nearbyLocations.map((location, index) => (
                    <Marker key={index} position={[location.latitude, location.longitude]}>
                        <Popup>
                            <strong>{location.name}</strong>
                            <br />
                            {location.address}
                            <br />
                            Distance: {location.distance} km
                            <br />
                            {selectedHotel?.name === location.name && travelTimes && (
                                <div>
                                    <strong>Estimated Travel Time:</strong>
                                    <br />
                                    🚴 Bike: {formatTravelTime(travelTimes.bike)}
                                    <br />
                                    🚗 Car: {formatTravelTime(travelTimes.car)}
                                    <br />
                                    🚲 Cycle: {formatTravelTime(travelTimes.cycle)}
                                    <br />
                                    🚶 Walk: {formatTravelTime(travelTimes.walk)}
                                </div>
                            )}
                            <button onClick={() => handleShowRoute(location)}>Show Route</button>
                            <button onClick={() => handleBooking(location)}>Book Now</button>
                        </Popup>
                    </Marker>
                ))}
                {selectedHotel && <Routing userLocation={userLocation} hotel={selectedHotel} />}
            </MapContainer>
        </div>
    );
};

const Routing = ({ userLocation, hotel }) => {
    const map = useMap();
    useEffect(() => {
        if (!userLocation || !hotel || !map) return;
        const routingControl = L.Routing.control({
            waypoints: [
                L.latLng(userLocation[0], userLocation[1]),
                L.latLng(hotel.latitude, hotel.longitude)
            ],
            routeWhileDragging: true
        }).addTo(map);
        return () => map.removeControl(routingControl);
    }, [userLocation, hotel, map]);
    return null;
};

export default MapComponent;
