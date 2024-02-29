import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@mui/material';
// import { Link } from 'react-router-dom';
import { Link } from 'react-scroll';
import logo from '../Images/logo3.png';
import logoWhite from '../Images/logo2.png';

function Navbar() {
  return (
    <Box sx={{ flexGrow: 1, background: 'linear-gradient( #7900D2, black 80%)'
        , display:'flex', justifyContent:'center', padding: { xs: '10px', md: '15px' }, height:'150px' }}>
        <AppBar data-aos='fade-down' position="static" sx={{width:'90%', height:'65px', borderRadius:'40px', backgroundColor:'black', display:'flex', justifyContent:'center'}}>
          <Toolbar>
          <img src={logo} alt="logo" style={{width:'55px', marginRight:'5px'}}
              onMouseEnter={(event) => {
                event.target.src = logoWhite;
                event.target.style.transition = '.2s'

              }}
              onMouseLeave={(event) => {
                event.target.src = logo;  
                event.target.style.transition = '.2s'
              }}
          />  
            <Typography variant="h6" sx={{textTransform:'uppercase', flexGrow: 1, }}>
            </Typography>
            <Link to="services" smooth={true} duration={500} style={{ textDecoration: 'none', color: 'inherit', cursor:'pointer' }}>
            <Typography className='ubuntu-regular' variant="h7" sx={{ color: 'inherit', '&:hover': { color: '#7900D2' }, fontSize: { xs: '0.8rem', md: '1rem' } }}>
                Services
              </Typography>
            </Link>
            <Link to="/about" style={{ textDecoration: 'none', color: 'inherit', marginLeft: '20px' }}>
              <Typography className='ubuntu-regular' variant="h7" sx={{ color: 'inherit', '&:hover': { color: '#7900D2'  }, fontSize: { xs: '0.8rem', md: '1rem' }, cursor:'pointer' }}>
                About
              </Typography>
            </Link>
            <Link to="contact" smooth={true} duration={500} className='ubuntu-regular' style={{ textDecoration: 'none', color: 'inherit', marginLeft: '20px' }}>
              <Typography variant="h7" sx={{border:'2px solid #7900D2', padding:'10px', borderRadius:'40px', fontWeight:'500', color:'#7900D2', fontSize: { xs: '0.8rem', md: '1rem' }, cursor:'pointer'}}
               onMouseEnter={(event) => {
                event.target.style.color = 'white';
                event.target.style.backgroundColor = '#7900D2'
              }}
              onMouseLeave={(event) => {
                event.target.style.backgroundColor = '';
                event.target.style.color = '#7900D2';
                event.target.style.border = '2px solid #7900D2';
                event.target.style.transition = '.2s'
              }}>
                Lets Connect
              </Typography>
            </Link>
          </Toolbar>
        </AppBar>
    </Box>
  );
}

export default Navbar;