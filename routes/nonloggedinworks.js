const nodemailer = require("nodemailer");
const mailer=require("./../dbconnect").connectnodemailer()
const Crypto = require('crypto')
const User = require("./../Model/user")
const jwt=require("jsonwebtoken")
const router=require("express").Router()

router.post("/",async(req, res) => {
    const email=req.body.email
    try{
        const userpasshash=await User.find({email})
        const payload={id:userpasshash[0]._id}
        console.log(userpasshash)
        const randstring=await jwt.sign(payload,userpasshash[0].passhash)
        const link=`${process.env.DOMAIN}:${process.env.PORT}/recovery/password/${randstring}`
        const info = await nodemailer.transporter.sendMail({
            from: 'forgotpassword@forgot.com',
            to: email,
            subject: "Please click on the given links to reset your password",
            text: `Reset password link ${link}`,
            html: `<h2>Follow the link to reset your password <a href=${link}>${link}</a></h2>`,
        });
        await User.findOneAndUpdate(
            {email},
            {changepasstoken:randstring})
        
        res.status(200).send(`Check your inbox out here ${nodemailer.getTestMessageUrl(info)}`)
    }
    catch(e){
        console.log(e)
        res.status(200).send("Forgot Password Failed")
    }
})
module.exports=router