Events = new Mongo.Collection('events');
if (Meteor.isServer){
    Meteor.publish('events', function(){
        return Events.find();
    });
}

