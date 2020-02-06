
const db = require("../database/dbConfig")

function list() {
    return db("users")
}
// find by anything, ie. user, id, etc.
function findBy(filter) {
    return db("users")
    .where(filter)
}
// find specifically by id.
function findById(id) {
    return db("users")
        .where({ id })
        .first()
}

async function insert(user) {
    const [id] = await db("users")
    .insert(user)
    .returning("id") //for postgres when destructing [id] only
    return findById(id)
}

async function update(id, changes) {
    await db("users")
        .where({ id })
        .update(changes)

    return findById(id)
}

function remove(id) {
    return db("users")
        .where({ id })
        .del()
}

module.exports = {
    list,
    findBy,
    findById,
    insert,
    update,
    remove,
}