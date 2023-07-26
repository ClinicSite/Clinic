import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home/Home"
import About from "./pages/About/About"
import Appointment from "./pages/Appointment/Appointment"
import Contact from "./pages/Contact/Contact"
import Treatments from "./pages/Treatments/Treatments"
import Error from "./pages/Error/Error"
import Footer from './Components/Footer/Footer'
import Header from "./Components/Header/Header"
import SendRoentgen from "./pages/SendRoentgen/SendRoentgen"
import BeforeAfter from "./pages/BeforeAfter/BeforeAfter"
import Navbar from './Components/Nav/Naav'
import HealthTourismContent from "./Components/HealthTourismContent/HealthTourismContent"
import Implant from "./pages/Treatments/Implant/implant"
import ZirconiumPorcelain from "./pages/Treatments/ZirconiumPorcelain/zirconiumPorcelain"
import RootCanal from "./pages/Treatments/RootCanal/rootCanal"
import { SiWhatsapp } from 'react-icons/si';
import './App.scss';
import AestheticBonding from "./pages/Treatments/AestheticBonding/aestheticBonding"
import ChinSurgery from "./pages/Treatments/ChinSurgery/chinSurgery"

function App() {
  return (
    <>
      <div className="App">

        <Header />
        <Navbar />


        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/beforeafter" element={<BeforeAfter />} />
          <Route path="/about" element={<About />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/healthtourism" element={<HealthTourismContent />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/treatments" element={<Treatments />} />
          <Route path="/*" element={<Error />} />
          <Route path="/sendroentgen" element={<SendRoentgen />} />
          <Route path="/dental-implant" element={<Implant />} />
          <Route path="/zirkonyum-porselen" element={<ZirconiumPorcelain/>} />
          <Route path="/kanal-tedavisi" element={<RootCanal/>} />
          <Route path="/estetik-dolgular" element={<AestheticBonding />} />
          <Route path="/cene-cerrahisi" element={<ChinSurgery />} />
          <Route path="/porselen-laminalar" element={<Implant />} />
          <Route path="/seffaf-plak" element={<Implant />} />
          <Route path="/greft-kemiktozu" element={<Implant />} />
        
           </Routes>
           <a
        href="https://wa.me/905435288364"
        class="whatsapp_float"
        target="_blank"
        rel="noopener noreferrer"
      >
       <SiWhatsapp/>
      </a>
      <Footer />

      
      </div>

    </>
  );
}

export default App;
