const express = require('express');
const router = express.Router();
const db = require('../connection');


// const gifts = require('../data/gifts.json');

// Use this route to get all the gifts
router.get('/', (req, res) => {
  return res.json(gifts);
});





router.get('/gifts', (req, res) => {
  // Appeler la méthode query sur l'object connection
  db.query('SELECT * FROM gifts', (err, results) => {
    if (err) {
      return res.status(500).json({
        error: err.message,
        sql: err.sql
      });
    }
    return res.json(results);
  });
});

router.post('/PostAGifts', (req, res) => {
  const name = req.body
  db.query('INSERT INTO gifts SET ?', [name], (err, results) => {
    if (err) {
      return res.status(500).json({
        error: err.message,
        sql: err.sql
      });
    }
    return res.json(results);
  });
});

router.delete('/NoCadowForBadGuy/:id', (req, res) => {
  const { id } = req.params;
  db.query(`DELETE from gifts WHERE id = ${id}`, (err) => {
    if (err) {
      return res.status(500).json({
        error: err.message,
        sql: err.sql
      });
    }
    return res.sendStatus(200);
  });
});



module.exports = router;
