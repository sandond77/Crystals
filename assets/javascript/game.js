var randomNumber = Math.floor(Math.random()*(100+1)) + 19;
var wins = 0;
var losses = 0;
var gemValue1 = Math.floor(Math.random()*12)+1;
var gemValue2 = Math.floor(Math.random()*12)+1;
var gemValue3 = Math.floor(Math.random()*12)+1;
var gemValue4 = Math.floor(Math.random()*12)+1;
var score = 0;
var flag = false;

//this will prevent the gems from having the same values
if (gemValue1 === gemValue2 || gemValue1 === gemValue3 || gemValue1 === gemValue4 || gemValue2 === gemValue3 || gemValue2 === gemValue4 || gemValue3 === gemValue4){
	gemValue1 = Math.floor(Math.random()*12)+1;
	gemValue2 = Math.floor(Math.random()*12)+1;
	gemValue3 = Math.floor(Math.random()*12)+1;
	gemValue4 = Math.floor(Math.random()*12)+1;
}



//assigns each button its gem value
if ($("button").hasClass("gem1")===true){
	$(".gem1").attr("value",gemValue1);
} 

if ($("button").hasClass("gem2")===true){
	$(".gem2").attr("value",gemValue2);
} 

if ($("button").hasClass("gem3")===true){
	$(".gem3").attr("value",gemValue3);
} 

if ($("button").hasClass("gem4")===true){
	$(".gem4").attr("value",gemValue4);
}


//preloads the game when the page is loaded
$("#randomnumber").append("Target Score: " + randomNumber);
$("#yourscore").append("Your Total Score: " + score);
$("#wins").append("Wins: " + wins);
$("#losses").append("Losses: " + losses);

//Main function for detection crystal clicking and adding score
$("button").click(function(){
	if (flag === false){
		console.log(this.value);
		score = score + parseInt(this.value);
		console.log("Score: " + score);
		$("#yourscore").empty();
		$("#yourscore").append("Your Total Score: " + score);

		if (score === randomNumber){
			alert("You WIN! Hit the reset button to play again!");
			flag = true;
			wins = wins + 1;
			$("#wins").empty();
			$("#wins").append("Wins: " + wins);
		} else if (score > randomNumber){
			alert("You LOSE! Hit the reset button to play again!") ;
			flag = true;
			losses = losses + 1;
			$("#losses").empty();
			$("#losses").append("Losses: " + losses);
		}
	}
})

$(".reset").click(function(){
	//to check for cheaters resetting mid game
	if (score != 0 && flag === false ) {  
		losses = losses + 1;
		$("#losses").empty();
		$("#losses").append("Losses: " + losses);
	}

	randomNumber = Math.floor(Math.random()*(100+1)) + 19;
	$("#randomnumber").empty();
	$("#randomnumber").append("Target Score: " + randomNumber);
	gemValue1 = Math.floor(Math.random()*12)+1;
	gemValue2 = Math.floor(Math.random()*12)+1;
	gemValue3 = Math.floor(Math.random()*12)+1;
	gemValue4 = Math.floor(Math.random()*12)+1;
	score = 0;
	$("#yourscore").empty();
	$("#yourscore").append("Your Total Score: " + score);

})

