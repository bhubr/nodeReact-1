const express = require('express');
const db = require('../db');
const router = express.Router();
const mysql = require('mysql');


// Use this route to get all the gifts

router.get('/', (req, res) => {
  db.query('SELECT * FROM gifts', req.params.id, (err, results) => {
    if (err) {
      return res.status(500).json({
        error: err.message,
        sql: err.sql
      });
    }
    return res.json(results);
  });
});

// One to CREATE a new gift


router.post('/', (req, res) => {
  db.query(`INSERT INTO gifts (name) VALUES (${mysql.escape(req.body.name)})` , (err, status) => {
    if (err) {
      console.log(err)
      return res.status(500).json({
        error: err.message,
        sql: err.sql
      });
    }

    return db.query(
      'SELECT * FROM gifts WHERE id = ?',
      status.insertId,
      (error, results) => res.status(201).json(results[0])
    );
  });
});


// One to DELETE a gift

router.delete('/:id', (req, res) => {
  db.query('DELETE FROM gifts WHERE id = ?', req.params.id, (err) => {
    if (err) {
      return res.status(500).json({
        error: err.message,
        sql: err.sql
      });
    }
    return res.sendStatus(204);
  });
});

module.exports = router;
