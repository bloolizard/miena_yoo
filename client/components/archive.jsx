Archive = React.createClass({
    componentWillMount(){
        Actions.setLayout('page');
    },

    render(){
        return (
            <div className="main-content-wrapper my-story">
                <h1 className="text-align-center">Archive</h1>
                <p className="text-align-center">You can see my previous site <a href="/index.html">here</a></p>
            </div>)
    }
});