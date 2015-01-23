var slotArray = ["../images/number1.jpg","../images/number2.jpg","../images/number3.jpg"];
var winCount = 0;
var lossCount = 0;

$( document ).ready(function() {

	$('.wins').html('Wins: 0');
	$('.losses').html('Losses: 0');
	$('.ratio-box').html('Win Ratio: 0%');

	$('#play-button').click(function(event) {

			var randomNum = Math.floor(Math.random() * 3);
			var num1 = 0;
			var num2 = 0;
			var num3 = 0;

			$("#img1").attr("src",slotArray[randomNum]);
			num1 = randomNum +1;
			randomNum = Math.floor(Math.random() * 3);	
			$("#img2").attr("src",slotArray[randomNum]);
			num2 = randomNum +1;
			randomNum = Math.floor(Math.random() * 3);	
			$("#img3").attr("src",slotArray[randomNum]);
			num3 = randomNum +1;

			if (num1 === num2 && num1 === num3) {
				$('.dialouge-box').html('All '+num1+"'s, You win!");
				winCount++;
			}

			else if (num1 === 1 && num2 === 2 && num3 ===3) {
				$('.dialouge-box').html('You won with 1, 2, 3, in a row!');
				winCount++;
			}

			else if (num1 === 3 && num2 === 2 && num3 ===1) {
				$('.dialouge-box').html('You won with 3, 2, 1 in a row!');
				winCount++;
			}

			else {
		 		$('.dialouge-box').html('No dice, try again!');
		 		lossCount++;
			}

			$('.wins').html('Wins: '+winCount);
			$('.losses').html('Losses: '+lossCount);
			$('.ratio-box').html('Win Ratio: '+ Math.round((winCount/lossCount) * 100)+'%');
	}); 
});
