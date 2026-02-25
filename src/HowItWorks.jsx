import { UserPlus, Search, MapPin } from 'lucide-react'

function HowItWorks() {
  return (
    <div className="bg-white py-20 px-6">
      <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
        How It <span className="text-[#BB0000]">Works</span>
      </h2>
      <div className="max-w-4xl mx-auto flex flex-col gap-8">
        <div className="flex items-start gap-6">
          <div className="bg-[#BB0000] rounded-full p-4 shrink-0">
            <UserPlus size={28} color="white" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-1">1. Create Your Profile</h3>
            <p className="text-gray-500">Sign up with your OSU email to get verified. Add your music taste, interests, and a short bio so other Buckeyes know who they're riding with.</p>
          </div>
        </div>
        <div className="flex items-start gap-6">
          <div className="bg-[#BB0000] rounded-full p-4 shrink-0">
            <Search size={28} color="white" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-1">2. Find or Post a Ride</h3>
            <p className="text-gray-500">Browse available trips heading your way or post your own trip to fill open seats in your car. Set your destination, date, and how many seats are available.</p>
          </div>
        </div>
        <div className="flex items-start gap-6">
          <div className="bg-[#BB0000] rounded-full p-4 shrink-0">
            <MapPin size={28} color="white" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-1">3. Ride Together</h3>
            <p className="text-gray-500">Connect with your driver or passengers via Instagram, agree on a meetup spot, and enjoy the ride. Split costs, share music, and make new Buckeye connections.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HowItWorks