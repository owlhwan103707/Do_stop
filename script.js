const display = document.getElementById("display");
const startBtn = document.getElementById("start-btn");
let interval;
let isDrawing = false;

startBtn.addEventListener("click", startDraw);

function startDraw() {
  if (isDrawing) return;
  isDrawing = true;

  startBtn.classList.add("hidden");
  display.classList.add("big");

  const options = ["할래", "말래"];
  let count = 0;
  const maxCount = 30 + Math.floor(Math.random() * 20);
  
  interval = setInterval(() => {
    display.textContent = options[count % 2];
    count++;
    if (count > maxCount) {
      clearInterval(interval);
      const final = options[Math.floor(Math.random() * 2)];
      showResult(final);
    }
  }, 100);
}

function showResult(result) {
  display.textContent = result;
  display.classList.remove("animate");
  void display.offsetWidth;
  display.classList.add("animate"); 

  fireConfetti();


  setTimeout(() => {
    startBtn.classList.remove("hidden");
    display.classList.remove("big");
    display.classList.remove("animate");
    display.textContent = "할래? 말래!";
    isDrawing = false;
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
