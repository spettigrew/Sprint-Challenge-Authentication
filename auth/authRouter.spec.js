const supertest = require("supertest")
const server = require("../api/server")

const db = require("../database/dbConfig")


beforeEach(async () => {
    await db.seed.run()
})

test("welcome route", async () => {
    const res = await supertest(server).get("/")
    // console.log(res)

    expect(res.status).toBe(201)
    expect(res.type).toBe("application/json")
    expect(res.body.message).toBe("Welcome to this API.")
})

test("get user list", async () => {
    const res = await supertest(server).get("/api/users")
    expect(res.status).toBe(201)
    expect(res.type).toBe("application/json")
    expect(res.body.length).toBeGreaterThan(0)
    expect(res.body[0].id).toBe(1)
    expect(res.body[0].username).toBe("varchar")
})

test("create user route", async () => {
    const res = await supertest(server)
        .post("/api/users")
        .send({ username: "spetti" })

    expect(res.status).toBe(201)
    expect(res.type).toBe("application/json")
    expect(res.body).toEqual({ id: 2, username: "spetti" })
})
