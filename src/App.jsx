import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Courses from "./pages/Courses";
import Contact from "./pages/Contact";
import AuthPage from "./pages/AuthPage";

function App() {
  getComputedStyle(document.documentElement)
  .getPropertyValue('--mui-palette-background-paper')
  return (
    <BrowserRouter>
      <Navbar />
      <main className="min-h-screen transition-colors
                 bg-[var(--mui-palette-background-default)]
                 text-[var(--mui-palette-text-primary)]">
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Courses />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
