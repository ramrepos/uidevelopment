define(['jquery'],function($){
    function ServiceCallManager() {
        var self = this;
        self.APPID = '45177231cca8df0e79c55d5d7958f36a';
        self.WEATHER_APIS = {
            CITY: 'http://api.openweathermap.org/data/2.5/weather'
        };
    };
    ServiceCallManager.prototype.getCityWeather = function(city){
        var self = this;
        var weatherResult = $.ajax( {url: self.WEATHER_APIS.CITY+'?q='+city+'&APPID='+self.APPID});
        return weatherResult;
    };
    var serviceCallManager = new ServiceCallManager();
    return serviceCallManager;
});
