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
        var to = "edwincv0@gmail.com, mienayoomailer@gmail.com, mienayoo@hotmail.com";
        sendMail(to, subject, body);
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