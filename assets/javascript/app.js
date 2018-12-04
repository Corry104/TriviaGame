//JavaScript Trivia Game


var correct = 0;
var incorrect = 0;
var unanswered = 0;
var countDown = 10;
var userAnswer="";

function decrement() {
    countDown--;
    $("#clock").html(countDown);

    if (countDown <= 0) {
        $("#clock").html("Game Over");
        $("#finalPage").css("display", "unset");
        $(".main_container").css("display", "none");
    }
}

function myFunction(){
    $("#submit").css("visibility", "hidden");
    $(".second-container").css("visibility", "hidden");
  
}

$("#start").on("click", function() {
    $(".main_container").css("visibility", "visible");
    $("#start").css("visibility", "hidden");
    $("#submit").css("visibility", "visible");
    setInterval(decrement, 1000);
});

$("#submit").on("click", function() {
    $("#finalPage").css("display", "unset");
    $(".main_container").css("display", "none");
    $("#submit").css("visibility", "hidden");

    if (!$("input:radio[name='Group1']:checked").val()) {
        unanswered++;
        $("#unAnswered").html("Unanswered: " + unanswered)
    }
    else {
  
    }
});


$(":radio[value=true]").on("click", function() {
    correct++;
    $("#correctAnswer").html("Correct: " + correct)
   
});
    
$(":radio[value=false]").on("click", function() {
    incorrect++;
    $("#incorrectAnswer").html("Incorrect: " + incorrect)
   
});



     
     
  






