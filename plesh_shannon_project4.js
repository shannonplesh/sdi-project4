// Author Shannon Plesh

// Problem 1 starts here.
// Does a string follow an aaa@bbb.ccc pattern like an email address?
// The email address string to be tested here will be "qwerty@gmail.com".
// Below is where the email address is defined as a variable.
var emailAddress = "qwerty@gmail.com"
// Below is a function named checkValidEmail used to validate an email address.
function checkValidEmail() {
// Below is a regular expression used to identify the pattern used in a valid email address.
var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,4}$/
// This statment tests the emailAddress variable against the emailPattern variable and console.logs the result.
if (emailPattern.test(emailAddress)) {
	   console.log("This is a valid email address.") 
	}	else {
		console.log("Not a valid email address.");
	}
}
// checkValidEmail() calls the function which will verify the email emailAddress variable defined above.
checkValidEmail();
// Problem 1 ends here.


// Problem 2 starts here.
// Find the smallest value in an array that is greater than a given number.
// In this example, my given number will be 10, therefore the smallest number greater than 10 in the array below is 19.
// This function finds and removes numbers from the array that are smaller than the given number which is 10.
function getSmallestNum() {
function isBigEnough(element, index, array) {  
      return (element >= 10);  
}  
    var filtered = [199, 2, 19, 5, 8, 190, 54, 99, 100].filter(isBigEnough);  
// .filter(isBigEnough) filteres out all numbers that are smaller than 10. var filtered stores the new array. 
isBigEnough();
// filtered.sort is used to sort the array from the smallest number to largest number.
// Once the array has been sorted .shift removes the element at the zeroeth index and shifts the values at consecutive indexes down, then returns the removed value. 
filtered.sort(function(a, b) {  
        return a - b;  
});  
// Returns the correct answer to the question above and console.logs the number 19.     
return console.log(filtered.shift()); 
}
// getSmallestNum() calls the function which is used to find the answer to the question above.
getSmallestNum()
// Problem 2 ends here.

// problem 3 starts here.
// Is the string a URL? (Does it start with http: or https:?)
// Below is the string used to identify the url to be checked.
var url = "https://www.google.com/"
// This is where the checkUrl function is decared.
var checkUrl = function () {
// Below is a regular expression used to identify the pattern used in a valid url.
var re = /^(http[s]?:\/\/){0,1}(www\.){0,1}[a-zA-Z0-9\.\-]+\.[a-zA-Z]{2,5}[\.]{0,1}/;
// This will test the url and return true if the answer is yes, or false if the answer is no.
var isUrl = re.test(url);
// This console.log will concatenate a sentance stating if the url is true or false.
console.log("This is a " + isUrl + " url.");
// This will check the charactor in position 4 to verify http or https and console.log the result.
if(url.charAt(4) == "s"){
		console.log("This is a https url");
	}
	if (url.charAt(4) == ":") {
		console.log("This is a http url");
	}
}
// checkUrl() is used to call the function that checks to see if a url is valid and weather it is http or https.
checkUrl();
// Problem 3 ends here.

// Problem 4 starts here.
// Given a string version of a number such as "42", return the value as an actual Number, such as 42.;
// Below is where the string is declared. This example uses the string "42".
var strN = "42";
var getStrN = function () {
	return console.log(strN.charAt(0) + strN.charAt(1));
}
getStrN();

    var sports = ["soccer", "baseball"];  
    sports.push("football", "swimming");  
console.log(sports);


var strNw = "42";
var getStrNw = function () {
	return new Array (0,1)
}
getStrNw();

console.log(strNw);


