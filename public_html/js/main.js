requirejs.config({
    baseUrl: 'js/lib',
    paths: {
        app: '../app'
    }
});

requirejs(["knockout-3.4.2"], function(ko) {
    //This function is called when app/app.js and app/lib.js is loaded.
    //If app.js calls define(), then this function is not fired until
    //app's dependencies have loaded, and the app argument will hold
    //the module value for "app/app".
    
    function ViewModel(){
        var self = this;
        self.firstName = ko.observable('');
        self.lastName = ko.observable('');
        self.fullName = ko.pureComputed(function(){
            return self.lastName() +  ', ' + self.firstName();
        },self);  
    }
    
    ko.applyBindings(new ViewModel());
});