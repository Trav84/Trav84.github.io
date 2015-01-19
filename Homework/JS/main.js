$( document ).ready(function() {

var generatedNumber = Math.ceil(Math.random() * 100);
console.log(generatedNumber);

function generateNum() {
	var randomNum = Math.ceil(Math.random() * 100);
	return randomNum;
}

function numberGame(value, randomNum) {
	
	value = $('input').val();
	var win = false;
	var score = 0;

		if (isNaN(value)) {
			throw "You did not enter a number";
		}	

		if (value == generatedNumber) {
			$('.win-lose-box').html('YOU WIN! YAAAAY!');
			score++;
			$('#score-box').html(parseInt($('#score-box').html(), 10)+1)
		}

		else if (value > generatedNumber) {
			$('.win-lose-box').html('Too high, guess again'); 
			$('input').val('');
		}

		else {
			$('.win-lose-box').html('Too low, guess again');
			$('input').val('');
		}

	return score;
}

	$('.start-button').click(function(event) {

		var value = $('input').val();
		numberGame(value, generatedNumber);
		
	});

	$('.play-again').click(function(event) {

		$('input').val('');
		generatedNumber = generateNum();
		console.log(generatedNumber);

	});	
	
});