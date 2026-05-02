import { motion } from 'framer-motion';
import { Navbar, Hero, Skills, TagsBanner } from './components.jsx';
import { Projects, Experience, Testimonials, Certifications, Footer } from './sections.jsx';
import './index.css';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 relative overflow-hidden">
      {/* ── Subtle Light Background Effects ── */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Soft Light Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000005_1px,transparent_1px),linear-gradient(to_bottom,#00000005_1px,transparent_1px)] bg-[size:40px_40px]" />
        
        {/* Soft Color Blurs */}
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-100/50 blur-[100px] pointer-events-none" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-cyan-100/50 blur-[100px] pointer-events-none" />
      </div>

      <div className="relative z-10">
        <Navbar />
        <Hero />
        <TagsBanner />
        <Skills />
        <Projects />
        <Experience />
        <Testimonials />
        <Certifications />
        <Footer />
      </div>
    </div>
  );
}

export default App;
