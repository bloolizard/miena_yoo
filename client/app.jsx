var MainNavigation = React.createClass({

    render: function(){
        return <nav id="main-navigation" className={this.props.layout}>
            <ul>
                <li className="active"><a onClick={this.props.onItemClicked} href="">Home</a></li>
                <li><a onClick={this.props.onItemClicked} href="">My Story</a></li>
                <li><a onClick={this.props.onItemClicked} href="">Equipment</a></li>
                <li><a onClick={this.props.onItemClicked} href="">Projects</a></li>
                <li><a onClick={this.props.onItemClicked} href="">Contact</a></li>
            </ul>
        </nav>
    }

});

var App = React.createClass({

    getInitialState(){
        return {
            layout: "home"
        }

    },

    onItemClicked(e){
        e.preventDefault();
        if ($(e.target).text().toLowerCase() !== "home"){
            this.setState({layout: "page"});
        }
        else {
            this.setState({layout: "home"});
        }
    },

    render: function(){
        return <div id="outerWrapper">
            <div id="bgOverlay" className={this.state.layout}></div>
            <MainNavigation onItemClicked={this.onItemClicked} layout={this.state.layout} />
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
