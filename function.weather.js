//This is an example of a constructor invocation,
//though, apparently its not reccomended.
//Scumbag Crockford: http://www.quickmeme.com/meme/3t0yha/
var Weather = function(currently) {
	this.conditions = currently;
};

Weather.prototype.get_weather = function() {
	return 'The weather is currently '+this.conditions;
};

var currentWeather = new Weather("cloudy");

if (window.console){console.log(currentWeather.get_weather());}

