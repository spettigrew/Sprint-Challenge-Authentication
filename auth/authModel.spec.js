const db = require("../database/dbConfig")
const authModel = require("./auth-model")

beforeEach(async () => {
    await db.seed.run()
})

describe("auth model list", () => {
    test ("list", async () => {
        const res = await authModel.list()
        expect(res).toBeGreaterThan[1]
    })
})

describe("find user in auth model", () => {
    test("findById", async () => {
        const res = await authModel.findById(1)
        expect(res.username).toBe("spetti")
    })

    test("insert new user", async () => {
        await authModel.insert({ username: "harry" })
        const user = await db("users").select()
        expect(user).toHaveLength(2)
})

    test("update user", async () => {
        await authModel.update(1, { username: "spetti1" })
        const user = await authModel.findById(3)
        expect(user.username).toBe("spetti1")
    })

    test("remove user", async () => {
        await authModel.remove(1)
        const user = await authModel.list()
        expect(user).toHaveLength(2)
        // console.log(user)
    })
})