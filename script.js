const display = document.getElementById("display");
const startBtn = document.getElementById("start-btn");
let interval;
let isDrawing = false;

startBtn.addEventListener("click", startDraw);

function startDraw() {
  if (isDrawing) return;
  isDrawing = true;

  // 버튼 사라지고, 텍스트 커짐
  startBtn.classList.add("hidden");
  display.classList.add("big");

  const options = ["할래", "말래"];
  let count = 0;
  const maxCount = 30 + Math.floor(Math.random() * 20); // 반복 횟수

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
  display.classList.remove("animate"); // 이전 애니메이션 제거
  void display.offsetWidth; // 리렌더링 트리거
  display.classList.add("animate"); // 새 애니메이션 실행

  fireConfetti();

  // 2초 뒤 버튼 다시 보이고, 텍스트 크기 초기화
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
