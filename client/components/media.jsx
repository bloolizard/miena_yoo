Media = React.createClass({
    componentWillMount(){
        Actions.setLayout('page');
    },

    render(){
        return (<div className="main-content-wrapper media">
            <h2>KQED Spark TV "Steppin' Out"</h2>
            <p>In August, 2006, I was a featured artist in the Spark episode, "Steppin' Out," on KQED public television.
                I invite you to enjoy the program.

                <div className="video-tube">
                    <iframe width="420" height="315" src="https://www.youtube.com/embed/OqoX6IKHNUc" frameborder="0" allowfullscreen></iframe>
                </div>

                Hope you enjoy the interview. <a href="http://ww2.kqed.org/spark/miena-yoo/">(See full story here)</a>
                <br/>
                <br/>
                Thank you,
                <br/>
                Miena Yoo</p>

        </div>)
    }
});