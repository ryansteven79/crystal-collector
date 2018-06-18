//declare variables: crystalOneValue, crystalTwoValue, crystalThreeValue, crystalFourValue, randomGoal
// crystals: 1-12
//randomNumber: 19-120
// There will be four crystals displayed as buttons on the page.
// The player will be shown a random number at the start of the game.
$(document).ready(function () {
    var randomNumber;
    var myTotalScore = 0;
    var crystalOneValue;
    var crystalTwoValue;
    var crystalThreeValue;
    var crystalFourValue;
    var crystalRandom;
    var win = 0;
    var loss = 0;

    function startGame() {
        crystalOneValue = Math.floor(Math.random() * 12) + 1;
        crystalTwoValue = Math.floor(Math.random() * 12) + 1;
        crystalThreeValue = Math.floor(Math.random() * 12) + 1;
        crystalFourValue = Math.floor(Math.random() * 12) + 1;
        randomNumber = Math.floor(Math.random() * 120) + 19;
        $("#random-number").html(randomNumber);
    }

    startGame();

    function resetGame() {
        startGame();
        myTotalScore = 0;
        $("#myTotalScore").html(myTotalScore);
    };


    // When the player clicks on a crystal, it will add a specific amount of points to the player's total score. 
    $("#crystal-01").click(function () {
        console.log("crystal-1 value: " + crystalOneValue);
        myTotalScore += crystalOneValue;
        $("#myTotalScore").html(myTotalScore);
        gameChecker();
    })
    $("#crystal-02").click(function () {
        console.log("crystal-2 value: " + crystalTwoValue);
        myTotalScore += crystalTwoValue;
        $("#myTotalScore").html(myTotalScore);
        gameChecker();
    })
    $("#crystal-03").click(function () {
        console.log("crystal-2 value: " + crystalThreeValue);
        myTotalScore += crystalThreeValue;
        $("#myTotalScore").html(myTotalScore);
        gameChecker();
    })
    $("#crystal-04").click(function () {
        console.log("crystal-2 value: " + crystalFourValue);
        myTotalScore += crystalFourValue;
        $("#myTotalScore").html(myTotalScore);
        gameChecker();
    })

    // Your game will hide this amount until the player clicks a crystal.

    // When they do click one, update the player's score counter.

    // The player wins if their total score matches the random number from the beginning of the game.

    function gameChecker() {
        if (randomNumber === myTotalScore) {
            win++;
            $("#Wins").html(win);
            console.log("you won");
            resetGame();
        } else if (myTotalScore > randomNumber) {
            loss++;
            $("#Losses").html(loss);
            console.log("you lost");
            resetGame();
        } else {
            console.log("--------------")
            console.log("keep playing");
        }
    }
    // The player loses if their score goes above the random number.

    // The game restarts whenever the player wins or loses.

    // When the game begins again, the player should see a new random number. Also, all the crystals will have four new hidden values. Of course, the user's score (and score counter) will reset to zero.

    // The app should show the number of games the player wins and loses. To that end, do not refresh the page as a means to restart the game.

    // Option 1 Game design notes

    // The random number shown at the start of the game should be between 19 - 120.

    // Each crystal should have a random hidden value between 1 - 12.
    $(document).ready(function () {
        $("#css-Cerulean").click(function () {
            $("link[rel=stylesheet]").attr({
                href: "https://cdnjs.cloudflare.com/ajax/libs/bootswatch/4.1.1/cerulean/bootstrap.min.css"
            });
        });

        $("#css-Cosmo").click(function () {
            $("link[rel=stylesheet]").attr({
                href: "https://cdnjs.cloudflare.com/ajax/libs/bootswatch/4.1.1/cosmo/bootstrap.css"
            });
        });

        $("#css-Darkly").click(function () {
            $("link[rel=stylesheet]").attr({
                href: "https://cdnjs.cloudflare.com/ajax/libs/bootswatch/4.1.1/darkly/bootstrap.min.css"
            });
        });

        $("#css-Flatly").click(function () {
            $("link[rel=stylesheet]").attr({
                href: "https://cdnjs.cloudflare.com/ajax/libs/bootswatch/4.1.1/flatly/bootstrap.min.css"
            });
        });

        $("#css-Journal").click(function () {
            $("link[rel=stylesheet]").attr({
                href: "https://cdnjs.cloudflare.com/ajax/libs/bootswatch/4.1.1/journal/bootstrap.min.css"
            });
        });
    });

});