const express = require('express');
const router = express.Router();
const db = require('../connection');
// const gifts = require('../data/gifts.json');


// Use this route to get all the gifts
router.get('/', (req, res) => {
  db.query('SELECT * FROM gift', (err, results) => {
    if (err) {
      return res.status(500).json({
        error: err.message,
        sql: err.sql,
      });
    }
    return res.json(results);
  });
});

router.post('/', (req, res) => {
  const giftName = req.body;
  db.query('INSERT INTO gift SET ?;', [giftName], (err) => {
    if (err) {
      res.status(500).send('Houston, we have a problem');
    } else {
      res.sendStatus(200);
    }
  });
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  db.query(`DELETE from gift WHERE id = ${id}`, (err) => {
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
