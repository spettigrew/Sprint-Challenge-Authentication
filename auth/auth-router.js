const bcrypt = require("bcryptjs")
const AuthModel = require("../auth/auth-model")
const authenticate = require("../middleware/authenticate-middleware")
const signToken = require("../users/user-token")

const router = require('express').Router();

router.post("/register", async (req, res, next) => {
  try {
    const savedUser = await AuthModel.add(req.body)
    return res.status(201).json(savedUser)
  } catch (err) {
    next(err)
  }
})

router.post("/login", async (req, res, next) => {
  try {
    const { username, password } = req.body

    const user = await AuthModel.findBy({ username })
      .first()

    if (user && bcrypt.compare(password, user.password)) {
      const token = signToken(user)

      return res.status(200).json({
        token,
        message: `Welcome ${user.username}!`
      })

    } else {
      return res.status(401).json({ message: "Invalid Credentials, you may not continue forward." })

    }

  } catch (err) {
    next(err)
  }
})

router.get("/protected", authenticate-middleware, async (req, res, next) => {
  try {
    return res.status(200).json({ message: "You are authorized", })

  } catch (err) {
    next(err)
  }
})


module.exports = router;
