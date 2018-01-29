var baseViewModel;
requirejs(["app/app","app/lib"], function(app, lib) {
    //This function is called when app/app.js and app/lib.js is loaded.
    //If app.js calls define(), then this function is not fired until
    //app's dependencies have loaded, and the app argument will hold
    //the module value for "app/app".
    function BaseViewModel() {
        var self = this; 
        self.app = app;
        self.lib = lib;
    };
    baseViewModel = new BaseViewModel();
});