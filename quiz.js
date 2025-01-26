function checkAnswer() {
    const correctAnswer = "4"; // Correct answer for the quiz
    const userAnswer = document.querySelector('input[name="quiz"]:checked')?.value; // Get selected value

    const feedback = document.getElementById("feedback");

    if (userAnswer) { // Check if the user selected an answer
        if (userAnswer === correctAnswer) {
            feedback.textContent = "Correct! Well done.";
        } else {
            feedback.textContent = "That's incorrect. Try again!";
        }
    } else {
        feedback.textContent = "Please select an answer before submitting.";
    }
}

// Add event listener to the "Submit Answer" button
document.getElementById("submit-answer").addEventListener("click", checkAnswer);
