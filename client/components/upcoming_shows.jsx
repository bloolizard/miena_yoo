UpcomingShows = React.createClass({
    componentWillMount(){
        Actions.setLayout('page');

    },
    componentDidMount(){
        var tbody = $('table.schedule tbody');
        tbody.html($('tr',tbody).get().reverse());

        $('td.link').each(function(i, val){
            var url = "http://" + $(val).text().toString();
            $(val).html($(val).text().toString().link(url));
        });

        Meteor.subscribe('events', ()=>{
            let eventList = Events.find().fetch();
            eventList = eventList.sort(function(a, b){return a._id-b._id});
            let eventsMap = $(eventList).map((idx, el)=>{
                return (<tr key={el._id}>
                    <td>{el.Date}</td>
                    <td>{el.Time}</td>
                    <td>{el.Location}</td>
                    <td><a href={el.Website}>{el.Website}</a></td>
                </tr>)
            });
            this.eventsMap = Array.from(eventsMap);
            this.forceUpdate();
        });

    },
    render(){
        return (<div>
            <table className="schedule">
                <tbody>
                {this.eventsMap ? this.eventsMap : null}
                </tbody>
            </table>

        </div>)
    }
});