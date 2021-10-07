let chosenBalls = [];
let numbers = [];
let endNumber = 59;
let winningTotal = 0;

/**
 * Generate the drawn numbers
 */
function generate() {
    let highestNumber;
    let time = 150;

	for(let i = 0; i < 6; i++) {
		let add = true;
		let randomNumber = Math.floor(Math.random() * endNumber) + 1;
		for(let y = 0; y < endNumber; y++) {
			if(numbers[y] == randomNumber) {
				add = false;
			}
		}
		if(add) {
			numbers.push(randomNumber);
		} else {
			i--;
		}
	}
  
	for(let m = 0; m < numbers.length; m++) {
		for(let n = m + 1; n < numbers.length; n++) {
			if(numbers[n] < numbers[m]) {
				highestNumber = numbers[m];
				numbers[m] = numbers[n];
				numbers[n] = highestNumber;
			}
		}
	}
  
    document.getElementById("numbers0").innerHTML = numbers[0];
    document.getElementById("numbers1").innerHTML = numbers[1];
    document.getElementById("numbers2").innerHTML = numbers[2];
    document.getElementById("numbers3").innerHTML = numbers[3];
    document.getElementById("numbers4").innerHTML = numbers[4];
    document.getElementById("numbers5").innerHTML = numbers[5];

    setTimeout(() => { fadeIn(numbers0); }, time);
    setTimeout(() => { fadeIn(numbers1); }, time * 4);
    setTimeout(() => { fadeIn(numbers2); }, time * 8);
    setTimeout(() => { fadeIn(numbers3); }, time * 12);
    setTimeout(() => { fadeIn(numbers4); }, time * 16);
    setTimeout(() => { fadeIn(numbers5); }, time * 20);

    console.log('Numbers ' + numbers)

    checkResult(numbers);
}

/**
 * Check to see if we have a match
 * 
 * @param {numbers} The numbers generated 
 */
function checkResult(numbers) {
    if (numbers.includes(3) && chosenBalls.includes(3)) {
        winningTotal += 50;
    }
    if (numbers.includes(4) && chosenBalls.includes(4)) {
        winningTotal += 100;
    }
    if (numbers.includes(5) && chosenBalls.includes(5)) {
        winningTotal += 200;
    }
    if (numbers.includes(6) && chosenBalls.includes(6)) {
        winningTotal += 500;
    }

    highlightWins();

    setTimeout(() => {document.getElementById("winnings").innerHTML = winningTotal;}, 150 * 24);
   
    console.log('winnings: ' + winningTotal);
}

/**
 * Submit your chosen balls
 */
function submitBalls() {
    chosenBalls.push(parseInt(document.getElementById("submitChosenBalls1").value))
    chosenBalls.push(parseInt(document.getElementById("submitChosenBalls2").value))
    chosenBalls.push(parseInt(document.getElementById("submitChosenBalls3").value))
    chosenBalls.push(parseInt(document.getElementById("submitChosenBalls4").value))
    chosenBalls.push(parseInt(document.getElementById("submitChosenBalls5").value))
    chosenBalls.push(parseInt(document.getElementById("submitChosenBalls6").value))

    enableButton();

    console.log('Chosen balls: ' + chosenBalls)
}

/**
 * Do a lucky dip
 */
function luckyDip() {
    let c1 = Math.floor(Math.random() * endNumber) + 1;
    let c2 = Math.floor(Math.random() * endNumber) + 1;
    let c3 = Math.floor(Math.random() * endNumber) + 1;
    let c4 = Math.floor(Math.random() * endNumber) + 1;
    let c5 = Math.floor(Math.random() * endNumber) + 1;
    let c6  = Math.floor(Math.random() * endNumber) + 1;

    chosenBalls.push(c1)
    chosenBalls.push(c2)
    chosenBalls.push(c3)
    chosenBalls.push(c4)
    chosenBalls.push(c5)
    chosenBalls.push(c6)

    enableButton();

    document.getElementById("luckydip0").innerHTML = c1;
    document.getElementById("luckydip1").innerHTML = c2;
    document.getElementById("luckydip2").innerHTML = c3;
    document.getElementById("luckydip3").innerHTML = c4;
    document.getElementById("luckydip4").innerHTML = c5;
    document.getElementById("luckydip5").innerHTML = c6;

    fadeIn(luckydipText);
    fadeIn(luckydip0);
    fadeIn(luckydip1);
    fadeIn(luckydip2);
    fadeIn(luckydip3);
    fadeIn(luckydip4);
    fadeIn(luckydip5);

    console.log('lucky dip balls: ' + chosenBalls)
}

/**
 * Reset everything
 */
function reset() {
    chosenBalls = [];
    numbers = [];
    winningTotal = 0;
    document.getElementById("winnings").innerHTML = winningTotal;
    fadeOutAll();
    disableButton();
    document.getElementById("submitChosenBalls1").value = "";
    document.getElementById("submitChosenBalls2").value = "";
    document.getElementById("submitChosenBalls3").value = "";
    document.getElementById("submitChosenBalls4").value = "";
    document.getElementById("submitChosenBalls5").value = "";
    document.getElementById("submitChosenBalls6").value = "";
}


function enableButton() {
    var element = document.getElementById("submit");
    element.classList.remove("disabledButton");
    element.classList.add("enabledButton");
    
}

function disableButton() {
    var element = document.getElementById("submit");
    element.classList.remove("enabledButton");
    element.classList.add("disabledButton");
   
}

function fadeIn(element) {
    var op = 0.1;  // initial opacity
    var timer = setInterval(function () {
        if (op >= 1){
            clearInterval(timer);
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op += op * 0.1;
    }, 10);
}

function fadeOutAll() {
    document.getElementById("numbers0").style.opacity = 0;
    document.getElementById("numbers1").style.opacity = 0;
    document.getElementById("numbers2").style.opacity = 0;
    document.getElementById("numbers3").style.opacity = 0;
    document.getElementById("numbers4").style.opacity = 0;
    document.getElementById("numbers5").style.opacity = 0;

    document.getElementById("luckydipText").style.opacity = 0;

    document.getElementById("luckydip0").style.opacity = 0;
    document.getElementById("luckydip1").style.opacity = 0;
    document.getElementById("luckydip2").style.opacity = 0;
    document.getElementById("luckydip3").style.opacity = 0;
    document.getElementById("luckydip4").style.opacity = 0;
    document.getElementById("luckydip5").style.opacity = 0;
}

/**
 * Highlight any wins, which are 3,4,5,6
 */
function highlightWins() {
    let el;
    let prefix = 'numbers';

    for(var i = 0; el = document.getElementById(prefix + i); i++) {
        if (document.getElementById(prefix + i).innerHTML == 3 && chosenBalls.includes(3) || document.getElementById(prefix + i).innerHTML == 4 && chosenBalls.includes(4) || document.getElementById(prefix + i).innerHTML == 5 && chosenBalls.includes(5) || document.getElementById(prefix + i).innerHTML == 6 && chosenBalls.includes(6)) {
            document.getElementById(prefix + i).style.color = "green";
        }    
        else {
            document.getElementById(prefix + i).style.color = "red";
        }
    }
}