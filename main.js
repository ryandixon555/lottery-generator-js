let chosenBalls = [];
let numbers = [];
let endNumber = 59;
let winningTotal = 0;

function generate() {
    let highestNumber;

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
  
	document.getElementById("numbers").innerHTML = numbers.join(" - ");

    console.log('Numbers ' + numbers)

    checkResult(numbers);
}

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

    document.getElementById("winnings").innerHTML = winningTotal;
    console.log('winnings: ' + winningTotal);
}

function submitBalls() {
    reset();

    chosenBalls.push(parseInt(document.getElementById("submitChosenBalls1").value))
    chosenBalls.push(parseInt(document.getElementById("submitChosenBalls2").value))
    chosenBalls.push(parseInt(document.getElementById("submitChosenBalls3").value))
    chosenBalls.push(parseInt(document.getElementById("submitChosenBalls4").value))
    chosenBalls.push(parseInt(document.getElementById("submitChosenBalls5").value))
    chosenBalls.push(parseInt(document.getElementById("submitChosenBalls6").value))

    console.log('Chosen balls: ' + chosenBalls)
}

function luckyDip() {
    reset();

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

    console.log('lucky dip balls: ' + chosenBalls)
}

function reset() {
    chosenBalls = [];
    numbers = [];
    winningTotal = 0;
    document.getElementById("winnings").innerHTML = winningTotal;
}