import {Route, Routes} from "react-router-dom"
import Home from "./pages/Home/Home"
import About from "./pages/About/About"
import Contact from "./pages/Contact/Contact"
import Treatments from "./pages/Treatments/Treatments"
import Error from "./pages/Error/Error"
import Naav from "./Components/Nav/Naav"
import Footer from './Components/Footer/Footer'

function App() {
  return (
    <>
      <div className="App">
        <Naav />
        <div className="Main">
          <Routes>
            <Route path = "/" element={<Home />} />
            <Route path = "/about" element={<About />} />
            <Route path = "/contact" element={<Contact />} />
            <Route path = "/treatments/:id" element={<Treatments />} />
            <Route path = "/*" element={<Error />} />

          </Routes>
        </div>
        <Footer />
      </div>
    
    </>
  );
}

export default App;
