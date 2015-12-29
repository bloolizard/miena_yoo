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
            <h1 className="text-align-center">Shop</h1>
            <div className="album-cover">
                <img className="album-image" src="/images/album_cover.jpg"/>
            </div>
            <div className="album-detail">
                <table>
                    {this.albumDetailCell()}
                </table>
            </div>
            <div className="clear"></div>
            <div className="text-align-center paypal">
                <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_new">
                    <input name="cmd" value="_xclick" type="hidden"/>
                    <input name="business" value="mienayoo@hotmail.com" type="hidden"/>
                    <input name="item_name" value="a little stone on the sidewalk" type="hidden"/>
                    <input name="item_number" value="" type="hidden"/>
                    <input name="currency_code" value="USD" type="hidden"/>
                    <input name="amount" value="14.99" type="hidden"/>
                    <input name="no_note" value="1" type="hidden"/>
                    <input alt="Make payments with PayPal - it's fast, free and secure!" name="submit" src="id2_files/btn_buy_now_b.gif" border="0" type="image"/>
                </form>
            </div>
        </div>)
    }
});