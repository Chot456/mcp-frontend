import { MapContainer, TileLayer, Marker, Popup, Polygon, Polyline } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import * as turf from '@turf/turf';

import Nav from '../../common/Nav';
import PlantingForm from './PlantingForm';
import geojsonData from './plantingzone.json';

const treeIcon = new L.Icon({
    iconUrl: "/coconut-tree.png",
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
});


const botolanBounds = [
    [
        15.307902880878785,
        120.06169845588221
    ], // Southwest
    [
        15.29043512126772,
        120.09267642059024
    ], // Northeast
];

const plantingPoints = [
    { id: 1, position: [15.2985, 120.0770] },
    { id: 2, position: [15.2985, 120.0775] },
    { id: 3, position: [15.2985, 120.0780] },
    { id: 4, position: [15.2985, 120.0785] },
    { id: 5, position: [15.2985, 120.0790] },
    { id: 6, position: [15.2985, 120.0795] },
    { id: 7, position: [15.2985, 120.0800] },
    { id: 8, position: [15.2990, 120.0775] },
    { id: 9, position: [15.2990, 120.0780] },
    { id: 10, position: [15.2990, 120.0785] },
    { id: 11, position: [15.2990, 120.0790] },
    { id: 12, position: [15.2990, 120.0795] },
    { id: 13, position: [15.2990, 120.0800] },
    { id: 14, position: [15.2990, 120.0770] },
    { id: 15, position: [15.2995, 120.0770] },
    { id: 16, position: [15.2995, 120.0775] },
    { id: 17, position: [15.2995, 120.0780] },
    { id: 18, position: [15.2995, 120.0785] },
    { id: 19, position: [15.2995, 120.0790] },
    { id: 20, position: [15.2995, 120.0795] },
    { id: 21, position: [15.2995, 120.0800] },
];

const generateClippedGridLines = (polygonCoords, spacing = 0.0003) => {
    const turfPolygon = turf.polygon([
        [
            ...polygonCoords.map(([lat, lng]) => [lng, lat]),
            [polygonCoords[0][1], polygonCoords[0][0]],
        ],
    ]);

    const bbox = turf.bbox(turfPolygon);
    const [minLng, minLat, maxLng, maxLat] = bbox;

    const lines = [];

    for (let lng = minLng; lng <= maxLng; lng += spacing) {
        const fullLine = turf.lineString([
            [lng, minLat],
            [lng, maxLat],
        ]);
        // const clipped = turf.lineIntersect(fullLine, turfPolygon);
        const split = turf.lineSplit(fullLine, turfPolygon);
        split.features.forEach((seg) => {
            const mid = turf.midpoint(seg.geometry.coordinates[0], seg.geometry.coordinates[1]);
            if (turf.booleanPointInPolygon(mid, turfPolygon)) {
                lines.push(seg.geometry.coordinates.map(([lng, lat]) => [lat, lng]));
            }
        });
    }

    for (let lat = minLat; lat <= maxLat; lat += spacing) {
        const fullLine = turf.lineString([
            [minLng, lat],
            [maxLng, lat],
        ]);
        const split = turf.lineSplit(fullLine, turfPolygon);
        split.features.forEach((seg) => {
            const mid = turf.midpoint(seg.geometry.coordinates[0], seg.geometry.coordinates[1]);
            if (turf.booleanPointInPolygon(mid, turfPolygon)) {
                lines.push(seg.geometry.coordinates.map(([lng, lat]) => [lat, lng]));
            }
        });
    }

    return lines;
};

const TreePlantingMap = () => {
    const zones = geojsonData.features.map((feature) => {
        const zoneCoords = feature.geometry.coordinates[0];
        const gridLines = generateClippedGridLines(zoneCoords, 0.0003);
        return { zoneCoords, gridLines };
    });

    return (
        <div>
            <Nav />
            <MapContainer
                bounds={botolanBounds}
                // maxBounds={botolanBounds}
                maxZoom={18.5}
                minZoom={15}
                zoom={15}
                style={{ height: '80vh', width: '100%' }}
            >
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution="&copy; OpenStreetMap contributors"
                />

                {zones.map((zone, zoneIndex) => (
                    <div key={zoneIndex}>
                        {/* Polygon representing the zone */}
                        <Polygon
                            positions={zone.zoneCoords}
                            pathOptions={{ color: 'green', fillOpacity: 0.3, weight: 1 }}
                        />

                        {/* Grid lines for the current zone */}
                        {zone.gridLines.map((line, lineIndex) => (
                            <Polyline
                                key={lineIndex}
                                positions={line}
                                pathOptions={{ color: '#ccc', weight: 1 }}
                            />
                        ))}
                    </div>
                ))}

                {plantingPoints.map((point) => (
                    <Marker
                        key={point.id}
                        position={point.position}
                        icon={treeIcon}
                        eventHandlers={{ mouseover: () => console.log('Marker hovered!') }}
                    >
                        <Popup>
                            <div style={{ width: '300px' }}>
                                <PlantingForm id={point.id} />
                            </div>
                        </Popup>
                    </Marker>
                ))}
            </MapContainer>
        </div>
    );
};

export default TreePlantingMap;
