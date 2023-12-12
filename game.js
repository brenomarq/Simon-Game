var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var level = 0;
var started = false

$("body").click(function (event) {
    var userChosenColor = event.target.id;

    playSound(userChosenColor);

    animatePress(userChosenColor);

    userClickedPattern.push(userChosenColor);

    checkAnswer(userClickedPattern.length - 1);
});

$(document).keydown(function (e) {
    $("#level-title").text("Level " + level);
    if (started === false) {
        nextSequence();
    }
    started = true;
});

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
    var wrongClick = new Audio("sounds/wrong.mp3");

    if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
        console.log("Success!");

        if (userClickedPattern.length === gamePattern.length) {
            setTimeout(nextSequence(), 1000);
            userClickedPattern = [];
        }

    } else {

        wrongClick.play();
        $("body").addClass("game-over");
        setTimeout(function () {
            $("body").removeClass("game-over");
          }, 200);
        $("#level-title").text("Game Over, Press Any Key to Restart")

        startOver();
        userClickedPattern = [];
    }
}

function startOver() {
    level = 0;
    gamePattern = [];
    started = false;
}
