const express = require('express');

const app = express();
const port = 3000;
const cors = require('cors');

const proxy = require('http-proxy-middleware');

app.use(express.static(`${__dirname}/../public`));

app.get('/:homeID', (req, res) => {
  res.redirect(`/index.html?homeId=${req.params.homeID}`);
});

const options = {
  target: '/',
  router: {
    '/api/homeinfo': 'http://ec2-54-183-109-121.us-west-1.compute.amazonaws.com',
    '/similarHomes': 'http://ec2-54-215-192-145.us-west-1.compute.amazonaws.com',
    '/homeDetails': 'http://ec2-54-215-192-145.us-west-1.compute.amazonaws.com',
    '/homes': 'http://ec2-54-153-58-95.us-west-1.compute.amazonaws.com/',
    '/home': 'http://ec2-54-153-58-95.us-west-1.compute.amazonaws.com/',
    '/features': 'http://ec2-54-153-58-95.us-west-1.compute.amazonaws.com/',
    '/questions': 'http://ec2-54-153-58-95.us-west-1.compute.amazonaws.com/',
    '/neighborhood': 'http://ec2-54-153-58-95.us-west-1.compute.amazonaws.com/',
    '/reviews': 'http://ec2-54-153-58-95.us-west-1.compute.amazonaws.com/',
  }
};

const proxyServer = proxy(options);

app.use(proxyServer);

app.use(cors());

app.use(express.json());

app.listen(port, () => {
  // console.log(`WE ARE LISTENING ON PORT ${port}`);
});