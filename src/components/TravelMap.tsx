import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import type { TravelMapPin } from '../types/presentation';

// Fix for default marker icons in react-leaflet
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl: markerIcon,
  iconRetinaUrl: markerIcon2x,
  shadowUrl: markerShadow,
});

interface TravelMapProps {
  pins?: TravelMapPin[];
  center?: [number, number];
  zoom?: number;
  region: 'jeju' | 'busan';
}

// Component to dynamically fit bounds to markers if needed
const MapController: React.FC<{ pins: TravelMapPin[] }> = ({ pins }) => {
  const map = useMap();
  useEffect(() => {
    if (pins && pins.length > 0) {
      const bounds = L.latLngBounds(pins.map(p => [p.lat, p.lng]));
      map.fitBounds(bounds, { padding: [50, 50] });
    }
  }, [map, pins]);
  return null;
};

export const TravelMap: React.FC<TravelMapProps> = ({ 
  pins = [], 
  center = [33.45, 126.35], 
  zoom = 10,
  region 
}) => {
  const activeColor = region === 'jeju' ? 'text-emerald-500' : 'text-cyan-500';

  return (
    <div className="w-full h-full rounded-xl overflow-hidden border border-slate-700 shadow-xl relative z-0">
      <MapContainer 
        center={center} 
        zoom={zoom} 
        scrollWheelZoom={true}
        style={{ height: '100%', width: '100%', zIndex: 0 }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {pins.map((pin, index) => (
          <Marker key={index} position={[pin.lat, pin.lng]}>
            <Popup>
              <div className="font-sans flex flex-col gap-2 w-48 mt-1">
                {pin.imageUrl && (
                  <img 
                    src={pin.imageUrl} 
                    alt={pin.label} 
                    className="w-full h-28 object-cover rounded-md shadow-sm" 
                  />
                )}
                <div>
                  <h3 className={`font-bold text-[15px] m-0 pb-1 leading-tight ${activeColor}`}>{pin.label}</h3>
                  {pin.description && (
                    <p className="text-xs m-0 text-slate-600 leading-snug">{pin.description}</p>
                  )}
                </div>
                {pin.link && (
                  <a 
                    href={pin.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="mt-1 inline-block text-xs font-bold text-blue-500 hover:text-blue-600 hover:underline"
                  >
                    상세 정보 보기 &rarr;
                  </a>
                )}
              </div>
            </Popup>
          </Marker>
        ))}
        {pins.length > 0 && <MapController pins={pins} />}
      </MapContainer>
    </div>
  );
};
