const {Router, Route, Link} = ReactRouter;

Meteor.startup(function () {
    ReactDOM.render((
        <Router>
            <Route path="/" component={App}>
                <Route path="home" component={Home}></Route>
                <Route path="my_story" component={MyStory}></Route>
                <Route path="shop" component={Shop}></Route>
                <Route path="media" component={Media}></Route>
                <Route path="upcoming_shows" component={UpcomingShows}></Route>
                <Route path="contact" component={Contact}></Route>
                <Route path="archive" component={Archive}></Route>
            </Route>
        </Router>
    ), $('#render-target')[0]);
});
