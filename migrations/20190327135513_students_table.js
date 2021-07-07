exports.up = function(knex, Promise) {
  return knex.schema.createTable("students", function(tbl) {
    tbl.increments().primary();
    tbl.string("name").notNullable();
    tbl
      .integer("cohort_id")
      .references("id")
      .inTable("cohorts");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("students");
};
