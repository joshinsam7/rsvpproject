import React from "react";
import familyImg from "../assets/family-1.jpg";
import cakeImg from "../assets/cake.jpg";

export default function Home() {
  return (
    <section id="home" className="home-hero">
      <div className="home-hero__grid">
        <div className="home-hero__side">
          <img src={familyImg} alt="Family" className="home-hero__img" />
        </div>
        <div className="home-hero__side home-hero__side--right">
          <img src={cakeImg} alt="Birthday cake" className="home-hero__img2" />
        </div>
        <div id="home-text" className="home-text">
          <h2 style={{ margin: 0 }}>Hello Friends!</h2>
          <p style={{ margin: '0.25rem 0 0'}}>Justopher is turning 1</p>
        </div>      
      </div>
    </section>
  );
}