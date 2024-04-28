const express = require('express');
const app = express();
app.use(express.json());
const mysql = require('mysql');
const cors = require('cors');
app.use(cors());


const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'trg_db'
  });

  db.connect((err) => {
    if (err) {
      throw err;
    }
    console.log('Connected to the database.');
  });


app.post('/api/reviews', (req, res) => {
  const review = { 
    id: req.body.id, 
    name: req.body.name, 
    comment: req.body.comment, 
    rating: req.body.rating 
  };
  const sql = 'INSERT INTO reviews SET ?';
  db.query(sql, review, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

app.get('/api/reviews', (req, res) => {
  const sql = 'SELECT * FROM reviews';
  db.query(sql, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
