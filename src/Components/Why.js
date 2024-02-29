import React from 'react';
import { Box, Container, Typography, Grid } from '@mui/material';
import backgroundImage from '../Images/why.png';
import web from '../Images/webdevelopment.png'


function Why() {
  return (
    <Box sx={{ height:'100%', pt: '64px', background:`linear-gradient(rgba(42, 1, 72, 1) 1%, rgba(0, 0, 0, 1), rgba(0, 0, 0, 1))`, backgroundRepeat:'no-repeat', backgroundSize:'cover', backgroundPosition:'center', color: 'black' }}>
        <Container maxWidth="lg">
            <Grid container spacing={3} sx={{ padding: { xs: '20px', md: '40px' }}}>
                <Grid item xs={12} md={6}>
                <Typography variant="h2" component="h1" gutterBottom sx={{color:'white', fontFamily: 'Ubuntu, sans-serif', fontWeight:'500', textAlign:'center' }}>
                        Why Choose Us
                    </Typography>
                    <Grid container spacing={3} sx={{display:'flex', flexDirection:'column', marginTop: '2em' }}>
                        <Grid item xs={12}>
                            <Typography variant="h4" gutterBottom sx={{ color:'#7900D2', fontFamily: 'Ubuntu, sans-serif', fontWeight:'400' }}>
                                Expertise
                            </Typography>
                            <Typography sx={{color:'white', fontFamily: 'Ubuntu, sans-serif', fontWeight:'300', padding: { xs: '0 1rem', md: '0 2rem' }, textAlign: 'justify'}}>
                                Our team is composed of highly skilled and experienced professionals who are experts in their respective fields. We are dedicated to providing the highest quality services to our clients.
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant="h4" gutterBottom sx={{ color:'#7900D2', fontFamily: 'Ubuntu, sans-serif', fontWeight:'400' }}>
                                Custom Solutions
                            </Typography>
                            <Typography sx={{color:'white', fontFamily: 'Ubuntu, sans-serif', fontWeight:'300', padding: { xs: '0 1rem', md: '0 2rem' }, textAlign: 'justify'}}>
                                We understand that every business is unique, and we tailor our services to meet your specific needs. We work closely with you to develop solutions that align with your business goals.
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant="h4" gutterBottom sx={{ color:'#7900D2', fontFamily: 'Ubuntu, sans-serif', fontWeight:'400' }}>
                                Customer Satisfaction
                            </Typography>
                            <Typography sx={{color:'white', fontFamily: 'Ubuntu, sans-serif', fontWeight:'300', padding: { xs: '0 1rem', md: '0 2rem' }, textAlign: 'justify'}}>
                                We prioritize customer satisfaction above all else. We strive to exceed our clients' expectations and provide exceptional customer service at every step of the way.
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} md={6}>
                    <img src={web} alt="Why Choose Us" style={{ width: '100%', height: 'auto' }} />
                </Grid>
            </Grid>
        </Container>
    </Box>
  );
}

export default Why;
