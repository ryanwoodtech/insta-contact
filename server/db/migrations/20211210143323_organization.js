exports.up = function (knex) {
  return knex.schema.createTable("organization", (table) => {
    table.uuid("id");
    table.uuid("user_id").notNullable().references('id').inTable('user').onDelete('CASCADE')
    table.string("organization_name").notNullable();
    table.string("organization_phone").notNullable();
    table.string("organization_website").notNullable();
    table.string("organization_facebook").notNullable();
    table.string("organization_youtube").notNullable();
    table.string("organization_twitter").notNullable();
    table.string("organization_image_url").notNullable();
    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("organization");
};
