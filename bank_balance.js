// This is an example of Method invocation,
// if amount is not a typeof number, 1 is used
// as the default.

var bank_account = {
	balance: 0,
	deposit: function(amount) {
		this.balance += typeof amount === 'number' ? amount : 1;
	}
};

bank_account.deposit(500);

if (window.console){console.log(bank_account.balance);}
document.writeln()