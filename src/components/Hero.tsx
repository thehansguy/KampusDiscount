import React from 'react';

const Hero = () => {
  return (
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 text-center intro-text">
                <h1>We are Kampus-discount</h1>
                <p>
                  Empowering Education, Enriching Lives: KAMPUSDISCOUNT, where savings, rewards, and community converge
                  to elevate the student journey.
                </p>
                <a href="#features" className="btn btn-custom btn-lg page-scroll">
                  Learn More
                </a>{' '}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
