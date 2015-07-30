//add event handlers to each of the numbers with a loop???
//add event handlers for math functions to all operators with a loop???
//add event handler to clear function
//create some sort of holder for the the items when they're clicked
//create function for action when = sign is clicked
//the numbers have no ids while the other keys do???
//http://code.tutsplus.com/tutorials/creating-an-incredible-jquery-calculator--pre-8813
//i'm not sure how to even grab the variables in an array

// so gotta pull out the list from the screen via grabbing it
// convert it to an array, and then a series of if then that test for the operator
// might be able to make everything work by when they press the = it runs the math function???

var screenContents = '';
var a = '';
var b = '';
var ans = '';

$(document).ready(function() {
  // console.log("sanity")
  // var $keyPressed = $(this).html();
  $('span').on('click', function() {
    //variable that holds the
    var $keyPressed = $(this).html();
    $('#screen').append($keyPressed);
  });

  //how do i test for this????
  function getScreen() {
    // console.log("sanity")
    var screenContents = $('#screen').html();
    screenContents.split("");
    a = parseInt(screenContents.charAt(0));
    b = parseInt(screenContents.charAt(2));
    console.log(screenContents);
    console.log(a);
    console.log(b);
    mathStuff(screenContents);
    return screenContents;
  }
    getScreen();

  // math decision statements
  function mathStuff(screenContents) {
    console.log("sanityMath")
    console.log(screenContents.charAt(1).toString());
    if (screenContents.charAt(1).toString() === "+") {
      console.log("firing");
      addition();
    } else if (screenContents.charAt(1).toString() === "-") {
      console.log("firing1");
      subtract();
    } else if (screenContents.charAt(1).toString() === "*") {
      console.log("firing2");
      divide();
    } else if (screenContents.charAt(1).toString() === "/") {
      console.log("firing3");
      multiply();
    }
  }


  //calculate function

  function addition() {
    var ans = a + b;
    console.log(ans + "+");
    return ans;
  }

  function subtract() {
    var ans = a - b;
    console.log(ans + "s");
    return ans;
  }

  function divide() {
    var ans = a / b;
    console.log(ans + "d");
    return ans;
  }

  function multiply() {
    var ans = a * b;
    console.log(ans + "m");
    return ans;
  }

    //clear function
  $('#cancel').on('click', function(){
      $('#screen').html(null);
    });

});

