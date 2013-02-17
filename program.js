document.writeln('Hello, world!');

var brothers = {
	"Matt": {
		address: "50 N Henry St"
	},
	"Brian": {
		address: "352 East 2nd St"
	},
	"Connor": {
		address: "352 East 2nd St"
	}
};

var a = 0;
var node;
for (node in brothers) {
	a++;
	node[a] = name;
	address = node.address;
	console.log(address);
}