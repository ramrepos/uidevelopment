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

requirejs(["knockout", "jquery","app/router",'ojs/ojtoolbar', 'ojs/ojbutton'], function(ko, $, router) {
    //This function is called when app/app.js and app/lib.js is loaded.
    //If app.js calls define(), then this function is not fired until
    //app's dependencies have loaded, and the app argument will hold
    //the module value for "app/app".
    
    function ViewModel(){
        var self = this;        
        self.router = oj.Router.rootInstance;    
      
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
        ko.components.register('compare-input-form', {
            viewModel: {require: "app/viewmodel/compare-input-form"},
            template : { require: "text!app/html/compare-input-form.html" }
        });
        ko.components.register('compare-output-details', {
            viewModel: {require: "app/viewmodel/compare-output-details"},
            template : { require: "text!app/html/compare-output-details.html" }
        });
        ko.components.register('compare-module', {
            template : { require: "text!app/html/compare-module.html" }
        });
        router.init();
        var vm = new ViewModel();   
        oj.Router.sync().then(function(){
             ko.applyBindings(vm, document.getElementById('body'));
        });
    });
    
    
});