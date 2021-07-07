exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("students")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("students").insert([
        { id: 1, name: "jake", cohort_id: 3 },
        { id: 2, name: "chance", cohort_id: 1 },
        { id: 3, name: "taylor", cohort_id: 3 }
      ]);
    });
};
