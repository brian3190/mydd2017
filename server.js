let express = require('express');
let path = require('path');

let app = express();

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/display', (req, res) => {
  res.sendFile(path.join(__dirname + '/web/display.html'));
})

//app.get('')

app.listen(3000, () => {
  console.log('App started on port 3000');
});
