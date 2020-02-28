
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("books")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("books").insert([
        { title: "harry potter and the sorcerer's stone", author: "j.k. rowling" },
        { title: "harry potter and the prisoner of azkaban", author: "j.k. rowling" },
        { title: "harry potter and the order of the phoenix", author: "j.k. rowling" }
      ]);
    });
};
