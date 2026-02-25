import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="w-full bg-white px-8 py-4 flex justify-between items-center shadow-sm">
      <Link to="/" className="text-2xl font-bold text-[#BB0000]">RideShare@OSU</Link>
      <div className="flex items-center gap-6">
        <Link to="/rides" className="text-gray-600 font-medium hover:text-[#BB0000] transition">
          Browse Rides
        </Link>
        <Link to="/post" className="text-gray-600 font-medium hover:text-[#BB0000] transition">
          Post a Ride
        </Link>
        <button className="bg-[#BB0000] text-white px-5 py-2 rounded-full font-medium hover:bg-red-800 transition">
          Sign In
        </button>
      </div>
    </nav>
  )
}

export default Navbar