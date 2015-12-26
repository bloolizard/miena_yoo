LayoutStore = Reflux.createStore({
    listenables: [Actions],
    setLayout(layout){
        this.layout = layout;
        this.triggerChange();
    },
    triggerChange(){
        this.trigger('change', this.layout);
    }

});