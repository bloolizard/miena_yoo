//Design based off http://www.markusschulzstore.com/markus-schulz-buenos-aires-2013-mix

Shop = React.createClass({
    componentWillMount(){
        Actions.setLayout('page');
    },

    render(){
        return (<div>
            <div class="album-cover"></div>
            <div class="album-detail"></div>
        </div>)
    }
});