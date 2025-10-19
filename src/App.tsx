import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Tools from './pages/Tools';
import Experience from './pages/Experience';
import Contact from './pages/Contact';

export default function App() {
  return (
    <Router basename="/website">  {/* ✅ Added basename */}
      <div className="h-screen flex flex-col overflow-hidden">
        <div className="flex-shrink-0">
          <Navbar />
        </div>

        <main className="flex-1 overflow-hidden">
          <div className="h-full overflow-y-auto">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/tools" element={<Tools />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
        </main>

        <div className="flex-shrink-0">
          <Footer />
        </div>
      </div>
    </Router>
  );
}
