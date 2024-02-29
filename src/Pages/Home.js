import React from 'react';
import { Box, Container, Typography, Button, Grid } from '@mui/material';
import backgroundImage from '../Images/hero.png';
import '../App.css';
import Hero from '../Components/Hero';
import Services from '../Components/Services';
import Why from '../Components/Why';
import Contact from './Contact';

function Home() {
  return (
    <div>
    <Hero />
    <Services />
    <Why />
    <Contact />
    </div>
  );
}

export default Home;
