
// const { principal } = require('./src/index')
// principal();

const express = require('express');
const res = require('express/lib/response');
const port = 8080;
const app = express();

app.get('/home', function(req, res){
  res.send('Página Inicial')
});

app.get('/quem-somos', (request, response) => {
  response.send('Esta é a página quem somos')
});

// Função de callback
app.listen(port, function(){
  console.log('Servidor funcionando na porta ' + port);
});