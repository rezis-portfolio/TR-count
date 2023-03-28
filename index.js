let count = 0;
let mainNum = document.getElementById("number");
let saveNum = document.getElementById("saved");

function increment() {
  count = count + 1;
  mainNum.textContent = count;
}

function decrement() {
  count = count - 1;
  mainNum.textContent = count;
}

function save() {
  saveNum.textContent += count + " - ";
  count = 0;
  mainNum.textContent = 0;
}
