const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 3000;
let app = express();

app.use(express.static(__dirname));

app.get('*', (req,res) => {
	res.send(path.resolve(__dirname, '/index.html'))
});

app.listen(PORT, function() {
	console.log("App is listening on Port " + PORT);
});