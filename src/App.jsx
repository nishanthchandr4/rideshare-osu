import { Routes, Route } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import Hero from './Hero'
import Features from './Features'
import HowItWorks from './HowItWorks'
import BrowseRides from './pages/BrowseRides'
import PostRide from './pages/PostRide'
import Profile from './pages/Profile'
import SignIn from './pages/SignIn'
import MapView from './pages/MapView'

function Home() {
  return (
    <>
      <Hero />
      <Features />
      <HowItWorks />
    </>
  )
}

function Layout({ children }) {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/signin" element={<SignIn />} />
      <Route path="/" element={<Layout><Home /></Layout>} />
      <Route path="/rides" element={<Layout><BrowseRides /></Layout>} />
      <Route path="/post" element={<Layout><PostRide /></Layout>} />
      <Route path="/profile" element={<Layout><Profile /></Layout>} />
      <Route path="/map" element={<Layout><MapView /></Layout>} />
      <Route path="/signin" element={<Layout><SignIn /></Layout>} />
    </Routes>
  )
}

export default App