import { Music, Heart, Instagram, MapPin, Star } from 'lucide-react'

const mockUser = {
  name: "Nishanth C.",
  major: "Computer Science & Engineering",
  year: "Junior",
  location: "North Campus",
  instagram: "@nishanth_osu",
  bio: "Buckeye through and through. Love road trips, good music, and meeting new people. Always down to share a ride!",
  music: ["Hip Hop", "R&B", "Afrobeats"],
  interests: ["Basketball", "Gaming", "Photography", "Foodie"],
  ridesPosted: 8,
  ridesShared: 14,
  rating: 4.9
}

function Profile() {
  return (
    <div className="bg-gray-50 min-h-screen py-16 px-6">
      <div className="max-w-3xl mx-auto flex flex-col gap-6">

        {/* Profile Header */}
        <div className="bg-white rounded-2xl p-8 shadow-sm">
          <div className="flex items-start gap-6">
            <div className="bg-[#BB0000] rounded-full w-20 h-20 flex items-center justify-center text-white text-3xl font-bold shrink-0">
              {mockUser.name.charAt(0)}
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-start">
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">{mockUser.name}</h1>
                  <p className="text-gray-500">{mockUser.year} · {mockUser.major}</p>
                  <div className="flex items-center gap-1 mt-1">
                    <MapPin size={14} color="#BB0000" />
                    <span className="text-sm text-gray-500">{mockUser.location}</span>
                  </div>
                </div>
                <div className="flex items-center gap-1 bg-red-50 px-3 py-1 rounded-full">
                  <Star size={14} color="#BB0000" fill="#BB0000" />
                  <span className="text-[#BB0000] font-semibold text-sm">{mockUser.rating}</span>
                </div>
              </div>
              <p className="text-gray-600 mt-3">{mockUser.bio}</p>
              <div className="flex items-center gap-2 mt-3">
                <Instagram size={16} color="#BB0000" />
                <span className="text-sm text-[#BB0000] font-medium">{mockUser.instagram}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-white rounded-2xl p-6 shadow-sm text-center">
            <p className="text-3xl font-bold text-[#BB0000]">{mockUser.ridesPosted}</p>
            <p className="text-gray-500 text-sm mt-1">Rides Posted</p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-sm text-center">
            <p className="text-3xl font-bold text-[#BB0000]">{mockUser.ridesShared}</p>
            <p className="text-gray-500 text-sm mt-1">Rides Shared</p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-sm text-center">
            <p className="text-3xl font-bold text-[#BB0000]">{mockUser.rating}</p>
            <p className="text-gray-500 text-sm mt-1">Rating</p>
          </div>
        </div>

        {/* Music Taste */}
        <div className="bg-white rounded-2xl p-8 shadow-sm">
          <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Music size={20} color="#BB0000" /> Music Taste
          </h2>
          <div className="flex flex-wrap gap-2">
            {mockUser.music.map(genre => (
              <span key={genre} className="bg-red-50 text-[#BB0000] px-4 py-2 rounded-full text-sm font-medium">
                {genre}
              </span>
            ))}
          </div>
        </div>

        {/* Interests */}
        <div className="bg-white rounded-2xl p-8 shadow-sm">
          <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Heart size={20} color="#BB0000" /> Interests
          </h2>
          <div className="flex flex-wrap gap-2">
            {mockUser.interests.map(interest => (
              <span key={interest} className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium">
                {interest}
              </span>
            ))}
          </div>
        </div>

        {/* Edit Profile Button */}
        <button className="w-full bg-[#BB0000] text-white py-3 rounded-full font-semibold hover:bg-red-800 transition">
          Edit Profile
        </button>

      </div>
    </div>
  )
}

export default Profile