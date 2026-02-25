import { Link } from 'react-router-dom'

function Hero() {
  return (
    <div className="flex flex-col items-center justify-center text-center px-6 py-24 bg-white">
      <h1 className="text-5xl font-bold text-gray-900 mb-4">
        Your Ride. Your People. <span className="text-[#BB0000]">Your OSU.</span>
      </h1>
      <p className="text-lg text-gray-500 max-w-xl mb-8">
        The ridesharing platform built exclusively for Ohio State students. Find rides, share trips, and connect with Buckeyes going your way.
      </p>
      <div className="flex gap-4">
        <Link to="/rides" className="bg-[#BB0000] text-white px-6 py-3 rounded-full font-semibold hover:bg-red-800 transition">
          Find a Ride
        </Link>
        <Link to="/post" className="border-2 border-[#BB0000] text-[#BB0000] px-6 py-3 rounded-full font-semibold hover:bg-red-50 transition">
          Post a Ride
        </Link>
      </div>
    </div>
  )
}

export default Hero