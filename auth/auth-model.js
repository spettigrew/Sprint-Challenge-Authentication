
const db = require("../database/dbConfig")

function list() {
    return db("users")
}

function findById(id) {
    return db("users")
        .where({ id })
        .first()
}

async function insert(users) {
    const [id] = await db("users").insert(users)
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
    findById,
    insert,
    update,
    remove,
}