// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

//var hours= ['#hour-9','#hour-10', '#hour-11', '#hour-12', '#hour-1', '#hour-2', '#hour-3', '#hour-4', '#hour-5'];


$(document).ready(function () {
  var saveBtn= $("button");

 saveBtn.on('click', function(event){ 
 var userInput = $(this).siblings("textarea").val();
 //'this' references the saveBtn, or the button tags in the html
 var timeBlockId = $(this).parent().attr("id");
localStorage.setItem(timeBlockId, userInput);
//this function makes it so that when you click the save button,
//it will store the value found in the text area div to local storage
 })

 var today = dayjs(); //creates a variable for day.js to be used
 $('#currentDay').text(today.format('MMM D, YYYY'));
 //this code places the time of day in the div with the 'current day' id
 //we call upon the today variable to use day.js and then we tell it which format we want

 $(window).on('load', function() {
  // do something when the page is loaded or reloaded
  console.log('hello');
});

});




  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //

