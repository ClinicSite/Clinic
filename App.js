import {Route, Routes} from "react-router-dom"
import Home from "./pages/Home/Home"
import About from "./pages/About/About"
import Appointment from "./pages/Appointment/Appointment"
import Contact from "./pages/Contact/Contact"
import Treatments from "./pages/Treatments/Treatments"
import Error from "./pages/Error/Error"
import Footer from './Components/Footer/Footer'
import Header from "./Components/Header/Header"
import SendRoetgen from "./pages/SendRoetgen/SendRoetgen"
import BeforeAfter from "./pages/BeforeAfter/BeforeAfter"
import Navbar from './Components/Nav/Naav'

function App() {
  return (
    <>
      <div className="App">
        
        <Header />
        <Navbar />

        <div className="Main">
          <Routes>
            <Route path = "/" element={<Home />} />
            <Route path = "/beforeafter" element={<BeforeAfter />} />
            <Route path = "/about" element={<About />} />
            <Route path = "/appointment" element={<Appointment />} />
            <Route path = "/contact" element={<Contact />} />
            <Route path = "/treatments" element={<Treatments />} />
            <Route path = "/*" element={<Error />} />
            <Route path = "/sendroetgen" element={<SendRoetgen />} />

          </Routes>
        </div>
        <Footer />
      </div>
    
    </>
  );
}

export default App;
