define(['app/model/WeatherModel','app/service/ServiceCallManager'],function(WeatherModel, serviceCallManager){
    function CompareModel(compareObj){
        var self = this;
        self.compareObj = compareObj;
    };
    CompareModel.prototype.compare = function(input){
        var self = this;
        if (self.compareObj.attribute === 'weather'){
            if (self.compareObj.filter === 'city') {
                if (!(input && input.length > 0)){
                    return;
                }
                var weatherModel = new WeatherModel(serviceCallManager);
                return weatherModel.getCityWeather(input);
            }
        }
        return null;
    };
    return CompareModel;
});