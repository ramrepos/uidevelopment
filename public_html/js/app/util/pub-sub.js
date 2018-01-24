define(['knockout'],function(ko){
    var pb = new ko.subscribable();
    return {    
        subscribe: function(handler, topic) {
            pb.subscribe(handler, null, topic)
        },        
        publish: function(message, topic) {
            pb.notifySubscribers(message, topic);
        }
    };
});
