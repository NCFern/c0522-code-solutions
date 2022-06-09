/* exported Transaction */

// type is string of deposit or withdraw //
// amount is positive interger number //

function Transaction(type, amount) {
  this.type = type;
  this.amount = amount;
}
