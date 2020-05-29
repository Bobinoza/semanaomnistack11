
exports.up = function(knex) { // Método UP é responsável pela criação da tabela.
  return knex.schema.createTable('ongs', function (table) {
    table.string('id').primary();
    table.string('name').notNullable();
    table.string('email').notNullable();
    table.string('whatsapp').notNullable();
    table.string('city').notNullable();
    table.string('uf', 2).notNullable(); // o 2 é pra limitar apenas 2 dígitos.

  });
};

exports.down = function(knex) { // Método DOWN é para caso eu precise voltar atrás, caso de algo errado.
  return knex.schema.dropTable('ongs');

};

