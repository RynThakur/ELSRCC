import React from 'react';
import './Sponser.css';

const Sponsor = () => {
  return (
    <section className="c-wrapper">
      <div className="paddings innerWidth flexCenter c-container">
        <h1>Our Partners</h1>
        <div className="sponsor-logos">
          {Array.from({ length: 18 }, (_, index) => (
            <img
              key={index}
              src={require(`/Users/aryanthakur/Documents/els2/src/assets/${index + 1}.png`)}
              alt={`Logo ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sponsor;
