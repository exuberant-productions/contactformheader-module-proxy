const express = require('express');

const app = express();
const port = 4000;
const cors = require('cors');

app.use(cors());

app.use(express.json());

app.use(express.static(`${__dirname}/../public`));

app.listen(port, () => {
  // console.log(`WE ARE LISTENING ON PORT ${port}`);
});