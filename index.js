// ❗️ DON'T TOUCH THESE 2 FUNCTIONs
// Pre-made function that will fill the button with its number.
// First button top left is called 1, last button bottom right is 9
function fillButton(index, text) {
  // This function fills the button of the send index
  document.getElementById(index).innerHTML = text;
}
// pre-made a function. You can use this function to present an alert to say someone wins
function winningAlert(winner) {
  if (confirm(`Horraaay, ${winner} wins!`)) {
    // The code here will be exectued if you press on OK button that will pop on the window
  }
}

// SAMPLE CODE: This code fills the 1st and 9th button with X and O initially
// ❗️ Delete this code once you are done testing
// fillButton(1, "X");
// fillButton(9, "O");
// fillButton(2, "X");

/**
 *
 * THE MAIN FUNCTION
 * This function gets executed every time the user clicks the button
 * Add your code here, since this is going to be your main function
 * That interacts with the UI
 */

//first click == x
//next tap on any other button == o
//cant change the already clicked buttons
//winning: alert with the pre-made function
//tip: the winning conditions in booleans
let count = 1;
let winner = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7],
];
let arrX = []; // [1, 3, 6]
let arrO = [];

let resultX = false;
let resultO = false;

function clickButton(index) {
  console.log(`Button number ${index} is clicked`);

  if (arrX.includes(index) || arrO.includes(index)) {
  } else {
    if (count % 2 == 1) {
      fillButton(index, "X");
      arrX.push(index);
    } else {
      fillButton(index, "O");
      arrO.push(index);
    }
    count++;
  }

  win(arrX, arrO);
}

function win(arrX, arrO) {
  winner.forEach((w) => {
    let quit = true;

    arrX.forEach((x) => {
      if (!w.includes(x)) {
        quit = false;
      }
    });
    if (quit && arrX.length == 3) {
      resultX = true;
    }
  });

  winner.forEach((w) => {
    let quit = true;

    arrO.forEach((x) => {
      if (!w.includes(x)) {
        quit = false;
      }
    });

    if (quit && arrO.length == 3) {
      resultO = true;
    }
  });

  if (resultX) {
    winningAlert("X");
  } else if (resultO) {
    winningAlert("O");
  } else if (arrO.length + arrX.length == 9) {
    alert(`It's a tie`);
  }
}

/**
 * (Optional) It's always a good idea to make a function for every single purpose.
 */
// function checkWinner
// function restartGame
