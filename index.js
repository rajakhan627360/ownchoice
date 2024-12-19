const express = require("express")
const cors = require("cors")
const path = require("path")

require("dotenv").config()

const MainRouter = require("./routes/MainRouter")


const app = express()
var whitelist = ['http://localhost:3000', 'http://lokalhost:8000',]
var corsOptions = {
    origin: function (origin, callback) {
        // console.log("Origin",origin);
        if (whitelist.includes(origin) !== -1) {
            callback(null, true)
        } else {
            callback(new Error('CORS Error , You Are Not Authenciated To Access This API'))
        }

    }
}
app.use(cors(corsOptions))

require("./dbConnect")

app.use(express.static("./public")) // Set This Path Use Upload Files Like Images Ect
app.use("/public", express.static("./public")) // Set This Path Server Uploaded Files
app.use(express.static(path.join(__dirname, 'build')))

app.use(express.json())

app.use("/api", MainRouter)
app.use('*', express.static(path.join(__dirname, 'build')))

let port = process.env.PORT || 8000
app.listen(port, console.log(`Server Running At port ${port}`))

