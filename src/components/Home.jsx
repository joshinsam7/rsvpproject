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
        {/* <div id="invitation" className="invitation-overlay">
        <div className="invitation-content">
            <h2 className="invitation-title">You're Invited!</h2>
            <p className="invitation-text">Join us for a special birthday celebration filled with fun, laughter, and unforgettable memories. We can't wait to celebrate with you!</p>
          </div>
        </div> */}
      </div>
    </section>
  );
}