const display = document.getElementById("display");
let interval;
let isDrawing = false;

function startDraw() {
  if (isDrawing) return;
  isDrawing = true;
  display.textContent = "";
  let options = ["할래", "말래"];
  let count = 0;
  let maxCount = 30 + Math.floor(Math.random() * 20); // 반복 횟수 랜덤

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
  void display.offsetWidth; // 트리거용 리렌더링
  display.classList.add("animate");
  fireConfetti();
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
