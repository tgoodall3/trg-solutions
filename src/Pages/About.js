import React from 'react';
import { Box, Typography } from '@mui/material';
import { Link } from 'react-scroll';
import { styled } from '@mui/system';


const About = () => {

    const CustomList = styled('ul')({
        '& li::marker': {
          color: '#7900D2', // Change this to your desired color
        },
      });

    return (
        <Box id="about" sx={{ padding: { xs: '2em', sm: '4em', md: '8em' }, background:`linear-gradient(rgba(0, 0, 0, 1) 40%,rgba(42, 1, 72, 1) )`, color:'white'}}>            {/* <Typography data-aos='fade-up' variant="h3" component="h1" gutterBottom sx={{color:'white', fontFamily: 'Ubuntu, sans-serif', fontWeight:'500', textAlign:'center' }}>
                About Us
            </Typography> */}
            <Typography variant="body1" paragraph sx={{ fontFamily: 'Ubuntu, sans-serif', fontSize:'16px', fontWeight:'300',}}>
                <span style={{color:'#7900D2', fontSize:'23px', textAlign:'center', fontWeight:'500'}}>Hey there!</span> <br/>We're a passionate team of web designers and developers, and we love helping small businesses like yours make a big impact online. Remember the excitement when you first started your business? We feel the same way about web design and development!
            </Typography>
            <Typography variant="body1" paragraph sx={{textAlign:{xs:'left', sm:'left'}, fontFamily: 'Ubuntu, sans-serif', fontWeight:'300', fontSize:'16px'}}>
            <span style={{color:'#7900D2', fontSize:'23px',  fontWeight:'500'}}> Here's what we can do for you:</span>
            <CustomList>
                    <li>Create professional portfolios that showcase your skills and achievements</li>
                    <li>Design and develop fully functional websites that meet your business needs</li>
                    <li>Create user-friendly and responsive designs that are as beautiful as they are functional</li>
                    <li>Provide comprehensive web management services to keep your website up to date and secure</li>
                    <li>and much more, have a question? <Link to='contact' smooth={true} duration={500} style={{cursor:'pointer', textDecoration:'underline', '&:hover': { color: '#7900D2' }}}>Reach out!</Link></li>
                    </CustomList>
            </Typography>
            <Typography variant="body1" paragraph sx={{ fontWeight:'300',textAlign:{xs:'left', sm:'left'}, fontFamily: 'Ubuntu, sans-serif', fontSize:'16px'}}>
                We're not just about delivering a product. We're about delivering an experience. From the initial consultation to the final product, we work closely with you every step of the way. The end result? A website that truly represents your brand and resonates with your target audience.
            </Typography>
            <Typography variant="body1" paragraph sx={{fontWeight:'300',textAlign:{xs:'left', sm:'left'}, fontFamily: 'Ubuntu, sans-serif', fontSize:'16px'}}>
                So whether you're a small business owner looking to expand your reach, a professional seeking to showcase your portfolio, or you simply need a website, we've got you covered. Ready to bring your vision to life?  <Link to='contact' smooth={true} duration={500} style={{cursor:'pointer', textDecoration:'underline', color:'white' }}>Lets chat!</Link>
            </Typography>
        </Box>
    );
};

export default About;