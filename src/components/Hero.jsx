import React from 'react';
import { Rocket, Star } from 'lucide-react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-24 grid lg:grid-cols-2 gap-10 items-center">
        <div className="relative order-2 lg:order-1">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
            Building modern web experiences
          </h1>
          <p className="mt-5 text-base sm:text-lg text-white/70 max-w-xl">
            Hi, I'm techw_annabe — a 16 y/o creator from India crafting stylish, fast, and accessible
            UIs. I love animations, clean code, and futuristic design aesthetics.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#work"
              className="inline-flex items-center gap-2 rounded-md bg-indigo-500 hover:bg-indigo-400 text-white px-5 py-3 text-sm font-medium transition shadow-lg shadow-indigo-500/25"
            >
              <Rocket className="h-4 w-4" /> Explore Work
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-md bg-white/10 hover:bg-white/15 text-white px-5 py-3 text-sm font-medium transition"
            >
              <Star className="h-4 w-4" /> Let's Collaborate
            </a>
          </div>
          <div className="mt-10 grid grid-cols-3 gap-4 max-w-md text-center">
            <StatItem label="Projects" value="12+" />
            <StatItem label="Tech Stack" value="React • TS • Tailwind" />
            <StatItem label="Focus" value="UI • Animations" />
          </div>
        </div>
        <div className="relative h-[380px] sm:h-[460px] lg:h-[520px] order-1 lg:order-2">
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-white/10 to-white/5 border border-white/10" />
          <div className="absolute inset-0 rounded-2xl overflow-hidden">
            <Spline
              scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode"
              style={{ width: '100%', height: '100%' }}
            />
          </div>
          <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-t from-neutral-950/60 via-transparent to-transparent" />
        </div>
      </div>
    </section>
  );
}

function StatItem({ label, value }) {
  return (
    <div className="rounded-lg border border-white/10 bg-white/5 px-3 py-4">
      <div className="text-lg font-semibold">{value}</div>
      <div className="text-xs text-white/60">{label}</div>
    </div>
  );
}
