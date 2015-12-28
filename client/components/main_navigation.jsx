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
                <Tab to="/home">Home</Tab>
                <Tab to="/my_story">My Story</Tab>
                <Tab to="/shop">Shop</Tab>
                <Tab to="/media">Media</Tab>
                <Tab to="/upcoming_shows">Upcoming Shows</Tab>
                <Tab to="/contact">Contact</Tab>
            </ul>
        </nav>
    }

});



