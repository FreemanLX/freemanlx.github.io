var express = require('express');  
var app = express();   
var nodemailer = require('nodemailer');  

app.use(express.static('')); 

app.use('/mail',express.urlencoded({extended:true}));

app.post('/mail', function(req,res){
var subiect = "";
subiect.concat(req.body.fname, ' ', req.body.lname);
var mesaj=concat(req.body.subject, '\\n Email :', req.body.semail, '\\n Country :', req.body.scountry, '\\n Telephone :', req.body.telephone);

res.send("Am trimis mail la adresa " + adresa);

var transporter = nodemailer.createTransport({   
  service: 'gmail',
  auth: {
    user: 'andreasmihalea@gmail.com',
    pass: ''
  }
// tls:{rejectUnauthorized:false}

});

var mailOptions = {             
  from: 'andreasmihalea@gmail.com',
  to: 'andreasmihalea@gmail.com',
  subject: subiect,
  text: mesaj
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    Alert('Form trimis. Code: ' + info.response);
  }
});

});

app.listen(8030, function() {console.log('serverul asculta pe portul 8030')});
