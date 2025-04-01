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
    <div className="background-animation">
      <div className="noise-overlay"></div>
      <div ref={containerRef} className="particles-container"></div>
      <div className="gradient-overlay"></div>
      <style jsx>{`
        .background-animation {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: -1;
          overflow: hidden;
        }
        
        .noise-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%' height='100%' filter='url(%23noiseFilter)' opacity='0.05'/%3E%3C/svg%3E");
          pointer-events: none;
        }
        
        .particles-container {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }
        
        .particle {
          position: absolute;
          top: var(--y);
          left: var(--x);
          width: var(--size);
          height: var(--size);
          background: var(--color);
          border-radius: 50%;
          filter: blur(5px);
          opacity: 0.3;
          transform: translate3d(0, 0, 0);
          animation: float var(--duration) var(--delay) infinite ease-in-out alternate;
        }
        
        @keyframes float {
          0% {
            transform: translate3d(0, 0, 0) scale(1);
          }
          100% {
            transform: translate3d(0, -50px, 0) scale(1.1);
          }
        }
        
        .gradient-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: radial-gradient(circle at center, transparent 0%, rgba(10, 10, 20, 0.9) 100%);
          pointer-events: none;
        }
      `}</style>
    </div>
  );
};

export default BackgroundAnimation;