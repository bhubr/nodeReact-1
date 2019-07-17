const express = require('express');
const router = express.Router();
const db = require('../connection');
const main = require('./mail');


router.post('/', (req, res) => {
  const { data } = req.body
  main(data)
    .catch(console.error)
    .then(() => res.sendStatus(200))
});






module.exports = router;