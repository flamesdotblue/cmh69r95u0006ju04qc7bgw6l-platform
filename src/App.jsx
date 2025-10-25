import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Highlights from './components/Highlights';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white antialiased">
      <div className="fixed inset-0 -z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(1800px_800px_at_50%_-10%,rgba(120,119,198,0.15),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(800px_400px_at_10%_10%,rgba(255,139,255,0.08),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(800px_400px_at_90%_10%,rgba(56,189,248,0.08),transparent_60%)]" />
      </div>
      <Navbar />
      <main className="relative z-0">
        <Hero />
        <Highlights />
        <Contact />
      </main>
    </div>
  );
}

export default App;
