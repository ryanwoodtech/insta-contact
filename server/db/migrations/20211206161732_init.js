exports.up = function (knex) {
  return knex.schema.createTable("user", (table) => {
    table.uuid("id").primary();
    table.string("email");
    table.string("password");
    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("user");
};
