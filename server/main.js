var nodemailer = Meteor.npmRequire('nodemailer');

Meteor.startup(function(){
    console.log('Starting the Meteor Up.');
});

var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        //todo: not good to store password, should store in env var
        user: 'mienayoomailer@gmail.com',
        pass: 'mailer1234'
    }
});

Meteor.methods({
    'sendEmail': function(subject, body){
        sendGridMail(subject,body);
    }
});

function sendMail(to, subject, body){
    transporter.sendMail({
        from: 'mailer@dinebellavita.com',
        to: to,
        subject: subject,
        text: body
    }, function(error, info){
        if (error){
            console.log(error);
        }
    });
}

var sendgrid  = Meteor.require('sendgrid')("***REMOVED***", "***REMOVED***");

// todo: clean this up and hide email details in ENV file
function sendGridMail(subject, body){
    sendgrid.send({
        //to:       'edwincv0@gmail.com, mienayoomailer@gmail.com, mienayoo@hotmail.com',
        to:       'mienayoo@hotmail.com',
        from:     'mienayoomailer@gmail.com',
        subject:  subject,
        text:     body
    }, function(err, json) {
        if (err) { return console.error(err); }
        console.log(json);
    });
}

