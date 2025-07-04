const questions = [
  "შენ ხარ აგენტი A",
  "შენ ხარ აგენტი B",
  "შენ ხარ საიდუმლო შპიონი"
];

let currentIndex = 0;
let showingQuestion = false;

const startBtn = document.getElementById('startBtn');
const questionBox = document.getElementById('questionBox');

startBtn.addEventListener('click', () => {
  startBtn.style.display = 'none';
  questionBox.style.display = 'block';
  showQuestion();
});

questionBox.addEventListener('click', () => {
  if (showingQuestion) {
    questionBox.textContent = "დაჭირე, რომ ნახო შემ
