var randomNumber = Math.floor(Math.random()*(100+1)) + 19;
var wins = 0;
var losses = 0;
var gemValue1 = Math.floor(Math.random()*12)+1;
var gemValue2 = Math.floor(Math.random()*12)+1;
var gemValue3 = Math.floor(Math.random()*12)+1;
var gemValue4 = Math.floor(Math.random()*12)+1;
var score = 0;
var flag = false;
var audioWin = new Audio("assets/javascript/win.wav")
var audioPing = new Audio("assets/javascript/ping.wav")
var audioLose = new Audio("assets/javascript/lose.wav")

//this will prevent the gems from having the same values
function repeat() {
	while (gemValue1 === gemValue2 || gemValue1 === gemValue3 || gemValue1 === gemValue4 || gemValue2 === gemValue3 || gemValue2 === gemValue4 || gemValue3 === gemValue4){
		gemValue1 = Math.floor(Math.random()*12)+1;
		gemValue2 = Math.floor(Math.random()*12)+1;
		gemValue3 = Math.floor(Math.random()*12)+1;
		gemValue4 = Math.floor(Math.random()*12)+1;
	}
}

//assigns each button its gem value
function assign (){
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
}


//preloads the game when the page is loaded
repeat();
assign();
$("#randomnumber").text("Target Score: " + randomNumber);
$("#yourscore").text("Your Score: " + score);
$("#wins").text("Wins: " + wins);
$("#losses").text("Losses: " + losses);

//Main function for detection crystal clicking and adding score
$(".gems").click(function(){
	if (flag === false){
		audioPing.play();
		score = score + parseInt(this.value);
		$("#yourscore").text("Your Score: " + score);

		if (score === randomNumber){
			audioWin.play();
			alert("You WIN! Hit the reset button to play again!");
			flag = true;
			wins = wins + 1;
			$("#wins").text("Wins: " + wins);
		} else if (score > randomNumber){
			audioLose.play();
			alert("You LOSE! Hit the reset button to play again!") ;
			flag = true;
			losses = losses + 1;
			$("#losses").text("Losses: " + losses);
		}
	} else {
		alert("Reset the game to play again")
	}
})

$(".reset").click(function(){
	//to check for cheaters resetting mid game
	if (score != 0 && flag === false ) {  
		losses = losses + 1;
		$("#losses").text("Losses: " + losses);
	}

	randomNumber = Math.floor(Math.random()*(100+1)) + 19;
	$("#randomnumber").text("Target Score: " + randomNumber);

	gemValue1 = Math.floor(Math.random()*12)+1;
	gemValue2 = Math.floor(Math.random()*12)+1;
	gemValue3 = Math.floor(Math.random()*12)+1;
	gemValue4 = Math.floor(Math.random()*12)+1;
	repeat();
	assign();
	score = 0;
	$("#yourscore").text("Your Score: " + score);
	flag = false;
})

