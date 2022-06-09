/* exported Account */

// return account containing number, holder, transcations//
// Account.prototype.deposit //
// if statement that if number is not a number, is > 0, not an interger, is NaN, return false //
// new var for new transaction //
// push new transcation and return as true //
// Account.prototype.withdraw
// repeat as above//
// Account.prototype.getBalance //
// make vars for deposit and withdraw equaling 0 //
// for loop to go through transactions array //
// if statement to see if transaction type is deposit //
// if yes, add it to deposit amount //
// if no, add it to withdraw amoount //
// return statement of deposits - withdraw //

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

  for (var i = 0; i < this.transactions.length; i++) {
    if (this.transactions[i].type === 'deposit') {
      finalDeposits += this.transactions[i].amount;
    } else {
      finalWithdrawls += this.transactions[i].amount;
    }
  }
  return finalDeposits - finalWithdrawls;
};
