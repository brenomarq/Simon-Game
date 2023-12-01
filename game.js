var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var level = 0;
var started = false

function nextSequence() {
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);

    $("#" + randomChosenColor).fadeOut(100).fadeIn(100);
    playSound(randomChosenColor);
    level++;
    $("#level-title").text("Level " + level);
}

function playSound(name) {
    $("#" + name).click(function (e) {
        var soundEffect = new Audio("sounds/" + name + ".mp3");
        soundEffect.play();
    });
}

function animatePress(currentColor) {
    var clickedButton = $("#" + currentColor)
    clickedButton.addClass("pressed");

    setTimeout(function () {
        $("#" + currentColor).removeClass("pressed");
      }, 100);
}

function checkAnswer(currentLevel) {
    if (condition) {

    } else {

    }
}

$("body").click(function (event) {
    var userChosenColor = event.target.id;

    playSound(userChosenColor);

    animatePress(userChosenColor);

    userClickedPattern.push(userChosenColor);

    checkAnswer(level);
});


$(document).keydown(function (e) {
    $("#level-title").text("Level " + level);
    if (started === false) {
        nextSequence();
    }
    started = true;
});





