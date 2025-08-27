import React from "react";

const Hero = () => {
  const goToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="hero">
      <div className="content">
        <div className="title">
          <h1>LET'S</h1>
          <h1>GET</h1>
          <h1>MOVING</h1>
        </div>
        <div className="sub-title">
          <p>Your Journey to Fitness Starts Here</p>
          <p>Unleash Your Potential</p>
        </div>
        <div className="buttons">
          <button onClick={() => goToSection("pricing")}>
             Discover Your Plan
          </button>
          <button onClick={() => goToSection("contact")}>
            Start Your Journey
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
