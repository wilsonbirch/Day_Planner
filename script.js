
//grab todays date and time and write it into *todays date*
var date = moment().format('LLL');;
var time = moment().format('LT');
var i=0;

//initialize function sets the proper colours for the day planner blocks, pulls any tasks from local storage or clears it at the beginning of a new day or end of the day
function initializeDayPlanner() {
    $("#date-time").empty();
    $("#date-time").text(date);

    var currentHour = parseInt(moment().format('H:mm:ss a'));
    console.log(currentHour);

    if (currentHour <=8) {

        $("#9am, #10am, #11am, #12pm, #1pm, #2pm, #3pm, #4pm, #5pm").addClass("bg-secondary")
        localStorage.clear();

    }

    if (currentHour === 9){

        $("#9am").addClass("bg-danger");
        $("#10am, #11am, #12pm, #1pm, #2pm, #3pm, #4pm, #5pm").addClass("bg-secondary")

    }

    if (currentHour === 10){

        $("#9am").addClass("bg-success");
        $("#10am").addClass("bg-danger");
        $("#11am, #12pm, #1pm, #2pm, #3pm, #4pm, #5pm").addClass("bg-secondary")

    }

    if (currentHour === 11){

        $("#9am, #10am").addClass("bg-success");
        $("#11am").addClass("bg-danger");
        $("#12pm, #1pm, #2pm, #3pm, #4pm, #5pm").addClass("bg-secondary")

    }

    if (currentHour === 12){

        $("#9am, #10am, #11am").addClass("bg-success");
        $("#12pm").addClass("bg-danger");
        $("#12pm, #1pm, #2pm, #3pm, #4pm, #5pm").addClass("bg-secondary")

    }

    if (currentHour === 13){

        $("#9am, #10am, #11am, #12pm").addClass("bg-success");
        $("#1pm").addClass("bg-danger");
        $("#2pm, #3pm, #4pm, #5pm").addClass("bg-secondary")

    }

    if (currentHour === 14){

        $("#9am, #10am, #11am, #12pm, #1pm").addClass("bg-success");
        $("#2pm").addClass("bg-danger");
        $("#3pm, #4pm, #5pm").addClass("bg-secondary")

    }

    if (currentHour === 15){

        $("#9am, #10am, #11am, #12pm, #1pm, #2pm").addClass("bg-success");
        $("#3pm").addClass("bg-danger");
        $("#4pm, #5pm").addClass("bg-secondary")

    }

    if (currentHour === 16){

        $("#9am, #10am, #11am, #12pm, #1pm, #2pm, #3pm").addClass("bg-success");
        $("#4pm").addClass("bg-danger");
        $("#5pm").addClass("bg-secondary")

    }

    
    if (currentHour === 17){

        $("#9am, #10am, #11am, #12pm, #1pm, #2pm, #3pm, #4pm").addClass("bg-success");
        $("#5pm").addClass("bg-danger");

    }

    
    if(currentHour > 17){
        alert("all tasks completed for today!")
        $("#9am, #10am, #11am, #12pm, #1pm, #2pm, #3pm, #4pm, #5pm").addClass("bg-success");
        localStorage.clear();
    }
    
    //pull any tasks from local storage and write them to the day planner
    $("#nineamtasktext").text(localStorage.getItem("nine"));
    $("#tenamtasktext").text(localStorage.getItem("ten"));
    $("#elevenamtasktext").text(localStorage.getItem("eleven"));
    $("#twelvepmtasktext").text(localStorage.getItem("twelve"));
    $("#onepmtasktext").text(localStorage.getItem("one"));
    $("#twopmtasktext").text(localStorage.getItem("two"));
    $("#threepmtasktext").text(localStorage.getItem("three"));
    $("#fourpmtasktext").text(localStorage.getItem("four"));
    $("#fivepmtasktext").text(localStorage.getItem("five"));

    

}

//on click function the task form for each hour will show
$("#9am").on("click", function(){

    $("#nineamtask").show(event);

})

$("#10am").on("click", function(event){

    $("#tenamtask").show(event);
    
})

$("#11am").on("click", function(event){

$("#elevenamtask").show(event);

})

$("#12pm").on("click", function(event){

$("#twelvepmtask").show(event);

})

$("#1pm").on("click", function(event){

    $("#onepmtask").show(event);

})

$("#2pm").on("click", function(event){

    $("#twopmtask").show(event);
    
})

$("#3pm").on("click", function(event){

$("#threepmtask").show(event);

})

$("#4pm").on("click", function(event){

$("#fourpmtask").show(event);

})

$("#5pm").on("click", function(event){

$("#fivepmtask").show(event);
$("#fivepmtasktext").empty();

})

//when any task is submitted preventDefault so the screen stays open
$(".taskform").submit(function(event){
    event.preventDefault();
    console.log("works");

});

