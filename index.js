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
//  Delete this code once you are done testing

const win = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
let combination = ["", "", "", "", "", "", "", "", ""];
let x = [];
let o = [];
let count = 0;
/**
 *
 * THE MAIN FUNCTION
 * This function gets executed every time the user clicks the button
 * Add your code here, since this is going to be your main function
 * That interacts with the UI
 */
// please need a lot of help :)

function clickButton(index) {
  console.log(`Button number ${index} is clicked`);
  //fillButton(index, "X");
  //fillButton(index, "O");
  if (!o.includes(index) && !x.includes) {
    if (count % 2 == 1) {
      fillButton(index, "X");
      x.push(index);
      winningAlert("X");
      restartGame();
    } else {
      fillButton(index, "O");
      o.push(index);
      winningAlert("O");
      restartGame();
    }
  }
}
/**
 * (Optional) It's always a good idea to make a function for every single purpose.
 */
function checkWinner(currentMove) {
  return win.some((combination) => {
    return currentMove; // need help
  });
}
function restartGame() {
  for (let i = 1; i < 10; i++) {
    fillButton(i, "");
  }
  let x = [];
  let o = [];
  let count = 0;
}
