import { Link } from 'react-router-dom'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="w-full bg-white px-8 py-4 shadow-sm">
      <div className="flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-[#BB0000]">RideShare@OSU</Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-6">
          <Link to="/rides" className="text-gray-600 font-medium hover:text-[#BB0000] transition">Browse Rides</Link>
          <Link to="/post" className="text-gray-600 font-medium hover:text-[#BB0000] transition">Post a Ride</Link>
          <Link to="/profile" className="text-gray-600 font-medium hover:text-[#BB0000] transition">Profile</Link>
          <button className="bg-[#BB0000] text-white px-5 py-2 rounded-full font-medium hover:bg-red-800 transition">Sign In</button>
        </div>

        {/* Mobile hamburger */}
        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={28} color="#BB0000" /> : <Menu size={28} color="#BB0000" />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col gap-4 mt-4 pb-4">
          <Link to="/rides" onClick={() => setMenuOpen(false)} className="text-gray-600 font-medium hover:text-[#BB0000] transition">Browse Rides</Link>
          <Link to="/post" onClick={() => setMenuOpen(false)} className="text-gray-600 font-medium hover:text-[#BB0000] transition">Post a Ride</Link>
          <Link to="/profile" onClick={() => setMenuOpen(false)} className="text-gray-600 font-medium hover:text-[#BB0000] transition">Profile</Link>
          <button className="bg-[#BB0000] text-white px-5 py-2 rounded-full font-medium hover:bg-red-800 transition w-full">Sign In</button>
        </div>
      )}
    </nav>
  )
}

export default Navbar