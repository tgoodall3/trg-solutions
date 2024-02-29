import React from 'react';
import { Box, Container, Typography, Grid } from '@mui/material';
import { FaLaptopCode, FaCogs, FaRegLightbulb } from 'react-icons/fa';


    function Services() {
        return (
            <Box sx={{height:'100%', pt: '64px', backgroundColor: '#2A0148', color: 'black' }}>
                <Container maxWidth="full" sx={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
                <Typography variant="h2" component="h1" gutterBottom sx={{color:'white', fontFamily: 'Ubuntu, sans-serif', fontWeight:'500', textAlign:'center' }}>
                        Our Services
                    </Typography>
                    <Grid container spacing={3} sx={{ marginTop: '2em', display:'flex', justifyContent:'center', textAlign:'center', padding: { xs: '20px', md: '40px' }}}>
                        <Grid item xs={12} md={6}>
                            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent:'center' }}>
                                <FaLaptopCode size={64} style={{ color:'#7900D2', marginBottom:'20px' }} />
                                <Typography variant="h4" gutterBottom sx={{ color:'white', fontFamily: 'Ubuntu, sans-serif', fontWeight:'400' }}>
                                    Web Design
                                </Typography>
                                <Typography sx={{color:'white', fontFamily: 'Ubuntu, sans-serif', fontWeight:'300', padding: { xs: '0 1rem', md: '0 2rem' }, textAlign: 'justify'}}>
                                    We create beautiful websites that are tailored to your business needs. Our team of experienced designers are dedicated to delivering high-quality designs that enhance your online presence.
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent:'center' }}>
                                <FaCogs size={64} style={{ color:'#7900D2', marginBottom:'20px' }} />
                                <Typography variant="h4" gutterBottom sx={{color:'white', fontFamily: 'Ubuntu, sans-serif', fontWeight:'400', }}>
                                    Web Development
                                </Typography>
                                <Typography sx={{color:'white', fontFamily: 'Ubuntu, sans-serif', fontWeight:'300', padding: { xs: '0 1rem', md: '0 2rem' }, textAlign: 'justify'}}>
                                    We develop functional websites that provide a seamless user experience. Our developers are skilled in a variety of programming languages and frameworks, allowing us to create websites that meet your specific requirements.
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                    <Grid container spacing={3} sx={{ marginTop: '2em', display:'flex', justifyContent:'center', textAlign:'center', padding: { xs: '20px', md: '40px' }}}>
                        <Grid item xs={12}>
                            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent:'center' }}>
                                <FaRegLightbulb size={64} style={{ color:'#7900D2', marginBottom:'20px' }} />
                                <Typography variant="h4" gutterBottom sx={{color:'white', fontFamily: 'Ubuntu, sans-serif', fontWeight:'400'}}>
                                    Web Management
                                </Typography>
                                <Typography sx={{color:'white', fontFamily: 'Ubuntu, sans-serif', fontWeight:'300', padding: { xs: '0 2rem', md: '0 6rem' }, textAlign: 'justify', textAlign:'center'}}>
                                    We offer comprehensive web management services to ensure your website remains up to date and secure. From regular updates to troubleshooting, we handle all aspects of website maintenance so you can focus on your business.
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        );
    }
export default Services;





