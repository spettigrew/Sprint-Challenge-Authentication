const db = require("../database/dbConfig")
const authModel = require("./auth-model")

beforeEach(async () => {
    await db.seed.run()
})

describe("auth model", () => {
    test ("list", async () => {
        const res = await authModel.list()
        expect(res).toBeGreaterThan[1]
    })
})

describe("auth model", () => {
    test("findById", async () => {
        const res = await authModel.findById(1)
        expect(res.username).toBe("varchar")
    })

    test("insert", async () => {
        await authModel.insert({ username: "harry" })
        const users = await db("users").select()
        expect(users).toHaveLength(2)
})

    test("update", async () => {
        await authModel.update(1, { username: "spetti" })
        const users = await authModel.findById(1)
        expect(users.username).toBe("spetti")
    })

    test("remove", async () => {
        await authModel.remove(1)
        const users = await authModel.list()
        expect(users).toHaveLength(0)
        console.log(users)
    })
})