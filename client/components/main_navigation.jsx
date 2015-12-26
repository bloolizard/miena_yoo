const {Router, Route, Link, History} = ReactRouter;

Tab = React.createClass({
    mixins: [History],
    render(){
        const isActive = this.history.isActive(this.props.to, this.props.query, this.props.onlyActiveOnIndex);
        const className = isActive ? 'active' : '';
        return <li className={className}><Link {...this.props}/></li>
    }
});

MainNavigation = React.createClass({

    render: function(){
        return <nav id="main-navigation" className={this.props.layout}>
            <ul>
                <Tab to="/home" onClick={this.props.onItemClicked}>Home</Tab>
                <Tab to="/my_story" onClick={this.props.onItemClicked}>My Story</Tab>
                <Tab to="/shop" onClick={this.props.onItemClicked}>Shop</Tab>
                <Tab to="/media" onClick={this.props.onItemClicked}>Media</Tab>
                <Tab to="/upcoming_shows" onClick={this.props.onItemClicked}>Upcoming Shows</Tab>
            </ul>
        </nav>
    }

});



