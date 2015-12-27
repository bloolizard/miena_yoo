App = React.createClass({

    mixins: [Reflux.listenTo(LayoutStore, 'onChange')],

    getInitialState(){
        return {
            layout: "home"
        }

    },

    render: function(){
        return <div id="outerWrapper" className={this.state.layout}>
            <div id="bgOverlay" className={this.state.layout}></div>
            <MainNavigation layout={this.state.layout} />
            <div id="innerWrapper">
                <div className={"title-area " + this.state.layout}>
                    <img src="/images/miena_yoo.png"/>
                </div>
                <div id="content">
                    {this.props.children}
                </div>
            </div>
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






