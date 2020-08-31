const router=require("express").Router()
const jwt = require('jsonwebtoken');
const User=require("../Model/user")
const bcrypt=require("bcrypt")

router.post('/changepass', async (req, response) => {
    console.log("Changing pass")
    const user=req.decoded
    const body=req.body
    const saltRounds = 10
    const passhash = await bcrypt.hash(body.newpass, saltRounds)
    console.log(passhash)
    await User.findByIdAndUpdate(user.id,{"$set":{passhash}})
    response
    .status(200)
    .send({msg:"Password changed successfully"})
})

module.exports=router