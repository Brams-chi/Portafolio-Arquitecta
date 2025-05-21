
import './App.css'
import Home from './pages/Home'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BestProjects from './pages/BestProjects'
import Portafolio from "./pages/Portafolio"
import Contact from './pages/Contact'
import Sidebar from './components/ui/sidebar';


function App() {

  return (
    <main className="bg-white text-neutral-800">
      <Router>
        <div className="flex">
          <div className="flex-1 pr-48"> {/* deja espacio al costado derecho */}
            <Routes>
              {/* Home Section */}
              <Route path="/" element={<Home />} />
              {/* Proyectos destacados */}
              <Route path="/proyectos-crc" element={<BestProjects />} />
              {/* Sobre CRC */}
              <Route path="/sobre-crc" element={<Portafolio />} />
              {/* Contacto */}
              <Route path="/contacto" element={<Contact />} />
            </Routes>
          </div>
          <Sidebar />
        </div>
      </Router>
    </main>
  )
}

export default App

