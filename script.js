var phone = prompt("Enter your phone number with dashes", "Example: 000-867-5309");
var fourth = phone.charAt(3);
var eigth = phone.charAt(7);
if ((fourth === "-") && (eigth === "-")) {
alert("Way to go");
}
else {
  alert("Wrong Format. Please use dashes");
}

var bday = prompt("Please enter your birthday", "Example : 07/19/91");
var third = bday.charAt(2);
var fifth = bday.charAt(5);
if ((third === "/") && (fifth === "/")) {
  alert("Way to go");
}
else {
  alert("Wrong Format. Please use slashes");
}
var state = prompt("Please enter your state code", "Example: CO");
var length = state.length;
if (length <= 2) {
  alert("Way To GO");
}
else {
  alert("Wrong Format. Please use a two character State code");
}

var zip = prompt("Please enter your postal code", "Example: 90210 or 90210-1337");
var ziplength = zip.length;
var zipchar = zip.charAt(5);
if ((ziplength === 5) || (zipchar === "-")) {
  alert("Way To GO");
}
else {
  alert("Wrong Format. Please use a two character State code");
}

var married = prompt("Are you married?" , "Example: Yes, No, YES, NO");
if ((married === "Yes") || (married === "YES") || (married === "NO") || (married === "No")) {
  alert("Way to go");
}
else {
  alert("Wrong Format, please use Yes, No, YES, or NO");
}
