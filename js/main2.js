

// GLOBALS

var screenContents = '';
var a = '';
var b = '';
var operators = ['+','-','x','/'];



// HELPER FUNCTIONS

function addition() {
  console.log(ans + "+");
  var ans = a + b;
  // console.log(ans + "+");
  return ans;
}

function subtract() {
  var ans = a - b;
  console.log(ans + "s");
  return ans;
}

function divide() {
  var ans = (a / b);
  console.log(ans + "d");
  return ans;
}

function multiply() {
  var ans = (a * b);
  console.log(ans + "m");
  return ans;
}

// DOC READY

$(document).ready(function() {

  // EVENTS
  $('span').on('click', function() {
    var $keyPressed = $(this).html();
    $('#screen').append($keyPressed);
  });

  // HELPER FUNCTIONS

  //how do i test for this????
  function getScreen() {
    var screenContents = $('#screen').html();
    for (var i = 0; i < operators.length; i++) {
      for (var j = 0; j < screenContents.length; j++) {
        if ( operators[i] === screenContents[j] ) {
          y = screenContents[j];
          var indexOfOperator = screenContents.indexOf(screenContents[j]);
        }
      }
    }
    a = parseInt(screenContents.slice(0,indexOfOperator));
    b = parseInt(screenContents.slice(r));
    return screenContents;
  }


  // math decision statements
  function mathStuff(screenContents) {
    // console.log("sanityMath");
    // console.log(screenContents.charAt(1).toString());
    if (y === "+") {
      console.log("firing +");
      return addition();
    } else if (y === "-") {
      console.log("firing -");
      return subtract();
    } else if (y === "x") {
      console.log("firing x");
      return multiply();
    } else if (y === "/") {
      console.log("firing div");
      return divide();
    }
  }


  // EVENT HANDLERS AND LOGIC/CONTROLLER

  // print to screen the answer
  $('#calc').on('click', function () {
    var contentsOftheScreen = getScreen();
    var results = mathStuff(contentsOftheScreen);
    $('#screen').html('');
    $('#screen').html(results);
  });


    //clear function
  $('#cancel').on('click', function(){
      $('#screen').html(null);
    });

});

