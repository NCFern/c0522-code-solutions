/* exported Account */

// return account containing number, holder, transcations//

function Account(number, holder) {
  this.number = number;
  this.holder = holder;
  this.transactions = [];
}

Account.prototype.deposit = function (amount) {
  if (typeof amount !== 'number' || amount <= 0) {
    return false;
  }
  var newTransaction = new Transaction('deposit', amount);
  this.transactions.push(newTransaction);
  return true;
};

Account.prototype.withdraw = function (amount) {
  if (typeof amount !== 'number' || amount <= 0) {
    return false;
  }
  var newTransaction = new Transaction('withdrawal', amount);
  this.transactions.push(newTransaction);
  return true;
};

Account.prototype.getBalance = function () {

};
