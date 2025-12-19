import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      {/* WRAPPER GLOBAL */}
      <main className="max-w-6xl mx-auto px-6 py-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
