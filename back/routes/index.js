const express = require('express');
const router = express.Router();
const db = require('../connection');


router.get('/gifts', (req, res) => {
  db.query('SELECT * FROM gifts', (err, results) => {
    if (err) {
      res.status(500).send('Erreur lors de la récupération des cadeaux');
    } else {
      res.json(results);
    }
  });
});


router.post('/gifts', (req, res) => {
  const giftName = req.body;
  db.query('INSERT INTO gifts SET ?;', [giftName], (err) => {
    if (err) {
      res.status(500).send('Erreur lors de l\'ajout du cadeau');
      console.log(err);
    } else {
      res.sendStatus(200);
    }
  });
});


router.delete('/gifts/:id', (req, res) => {
  const { id } = req.params;
  db.query(`DELETE from gifts WHERE id = ${id}`, (err) => {
    if (err) {
      console.log(err);
      res.status(500).send('Erreur lors de la suppression du cadeau');
    } else {
      res.sendStatus(200);
    }
  });
});


module.exports = router;
