App = React.createClass({
    render: function(){
        return <div id="outerWrapper">
            <div id="bgOverlay" className="lighten"></div>
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
