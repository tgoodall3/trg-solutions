import React from 'react';
import { Box, Container, Typography, Button, Grid } from '@mui/material';
import backgroundImage from '../Images/hero.png';
import '../App.css';
import { Link } from 'react-scroll';


function Hero() {
    return (
        <Box sx={{ height: '100vh', pt: '64px', backgroundImage:`linear-gradient(rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.7)), url(${backgroundImage})`, color: '#fff',
                                backgroundRepeat:'no-repeat', backgroundSize:'cover', backgroundPosition:'center'
                                }}>
            <Container maxWidth="md" sx={{padding:{sm:"40px", md:'0'}}}>
                <Typography data-aos='fade-in' className='ubuntu-regular' variant="h2" component="h1" gutterBottom sx={{color:'#7900D2', fontFamily: 'Ubuntu, sans-serif', fontWeight:'500', fontSize: { xs: '2rem', md: '3rem' } }}>
                    Welcome to TRG Digital Solutions
                </Typography>
                <Typography className='ubuntu-regular' variant="h5" gutterBottom sx={{fontFamily: 'Ubuntu, sans-serif', fontWeight:'300', fontSize: { xs: '1rem', md: '1.5rem' } }}>
                    We provide innovative tech solutions to help your business grow.
                </Typography>
                <Link to="about" smooth={true} duration={500}>
  <Button className='ubuntu-medium' variant="contained" color="primary" sx={{ marginTop:'2em',border:'2px solid #7900D2', padding: { xs: '5px', md: '10px' }, borderRadius:'40px', fontWeight:'500', color:'#7900D2', width:'150px', backgroundColor:'transparent', fontFamily: 'Ubuntu, sans-serif', fontWeight:'500'}}
    onMouseEnter={(event) => {
      event.target.style.color = 'white';
      event.target.style.backgroundColor = '#7900D2';
    }}
    onMouseLeave={(event) => {
      event.target.style.backgroundColor = 'transparent';
      event.target.style.color = '#7900D2';
      event.target.style.border = '2px solid #7900D2';
      event.target.style.transition = '.2s'
    }}>
    Learn More
  </Button>
</Link>
            </Container>
        </Box>
      );
}

export default Hero;

