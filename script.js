let screen = document.getElementById("screen");

function addToScreen(value) {
  screen.value += value;
}

function clearScreen() {
  screen.value = "";
}

function squareNum() {
  if (screen.value !== "") {
    screen.value = Math.pow(Number(screen.value), 2);
  }
}

function calculate() {
  try {
    screen.value = eval(screen.value);
  } catch (err) {
    screen.value = "Error";
  }
}