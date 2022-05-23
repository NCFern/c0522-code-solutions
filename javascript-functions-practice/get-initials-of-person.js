/* exported getInitialsOfPerson */
function getInitialsOfPerson(person) {
  var bothInitials = ((person.firstName.charAt(0)) + (person.lastName.charAt(0)));
  return bothInitials;
}
