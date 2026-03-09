"use client";

import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";

const OPENSTREETMAP_ATTRIBUTION =
  '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>';

function createMarkerIcon() {
  return L.divIcon({
    className: "contact-map-marker",
    html: `<span style="
      display: block;
      width: 14px;
      height: 14px;
      background: var(--accent, #475569);
      border: 2px solid white;
      border-radius: 50%;
      box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    "></span>`,
    iconSize: [14, 14],
    iconAnchor: [7, 7],
  });
}

export default function ContactMap({
  lat,
  lng,
  map2gisUrl,
  compact,
}: {
  lat: number;
  lng: number;
  map2gisUrl: string;
  compact?: boolean;
}) {
  const position: [number, number] = [lat, lng];

  return (
    <div className={`w-full overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--bg-elevated)] shadow-[var(--shadow)] ${compact ? "w-full min-w-0" : "max-w-xl mx-auto"}`}>
      <MapContainer
        center={position}
        zoom={15}
        scrollWheelZoom={false}
        className={`${compact ? "h-[220px]" : "h-[220px]"} w-full z-0`}
        attributionControl={false}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution={OPENSTREETMAP_ATTRIBUTION}
        />
        <Marker position={position} icon={createMarkerIcon()}>
          <Popup>
            <a
              href={map2gisUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--accent)] hover:underline"
            >
              Открыть в 2ГИС →
            </a>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
