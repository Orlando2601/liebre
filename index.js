const express = require('express');
const path = require('path');
const app = express();
const publicPath = path.resolve(__dirname, './public');
const port = 3000;
app.use(express.static(publicPath));
app.listen(port, ()=> {console.log('Servidor corriendo en puerto ' + port)});
app.get('/home', (req, res)=>{ res.sendFile(path.join(__dirname, '/views/index.html'))});

