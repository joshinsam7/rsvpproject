import React, { useEffect, useRef } from 'react';
import pic1 from '../assets/pic-1.jpeg';
import pic2 from '../assets/pic-2.jpeg';
import pic3 from '../assets/pic-3.jpeg';
import pic4 from '../assets/pic-4.jpeg';

export default function Showcase() {
  const gridRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const img = card.querySelector('.showcase-image');
    if (!img) return;
    const rect = card.getBoundingClientRect();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    const x = ((clientX - rect.left) / rect.width) * 100;
    const y = ((clientY - rect.top) / rect.height) * 100;
    img.style.transformOrigin = `${x}% ${y}%`;
  };

  const handleMouseLeave = (e) => {
    const img = e.currentTarget.querySelector('.showcase-image');
    if (img) img.style.transformOrigin = '50% 50%';
  };

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid || typeof IntersectionObserver === 'undefined') return;

    const cards = Array.from(grid.querySelectorAll('.showcase-card'));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          } else {
            entry.target.classList.remove('in-view');
          }
        });
      },
      { root: null, rootMargin: '0px 0px -10% 0px', threshold: 0.2 }
    );

    cards.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="showcase" className="showcase-section" style={{ minHeight: '60vh', backgroundColor: 'white'}}>
      <div className="showcase-container">
        <div className="showcase-header">
          <h2 className="showcase-title">A few happy moments</h2>
          <p className="showcase-subtitle">Snapshots from our little king's days</p>
        </div>

        <div className="showcase-grid" ref={gridRef}>
          <figure className="showcase-card" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} onTouchStart={handleMouseMove} onTouchMove={handleMouseMove} onTouchEnd={handleMouseLeave}>
            <img src={pic1} alt="Liam enjoying a fun moment 1" className="showcase-image" />
          </figure>
          <figure className="showcase-card" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} onTouchStart={handleMouseMove} onTouchMove={handleMouseMove} onTouchEnd={handleMouseLeave}>
            <img src={pic2} alt="Liam enjoying a fun moment 2" className="showcase-image" />
          </figure>
          <figure className="showcase-card" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} onTouchStart={handleMouseMove} onTouchMove={handleMouseMove} onTouchEnd={handleMouseLeave}>
            <img src={pic3} alt="Liam enjoying a fun moment 3" className="showcase-image" />
          </figure>
          <figure className="showcase-card" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} onTouchStart={handleMouseMove} onTouchMove={handleMouseMove} onTouchEnd={handleMouseLeave}>
            <img src={pic4} alt="Liam enjoying a fun moment 4" className="showcase-image" />
          </figure>
        </div>
      </div>
    </section>
  );
}