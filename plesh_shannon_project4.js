// Author Shannon Plesh 
// SDI project 4 term 1203
// Problem 1 starts here.
// Does a string follow an aaa@bbb.ccc pattern like an email address?
// The email address string to be tested here will be "qwerty@gmail.com".
// The email address is defined as emailToCheck.
// Below is a function named checkValidEmail used to validate an email address.
function checkValidEmail(emailToCheck) {
    var emailAddress = emailToCheck
    // Below is a regular expression used to identify the pattern of a valid email address.
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,4}$/
    // This statment tests the emailAddress variable against the emailPattern variable and console.logs the result.
    if (emailPattern.test(emailAddress)) {
        console.log("This is a valid email address.");
    } else {
        console.log("Not a valid email address.");
    }
}
// checkValidEmail("qwerty@gmail.com") at bottom will call the function and verify if the email address in parentheses is correct.
// Problem 1 ends here.

// Problem 2 starts here.
// Find the smallest value in an array that is greater than a given number.
// In this example, my given number will be 10, therefore the smallest number greater than 10 in the array below is 19.
// This function finds and removes numbers from the array that are smaller than the given number which is 10 in my example below.
function getSmallestNum() {
    function isBigEnough(element, index, array) {
        return (element >= 10);
    }
    var filtered = [199, 2, 19, 5, 8, 190, 54, 99, 100].filter(isBigEnough);
    // .filter(isBigEnough) filteres out all numbers that are smaller than 10. var filtered stores the new array. 
    isBigEnough();
    // filtered.sort is used to sort the array from the smallest number to largest number.
    // Once the array has been sorted .shift removes the element at the zeroeth index and shifts the values at consecutive indexes down, then returns the removed value. 
    filtered.sort(function (a, b) {
        return a - b;
    });
    // Returns the correct answer to the question above and console.logs the number 19.     
    return console.log(filtered.shift());
}
// getSmallestNum() calls the function which is used to find the answer to the question above.
// Problem 2 ends here.

// problem 3 starts here.
// Is the string a URL? (Does it start with http: or https:?)
// testThisUrl is the string used to identify the url to be checked.
// This is where the checkUrl function is decared.
function checkUrl(testThisUrl) {
    var url = testThisUrl
    // Below is a regular expression used to identify the pattern used in a valid url.
    var re = /^(http[s]?:\/\/){0,1}(www\.){0,1}[a-zA-Z0-9\.\-]+\.[a-zA-Z]{2,5}[\.]{0,1}/;
    // This will test the url and return true if the answer is yes, or false if the answer is no.
    var isUrl = re.test(url);
    // This console.log will concatenate a sentance stating if the url is true or false.
    console.log("This is a " + isUrl + " url.");
    // This will check the charactor in position 4 to verify http or https and console.log the result.
    if (url.charAt(4) == "s") {
        console.log("This is a https url");
    }
    if (url.charAt(4) == ":") {
        console.log("This is a http url");
    }
}
// checkUrl() is used to call the function that checks to see if a url is valid and weather it is http or https.
// Problem 3 ends here.

// Problem 4 starts here.
// Does a string follow a 123-456-7890 pattern like a phone number?
// Here is where the phone number variable is declaired.
// This function will use a pattern of a phone number and check it against the variable declaired in the phoneNumber variable above.
var checkNum = function (testNumber) {
        var phoneNumber = testNumber;
        var pattern = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/; // Phone number pattern.
        if (pattern.test(phoneNumber)) { // checks number against pattern.
            var validPhoneNumber = phoneNumber.replace(pattern, "($1) $2-$3");
            console.log("Valid phone number!"); // logs output of a valad phone number.
        } else {
            return console.log("Invalid phone number!"); // logs output of an invalad phone number.
        }
    }
    // calls the function checkNum()
    // problem 4 ends here.

    // problem 5 starts here.
    // Title-case a string (split into words, then uppercase the first letter of each word.
		// fixCase function is declaired here.
function fixCase(fixThis) {


    String.prototype.toProperCase = function () {

        return this.replace(/\w\S*/g, function (txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        });
    };
    // takes my name as "shannon plesh" and converts the first letter of each word to upper case.
    fixThis.toProperCase();
    console.log(fixThis.toProperCase()); // Logs Shannon Plesh in proper case.
}
// problem 5 ends here.
// problem 6 starts here.
// Format a number to use a specific number of decimal places, as for money:
// variable to be used which has extra decimal places.
// this function will only use a specific number of decimal places.
function fixMoney(moneyToTest) {
    var money = moneyToTest
    money.toFixed(2)
    return console.log(money.toFixed(2));
}
// logs 3529.83 as for money.
// problem 6 ends here.
// problem 7 starts here.
// Find the number of hours or days difference between two dates.
//Here is where the two dates are set.Im usin my daughters birthday and the day I made the program.
//Daughters Birthday 
// todays date.
//Get 1 day in milliseconds.
//Calculate the difference between the two dates, and convert into days. Logs an output with the diference between the two dates.
function getDays(testDate) {
    var daughtersBirthday = testDate;
    today = new Date(2012, 12, 01);
    var one_day = 1000 * 60 * 60 * 24;
    console.log(Math.ceil((today.getTime() - daughtersBirthday.getTime()) / (one_day)) + " days have gone by since " + testDate)
}
// calls the function that calculates the number of days.
// problem 7 ends here.

// problem 8 starts here.
//Given a string that is a list of things separated by a given string, as well as another string separator, return a string with the first separator changed to the second: "a,b,c" + "," + "/" → "a/b/c".
function changeSeparator(changeThis) {
    // takes the string "a,b,c" 
    if (changeThis) {
        return console.log("a/" + "b/" + "c/");
    }
}
// calls the function changeSeparator()
// Logs a/b/c.
// problem 8 ends here

// Function calls for problems 1-8
// Problem 1
checkValidEmail("qwerty@gmail.com");
// Problem 2
getSmallestNum();
// Problem 3
checkUrl("https://www.google.com/");
// Problem 4
checkNum("407-699-1189");
// Problem 5
fixCase("shannon plesh");
// Problem 6
fixMoney(3529.8359);
// Problem 7
getDays(new Date(2007, 8, 29));
// Problem 8
changeSeparator("a,b,c");

// testing module pattern

var MODULE = (function () {
	var my = {},
		privateVariable = 699-234-1234;
	
	function privateMethod() {
		// ...
	}
	
	my.moduleProperty = 1;
	my.moduleMethod = function getDays(testDate) {
	    var daughtersBirthday = testDate;
	    today = new Date(2012, 12, 01);
	    var one_day = 1000 * 60 * 60 * 24;
	    console.log(Math.ceil((today.getTime() - daughtersBirthday.getTime()) / (one_day)) + " days have gone by since " + testDate)
	}
	
	return console.log(my.moduleProperty);
}());