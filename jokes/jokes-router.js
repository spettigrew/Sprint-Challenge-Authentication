const axios = require('axios');

const router = require('express').Router();

router.get('/', authenticate-middleware, authorizeUser("jokester"), (req, res) => {
  const requestOptions = {
    headers: { accept: 'application/json' },
  };

  axios
    .get('https://icanhazdadjoke.com/search', requestOptions)
    .then(response => {
      return res.status(200).json(response.data.results);
    })
    .catch(err => {
      return res.status(500).json({ message: 'Error Fetching Jokes', error: err });
    });
});

function authorizeUser(role) {
  return function (req, res, next) {
    if (req.token && role === req.token.role) {
      next()
    } else {
      console.log(req.token)
      console.log(role)
      return res.status(403).json({ message: "You are not authorized." })
    }
  }
}


module.exports = router;
