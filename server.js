const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Serve static files from the pages directory
app.use(express.static(path.join(__dirname, 'pages')));

// Optional explicit routes
app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, 'pages', 'home.html'));
});

app.get('/about', (req, res) => {
	res.sendFile(path.join(__dirname, 'pages', 'about.html'));
});

app.get('/contact', (req, res) => {
	res.sendFile(path.join(__dirname, 'pages', 'contact.html'));
});

app.get('/login', (req, res) => {
	res.sendFile(path.join(__dirname, 'pages', 'login.html'));
});

// 404 for anything else
app.use((req, res) => {
	res.status(404).send('Not found');
});

app.listen(PORT, () => {
	console.log(`Server listening on http://localhost:${PORT}`);
});
