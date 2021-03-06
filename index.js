const express = require('express');
const path = require('path');
const app = express();
const publicPath = path.resolve(__dirname, './public');
/* const port = 3000; */
app.use(express.static(publicPath));
/* app.listen(port, ()=> {console.log('Servidor corriendo en puerto ' + port)}); */
app.listen(process.env.PORT || 3000, () => { console.log('Servidor corriendo en el puerto 3000');});/* Configuracion heroku */
app.get('/', (req, res)=>{ res.sendFile(path.resolve(__dirname, './views/index.html'))});
app.get('/home', (req, res)=>{ res.sendFile(path.resolve(__dirname, './views/index.html'))});
app.post('/', (req, res)=>{ res.sendFile(path.resolve(__dirname, './views/index.html'))});
app.get('/register', (req, res)=>{ res.sendFile(path.resolve(__dirname, './views/register.html'))});
app.get('/login', (req, res)=>{ res.sendFile(path.resolve(__dirname, './views/login.html'))});
app.get('/ofertas', (req, res)=>{ res.sendFile(path.resolve(__dirname, './views/ofertas.html'))});
app.get('/tiendas-oficiales', (req, res)=>{ res.sendFile(path.resolve(__dirname, './views/tiendas-oficiales.html'))});
app.get('/vender', (req, res)=>{ res.sendFile(path.resolve(__dirname, './views/vender.html'))});
app.get('/ayuda', (req, res)=>{ res.sendFile(path.resolve(__dirname, './views/ayuda.html'))});
app.get('/mis-compras', (req, res)=>{ res.sendFile(path.resolve(__dirname, './views/mis-compras.html'))});