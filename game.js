var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];

function nextSequence() {
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);

    $("#" + randomChosenColor).fadeOut(100).fadeIn(100);
    playSound(randomChosenColor);
}

function playSound(name) {
    $("#" + name).click(function (e) {
        var soundEffect = new Audio("sounds/" + name + ".mp3");
        soundEffect.play();
    });
}

function animatePress(currentColor) {
    $("#" + currentColor).addClass("pressed").delay(100).removeClass("pressed");
}

$("body").click(function (event) {
    var userChosenColor = event.target.id;

    playSound(userChosenColor);

    animatePress(userChosenColor);

    userClickedPattern.push(userChosenColor)
});


