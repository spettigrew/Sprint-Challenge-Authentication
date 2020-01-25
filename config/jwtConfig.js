
module.exports = {

    jwtSecret: process.env.JWT_SECRET || "Dad Jokes are pretty darn funny. Stupid, but funny.",
    options: {
        expiresIn: process.env.JWT_EXPIRATION || "2h"
    }

}