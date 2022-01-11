const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('public'));

app.listen(3001, () => {
        console.log('App starting on 3001');
});

app.get('/', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'pages/home.html'));
});

app.get('/about', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'pages/about.html'));
});

app.get('/contact', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'pages/contact.html'));
});

// -----------------------------------------------------------------------

// const http = require('http');
// const fs = require('fs');

// const server = http.createServer((req, res) => {
//         route(req, res);
// });

// const homePage = fs.readFileSync('pages/home.html');
// const aboutPage = fs.readFileSync('pages/about.html');
// const contactPage = fs.readFileSync('pages/contact.html');

// const route = async (req, res) => {
//         if (req.url === '/contact') {
//                 return await res.end(contactPage);
//         } else if (req.url === '/about') {
//                 return await res.end(aboutPage);
//         } else if (req.url === '/') {
//                 return await res.end(homePage);
//         } else {
//                 res.writeHead(404);
//                 return await res.end('Not Found');
//         }
// };

// server.listen(3000);
