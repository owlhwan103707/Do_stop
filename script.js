const display = document.getElementById("display");
const startBtn = document.getElementById("start-btn");
let interval;
let isDrawing = false;

function startDraw() {
  if (isDrawing) return;
  isDrawing = true;

  startBtn.classList.add("hidden");
  display.classList.add("big");

  let options = ["할래", "말래"];
  let count = 0;
  let maxCount = 30 + Math.floor(Math.random() * 20);

  interval = setInterval(() => {
    display.textContent = options[count % 2];
    count++;
    if (count > maxCount) {
      clearInterval(interval);
      const finalPick = options[Math.floor(Math.random() * 2)];
      showFinalResult(finalPick);
      isDrawing = false;
    }
  }, 100);
}

function showFinalResult(text) {
  display.textContent = text;
  display.classList.remove("animate");
  void display.offsetWidth;
  display.classList.add("animate");
  fireConfetti();

  setTimeout(() => {
    startBtn.classList.remove("hidden");
    display.classList.remove("big");
    display.classList.remove("animate");
  }, 2000);
}

function fireConfetti() {
  if (typeof confetti === "function") {
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 }
    });
  }
}
