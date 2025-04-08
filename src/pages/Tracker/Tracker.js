import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polygon, GeoJSON } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

import zoneGeoJSON from './sample.geojson';
import Nav from '../../common/Nav';
import PlantingForm from './PlantingForm';


let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
});
L.Marker.prototype.options.icon = DefaultIcon;

const botolanBounds = [
    [15.1800, 120.0200], // Southwest
    [15.3100, 120.1400], // Northeast
];

// Example polygon to simulate a zone suitable for coconut planting
// Define Coconut Zone Polygon (provided by you)
const coconutZonePolygon = [
    [15.30069887225288, 120.07675293417566],
    [15.299975866410406, 120.08058244012528],
    [15.298336566690821, 120.08039690204419],
    [15.296482496581092, 120.07963248239173],
    [15.29605297981405, 120.07684198968434],
    [15.296375117471626, 120.07681972511637],
    [15.296568399828317, 120.07661192246752],
    [15.296647144440428, 120.07687167577814],
    [15.296997915537446, 120.07698299862471],
    [15.297699455969394, 120.07698299862471],
    [15.297742407347314, 120.07682714663747],
    [15.297914212774444, 120.07673066683765],
    [15.300706031205351, 120.07676035293133],
];

const plantingPoints = [
    { id: 1, position: [15.2998, 120.0786] },
    { id: 2, position: [15.2993, 120.0795] },
    { id: 3, position: [15.2988, 120.0783] },
    { id: 4, position: [15.2983, 120.0772] },
    { id: 5, position: [15.2978, 120.0781] },
    { id: 6, position: [15.2973, 120.0790] },
    { id: 7, position: [15.2968, 120.0780] },
    { id: 8, position: [15.2975, 120.0778] },
    { id: 9, position: [15.2980, 120.0790] },
    { id: 10, position: [15.2985, 120.0800] },
    { id: 11, position: [15.2990, 120.0790] },
    { id: 12, position: [15.2995, 120.0780] },
];


const treeIcon = new L.Icon({
    iconUrl: "/coconut-tree.png",
    iconSize: [16, 16],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
});

const TreePlantingMap = () => {
    console.log(zoneGeoJSON)

    return (
        <div>
            <Nav />
            <MapContainer
                bounds={botolanBounds}
                maxBounds={botolanBounds}
                maxZoom={18}
                minZoom={14}
                zoom={14}
                style={{ height: '100vh', width: '100%' }}
            >
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution="&copy; OpenStreetMap contributors"
                />

                {/* Polygon representing coconut planting zone */}
                <Polygon positions={coconutZonePolygon} pathOptions={{ color: 'green', fillOpacity: 0.1 }} />

                {/* Interactable markers with small tree icon */}
                {plantingPoints.map((point) => (
                    <Marker key={point.id} position={point.position} icon={treeIcon}>
                        <Popup>
                            <PlantingForm />
                        </Popup>
                    </Marker>
                ))}
            </MapContainer>
        </div>
    );
};

export default TreePlantingMap;
