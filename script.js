// კითხვების განაწილება
const normalQuestion = "შენ ხარ აგენტი";
const spyQuestion = "შენ ხარ საიდუმლო შპიონი";

let totalPlayers = 4; // რამდენი მოთამაშეა
let questions = [];

// შემთხვევითი რიცხვი — ვინ იქნება შპიონი
const spyIndex = Math.floor(Math.random() * totalPlayers);

// ავავსოთ კითხვების მასივი
for (let i = 0; i < totalPlayers; i++) {
  questions.push(i === spyIndex ? spyQuestion : normalQuestion);
}

let currentIndex = 0;
let showing = false;

const startBtn = document.getElementById("startBtn");
const questionBox = document.getElementById("questionBox");

// თამაშის დაწყება
startBtn.addEventListener("click", () => {
  startBtn.style.display = "none";
  questionBox.style.display = "block";
  questionBox.textContent = "დაჭირე, რომ ნახო კითხვა";
});

// ეკრანზე დაჭერა — კითხვის ჩვენება ან დამალვა
questionBox.addEventListener("click", () => {
  if (currentIndex >= questions.length) {
    questionBox.textContent = "ყველამ ნახა კითხვა. ახლა დაიწყეთ ახსნა 🕵️";
    return;
  }

  if (!showing) {
    questionBox.textContent = questions[currentIndex];
    showing = true;
  } else {
    questionBox.textContent = "დაჭირე, რომ ნახო კითხვა";
    showing = false;
    currentIndex++;
  }
});
