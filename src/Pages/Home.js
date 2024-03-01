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

function Home() {
  return (
    <div>
    <Hero />
    {/* <Collab /> */}
    <About />
    <Collab />

    <Services />
    <Why />
    <Contact />
    </div>
  );
}

export default Home;
