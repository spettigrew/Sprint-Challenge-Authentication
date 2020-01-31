
exports.seed = async (knex) => {
  
  await knex("users").truncate()

  await knex("users").insert([
    { id: 1, username: 'spetti', password: "abc123" },
    { id: 2, username: 'harry', password: "abc123"},
    { id: 3, username: 'spetti1', password: "abc123"}
      ]);
};
