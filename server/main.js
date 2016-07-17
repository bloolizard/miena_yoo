var nodemailer = Meteor.npmRequire('nodemailer');

Meteor.startup(function(){
    console.log('Starting the Meteor Up.');

    loadAWSConfig();

});

var AWS = Meteor.npmRequire('aws-sdk');
var ses;

function loadAWSConfig(){

    var config = { "accessKeyId": process.env.AWS_ACCESS_KEY_ID,
        "secretAccessKey": process.env.AWS_SECRET_ACCESS_KEY,
        "region": "us-west-2"};

    AWS.config.update(config);
    ses = new AWS.SES();
}


Meteor.methods({
    'sendEmail': function(subject, body){
        console.log(subject, body);
        sendMail(["mienayoomailer@gmail.com", "mienayoo@hotmail.com"], subject,body);
    }
});

function sendMail(to, subject, body){

    // this must relate to a verified SES account
    var from = 'mienayoomailer@gmail.com';

    var params = {
        Destination: { /* required */

            ToAddresses: to
        },
        Message: { /* required */
            Body: { /* required */
                Html: {
                    Data: body /* required */
                },
                Text: {
                    Data: body /* required */
                }
            },
            Subject: { /* required */
                Data: subject/* required */
            }
        },
        Source: from /* required */
    };
    ses.sendEmail(params, function(err, data) {
        if (err) console.log(err, err.stack); // an error occurred
        else     console.log(data);           // successful response
    });
}

