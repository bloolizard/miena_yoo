Media = React.createClass({
    componentWillMount(){
        Actions.setLayout('page');
    },

    render(){
        return (<div>
        <div>KQED</div>
        <div>Flower Show</div>
        <div>Gallery</div>


        </div>)
    }
});