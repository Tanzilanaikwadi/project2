let number = 100;
let history = [number];
let currentIndex = 0;

const numberSpan = document.getElementById('number');
const progressBar = document.getElementById('progress-bar');
const subtractBtn = document.getElementById('subtract-btn');
const addBtn = document.getElementById('add-btn');
const undoBtn = document.getElementById('undo-btn');
const redoBtn = document.getElementById('redo-btn');

subtractBtn.addEventListener('click', subtractOne);
addBtn.addEventListener('click', addOne);
undoBtn.addEventListener('click', undo);
redoBtn.addEventListener('click', redo);

function subtractOne() {
  if (number > 0) {
    number--;
    history.splice(currentIndex + 1, history.length - currentIndex - 1);
    history.push(number);
    currentIndex++;
    updateUI();
  }
}

function addOne() {
  if (number < 150) {
    number++;
    history.splice(currentIndex + 1, history.length - currentIndex - 1);
    history.push(number);
    currentIndex++;
    updateUI();
  }
}

function undo() {
  if (currentIndex > 0) {
    currentIndex--;
    number = history[currentIndex];
    updateUI();
  }
}

function redo() {
  if (currentIndex < history.length - 1) {
    currentIndex++;
    number = history[currentIndex];
    updateUI();
  }
}

function updateUI() {
  numberSpan.textContent = number;
  progressBar.value = number;
}