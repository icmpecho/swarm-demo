'use strict';

const express = require('express');
const os = require('os');

let app = express();
let hostname = os.hostname();
let count = 0;

app.get('/', (req, res) => {
  count++;
  res.json({"container": hostname, "hit": count})
});

let port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log('listening on port ' + port);
});