/* exported student */

var student = {
  firstName: 'Smitty',
  lastName: 'Werbenjagermanjensen',
  subject: 'being number 1',
  getFullName: function () {
    return this.firstName + ' ' + this.lastName;
  },
  getIntroduction: function () {
    return 'Hello, my name is' + ' ' + this.firstName + ' ' + this.lastName + ' ' +
    'and I am studying' + ' ' + this.subject + '.';
  }
};

student.getFullName();
student.getIntroduction();
