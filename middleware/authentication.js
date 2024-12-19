const jwt = require("jsonwebtoken")

function verifyBoth(req, res, next) {
    let token = req.headers.authorization
    if (token) {
        try {
            jwt.verify(token, process.env.JWT_SECRET_KEY_BUYER)
            next()
        } catch (error) {
            try {
                jwt.verify(token, process.env.JWT_SECRET_KEY_ADMIN)
                next()
            } catch (error) {

                res.send({ result: "Fail", reason: "Veryfication Failed,Please Longin" })
            }

        }


    }
    else
        res.send({ result: "Fail", reason: "You Are Not An Authorized Person To Access This API" })

}
function verifyAdmin(req, res, next) {
    let token = req.headers.authorization
    if (token) {
        try {
            jwt.verify(token, process.env.JWT_SECRET_KEY_ADMIN)
            next()
        } catch (error) {



            res.send({ result: "Fail", reason: "Veryfication Failed,Please Longin" })
        }




    }
    else
        res.send({ result: "Fail", reason: "You Are Not An Authorized Person To Access This API" })

}

module.exports = {
    verifyBoth: verifyBoth,
    verifyAdmin: verifyAdmin
}