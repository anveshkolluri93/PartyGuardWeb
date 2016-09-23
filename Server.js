var express=require('express');
var nodemailer = require("nodemailer");
var app=express();
var path    = require("path");
// app.use(express.static(__dirname + '/lib'));
/*
    Here we are configuring our SMTP Server details.
    STMP is mail server which is responsible for sending and recieving email.
*/
var smtpTransport = nodemailer.createTransport("SMTP",{
    service: "Gmail",
    auth: {
        user: "spandanavelaga06@gmail.com",
        pass: "raja1993"
    }
});
/*------------------SMTP Over-----------------------------*/

/*------------------Routing Started ------------------------*/

app.get('/',function(req,res){
    res.sendFile(__dirname +'/index.html');
    app.use(express.static(__dirname + '/lib'));
});
app.get('/MainLogin',function(req,res){
  res.sendFile(path.join(__dirname+'/MainLogin.html'));
});
app.get('/AddCustomer',function(req,res){
  res.sendFile(path.join(__dirname+'/AddCustomer.html'));
});
app.get('/index',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
});
app.get('/send',function(req,res){
    var mailOptions={
        to : req.query.to,
        subject : req.query.subject,
        text : req.query.text
    }
    console.log(mailOptions);
    smtpTransport.sendMail(mailOptions, function(error, response){
     if(error){
            console.log(error);
        res.end("error");
     }else{
            console.log("Message sent: " + response.message);
        res.end("sent");
         }
});
});

/*--------------------Routing Over----------------------------*/

app.listen(3000,function(){
    console.log("Express Started on Port 3000");
});
