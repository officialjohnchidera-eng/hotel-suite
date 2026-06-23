import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import WhatsAppButton from './components/WhatsAppButton'
import Home from './pages/Home'
import About from './pages/About'
import Rooms from './pages/Rooms'
import Restaurant from './pages/Restaurant'
import Services from './pages/Services'
import Contact from './pages/Contact'
import Booking from './pages/Booking'
import StandardRoom from './pages/rooms/StandardRoom'
import ClassicRoom from './pages/rooms/ClassicRoom'
import DeluxeRoom from './pages/rooms/DeluxeRoom'
import LuxuryRoom from './pages/rooms/LuxuryRoom'
import RoyaleSuite from './pages/rooms/RoyaleSuite'

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/restaurant" element={<Restaurant />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/rooms/standard" element={<StandardRoom />} />
        <Route path="/rooms/classic" element={<ClassicRoom />} />
        <Route path="/rooms/deluxe" element={<DeluxeRoom />} />
        <Route path="/rooms/luxury" element={<LuxuryRoom />} />
        <Route path="/rooms/royale-suite" element={<RoyaleSuite />} />
      </Routes>
      <Footer />
      <WhatsAppButton />
    </BrowserRouter>
  )
}

export default App