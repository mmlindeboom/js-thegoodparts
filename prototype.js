if (typeOf Object.create !== 'function') {
	Object.create = function (o) {
		var F = function () {};
		F.prototype = o;
		return new F();
	};
}

var house = {
	'windows' : 4,
	'bedrooms' : 2,
	'bathrooms' : 1
};

var myHouse = Object.create(house);


myHouse.bedrooms = 3;

if (window.console){console.log(myHouse);}