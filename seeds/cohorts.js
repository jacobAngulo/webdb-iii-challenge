exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("cohorts")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("cohorts").insert([
        { id: 1, name: "weeb 1" },
        { id: 2, name: "weeb 2" },
        { id: 3, name: "weeb 3" }
      ]);
    });
};
