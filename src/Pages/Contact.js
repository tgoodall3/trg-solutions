import React from 'react';
import { Box, Container, Typography, TextField, Button } from '@mui/material';

function Contact() {
    return (
        <Box sx={{ pt: '64px', backgroundColor: 'black', color: 'white' }}>
            <Container maxWidth="md" sx={{padding:'50px'}}>
                <Typography variant="h2" component="h1" gutterBottom sx={{color:'white', fontFamily: 'Ubuntu, sans-serif', fontWeight:'500', textAlign:'center' }}>
                    Lets Work!
                </Typography>
                <Box component="form" sx={{ marginTop: '2em', backgroundColor:'#7900D2', padding:'70px', borderRadius:'40px', fontFamily: 'Ubuntu, sans-serif' }}>
                    <TextField
                        fullWidth
                        label="Name"
                        variant="outlined"
                        color="secondary"
                        sx={{ marginBottom: '1em', fontFamily: 'Ubuntu, sans-serif' }}
                        InputProps={{ style: { color: 'white' } }}
                    />
                    <TextField
                        fullWidth
                        label="Email"
                        variant="outlined"
                        color="secondary"
                        sx={{ marginBottom: '1em' }}
                        InputProps={{ style: { color: 'white' } }}
                    />
                    <TextField
                        fullWidth
                        label="Message"
                        variant="outlined"
                        color="secondary"
                        multiline
                        rows={4}
                        sx={{ marginBottom: '1em' }}
                        InputProps={{ style: { color: 'white' } }}
                    />
                    <Button className='ubuntu-medium' variant="contained"  sx={{ marginTop:'2em',border:'2px solid #7900D2', padding:'10px', borderRadius:'40px', fontWeight:'500', color:'black', width:'150px', backgroundColor:'transparent', fontFamily: 'Ubuntu, sans-serif', fontWeight:'500'}}
                        onMouseEnter={(event) => {
                            event.target.style.color = '#7900D2';
                            event.target.style.backgroundColor = 'white';
                        }}
                        onMouseLeave={(event) => {
                            event.target.style.backgroundColor = 'transparent';
                            event.target.style.color = 'black';
                            event.target.style.fontWeight = '4  00';
                            event.target.style.border = '2px solid #7900D2';
                            event.target.style.transition = '.2s'
                        }}>
                        Learn More
                    </Button>
                </Box>
            </Container>
        </Box>
    );
}

export default Contact;
