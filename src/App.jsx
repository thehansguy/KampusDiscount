import React, { useState, useEffect } from 'react';
import { Navigation } from './components/navigation';
import { Header } from './components/header';
import { Features } from './components/features';
import { About } from './components/about';
import { Brand } from './components/brand';
import { Offer } from './components/offers';
import { Services } from './components/services';
//import { Gallery } from "./components/gallery";
//import { Testimonials } from "./components/testimonials";
//import { Team } from "./components/Team";
import { Contact, Member } from './components/member';
import JsonData from './data/data.json';
import SmoothScroll from 'smooth-scroll';
import './App.css';
import { Footer } from './components/footer';

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>
      <Navigation />
      <Header data={landingPageData.Header} />
      {/* <Features data={landingPageData.Features} /> */}
      <About data={landingPageData.About} />
      <Member data={landingPageData.Contact} />
      <Brand data={landingPageData.brand} />
      {/* <Services data={landingPageData.Services} /> */}
      {/* <Testimonials data={landingPageData.Testimonials} /> */}
      {/* <Team data={landingPageData.Team} /> */}
      <Offer />
      <Footer />
    </div>
  );
};

export default App;
