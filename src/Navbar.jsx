function Navbar() {
    return (
      <nav className="w-full bg-white px-8 py-4 flex justify-between items-center shadow-sm">
        <h1 className="text-2xl font-bold text-[#BB0000]">RideShare@OSU</h1>
        <button className="bg-[#BB0000] text-white px-5 py-2 rounded-full font-medium hover:bg-red-800 transition">
          Sign In
        </button>
      </nav>
    )
  }
  
  export default Navbar