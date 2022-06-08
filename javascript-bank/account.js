/* exported Account */

// return account containing number, holder, transcations//
// Account.prototype.deposit //
// if statement that if number is not a number, is > 0, not an interger, is NaN, return false //
// new var for new transaction //
// push new transcation and return as true //
// Account.prototype.withdraw, repeat as above//

function Account(number, holder) {
  this.number = number;
  this.holder = holder;
  this.transactions = [];
}

Account.prototype.deposit = function (amount) {
  if (typeof amount !== 'number' || amount <= 0 || !Number.isInteger(amount) || isNaN(amount)) {
    return false;
  }
  var newTransaction = new Transaction('deposit', amount);
  this.transactions.push(newTransaction);
  return true;
};

Account.prototype.withdraw = function (amount) {
  if (typeof amount !== 'number' || amount <= 0 || !Number.isInteger(amount) || isNaN(amount)) {
    return false;
  }
  var newTransaction = new Transaction('withdrawal', amount);
  this.transactions.push(newTransaction);
  return true;
};

Account.prototype.getBalance = function () {
  var finalDeposits = 0;
  var finalWithdrawls = 0;
  return finalDeposits - finalWithdrawls;
};
