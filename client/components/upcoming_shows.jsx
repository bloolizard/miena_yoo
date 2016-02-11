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
    },
    render(){
        return (<div>
            <table className="schedule">
                <tbody>
                <tr>
                    <td>December 10/16</td>
                    <td>Saturday 9:00-1:00pm</td>
                    <td>at Vallejo Farmers' Market in Vallejo</td>
                    <td className="link">www.pcfma.com</td>
                </tr>
                <tr>
                    <td>December 03/16</td>
                    <td>Saturday 9:00-1:00pm</td>
                    <td>at Sunnyvale Farmers' Market in Sunnyvale</td>
                    <td className="link">www.urbanvillage.org</td>
                </tr>
                <tr>
                    <td>November 08/16</td>
                    <td>Tuesday 10:00-2:00pm</td>
                    <td>at Concord Farmers' Market in Concord</td>
                    <td className="link">www.pcfma.com</td>
                </tr>
                <tr>
                    <td>October 28/16</td>
                    <td>Saturday 10:00-2:00pm</td>
                    <td>at Orange Memorial Park in South San Francisco</td>
                    <td className="link">www.pcfma.com</td>
                </tr>
                <tr>
                    <td>October 22/16</td>
                    <td>Saturday 9:00-1:00pm</td>
                    <td>at Vallco Shopping Mall Farmers' Market in Cupertino</td>
                    <td className="link">www.pcfma.com</td>
                </tr>
                <tr>
                    <td>October 15/16</td>
                    <td>Saturday 10:00-2:00pm</td>
                    <td>at Santa Teresa Farmers' Market in San Jose</td>
                    <td className="link">www.pcfma.com</td>
                </tr>
                <tr>
                    <td>October 08/16</td>
                    <td>Saturday 9:00-1:00pm</td>
                    <td>at Pleasant Hill Farmers' Market in Pleasant Hill</td>
                    <td className="link">www.pcfma.com</td>
                </tr>
                <tr>
                    <td>October 02/16</td>
                    <td>Sunday 10:00-2:00pm</td>
                    <td>at Livermore Farmers' Market in Livermore</td>
                    <td className="link">www.pcfma.com</td>
                </tr>
                <tr>
                    <td>September 24/16 </td>
                    <td>Saturday 10:00-2:00pm</td>
                    <td>at Orange Memorial Park in South San Francisco</td>
                    <td className="link">www.pcfma.com</td>
                </tr>
                <tr>
                    <td>September 16/16 </td>
                    <td>Friday 10:00-2:00pm</td>
                    <td>at San Jose Downtown Farmers' Market - San Pedro Square in San Jose</td>
                    <td className="link">www.pcfma.com</td>
                </tr>
                <tr>
                    <td>September 10/16</td>
                    <td>Saturday 9:00-1:00pm</td>
                    <td>at San Mateo Farmers' Market</td>
                    <td className="link">www.pcfma.com</td>
                </tr>
                <tr>
                    <td>September 03/16</td>
                    <td>Saturday 9:00-1:00pm</td>
                    <td>at Pleasant Hill Farmers' Market in Pleasant Hill</td>
                    <td className="link">www.pcfma.com</td>
                </tr>
                <tr>
                    <td>August 20/16 </td>
                    <td>Saturday 10:00-2:00pm</td>
                    <td>at Orange Memorial Park in South San Francisco </td>
                    <td className="link">www.pcfma.com</td>
                </tr>
                <tr>
                    <td>August 19/16 </td>
                    <td>Saturday 10:00-2:00pm</td>
                    <td>at Santa Teresa Farmers' Market in San Jose </td>
                    <td className="link">www.pcfma.com</td>
                </tr>
                <tr>
                    <td>July 31/16 </td>
                    <td>Sunday 9:00-1:00pm </td>
                    <td>at Livermore Farmers' Market in Livermore </td>
                    <td className="link">www.pcfma.com</td>
                </tr>
                <tr>
                    <td>July 22/16</td>
                    <td>Saturday 9:00-1:00pm</td>
                    <td>at Vallco Shopping Mall Farmers' Market in Cupertino</td>
                    <td className="link">www.pcfma.com</td>
                </tr>
                <tr>
                    <td>July 16/16</td>
                    <td>Saturday 9:00-1:00pm</td>
                    <td>at Pinole Farmers' Market East bay in Pinole</td>
                    <td className="link">www.pcfma.com</td>
                </tr>
                <tr>
                    <td>July 15/16</td>
                    <td>Friday 10:00-2:00pm</td>
                    <td>at San Jose Downtown Farmers' Market - San Pedro Square in San Jose</td>
                    <td className="link">www.pcfma.com</td>
                </tr>
                <tr>
                    <td>July 05/16</td>
                    <td>Tuesday 10:00-2:00pm</td>
                    <td>at Concord Farmers' Market in Concord</td>
                    <td className="link">www.pcfma.com</td>
                </tr>
                <tr>
                    <td>July 02/16</td>
                    <td>Saturday 9:00-1:00pm</td>
                    <td>at Sunnyvale Farmers' Market in Sunnyvale</td>
                    <td className="link">www.urbanvillage.org</td>
                </tr>
                <tr>
                    <td>June 25/16</td>
                    <td>Saturday 9:00-1:00pm</td>
                    <td>at Vallejo Farmers' Market in Vallejo</td>
                    <td className="link">www.pcfma.com</td>
                </tr>
                <tr>
                    <td>June 18/16</td>
                    <td>Saturday 10:00-2:00pm</td>
                    <td>at Orange Memorial Park in South San Francisco</td>
                    <td className="link">www.pcfma.com</td>
                </tr>
                <tr>
                    <td>June 11/16</td>
                    <td>Saturday 9:00-1:00pm</td>
                    <td>at Pleasant Hill Farmers' Market in Pleasant Hill</td>
                    <td className="link">www.pcfma.com</td>
                </tr>
                <tr>
                    <td>June 04/16</td>
                    <td>Saturday 10:00-2:00pm</td>
                    <td>at Santa Teresa Farmers' Market in San Jose</td>
                    <td className="link">www.pcfma.com</td>
                </tr>
                <tr>
                    <td>May 17/16</td>
                    <td>Saturday 9:00-1:00pm</td>
                    <td>at San Mateo Farmers' Market in San Mateo</td>
                    <td className="link">www.pcfma.com</td>
                </tr>
                <tr>
                    <td>May 08/16</td>
                    <td>Sunday 9:00-1:00pm</td>
                    <td>at Campbell Farmers' Market in Downtown Campbell</td>
                    <td className="link">www.urbanvillage.org</td>
                </tr>
                <tr>
                    <td>April 30/16</td>
                    <td>Saturday 9:00-1:00pm</td>
                    <td>at Pinole Farmers' Market East bay in Pinole</td>
                    <td className="link">www.pcfma.com</td>
                </tr>
                <tr>
                    <td>April 15/16</td>
                    <td>Saturday 9:00-1:00pm</td>
                    <td>at Vallco Shopping Mall Farmers' Market in Cupertino </td>
                    <td className="link">www.pcfma.com</td>
                </tr>
                <tr>
                    <td>April 10/16</td>
                    <td>Sunday 9:00-1:00pm</td>
                    <td>at Livermore Farmers' Market in Livermore</td>
                    <td className="link">www.pcfma.com</td>
                </tr>
                <tr>
                    <td>April 3/16</td>
                    <td>Sunday 9:00-1:00pm</td>
                    <td>at Belmonte Farmers' Market in Belmonte</td>
                    <td className="link">www.pcfma.com</td>
                </tr>
                <tr>
                    <td>Mar 19/16</td>
                    <td>Saturday 10:00-2:00pm</td>
                    <td>at Santa Teresa Farmers' Market in San Jose</td>
                    <td className="link">www.pcfma.com</td>
                </tr>
                <tr>
                    <td>Mar 17/16</td>
                    <td>Saturday 9:00-1:00pm</td>
                    <td>at San Mateo Farmers' Market in San Mateo</td>
                    <td className="link">www.pcfma.com</td>
                </tr>
                <tr>
                    <td>Feb 27/16</td>
                    <td>Saturday 9:00-1:00pm</td>
                    <td>at Vallejo Farmers' Market in Vallejo</td>
                    <td className="link">www.pcfma.com</td>
                </tr>
                <tr>
                    <td>Feb 14/16</td>
                    <td>Saturday 9:00-1:00pm</td>
                    <td>at Palo Alto Farmers' Market in Palo Alto</td>
                    <td className="link">www.urbanvillage.org</td>
                </tr>
                <tr>
                    <td>Jan 23/16</td>
                    <td>Saturday 9:00-1:00pm</td>
                    <td>at Santa Teresa Farmers' Market in San Jose</td>
                    <td className="link">www.pcfma.com</td>
                </tr>
                <tr>
                    <td>Jan 03/16</td>
                    <td>Sunday 12:00-4:00pm</td>
                    <td>at the Santana Row, at Oak Tree Lounge (front of the Oak Tree, behind of Vintage Wine Bar) in San Jose</td>
                    <td className="link">www.santanarow.com</td>
                </tr>
                </tbody>
            </table>

        </div>)
    }
});