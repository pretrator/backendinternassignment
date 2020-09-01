const express = require('express')
const dotenv=require("dotenv").config()
const bodyParser = require('body-parser')
const auth=require("./routes/auth")
const authvalidator=require("./middlewares/tokenvalidator")
const connect=require("./dbconnect").connectDB()
const loggedin=require("./routes/loggedin")
const unauthenticatedroute=require("./routes/nonloggedinworks")

const app = express()

app.use(bodyParser.json())
app.use("/api",auth)
app.use("/loggedin",authvalidator.logincheck,loggedin)
app.use("/forgotpass",unauthenticatedroute)
// app.use("/gettoken",getvotingtoken)


if (process.env.TYPE === 'PROD') {
    app.use(express.static('client/build'));
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
  }


app.listen(process.env.PORT, () => {
  console.log(`Backend upp ${process.env.PORT}`)
})