import { MapPin, Calendar, Users, Music } from 'lucide-react'

const mockRides = [
  {
    id: 1,
    driver: "Alex K.",
    from: "Ohio State Campus",
    to: "Columbus Airport",
    date: "Feb 28, 2025",
    time: "8:00 AM",
    seats: 3,
    music: "Hip Hop, R&B",
    interests: "Basketball, Gaming"
  },
  {
    id: 2,
    driver: "Maya S.",
    from: "South Campus",
    to: "Easton Town Center",
    date: "Mar 1, 2025",
    time: "2:00 PM",
    seats: 2,
    music: "Pop, Indie",
    interests: "Art, Hiking"
  },
  {
    id: 3,
    driver: "Jordan T.",
    from: "North Campus",
    to: "Short North",
    date: "Mar 1, 2025",
    time: "7:00 PM",
    seats: 1,
    music: "Jazz, Soul",
    interests: "Food, Photography"
  },
  {
    id: 4,
    driver: "Priya M.",
    from: "Ohio State Campus",
    to: "Cleveland, OH",
    date: "Mar 3, 2025",
    time: "10:00 AM",
    seats: 3,
    music: "Bollywood, Pop",
    interests: "Travel, Cooking"
  },
]

function RideCard({ ride }) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-lg font-bold text-gray-900">{ride.driver}</h3>
          <p className="text-sm text-gray-400">OSU Verified Student</p>
        </div>
        <span className="bg-red-50 text-[#BB0000] text-sm font-semibold px-3 py-1 rounded-full">
          {ride.seats} seats left
        </span>
      </div>
      <div className="flex flex-col gap-2 mb-4">
        <div className="flex items-center gap-2 text-gray-600">
          <MapPin size={16} color="#BB0000" />
          <span className="text-sm">{ride.from} → {ride.to}</span>
        </div>
        <div className="flex items-center gap-2 text-gray-600">
          <Calendar size={16} color="#BB0000" />
          <span className="text-sm">{ride.date} at {ride.time}</span>
        </div>
        <div className="flex items-center gap-2 text-gray-600">
          <Music size={16} color="#BB0000" />
          <span className="text-sm">{ride.music}</span>
        </div>
      </div>
      <button className="w-full bg-[#BB0000] text-white py-2 rounded-full font-semibold hover:bg-red-800 transition">
        Request Ride
      </button>
    </div>
  )
}

function BrowseRides() {
  return (
    <div className="bg-gray-50 min-h-screen py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">
          Available <span className="text-[#BB0000]">Rides</span>
        </h1>
        <p className="text-gray-500 mb-10">Find a Buckeye heading your way</p>
        <div className="grid grid-cols-2 gap-6">
          {mockRides.map(ride => (
            <RideCard key={ride.id} ride={ride} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default BrowseRides