const express = require('express'); // Estou importando o modulo express para dentro da variavel express
const cors = require('cors');
const routes = require('./routes'); // Eu uso o ./ para ele saber que eu estou importando um arquivo, se eu nao usar, ele vai pensar que é um pacote

const app = express(); // Variável que vai instanciar a aplicacao

app.use(cors());
app.use(express.json()); // Estou informando para o express converter o json lá do Insomnia para algo que seja intendivel pela aplicação.
app.use(routes);


app.listen(3333);