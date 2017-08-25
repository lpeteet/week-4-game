/* Global Variables */
var wins = 0;
var losses = 0;
var scoreToMatch = 0;
var theirScore = 0;

//jQuery Click Events
$(document).ready(function(){
    $("img").click(function(){
    alert("It Works and ID: " + $(this).attr('id'));
   });
});

// $(document).ready(function(){
//     $("p").click(function(){
//         alert("The paragraph was clicked.");
//     });
//     $("#img1").click(function() {
//         alert( "Handler for .click() #img1 called." );
//     });
// });

