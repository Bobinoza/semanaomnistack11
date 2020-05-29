const knex = require('knex');  // Importando o knex
const configuration = require('../../knexfile'); // Importando as configuracoes do banco de dados. // Estou usando .. para ir voltando as pastas, até chegar na pasta knexfile.js

const connection = knex(configuration.development);

module.exports = connection;