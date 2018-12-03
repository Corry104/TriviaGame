//JavaScript Trivia Game


var correct = 0;
var incorrect= 0;
var unanswered= 0;
var countDown= 10;

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

});
       
// for(var i = 1; i <= 45; i++) {
//   var radios = document.getElementsByName('group'+i);
//   for(var j = 0; j < radios.length; j++) {
//     var radio = radios[j];
//     if(radio.value == "correct" && radio.checked) {
//       correct++;
//     }
//   }
//  }                   
//     alert("Correct Responses: " + correct);



