import React from 'react';
import { Box, Container, Typography, Button, Grid } from '@mui/material';
import backgroundImage from '../Images/hero.png';
import '../App.css';
import Hero from '../Components/Hero';
import Services from '../Components/Services';
import Why from '../Components/Why';
import Contact from './Contact';
import About from './About';
import Collab from '../Components/Collab';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import Calendar from 'react-calendar';
import Reviews from '../Components/Reviews';

function Home() {

  return (
    <HelmetProvider>
    <div>
    <Helmet>
      <title>TRG Digital Solutions - Web Development and Design for Small Businesses</title>
      <meta name="description" content="TRG Digital Solutions specializes in web development, design, and management services tailored for small businesses, startups, and individual portfolios. We help bring your digital vision to life." />
      <meta name="keywords" content="TRG Digital Solutions, Web Development, Web Design, Small Business, Startups, Portfolio, Web Management, Digital Solutions" />
</Helmet>
    <Hero />
    <About />
    <Services />
    <Collab />
    <Why />
    <Reviews />

    <Contact />
  </div>
    </HelmetProvider>
  );
}

export default Home;
