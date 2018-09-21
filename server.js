const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 3030;
let app = express();


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './public/index.html'))
});

app.listen(PORT, function() {
  console.log("App is listening on Port " + PORT);
});