Contact = React.createClass({
    componentWillMount(){
        Actions.setLayout('page');
    },

    sendEmail(e){
        var name = $(e.target.name).val();
        var email = $(e.target.email).val();
        var phone = $(e.target.phone).val();
        var msg = $(e.target.message).val();

        var subject = "You received a message from " + name;
        var message = name + " " + phone + " " + email + " " + msg;
        Meteor.call('sendEmail', subject, message, function(){
            alert('Your message has been sent');
        });
    },

    render(){
        return (<div>
            <h2 className="text-align-center">Contact Me</h2>
            <form className="email_submit" onSubmit={this.sendEmail}>

                <div>
                    <label for="name">Name: </label>
                    <input id="name" name="name" type="text"/><br/>
                </div>
                <div>
                    <label for="email">Email: </label>
                    <input id="email" name="email" type="text"/><br/>
                </div>
                <div>
                    <label for="phone">Phone: </label>
                    <input id="phone" name="phone" type="text"/><br/>
                </div>
                <div>
                    <label for="message">Message: </label>
                    <textarea id="message" name="message" cols="45" rows="10"/><br/>
                </div>
                <div>
                    <input type="submit" value="Submit" />
                </div>
            </form>
        </div>)
    }
});