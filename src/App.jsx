import { Routes, Route } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import Hero from './Hero'
import Features from './Features'
import HowItWorks from './HowItWorks'
import BrowseRides from './pages/BrowseRides'
import PostRide from './pages/PostRide'
import Profile from './pages/Profile'

function Home() {
  return (
    <>
      <Hero />
      <Features />
      <HowItWorks />
    </>
  )
}

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rides" element={<BrowseRides />} />
        <Route path="/post" element={<PostRide />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App