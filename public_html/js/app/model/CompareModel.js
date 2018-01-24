define(['app/model/WeatherModel','app/service/ServiceCallManager'],function(WeatherModel, serviceCallManager){
    function CompareModel(compareObj){
        var self = this;
        self.compareObj = compareObj;
    };
    CompareModel.prototype.compare = function(city){
        var self = this;
        if (self.compareObj.attribute === 'weather'){
            if (self.compareObj.filter === 'city') {
                var weatherModel = new WeatherModel(serviceCallManager);
                return weatherModel.getCityWeather(city);
            }
        }
        return null;
    };
    return CompareModel;
});