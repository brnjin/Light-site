const router = require('express').Router();
const express = require('express');
const app = express();

app.get('/', function (req, res) {
	res.send('index');
});

app.get('/description' function (req, res) {
	res.send('description')
});