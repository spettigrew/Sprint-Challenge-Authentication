/* 
  complete the middleware code to check if the user is logged in
  before granting access to the next middleware/route handler
*/

module.exports = (req, res, next) => {
  const { authorization } = req.headers

  if (authorization) {
    jwt.verify(authorization, jwtConfig.jwtSecret, function (err, decodedToken) {
      if (err) {
        console.log(err)
        return res.status(401).json({ message: "Invalid token." })
      } else {
        req.token = decodedToken

        next()
      }
    })
  } else {
    return res.status(401).json({ you: 'shall not pass!' });
  }
};
