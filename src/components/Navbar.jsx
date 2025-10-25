import React from 'react';
import { Github, Mail, Globe } from 'lucide-react';
import AnimeLogo from './AnimeLogo';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-neutral-900/50 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <a href="#home" className="flex items-center gap-3 group">
          <AnimeLogo className="h-8 w-8 drop-shadow-[0_0_12px_rgba(167,139,250,0.6)]" />
          <div className="leading-tight">
            <div className="font-semibold tracking-tight text-white group-hover:text-indigo-200 transition-colors">techw_annabe</div>
            <div className="text-xs text-white/60">Age 16 • India</div>
          </div>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#work" className="text-white/80 hover:text-white transition-colors">Work</a>
          <a href="#about" className="text-white/80 hover:text-white transition-colors">About</a>
          <a href="#contact" className="text-white/80 hover:text-white transition-colors">Contact</a>
        </nav>
        <div className="flex items-center gap-2">
          <a
            href="mailto:techwannabeee@gmail.com"
            className="inline-flex items-center gap-2 rounded-md bg-white/10 hover:bg-white/15 text-white px-3 py-2 text-sm transition"
          >
            <Mail className="h-4 w-4" /> Email
          </a>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-md bg-white/5 hover:bg-white/10 text-white px-3 py-2 text-sm transition"
          >
            <Github className="h-4 w-4" /> GitHub
          </a>
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-md bg-white/5 hover:bg-white/10 text-white px-3 py-2 text-sm transition"
          >
            <Globe className="h-4 w-4" /> Portfolio
          </a>
        </div>
      </div>
    </header>
  );
}
