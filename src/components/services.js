import React from 'react';
import aboutImage from './aboutus.jpeg';

function Service() {
  return (
    <section id="services" className="about">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2>Data Analysis</h2>
            <p>
            We develop sophisticated predictive models that analyze historical data, identify
            patterns, and forecast future outcomes with precision.
            </p>
          </div>
          <div className="about-image">
            <img src="dataanalysis.jpeg" alt="Service 1"  />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Service
