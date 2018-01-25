define(['knockout','app/util/pub-sub'],function(ko, po){
    function CompareOutputDetails (param){
        var self = this;
        self.param = param;
        var topic = 'compare_detail'+param.id;
        self.details = ko.observable({name: '', details: []});
        po.subscribe(function(message){
            console.log(message);
            self.details(message);
        },topic);
    };
    return CompareOutputDetails;
});