requirejs.config({
    baseUrl: 'js/lib',
    paths: {
        'app': '../app',
        'knockout': 'knockout/knockout-3.4.0.debug',
        'jquery': 'jquery/jquery-3.1.1',
        'jqueryui-amd': 'jquery/jqueryui-amd-1.12.0',
        'promise': 'es6-promise/es6-promise',
        'hammerjs': 'hammer/hammer-2.0.8',
        'ojdnd': 'dnd-polyfill/dnd-polyfill-1.0.0',
        'ojs': 'oj/v3.1.0/debug',
        'ojL10n': 'oj/v3.1.0/ojL10n',
        'ojtranslations': 'oj/v3.1.0/resources',
        'text': 'require/text',
        'signals': 'js-signals/signals',
        'customElements': 'webcomponents/CustomElements',
        'proj4': 'proj4js/dist/proj4-src',
        'css': 'require-css/css'
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
        ko.components.register('personal-details-chart', {
            viewModel: {require: "app/viewmodel/personal-details-chart"},
            template : { require: "text!app/html/personal-details-chart.html" }
        });
    });
    
    var vm = new ViewModel();
    
    ko.applyBindings(vm, document.getElementById('body'));
});