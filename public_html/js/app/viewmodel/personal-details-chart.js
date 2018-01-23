define(['ojs/ojcore', 'knockout', 'jquery', 'ojs/ojknockout', 'ojs/ojbutton', 'ojs/ojchart', 'ojs/ojtoolbar'],
function(oj, ko, $)
{
    function PersonalDetailsChartViewModel() {
        var self = this;
        self.orientationValue = ko.observable('vertical');
        
        /* chart data */
        var barSeries = [{name: "Jane", items: [5.5]},
                         {name: "Jana", items: [5.6]},
                         {name: "Shaun", items: [5.11]},
                         {name: "Shanmuga", items: [5.8]}];
    
        var barGroups = ["Height"];
   
        self.barSeriesValue = ko.observableArray(barSeries);
        self.barGroupsValue = ko.observableArray(barGroups); 
    };
    
    return PersonalDetailsChartViewModel;
});