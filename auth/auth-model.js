
const db = require("../data/db-config")

function list() {
    return db("users")
}

module.exports = {
    list,
    findById,
    insert,
    update,
    remove,
}

// function find() {
//     return db("users")
//         .select("id", "username")
// }

// function findBy(filter) {
//     return db("users")
//         .where(filter)
//         .select("id", "username", "password", "department")
// }

// async function add(user) {
//     user.password = await bcrypt.hash(user.password, 12)

//     const [id] = await db("users")
//         .insert(user)

//     return findById(id)
// }

// function findById(id) {
//     return db("users")
//         .where({ id })
//         .first("id", "username")
// }