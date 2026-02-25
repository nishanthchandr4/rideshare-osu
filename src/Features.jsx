import { Car, GraduationCap, Music } from 'lucide-react'

function Features() {
  return (
    <div className="bg-gray-50 py-20 px-6">
      <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
        Why RideShare<span className="text-[#BB0000]">@OSU</span>?
      </h2>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">        <div className="bg-white rounded-2xl p-8 shadow-sm text-center">
          <div className="flex justify-center mb-4">
            <Car size={40} color="#BB0000" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">Find Your Ride</h3>
          <p className="text-gray-500">Browse trips posted by fellow Buckeyes heading your way. No strangers — just students.</p>
        </div>
        <div className="bg-white rounded-2xl p-8 shadow-sm text-center">
          <div className="flex justify-center mb-4">
            <GraduationCap size={40} color="#BB0000" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">OSU Only</h3>
          <p className="text-gray-500">Every user is verified with an OSU email. Your safety and comfort is our priority.</p>
        </div>
        <div className="bg-white rounded-2xl p-8 shadow-sm text-center">
          <div className="flex justify-center mb-4">
            <Music size={40} color="#BB0000" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">Vibe Match</h3>
          <p className="text-gray-500">Share your music taste and interests. Find riders who match your energy for the perfect trip.</p>
        </div>
      </div>
    </div>
  )
}

export default Features