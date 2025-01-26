function checkAnswer() {
    // The correct answer
    const correctAnswer = "4";

    // Get the user's selected answer
    const userAnswer = document.querySelector('input[name="quiz"]:checked');

    // Feedback element
    const feedback = document.getElementById("feedback");

    // Check if an answer was selected
    if (!userAnswer) {
        feedback.textContent = "Please select an answer before submitting.";
        feedback.style.color = "orange";
        return;
    }

    // Compare the user's answer with the correct one
    if (userAnswer.value === correctAnswer) {
        feedback.textContent = "Correct! Well done.";
        feedback.style.color = "green";
    } else {
        feedback.textContent = "That's incorrect. Try again!";
        feedback.style.color = "red";
    }
}

// Add event listener to the Submit Answer button
const submitButton = document.getElementById("submit-answer");
submitButton.addEventListener("click", checkAnswer);

