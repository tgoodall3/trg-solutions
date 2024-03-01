import React from 'react';
import { Box, Typography, Button, Grid } from '@mui/material';
import { Link } from 'react-scroll';
import purple from '../Images/purple.jpg'

const Collab = () => {
    return (
        <Box sx={{ 
            padding: { xs: '1.5em', sm: '2em', md: '2em' },
            textAlign: 'center', 
            backgroundColor: 'black', 
            color: 'white', 
            backgroundImage: `linear-gradient(rgba(0, 0, 0, .9) 40%,rgba(0, 0, 0, .8) ), url(${purple})`,
            borderRadius:'150px', 
            width: { xs: '90%', sm: '80%', md: '70%' }, 
            margin: { xs: '1em auto', sm: '2em auto', md: '10em auto' },
            display:{xs:'none', md:'block'}
        }}>
            <Grid container flexDirection='column' justifyContent="center" alignItems="center">
                <Typography variant="h6" paragraph sx={{fontSize:{ xs:'14px', md:'18px'}}}>
                    We're always open to connect. Let's discuss how we can help you achieve your goals.
                </Typography>
                <Link to="contact" smooth={true} duration={500} className='ubuntu-regular' style={{width:'200px', textDecoration: 'none', color: 'inherit', marginBottom:'10px', marginTop:'10px'}}>
              <Typography variant="h7" sx={{border:'2px solid #7900D2', padding:'10px', borderRadius:'40px', fontWeight:'500', color:'#7900D2', fontSize: { xs: '0.8rem', md: '1rem' }, cursor:'pointer'}}
               onMouseEnter={(event) => {
                event.target.style.color = 'white';
              }}
              onMouseLeave={(event) => {
                event.target.style.backgroundColor = '';
                event.target.style.color = '#7900D2';
                event.target.style.transition = '.2s'
              }}>
                Lets Connect
              </Typography>
            </Link>
            </Grid>
        </Box>
    );
};

export default Collab;