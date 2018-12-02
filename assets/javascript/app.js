//JavaScript Trivia Game

// alert intro to the game

var userName = prompt("Please enter your name:", "");

    if (userName == null || userName == "") {
        alert("Ok! see you next time!");
        }
    else {
        alert("Hello " + userName + "! Let's begin!!");
        }

var correct = 0;
var incorrect= 0;
var countDown= 10;

function decrement() {
    countDown--;
    $("#clock").html(countDown);

    if (countDown <= 0) {
        $("#clock").html("Game Over");
    }




}

$("#start").on("click", function() {
    $(".main_container").css("visibility", "visible");
    $("#start").css("visibility", "hidden");
    setInterval(decrement, 1000);
});

