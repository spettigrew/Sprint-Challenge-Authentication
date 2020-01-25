const bcrypt = require("bcryptjs")
const db = require("../data/db-config")



module.exports = {
    find,
    findBy,
    findById,
    add,
}