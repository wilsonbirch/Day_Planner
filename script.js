
//grab todays date and time and write it into *todays date*
var date = moment().format('LLL');;
var time = moment().format('LT');
var i=0;


function initializeDayPlanner() {
    $("#date-time").empty();
    $("#date-time").text(date);

    var currentHour = parseInt(moment().format('H:mm:ss a'));
    console.log(currentHour);

    if (currentHour <=8) {

        $("#9am, #10am, #11am, #12pm, #1pm, #2pm, #3pm, #4pm, #5pm").addClass("bg-secondary")

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
    }
    
}

function calendarFromStorage() {
    //add items saved for this day, do this last
}

//<form>
//<input type="text" for = "task" class="input-text">
//<label>Enter Task Here</label>
//</form>

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

})

   
        
$("#ninamtask").submit(function(event){
    event.preventDefault();
    var nineamtask = $("#nineamtask: input")
    console.log($nineamtask);

});



// $("#10amsave").on("click", function(event){

//     event.preventDefault();
//     console.log("works");

// })

// $("#11amsave").on("click", function(event){

//     event.preventDefault();
//     console.log("works");

// })

// $("#12pmsave").on("click", function(event){

//     event.preventDefault();
//     console.log("works");

// })

// $("#1pmsave").on("click", function(event){

//     event.preventDefault();
//     console.log("works");

// })

// $("#2pmsave").on("click", function(event){

//     event.preventDefault();
//     console.log("works");

// })

// $("#3pmsave").on("click", function(event){

//     event.preventDefault();
//     console.log("works");

// })

// $("#4pmsave").on("click", function(event){

//     event.preventDefault();
//     console.log("works");

// })

// $("#5pmsave").on("click", function(event){

//     event.preventDefault();
//     console.log("works");

// })






initializeDayPlanner()


