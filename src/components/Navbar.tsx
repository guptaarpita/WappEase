import React from 'react';
import Logo from './Logo';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <Logo />
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-white/80 hover:text-white transition">Features</a>
            <a href="#packages" className="text-white/80 hover:text-white transition">Packages</a>
            <a href="#testimonials" className="text-white/80 hover:text-white transition">Testimonials</a>
            <a href="#contact" className="text-white/80 hover:text-white transition">Contact</a>
            <button className="button-gradient px-4 py-2 rounded-lg text-white font-semibold transform transition hover:scale-105">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}