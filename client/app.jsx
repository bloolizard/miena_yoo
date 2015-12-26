App = React.createClass({

    mixins: [Reflux.listenTo(LayoutStore, 'onChange')],

    getInitialState(){
        return {
            layout: "home"
        }

    },

    render: function(){
        return <div id="outerWrapper">
            <div id="bgOverlay" className={this.state.layout}></div>
            <MainNavigation layout={this.state.layout} />
            {this.props.children}
            <div id="left"></div>
            <div id="right"></div>
            <div id="top"></div>
            <div id="bottom"></div>
        </div>
    },
    onChange(event, layout){
        this.setState({layout: layout})
    }
});






