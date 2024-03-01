import React from 'react';
import { Box, Container, Typography, TextField, Button } from '@mui/material';

function Contact() {
    return (
        <Box sx={{ pt: '64px', background:`linear-gradient(rgba(0, 0, 0, 1) 0%, #7900D2 100%)`, color: 'white' }}>            <Container maxWidth="md" sx={{padding:'50px'}}>
                <Typography id='contact' variant="h3" component="h1" gutterBottom sx={{color:'white', fontFamily: 'Ubuntu, sans-serif', fontWeight:'500', textAlign:'center' }}>
                    Lets Connect!
                </Typography>
                <Box component="form" sx={{display:'flex', flexDirection:'column', alignItems:{xs:'center', md:"flex-start"}, marginTop: '2em', backgroundColor:'white', padding:'40px', borderRadius:'40px', fontFamily: 'Ubuntu, sans-serif' }}>
                <TextField
                        fullWidth
                        label="Name"
                        variant="outlined"
                        color="primary"
                        sx={{ marginBottom: '1em' }}
                        InputProps={{ style: { color: 'black' } }}
                        InputLabelProps={{ style: { color: 'black' } }}
                    />
                    <TextField
                        fullWidth
                        label="Email"
                        variant="outlined"
                        color="primary"
                        sx={{ marginBottom: '1em' }}
                        InputProps={{ style: { color: 'black' } }}
                        InputLabelProps={{ style: { color: 'black' } }}
                    />
                    <TextField
                        fullWidth
                        label="Message"
                        variant="outlined"
                        color="primary"
                        sx={{ marginBottom: '1em' }}
                        InputProps={{ style: { color: 'black' } }}
                        InputLabelProps={{ style: { color: 'black' } }}
                    />
                    <Button className='ubuntu-medium' variant="contained"  sx={{ marginTop:'2em',border:'2px solid #7900D2', padding:'10px', borderRadius:'40px', fontWeight:'500', color:'black', width:'150px', backgroundColor:'transparent', fontFamily: 'Ubuntu, sans-serif', fontWeight:'500',   }}
                        onMouseEnter={(event) => {
                            event.target.style.color = 'white';
                            event.target.style.backgroundColor = '#7900D2';
                        }}
                        onMouseLeave={(event) => {
                            event.target.style.backgroundColor = 'transparent';
                            event.target.style.color = 'black';
                            event.target.style.fontWeight = '4  00';
                            event.target.style.border = '2px solid #7900D2';
                            event.target.style.transition = '.2s'
                        }}>
                        Submit
                    </Button>
                </Box>
            </Container>
        </Box>
    );
}

export default Contact;
