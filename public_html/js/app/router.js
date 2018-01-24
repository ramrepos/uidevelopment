define(['ojs/ojcore', 'knockout', 'jquery', 'ojs/ojknockout',
         'ojs/ojmenu', 'ojs/ojtoolbar', 'ojs/ojbutton', 'ojs/ojmodule',
         'ojs/ojrouter', 'ojs/ojmoduleanimations', 'text'
],
function(oj, ko, $) {  
    function RouterConfig() {        
    }
    RouterConfig.prototype.init = function(){
        oj.Router.defaults['urlAdapter'] = new oj.Router.urlParamAdapter();
        var router = oj.Router.rootInstance;
        router.configure(
        {
          'form':  { label: 'Form', isDefault: true, value: 'personal-details-form' },
          'chart':  { label: 'Chart', value :'personal-details-chart' },
          'compare' : {  label: 'Compare', value: 'compare-module' }
        });
    };
    var routerConfig = new RouterConfig();    
    return routerConfig;
});