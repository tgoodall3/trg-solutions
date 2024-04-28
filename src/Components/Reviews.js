import React, { useEffect, useState } from 'react';
import { Box, Typography, Button, Grid, TextField, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import ReactStars from "react-rating-stars-component"; 

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
  fetch('https://trgdigitalsolutions.com//api/reviews')
    .then(response => response.json())
    .then(data => setReviews(data))
    .catch(error => console.error(error));
}, []);

    const handleSubmit = (event) => {
        event.preventDefault();
       fetch('https://trgdigitalsolutions.com//api/reviews', {
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
    <Box sx={{ p: 9,
        backgroundColor: 'black',
         }}>
               <form maxWidth='md' onSubmit={handleSubmit} style={{width:'93%', display:'flex', flexDirection:'column', margin: '40px auto', backgroundColor:'white', padding:'30px', borderRadius:'16px', boxSizing:'border-box'}}>
               <Typography variant="h2" component="h1" gutterBottom sx={{color: theme.palette.primary.main, fontSize: isMobile ? '18px' : '25px', textAlign:'center', marginBottom:'30px'}}>
            Add your experience with us, we would love to hear from you!
        </Typography>
                <TextField 
                    sx={{marginBottom:'20px'}}
                    label="Name"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    required
                />
                <TextField
                    sx={{marginBottom:'20px'}}
                    label="Review"
                    value={comment}
                    onChange={e => setComment(e.target.value)}
                    required
                />
                <ReactStars
                    count={5}
                    onChange={ratingChanged}
                    size={24}
                    activeColor="#ffd700"
                    style={{marginBottom:'20px'}}
                />
                <TextField
                    sx={{marginTop:'20px'}}
                    label="Date"
                    type="date"
                    value={date}
                    onChange={e => setDate(e.target.value)}
                    InputLabelProps={{
                    shrink: true,
                    }}
                    required
                />
            <Button
                sx={{marginTop:'20px', width:'150px', margin:'15px auto'}}
                variant="contained"
                color="primary"
             type="submit">Submit</Button>
        </form>
        <Grid container spacing={1}>
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
        <Button sx={{color:theme.palette.secondary.main}} onClick={() => setPage(page => Math.max(page - 1, 0))}>Previous</Button>
        <Button sx={{color:theme.palette.secondary.main}} onClick={() => setPage(page => Math.min(page + 1, totalPages - 1))}>Next</Button>
    </Box>
</div>
    );
}

export default Reviews;