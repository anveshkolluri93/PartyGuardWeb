'use strict';

var port = 3000;
var express = require("express");
var nodemailer = require("nodemailer");
var app = express();
// load aws sdk

// load aws sdk
// var aws = require("aws-sdk");
//
// // load aws config
// aws.config.loadFromPath('config.json');
//
// // load AWS SES
// var ses = new aws.SES({apiVersion: '2010-12-01'});

app.get('/dowork',function(res,req){
    console.log("request received");
    console.log(req.params);
  // var mailOptions={
  //     to : req.query.contactEmail,
  //     subject : req.query.contactName,
  //     text : "hi"
  // }
  // console.log(JSON.stringify(mailOptions));
  // /... code to do your work .../
});
  app.use(express.static(__dirname ));

  // app.use("http://partyguardservices20161025060016.azurewebsites.net/*", function(req, res, next) {
  //   res.header("Access-Control-Allow-Origin", "*");
  //   res.header("Access-Control-Allow-Headers", "Cache-Control, Pragma, Origin, Authorization, Content-Type, X-Requested-With");
  //   res.header("Access-Control-Allow-Methods", "GET, PUT, POST");
  //   return next();
  // });
  //
  // app.use("http://partyguardservices20161025060016.azurewebsites.net/*", function(req, res, next) {
  //   if (req.method.toLowerCase() !== "options") {
  //     return next();
  //   }
  //   return res.send(204);
  // });
				// set the static files location /public/img will be /img for users

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
// for all public requests try to use /app folder
app.use("/public", express.static(__dirname + "/app"));

// for all routes defined on client side send
// entry point to the app
// btw. changes of those routes on client side
// are not supposed to hit server at all (!)
app.use("/", function(req, res, next){
    res.sendFile(__dirname + '/app/main.html');
});
/*------------------Routing Started ------------------------*/

// server.use("/", function(req, res, next){
//     res.sendFile(__dirname + '/index.html');
// });
// server.get('/',function(req,res){
//     res.sendFile(path.join(__dirname +'/index.html'));
//     app.use(express.static(__dirname));
// });
// server.get('/Home',function(req,res){
//   res.sendFile(__dirname +'/modules/authentication/views/Login.html');
// });
// server.get('/tab',function(req,res){
//   res.sendFile(__dirname +'/tab.html');
// });
// server.get('/AddCustomer',function(req,res){
//
// });
// server.get('/index',function(req,res){
//
// });
app.get('/send',function(req,res){
    console.log("Request received");
    var mailOptions={
        to : req.query.contactEmail,
        subject : req.query.contactName,
        text : "hi"
    }
    console.log(JSON.stringify(mailOptions));
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

// app.listen(3000,function(){
//     console.log("Node server initialized. Server's port:"+port);
// });

var server = app.listen(process.env.PORT || 8080, function () {
    var port = server.address().port;
    console.log("App now running on port", port);
  });
