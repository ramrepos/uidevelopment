define([],function(){
    function WeatherModel(serviceCallManager){
        var self = this; 
        self.serviceCallManager = serviceCallManager;        
    }
    WeatherModel.prototype.getCityWeather = function(city){
        var self = this;
        var serviceCallPromise = self.serviceCallManager.getCityWeather(city);
        var promise = new Promise(function(resolve,reject){
            serviceCallPromise.done(function(data){
                                    resolve(self.flattenedOutput((self.processCityWeatherData(data))));
                                });
            serviceCallPromise.fail(function(data){
                                    reject('Error getting $city weather information'.replace('$city',city));
                                });
        });
        return promise;                            
    };
    WeatherModel.prototype.processCityWeatherData = function(data){
        var self = this;
        var weatherObj = new Weather();
        if(data){
            weatherObj.temperature.min = data.main.temp_min;
            weatherObj.temperature.max = data.main.temp_max;
            weatherObj.main = data.weather[0].description;
            weatherObj.sun.rise = self.getAMPM(data.sys.sunrise*1000);
            weatherObj.sun.set = self.getAMPM(data.sys.sunset*1000);
            weatherObj.country = data.sys.country;
            weatherObj.name = data.name;
            
        }
        return weatherObj;
    };
    WeatherModel.prototype.getAMPM = function(epoch){
        if (epoch) {
            var time = new Date(epoch);
            return time.toLocaleString('en-GB', { hour: 'numeric', minute: 'numeric', hour12: true }); 
        }
        return '';
    };
    WeatherModel.prototype.flattenedOutput = function(weatherObj){
        var details = [];
        
        details.push({name: 'Forecast', value: weatherObj.main});
        details.push({name: 'Minimum Temperature', value: Math.round(weatherObj.temperature.min - 273.15)});
        details.push({name: 'Maximum Temperature', value: Math.round(weatherObj.temperature.max - 273.15)});
        details.push({name: 'Sunrise', value: weatherObj.sun.rise});
        details.push({name: 'Sunset', value: weatherObj.sun.set});
        
        return {name: weatherObj.name + ', ' + weatherObj.country, details: details};
    };
    return WeatherModel;
    
    function Weather(){
        var self = this;
        self.temperature = {min: 0, max: 0};
        self.main = 'Normal';
        self.sun = {rise: 6.00, set: 6.00};    
        self.country = '';
        self.name = '';
    }
});