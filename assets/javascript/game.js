$(document).ready(function(){
    /* Global Variables */
    var wins = 0;
    var losses = 0;
    var scoreToMatch = 0;
    var theirScore = 0;
    var gameOver = true;

    //Custom Object to contain Crystals Information
    var Crystal = function(name){
        this.name = name;
    };

    $.extend(Crystal.prototype, {
        AssignNewValue: function() {
            //Random between 1 and 12
            this.points = Math.floor((Math.random() * 12) + 1);
        }
    });

    var crystal1 = new Crystal("red");
    var crystal2 = new Crystal("green");
    var crystal3 = new Crystal("orange");
    var crystal4 = new Crystal("purple");
    var crystalArray = [crystal1, crystal2, crystal3, crystal4];

    //Crystal Images Click Event
    $(".img").on("click", function() {
        if (gameOver) {
            alert("Please Start a New Game");
            return;
        }
        //alert("It Works and ID: " + $(this).attr('id'));
        var id = ($(this).attr('id'));
        //alert("id = '" + id + "'");
        var idNum = parseInt(id.substring(3, 4));
        //alert("idNum = '" + idNum + "'");
        theirScore += crystalArray[idNum -1].points;
        $("#theirScore").text(theirScore);
        //alert("theirScore = '" + theirScore + "'");
        //Did They Go Over Score to Match?
        if (theirScore > scoreToMatch) {
            losses++;
            $("#winLostMsg").text("You Lost!");
            $("#losses").text("Losses: " + losses);
            alert("Your Score Exceeds Score to Match");
            gameOver = true;
        } else if (theirScore == scoreToMatch) {
            wins++;
            $("#winLosMsg").text("You Won!");
            $("#wins").text("Wins: " + wins);
            alert("Your Score Matches!");
            gameOver = true;
        }
    });

    //Start Game Click Event
    $("#startBtn").on("click", function() {
        //alert("It Works and ID: " + $(this).attr('id'));
        StartGame();
        // TESTING!!!!!
/*         window.setTimeout(function() {
            $(".alert").fadeTo(500, 0).slideUp(500, function(){
                $(this).remove(); 
            });
        }, 4000);        
 */    });

    function StartGame() {

        // alert("crystal1.name: '" + crystal1.name + "'");
        crystal1.AssignNewValue();
        // alert("crystal1.points: '" + crystal1.points + "'");
        crystal2.AssignNewValue();
        crystal3.AssignNewValue();
        crystal4.AssignNewValue();

        //Random between 19 and 120
        scoreToMatch = Math.floor((Math.random() * 120) + 19);
        theirScore = 0;
        $("#theirScore").text(theirScore);
        $("#scoreToMatch").text(scoreToMatch);
        gameOver = false;
        $("#winLostMsg").text("Good Luck!");
        $("#losses").text("Losses: " + losses);
        $("#wins").text("Wins: " + wins);
    }

});

//Random between 19 and 120
//this.points = Math.floor((Math.random() * 120) + 19);

