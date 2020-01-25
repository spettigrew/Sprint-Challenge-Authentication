const db = require("../data/db.config")
const authModel = require("./auth-model")

beforeEach(async () => {
    await db.seed.run()
})

describe("auth model", () => {
    test ("list", async () => {
        const res = await authModel.list()
        expect(res).toBeGreaterThan(0)
    })
})

// describe("auth model", () => {
//     test("", async () => {
//         const res = await
//             expect().
//     })
// })