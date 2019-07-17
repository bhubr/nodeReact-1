const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');
const giftsRouter = require('./routes/index');


const app = express();
app.use(cors()); 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', giftsRouter);


app.listen(process.env.PORT || 5000, err => {
  if (err) {
    console.error(err.message);
  } else {
    console.log(`Server is listening on port ${process.env.PORT || 5000}`);
  }
});