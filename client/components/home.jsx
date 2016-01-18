Home = React.createClass({
    componentWillMount(){
        Actions.setLayout('home');
    },

    render(){
        return (<div>
                    <audio autoPlay>
                        <source src="index_files/endlessjourney.mp3" type="audio/mpeg">
                            Your browser does not support the audio element.
                        </source>
                    </audio>
                </div>)
    }
});