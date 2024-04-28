import React, { useEffect, useState } from 'react';
import { Box, Typography, Button, Grid, TextField, useMediaQuery, Container } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import ReactStars from "react-rating-stars-component";
import '../Styles/stars.css'; 

function Reviews() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    const [reviews, setReviews] = useState([]);
    const [name, setName] = useState('');
    const [comment, setComment] = useState('');
    const [rating, setRating] = useState('');
    const [page, setPage] = useState(0);
    const [date, setDate] = useState('');

    const reviewsPerPage = 2;
    const totalPages = Math.ceil(reviews.length / reviewsPerPage);

 useEffect(() => {
  fetch('https://trgdigitalsolutions.com/api/reviews')
    .then(response => response.json())
    .then(data => setReviews(data))
    .catch(error => console.error(error));
}, []);

    const handleSubmit = (event) => {
        event.preventDefault();
       fetch('https://trgdigitalsolutions.com/api/reviews', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ name, comment, rating, date })
})
        .then(response => response.json())
        .then(data => setReviews([...reviews, data]))
        .catch(error => console.error(error));
        setName('');
        setComment('');
        setRating('');
        setDate('');
        window.location.reload();
        
    };

    const ratingChanged = (newRating) => {
        setRating(newRating);
    };

    
    return (
      <div>
    <Box sx={{ 
        backgroundColor: 'black',
        width: '100%',
        boxSizing: 'border-box',
         }}>
            <Container maxWidth="md" sx={{padding:'50px'}}>
    <Typography variant="h2" className='ubuntu-medium' component="h1" gutterBottom sx={{color: theme.palette.primary.main, fontSize: isMobile ? '18px' : '25px', textAlign:'center', marginBottom:'30px'}}>
        Add your experience with us, we would love to hear from you!
    </Typography>
    <Box component="form" onSubmit={handleSubmit} sx={{display:'flex', flexDirection:'column', alignItems:{xs:'center', md:"flex-start"}, marginTop: '2em', backgroundColor:'white', padding:'40px', borderRadius:'40px', fontFamily: 'Ubuntu, sans-serif' }}>
        <TextField
            fullWidth
            label="Name"
            variant="outlined"
            color="primary"
            sx={{ marginBottom: '1em' }}
            InputProps={{ style: { color: 'black' } }}
            InputLabelProps={{ style: { color: 'black' } }}
            value={name}
            onChange={(e) => setName(e.target.value)}
        />
        <TextField
            fullWidth
            label="Review"
            variant="outlined"
            color="primary"
            sx={{ marginBottom: '1em' }}
            InputProps={{ style: { color: 'black' } }}
            InputLabelProps={{ style: { color: 'black' } }}
            value={comment}
            onChange={(e) => setComment(e.target.value)}
        />
    <ReactStars
        className='stars'
        count={5}
        onChange={ratingChanged}
        size={24}
        activeColor="#ffd700"
    />

        <TextField
            fullWidth
            label="Date"
            type="date"
            variant="outlined"
            color="primary"
            sx={{ marginBottom: '1em', marginTop:'1em' }}
            InputProps={{ style: { color: 'black' } }}
            InputLabelProps={{ style: { color: 'black' }, shrink: true }}
            value={date}
            onChange={(e) => setDate(e.target.value)}
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
            }}
            type="submit"
        >
            Submit
        </Button>
    </Box>
</Container>
        <Grid container spacing={1}
             sx={{
            }}>
            <Grid item xs={12} sm={6} md={4}>
                <Box sx={{ backgroundColor: theme.palette.secondary.main, width: '220px', height: '220px', margin: 'auto', display:'flex', justifyContent:'center', alignItems:'left', flexDirection:'column', padding:'20px' }}>
                    <Typography variant="h2" component="h1" gutterBottom sx={{color: '#7900D2', fontWeight:'bold', fontSize: '25px'}}>
                        Reviews
                    </Typography>
                    <Typography variant="h5" component="p" gutterBottom sx={{ fontSize:'12px',color: theme.palette.primary.main, display:'flex' }}>
                        Customer service and satisfaction is our highest priority. Here are some of the things our clients have said about us.
                    </Typography>
                    <ReactStars
                        count={5}
                        onChange={ratingChanged}
                        size={24}
                        activeColor="#ffd700"
                        edit={false}
                        style={{marginBottom:'20px'}}
                    />
                    <div style={{
                        display:'flex',
                        margin:'10px auto',
                    }}>
                         <Button sx={{color:theme.palette.primary.main}} onClick={() => setPage(page => Math.max(page - 1, 0))}>Previous</Button>
                        <Button sx={{color:theme.palette.primary.main}} onClick={() => setPage(page => Math.min(page + 1, totalPages - 1))}>Next</Button>
                    </div>
                </Box>
                
            </Grid>
            {reviews.slice(page * reviewsPerPage, (page + 1) * reviewsPerPage).map((review, index) => (
                <Grid item xs={12} sm={6} md={4} key={index} sx={{}}>
                    <Box sx={{ backgroundColor: theme.palette.primary.main, width: '220px', height: '220px', margin: 'auto', display:'flex', justifyContent:'center', alignItems:'left', flexDirection:'column', padding:'20px' }}>
                        <Typography variant="h2" component="h1" gutterBottom sx={{color: theme.palette.secondary.main, fontSize: '25px', color: 'white'}}>
                            {review.name}
                        </Typography>
                        <Typography variant="h5" component="p" gutterBottom sx={{ fontSize:'12px',color:'white', display:'flex' }}>
                            {review.comment}
                        </Typography>
                        <ReactStars
                            count={5}
                            value={review.rating}
                            size={24}
                            activeColor="#ffd700"
                            edit={false}
                        />
                        <Typography variant="h5" component="p" gutterBottom sx={{ fontSize:'12px',color:'white', display:'flex' }}>
                            {review.date}
                        </Typography>
                    </Box>
                </Grid>
            ))}
        </Grid>
    </Box>
</div>
    );
}

export default Reviews;