// الألغاز (إيموجي + الحل)
const puzzles = [
    { emoji: "🍔🍟", answer: "برغر" },
    { emoji: "🔥🐍", answer: "ثعبان النار" },
    { emoji: "🚗💨", answer: "سيارة سريعة" },
    { emoji: "🌧️☔", answer: "مطر" },
    { emoji: "🐱🎤", answer: "قط يغني" },
    { emoji: "🌙⭐", answer: "ليل" },
    { emoji: "🏝️🌊", answer: "جزيرة" }
];

let level = 0;

function loadPuzzle() {
    document.getElementById("emojiBox").textContent = puzzles[level].emoji;
    document.getElementById("levelNumber").textContent = level + 1;
    document.getElementById("answerInput").value = "";
    document.getElementById("message").textContent = "";
}

function checkAnswer() {
    let userAnswer = document.getElementById("answerInput").value.trim();
    let correct = puzzles[level].answer;

    if (userAnswer === "") {
        document.getElementById("message").textContent = "❗ اكتب الإجابة أولاً";
        return;
    }

    if (userAnswer === correct) {
        document.getElementById("message").textContent = "✔️ أحسنت! إجابة صحيحة";
        level++;

        if (level < puzzles.length) {
            setTimeout(loadPuzzle, 1000);
        } else {
            document.getElementById("message").textContent = "🎉 مبروك! أنهيت جميع المراحل!";
        }

    } else {
        document.getElementById("message").textContent = "❌ إجابة خاطئة — حاول مرة أخرى";
    }
}

// تحميل أول لغز
loadPuzzle();
