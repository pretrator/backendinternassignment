const mongoose = require('mongoose');
const nodemailer=require('nodemailer');

module.exports.connectDB=async()=>{
  try{
      await mongoose.connect(process.env.DB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
      });

      console.log("MongoDB Connected.....")

  }catch(err){
      console.error(err.message);
      // in case you wanna exit the process with failure
      process.exit(1);

  }
};

module.exports.connectnodemailer=async ()=>{
  console.log("Connecting to nodemailer")
  nodemailer.newaccount=await nodemailer.createTestAccount();
  nodemailer.transporter = nodemailer.createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      secure: false,
      auth: {
          user: nodemailer.newaccount.user,
          pass: nodemailer.newaccount.pass,
      },
  });
  console.log("nodemailer connected")
}