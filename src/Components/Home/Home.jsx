import React from 'react';
import ParticleBackground from '../ReactParticles/ReactParticles';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <ParticleBackground />
      <div className="content">
        <h1>Happy 3-Month Anniversary!</h1>
        <p>I hope you love it!</p>
      </div>
    </div>
  );
};

export default Home;