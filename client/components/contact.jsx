Contact = React.createClass({
    componentWillMount(){
        Actions.setLayout('page');
    },

    render(){
        return (<div>
            <form action="">

                <label for="name">Name: </label>
                <input id="name" name="name" type="text"/><br/>
                <label for="email">Email: </label>
                <input id="email" name="email" type="text"/><br/>
                <label for="phone">Phone: </label>
                <input id="phone" name="phone" type="text"/><br/>
                <label for="message">Phone: </label>
                <textarea id="message" name="message" cols="45" rows="10"/><br/>
                <input type="submit" value="Submit" />
            </form>
        </div>)
    }
});