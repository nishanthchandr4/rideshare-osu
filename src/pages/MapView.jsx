import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { MapPin, Calendar } from 'lucide-react'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'

// Fix default marker icon issue with Leaflet + Vite
import markerIcon from 'leaflet/dist/images/marker-icon.png'
import markerShadow from 'leaflet/dist/images/marker-shadow.png'

const defaultIcon = L.divIcon({
    className: '',
    html: `<div style="
      background-color: #BB0000;
      width: 28px;
      height: 28px;
      border-radius: 50% 50% 50% 0;
      transform: rotate(-45deg);
      border: 3px solid white;
      box-shadow: 0 2px 6px rgba(0,0,0,0.3);
    "></div>`,
    iconAnchor: [14, 28],
    popupAnchor: [0, -30],
  })

L.Marker.prototype.options.icon = defaultIcon

const mockTrips = [
  {
    id: 1,
    name: "Jaylen W.",
    destination: "Cincinnati, OH",
    date: "Mar 2, 2025",
    time: "9:00 AM",
    music: "Hip Hop, Trap",
    seats: 2,
    coords: [39.1031, -84.5120]
  },
  {
    id: 2,
    name: "Maya S.",
    destination: "Easton Town Center",
    date: "Mar 1, 2025",
    time: "2:00 PM",
    music: "Pop, Indie",
    seats: 1,
    coords: [40.0534, -82.9168]
  },
  {
    id: 3,
    name: "Priya M.",
    destination: "Cleveland, OH",
    date: "Mar 3, 2025",
    time: "10:00 AM",
    music: "Bollywood, Pop",
    seats: 3,
    coords: [41.4993, -81.6944]
  },
  {
    id: 4,
    name: "Alex K.",
    destination: "Columbus Airport",
    date: "Feb 28, 2025",
    time: "8:00 AM",
    music: "Hip Hop, R&B",
    seats: 1,
    coords: [39.9980, -82.8919]
  },
  {
    id: 5,
    name: "Jordan T.",
    destination: "Short North",
    date: "Mar 1, 2025",
    time: "7:00 PM",
    music: "Jazz, Soul",
    seats: 2,
    coords: [39.9850, -83.0034]
  },
]

function MapView() {
  return (
    <div className="bg-gray-50 min-h-screen py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">
          Friend <span className="text-[#BB0000]">Map</span>
        </h1>
        <p className="text-gray-500 mb-8">See where your Buckeyes are headed</p>

        {/* Map */}
        <div className="rounded-2xl overflow-hidden shadow-sm mb-8" style={{ height: '500px' }}>
          <MapContainer
            center={[40.0, -82.9]}
            zoom={8}
            style={{ height: '100%', width: '100%' }}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {mockTrips.map(trip => (
              <Marker key={trip.id} position={trip.coords}>
                <Popup>
                  <div className="text-sm">
                    <p className="font-bold text-gray-900">{trip.name}</p>
                    <p className="text-gray-600">📍 {trip.destination}</p>
                    <p className="text-gray-600">📅 {trip.date} at {trip.time}</p>
                    <p className="text-gray-600">🎵 {trip.music}</p>
                    <p className="text-gray-600">💺 {trip.seats} seats left</p>
                    <button className="mt-2 w-full bg-[#BB0000] text-white py-1 px-3 rounded-full text-xs font-semibold">
                      Request Ride
                    </button>
                  </div>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>

        {/* Friend Trip Cards */}
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Upcoming <span className="text-[#BB0000]">Trips</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockTrips.map(trip => (
            <div key={trip.id} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-[#BB0000] rounded-full w-10 h-10 flex items-center justify-center text-white font-bold shrink-0">
                  {trip.name.charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-gray-900">{trip.name}</p>
                  <p className="text-xs text-gray-400">OSU Verified Student</p>
                </div>
              </div>
              <div className="flex flex-col gap-2 mb-4">
                <div className="flex items-center gap-2 text-gray-600">
                  <MapPin size={14} color="#BB0000" />
                  <span className="text-sm">{trip.destination}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Calendar size={14} color="#BB0000" />
                  <span className="text-sm">{trip.date} at {trip.time}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <span className="text-sm">🎵 {trip.music}</span>
                </div>
              </div>
              <button className="w-full bg-[#BB0000] text-white py-2 rounded-full font-semibold hover:bg-red-800 transition text-sm">
                Request Ride
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default MapView