//give the option to submit a task both with the save button and enter (9am)
$("#9amsave").on("click", function(event){
    var nineamtask = $("#nineamtask input").val();
    $("#nineamtask").hide();
    $("#nineamtasktext").text(nineamtask);
    localStorage.setItem("nine", nineamtask);
})


$("#nineamtask").submit(function(){
    var nineamtask = $("#nineamtask input").val();
    $("#nineamtask").hide();
    $("#nineamtasktext").text(nineamtask);
    localStorage.setItem("nine", nineamtask);

})

//give the option to submit a task both with the save button and enter (10am)
$("#10amsave").on("click", function(event){
    var tenamtask = $("#tenamtask input").val();
    $("#tenamtask").hide();
    $("#tenamtasktext").text(tenamtask);
    localStorage.setItem("ten", tenamtask);
    
})

$("#tenamtask").submit(function(){
    var tenamtask = $("#tenamtask input").val();
    $("#tenamtask").hide();
    $("#tenamtasktext").text(tenamtask);
    localStorage.setItem("ten", tenamtask);
    
})

//give the option to submit a task both with the save button and enter (11am)
$("#11amsave").on("click", function(event){
    var elevenamtask = $("#elevenamtask input").val();
    $("#elevenamtask").hide();
    $("#elevenamtasktext").text(elevenamtask);
    localStorage.setItem("eleven", elevenamtask);
    
})

$("#elevenamtask").submit(function(){
    var elevenamtask = $("#elevenamtask input").val();
    $("#elevenamtask").hide();
    $("#elevenamtasktext").text(elevenamtask);
    localStorage.setItem("eleven", elevenamtask);
    
})

//give the option to submit a task both with the save button and enter (12pm)
$("#12pmsave").on("click", function(event){
    var twelvepmtask = $("#twelvepmtask input").val();
    $("#twelvepmtask").hide();
    $("#twelvepmtasktext").text(twelvepmtask);
    localStorage.setItem("twelve", twelvepmtask);
    
})

$("#twelvepmtask").submit(function(){
    var twelvepmtask = $("#twelvepmtask input").val();
    $("#twelvepmtask").hide();
    $("#twelvepmtasktext").text(twelvepmtask);
    localStorage.setItem("twelve", twelvepmtask);
    
})

//give the option to submit a task both with the save button and enter (1pm)
$("#1pmsave").on("click", function(event){
    var onepmtask = $("#onepmtask input").val();
    $("#onepmtask").hide();
    $("#onepmtasktext").text(onepmtask);
    localStorage.setItem("one", onepmtask);
    
})

$("#onepmtask").submit(function(){
    var onepmtask = $("#onepmtask input").val();
    $("#onepmtask").hide();
    $("#onepmtasktext").text(onepmtask);
    localStorage.setItem("one", onepmtask);
    
})

//give the option to submit a task both with the save button and enter (2pm)
$("#2pmsave").on("click", function(event){
    var twopmtask = $("#twopmtask input").val();
    $("#twopmtask").hide();
    $("#twopmtasktext").text(twopmtask);
    localStorage.setItem("two", twopmtask);
    
})

$("#twopmtask").submit(function(){
    var twopmtask = $("#twopmtask input").val();
    $("#twopmtask").hide();
    $("#twopmtasktext").text(twopmtask);
    localStorage.setItem("two", twopmtask);
    
})

//give the option to submit a task both with the save button and enter (3pm)
$("#3pmsave").on("click", function(event){
    var threepmtask = $("#threepmtask input").val();
    $("#threepmtask").hide();
    $("#threepmtasktext").text(threepmtask);
    localStorage.setItem("three", threepmtask);
    
})

$("#threepmtask").submit(function(){
    var threepmtask = $("#threepmtask input").val();
    $("#threepmtask").hide();
    $("#threepmtasktext").text(threepmtask);
    localStorage.setItem("three", threepmtask);
    
})

//give the option to submit a task both with the save button and enter (4pm)
$("#4pmsave").on("click", function(event){
    var fourpmtask = $("#fourpmtask input").val();
    $("#fourpmtask").hide();
    $("#fourpmtasktext").text(fourpmtask);
    localStorage.setItem("four", fourpmtask);
    
})

$("#fourpmtask").submit(function(){
    var fourpmtask = $("#fourpmtask input").val();
    $("#fourpmtask").hide();
    $("#fourpmtasktext").text(fourpmtask);
    localStorage.setItem("four", fourpmtask);
    
})

//give the option to submit a task both with the save button and enter (5pm)
$("#5pmsave").on("click", function(event){
    var fivepmtask = $("#fivepmtask input").val();
    $("#fivepmtask").hide();
    $("#fivepmtasktext").text(fivepmtask);
    localStorage.setItem("five", fivepmtask);
    
})
$("#fivepmtask").submit(function(){
    var fivepmtask = $("#fivepmtask input").val();
    $("#fivepmtask").hide();
    $("#fivepmtasktext").text(fivepmtask);
    localStorage.setItem("five", fivepmtask);
    
})

initializeDayPlanner()


