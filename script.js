$(document).ready(function () {
  var saveBtn= $("button");

 saveBtn.on('click', function(){ 
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
 function colorTimeBlock(){
  var currentHour = dayjs().hour();
  console.log(currentHour);
  $(".time-block").each(function(){
    var blockHour = parseInt($(this).attr("id").split("-")[1]);
    console.log(blockHour); 
    //this breaks down the id into an array of 'hour' and 'number' 
    //i.e ["hour","8"]
    //to target the 8 specifically, I used [1]
    //so this variable is calling on the second part of the id in every time-block
      
    if(blockHour < currentHour) 
    {
      // this changes the time block area to gray if the hour is passed
      $(this).addClass("past"); 
    }
    //if its not in the past, but in fact the present, it will delete the grey and add red
    else if(blockHour === currentHour) 
    {
      $(this).addClass("present");
      $(this).removeClass("past");
    }
    //if its in the future, it will delete the red and grey color, and add green ("future")
    else{
      $(this).removeClass("present");
      $(this).removeClass("past");
      $(this).addClass("future");
    }
    
  })
 }

 colorTimeBlock(); //this calls on the colorTimeBlock function to run

//this loop keeps the text you input into the planner on the page, even after a refresh 
 for(var i=8;i<=17;i++)
{
  $(`#hour-${i} .description`).val(localStorage.getItem('hour-'+i));
}

});

