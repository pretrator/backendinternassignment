const router=require("express").Router()
const jwt = require('jsonwebtoken');
const User=require("../Model/user")
const bcrypt=require("bcrypt")

router.post('/login', async (request, response) => {
    const body = request.body
    const user = await User.findOne({ email: body.email })
    const passwordCorrect = user === null
      ? false
      : await bcrypt.compare(body.pass, user.passhash)
  
    if (!(user && passwordCorrect)) {
      return response.status(401).json({
        error: 'invalid username or password'
      })
    }
    const userForToken = {
      username: user.email,
      id: user._id,
    }
    const token = jwt.sign(userForToken, process.env.SECRET)
    response
      .status(200)
      .send({ token, email: user.email})
  })

router.post('/register', async (request, response) => {
    const body = request.body
    const saltRounds = 10
    const passhash = await bcrypt.hash(body.pass, saltRounds)
    const user = new User({
      email: body.email,
      passhash,
    })
    const savedUser = await user.save()
    response.json(savedUser)
})

module.exports=router