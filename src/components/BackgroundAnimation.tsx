import React, { useEffect, useRef } from 'react';

const BackgroundAnimation = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const particles: HTMLDivElement[] = [];
    const particleCount = 50;
    const colors = ['#0284c7', '#0ea5e9', '#38bdf8', '#7dd3fc'];

    // Create particles
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';
      particle.style.setProperty('--x', `${Math.random() * 100}%`);
      particle.style.setProperty('--y', `${Math.random() * 100}%`);
      particle.style.setProperty('--delay', `${Math.random() * 4}s`);
      particle.style.setProperty('--size', `${Math.random() * 20 + 10}px`);
      particle.style.setProperty('--color', colors[Math.floor(Math.random() * colors.length)]);
      particle.style.setProperty('--duration', `${Math.random() * 4 + 4}s`);
      particle.style.setProperty('--depth', `${Math.random() * 100}`);
      container.appendChild(particle);
      particles.push(particle);
    }

    // Add mousemove parallax effect
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      const moveX = (clientX - centerX) / centerX;
      const moveY = (clientY - centerY) / centerY;

      particles.forEach(particle => {
        const depth = parseFloat(particle.style.getPropertyValue('--depth')) / 100;
        const translateX = moveX * 50 * depth;
        const translateY = moveY * 50 * depth;
        const scale = 1 + (depth * 0.5);
        
        particle.style.transform = `
          translate3d(${translateX}px, ${translateY}px, 0)
          scale(${scale})
          rotateX(${moveY * 20}deg)
          rotateY(${-moveX * 20}deg)
        `;
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      particles.forEach(particle => particle.remove());
    };
  }, []);

  return (
    <div className="background-container">
      <div className="noise-overlay"></div>
      <div ref={containerRef} className="particles-container"></div>
      <div className="gradient-overlay"></div>
    </div>
  );
};

export default BackgroundAnimation;