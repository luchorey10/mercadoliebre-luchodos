const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

app.listen(port, () => console.log('Servidor corriendo en el puerto:' +port));

let publicPath = path.join(__dirname, '../public');
let viewsPath = path.join(__dirname, '../views');

app.use(express.static('publicPath'));

app.get('/', (req,res)=> res.sendFile(path.join(viewsPath, 'index.html')));
app.post('/', (req,res)=>res.sendFile(path.join(viewsPath, 'index.html')));
app.get('/login', (req,res)=>res.sendFile(path.join(viewsPath,'login.html')));
app.get('/register', (req,res)=>res.sendFile(path.join(viewsPath,'register.html')));