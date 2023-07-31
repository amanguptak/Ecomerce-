const express = require('express');
const app = express();
const products = require('./routes/productRoute');
const user = require("./routes/userRoute")
const order = require('./routes/orderRoute');
const errorMiddleware = require("./middleware/error")
const cookieParser = require('cookie-parser')
const cors = require('cors')


app.use(cors())
app.use(express.json())
app.use(cookieParser())

app.use("/api",products)
app.use("/api",user)
app.use("/api",order)

// middleware for error
app.use(errorMiddleware)



module.exports =app