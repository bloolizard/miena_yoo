//Design based off http://www.markusschulzstore.com/markus-schulz-buenos-aires-2013-mix

Shop = React.createClass({
    componentWillMount(){
        Actions.setLayout('page');
    },
    albumDetailCell(){
        var songs = ["Bluebird",
                "Mama's Sweet Potatoes",
                "As It Is",
                "A Little Stone On The Sidewalk",
                "Crickets Night",
                "Come Dance With Me",
                "After the Rain",
                "Magic Girl",
                "Porchlight",
                "Sugar Full Moon"
            ];
        var cellDetails = songs.map(function(val, idx){
            return (<tr><td>{idx + 1 + ". "}</td><td>{val}</td></tr>)
        });
        return (
            <tbody>{cellDetails}</tbody>
        )
    },
    render(){
        return (<div>
            <div className="album-cover">
                <img className="thumb-image" src="/images/album_cover.jpg"/>
            </div>
            <div className="album-detail">
                <table>
                    <tbody>
                    {this.albumDetailCell()}
                    </tbody>
                </table>
            </div>
            <div className="paypal">
            </div>
        </div>)
    }
});