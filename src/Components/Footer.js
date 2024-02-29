import { Box, Container, Grid, Typography, IconButton } from '@mui/material';
import { Facebook, Instagram, Twitter } from '@mui/icons-material';
import logo from '../Images/logo3.png';

const Footer = () => {
    return (
        <Box sx={{ backgroundColor: '#7900D2', color: 'white', py: { xs: 2, md: 3 } }}>
            <Container maxWidth="lg">
                <Box sx={{ backgroundColor: 'black', color: 'white', py: { xs: 2, md: 3 }, borderRadius:'40px' }}>
                    <Container maxWidth="lg">
                        <Grid container spacing={3} justifyContent={{ xs: 'center', md: 'space-between' }} alignItems="center">
                            <Grid item xs={12} sm={6} md={4} sx={{ textAlign: 'center' }}>
                                <img src={logo} alt="Logo" style={{ width: '100px' }} />
                            </Grid>
                            <Grid item xs={12} sm={6} md={4} sx={{ textAlign: 'center' }}>
                                <Typography variant="h6">Contact Info</Typography>
                                <Typography>123 Main St, Anytown, USA</Typography>
                                <Typography>(123) 456-7890</Typography>
                                <Typography>info@yourwebsite.com</Typography>
                            </Grid>
                            <Grid item xs={12} sm={6} md={4} sx={{ textAlign: 'center' }}>
                                <Typography variant="h6">Follow Us</Typography>
                                <IconButton color="inherit" href="https://www.facebook.com" target="_blank" rel="noopener">
                                    <Facebook />
                                </IconButton>
                                <IconButton color="inherit" href="https://www.instagram.com" target="_blank" rel="noopener">
                                    <Instagram />
                                </IconButton>
                                <IconButton color="inherit" href="https://www.twitter.com" target="_blank" rel="noopener">
                                    <Twitter />
                                </IconButton>
                            </Grid>
                        </Grid>
                    </Container>
                </Box>
            </Container>
        </Box>
    );
};

export default Footer;