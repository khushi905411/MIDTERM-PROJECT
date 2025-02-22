document.getElementById("submit").addEventListener("click", function() {
    let score = 0;  // Corrected curly brace issue

    const answers = document.querySelectorAll("input[type='radio']:checked");

    answers.forEach(answer => {
        if (answer.value === "correct") {
            score++;
        }
    });

    document.getElementById("result").innerText = `Your score: ${score}/3`;
});
