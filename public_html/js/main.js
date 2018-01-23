requirejs.config({
    baseUrl: 'js/lib',
    paths: {
        app: '../app',
        jquery: 'jquery-3.3.1.min',
        knockout: 'knockout-3.4.2'
    }
});

requirejs(["knockout", "jquery"], function(ko, $) {
    //This function is called when app/app.js and app/lib.js is loaded.
    //If app.js calls define(), then this function is not fired until
    //app's dependencies have loaded, and the app argument will hold
    //the module value for "app/app".
    
    function ViewModel(){
        var self = this;
        
        self.plainko = ko.observable('KO Plain');
        self.componentko = ko.observable('KO Component');
        
        
        self.firstName = ko.observable('');
        self.lastName = ko.observable('');
        self.fullName = ko.pureComputed(function(){
            return self.lastName() +  ', ' + self.firstName();
        },self);  
    }
    
    $(function(){
        ko.components.register('personal-details-form', {
            viewModel: {require: "app/viewmodel/personal-details"},
            template : { require: "text!app/html/personal-details.html" }
        });
    });
    
    var vm = new ViewModel();
    
    ko.applyBindings(vm, document.getElementById('plainko'));
});