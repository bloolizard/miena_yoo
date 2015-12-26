var MainNavigation = React.createClass({
    getInitialState(){
        return {
            layout: "home"
        }

    },

    handleClick(e){
        e.preventDefault();
        if ($(e.target).text().toLowerCase() !== "home"){
            this.setState({layout: "page"});
        }
        else {
            this.setState({layout: "home"});

        }
    },

    render: function(){
        return <nav id="main-navigation" className={this.state.layout}>
            <ul>
                <li className="active"><a onClick={this.handleClick} href="">Home</a></li>
                <li><a onClick={this.handleClick} href="">My Story</a></li>
                <li><a onClick={this.handleClick} href="">Equipment</a></li>
                <li><a onClick={this.handleClick} href="">Projects</a></li>
                <li><a onClick={this.handleClick} href="">Contact</a></li>
            </ul>
        </nav>
    }

});

var App = React.createClass({
    render: function(){
        return <div id="outerWrapper">
            <div id="bgOverlay" className="lighten"></div>
            <MainNavigation />
            <div id="left"></div>
            <div id="right"></div>
            <div id="top"></div>
            <div id="bottom"></div>
        </div>
    }
});



Meteor.startup(function () {
    // Use Meteor.startup to render the component after the page is ready
    ReactDOM.render(<App />, document.getElementById('render-target'));
});
