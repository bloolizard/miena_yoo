App = React.createClass({

    getInitialState(){
        return {
            layout: "home"
        }

    },


    onItemClicked(e){
        var $el = $(e.target);
        if ($el.text().toLowerCase() !== "home"){
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
            {this.props.children}
            <div id="left"></div>
            <div id="right"></div>
            <div id="top"></div>
            <div id="bottom"></div>
        </div>
    }
});






