/* exported Bank */
// Bank.prototype.openAccount //
// if balance > 0 and and interger (balance % 1 === 0), make new acc object (this.nextAccountNumber, holder) //
// call deposit prototype to deposit balance //
// push new acc int array then increment the next acc //
// return new acc number //
// if not, return null //
// Bank.prototype.getAccount //
// for loop to go through accounts array and see if (this.accounts[i].number === number) //
// if yes, return this.accounts[i]; //
// if not, return null //
// Bank.prototype.getTotalAssets //
// make var assets = 0 to represent total assets //
// for loop to go through account array //
// add sum of accounts by calling getBalance //
// return assets //

function Bank() {
  this.nextAccountNumber = 1;
  this.accounts = [];
}

Bank.prototype.openAccount = function (holder, balance) {
  if (balance > 0 && balance % 1 === 0) {
    var newAccount = new Account(this.nextAccountNumber, holder);
    newAccount.deposit(balance);
    this.accounts.push(newAccount);
    this.nextAccountNumber++;
    return newAccount.number;
  } else {
    return null;
  }
};

Bank.prototype.getAccount = function (number) {
  for (var i = 0; i < this.accounts.length; i++) {
    if (this.accounts[i].number === number) {
      return this.accounts[i];
    }
  }
  return null;
};

Bank.prototype.getTotalAssets = function () {
  var assets = 0;
  for (var i = 0; i < this.accounts.length; i++) {
    assets += this.accounts[i].getBalance();
  }
  return assets;
};
