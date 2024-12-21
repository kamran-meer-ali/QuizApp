
var easyQuestions = [
  { question: " What is the output of `console.log(typeof NaN)`?", options: ["number", "string", " boolean", "undefined"], correctAnswer: "number" },
  { question: "  Which of the following is a way to create an object in JavaScript?", options: ["{}", "Object.create();", "new Object();", "All of the above"], correctAnswer: "All of the above" },
  { question: " How do you check if an object is an array?", options: ["Array.isArray()", " typeof obj == 'array'", "obj instanceof Array", "All of the above"], correctAnswer: "Array.isArray()" },
  { question: " What will `[] == ![]` return?", options: ["true", "false", "undefined", " error"], correctAnswer: "true" },
  { question: " What is the value of `null == undefined`?", options: ["true", "false", " null", "undefined"], correctAnswer: "true" },
  { question: " Which of the following methods is used to add an element to the beginning of an array?", options: [" push()", "pop()", "shift()", "unshift()"], correctAnswer: "unshift()" },
  { question: " How do you create a new promise in JavaScript?", options: ["new Promise()", "new PromiseFunction()", "new PromiseObject()", "Promise.new()"], correctAnswer: "new Promise()" },
  { question: " What will `console.log(0.1 + 0.2 == 0.3)` output?", options: ["true", "false", "undefined", "error"], correctAnswer: "false" },
  { question: " Which of these is used to handle exceptions in JavaScript?", options: ["try/catch", "if/else", "finally", "all of the above"], correctAnswer: "try/catch" },
  { question: " What is the default value of `this` inside a method in JavaScript?", options: ["global object", "undefined", "method itself", "null"], correctAnswer: "global object" }
];

var mediumQuestions = [
  ...easyQuestions, // Include easy questions as part of medium
  { question: " What will `console.log([1] == [1])` output?", options: ["true", "false", "error", "undefined"], correctAnswer: "false" },
  { question: " Which of the following methods is used to remove the last element from an array?", options: ["pop()", "shift()", "push()", "unshift()"], correctAnswer: "pop()" },
  { question: " What does `JSON.stringify()` do?", options: ["Converts JavaScript objects to JSON strings", "Converts JSON strings to JavaScript objects", "Prints JSON objects", "None of the above"], correctAnswer: "Converts JavaScript objects to JSON strings" },
  { question: " Which of the following is NOT a falsy value in JavaScript?", options: ["false", "null", "undefined", "0", "1"], correctAnswer: "1" },
  { question: " What will `console.log(1 + '1')` output?", options: ["11", "2", "error", "undefined"], correctAnswer: "11" },
  { question: " What is the purpose of the `bind()` method in JavaScript?", options: ["To bind a function to an object", "To create a copy of a function", "To invoke a function immediately", "None of the above"], correctAnswer: "To bind a function to an object" },
  { question: " What does `typeof NaN` return?", options: ["number", "string", "object", "undefined"], correctAnswer: "number" },
  { question: " Which of these is used to convert a string to a number?", options: ["Number()", "parseInt()", "parseFloat()", "All of the above"], correctAnswer: "All of the above" },
  { question: " How do you declare a constant variable in JavaScript?", options: ["const", "let", "var", "constant"], correctAnswer: "const" },
  { question: " What does the `this` keyword refer to inside a method?", options: ["The object the method is called on", "The global object", "The method itself", "undefined"], correctAnswer: "The object the method is called on" }
];

var  hardQuestions = [
...mediumQuestions,

  { question: " What will `console.log([] + [])` output?", options: ["undefined", "null", "'' (empty string)", "NaN"], correctAnswer: "'' (empty string)" },
  { question: " What is the output of `console.log([] == ![]);`?", options: ["true", "false", "error", "undefined"], correctAnswer: "true" },
  { question: " What does the `apply()` method do in JavaScript?", options: ["Invokes a function with a given `this` value and an array of arguments", "Binds a function to an object", "Changes the `this` context of a function", "Creates a copy of a function"], correctAnswer: "Invokes a function with a given `this` value and an array of arguments" },
  { question: " What is the output of `console.log([] == false)`?", options: ["true", "false", "undefined", "error"], correctAnswer: "true" },
  { question: " Which of the following is the correct way to define a class in JavaScript?", options: ["function MyClass() {}", "class MyClass {}", "var MyClass = function() {}", "MyClass: function() {}"], correctAnswer: "class MyClass {}" },
  { question: " What will the following code output: `console.log([] == ![] == false)`?", options: ["true", "false", "error", "undefined"], correctAnswer: "true" },
  { question: " Which of the following is an example of a deep copy of an object?", options: ["Object.assign()", "JSON.parse(JSON.stringify())", "Spread operator", "None of the above"], correctAnswer: "JSON.parse(JSON.stringify())" },
  { question: " What is the output of `console.log('2' > 1)`?", options: ["true", "false", "error", "undefined"], correctAnswer: "true" },
  { question: " What does the `Symbol()` function do in JavaScript?", options: ["Creates a new primitive symbol", "Converts a string to a symbol", "Creates a unique object property key", "Both 'Creates a new primitive symbol' and 'Creates a unique object property key'"], correctAnswer: "Both 'Creates a new primitive symbol' and 'Creates a unique object property key'" },
  { question: " What is the result of `console.log(1 == true)`?", options: ["true", "false", "undefined", "error"], correctAnswer: "true" }
];


      var selectedQuestions = [];
      var currentQuestionIndex = 0;
      var userAnswers = [];
      var timerInterval;
      var timeRemaining = 0;
      var startTime = 0;

      function startQuiz() {
          var difficulty = document.getElementById("difficultySelect").value;

          // Select questions based on difficulty
          if (difficulty === "easy") {
              selectedQuestions = easyQuestions;
              timeRemaining = 15 * 60; // 15 minutes for Easy
          } else if (difficulty === "medium") {
              selectedQuestions = mediumQuestions;
              timeRemaining = 10 * 60; // 10 minutes for Medium
          } else if (difficulty === "hard") {
              selectedQuestions = hardQuestions;
              timeRemaining = 5 * 60; // 5 minutes for Hard
          }

          // Hide start button and show quiz container
          document.getElementById("startBtn").style.display = "none";
          document.getElementById("quiz-container").style.display = "block";
          document.getElementById("submitButton").style.display = "inline-block";
          document.getElementById("timer").style.display = "block"; // Show the timer
       

          // Initialize user answers
          for (var i = 0; i < selectedQuestions.length; i++) {
              userAnswers[i] = undefined;
          }

          // Capture the start time of the quiz
          startTime = new Date().getTime();
          var p11Elements = document.getElementsByClassName('p11');
       for (var i = 0; i < p11Elements.length; i++) {
           p11Elements[i].style.display = "none";
       }
       

          renderQuestion();
          startTimer();
      }


      function renderQuestion() {
          var question = selectedQuestions[currentQuestionIndex];
          var questionDiv = document.getElementById("quiz-container");

          questionDiv.innerHTML = ''; // Clear previous content

          questionDiv.innerHTML += "<p>" + question.question + "</p>";

          // Render options dynamically
          for (var i = 0; i < question.options.length; i++) {
              questionDiv.innerHTML += `
                  <input type="radio" class="radio-buttons" id="option_${currentQuestionIndex}_${i}" name="question_${currentQuestionIndex}" value="${question.options[i]}"
                  ${userAnswers[currentQuestionIndex] === question.options[i] ? 'checked' : ''} onclick="selectAnswer('${question.options[i]}')">
                  <label for="option_${currentQuestionIndex}_${i}">${question.options[i]}</label><br>
              `;
          }

          // Add "Go Back" and "Next" buttons manually with innerHTML
          var goBackButtonHTML = currentQuestionIndex > 0
              ? `<button class="go-back" onclick="goBack()">Previous</button>`
              : '';
          var nextButtonHTML = currentQuestionIndex < selectedQuestions.length - 1
              ? `<button class="next-question"onclick="nextQuestion()">Next Question</button>`
              : '';

          questionDiv.innerHTML += goBackButtonHTML + nextButtonHTML;
      }

      function selectAnswer(answer) {
          userAnswers[currentQuestionIndex] = answer;
      }

      function nextQuestion() {
          currentQuestionIndex++;
          renderQuestion();
      }

      function goBack() {
          currentQuestionIndex--;
          renderQuestion();
      }

function startTimer() {
  // Update the timer every second
  timerInterval = setInterval(function () {
      if (timeRemaining <= 0) {
          clearInterval(timerInterval); // Stop the timer when it reaches zero
          timeUp(); // Call timeUp function if time is over
      } else {
          timeRemaining--; // Decrease time remaining
          var minutes = Math.floor(timeRemaining / 60);  // Get minutes
          var seconds = timeRemaining % 60;  // Get remaining seconds

          // Display the time without formatting
          document.getElementById("timeRemaining").innerHTML = minutes + ":" + seconds;
      }
  }, 1000);
}

// New function to handle "Time's Up"
function timeUp() {
  // Hide the quiz content and show the "Time's Up" message
  document.getElementById("quiz-container").style.display = "none"; // Hide quiz
  document.getElementById("submitButton").style.display = "none"; // Hide submit button
  document.getElementById("timer").style.display = "none"; // Hide timer

  // Show "Time's Up" and "Restart Quiz" buttons
  var scoreContainer = document.getElementById("score-container");
  scoreContainer.style.display = "block"; // Show score container
document.getElementById("score").style.display = "none";
var p22Elements = document.getElementsByClassName('p22');
for (var i = 0; i < p22Elements.length; i++) {
  p22Elements[i].style.display = "block";
}
  document.getElementById("seeAnswersBtn").style.display = "none"; // Hide see answers button
  document.getElementById("restartBtn").style.display = "block"; // Show restart button
  document.getElementById("percentage").style.display = "none";
          document.getElementById("grade").style.display = "none";
          document.getElementById("timeTaken").style.display = "none";

}

function submitQuiz() {
          // Check if all questions are answered before proceeding
          var allAnswered = true;
          for (var i = 0; i < userAnswers.length; i++) {
              if (userAnswers[i] === undefined) {
                  allAnswered = false;
                  break;
              }
          }

          if (!allAnswered) {
              alert("Please answer all questions before submitting.");
              return;
          }

          // Stop the timer and hide it
          clearInterval(timerInterval);
          document.getElementById("timer").style.display = "none"; // Hide timer after submit

          var correctAnswers = 0;
          for (var i = 0; i < selectedQuestions.length; i++) {
              if (userAnswers[i] === selectedQuestions[i].correctAnswer) {
                  correctAnswers++;
              }
          }

          // Calculate percentage
          var percentage = (correctAnswers / selectedQuestions.length) * 100;

          // Assign grade based on percentage
          var grade = '';
          if (percentage >= 90) {
              grade = "A";
          } else if (percentage >= 80) {
              grade = "B";
          } else if (percentage >= 70) {
              grade = "C";
          } else if (percentage >= 60) {
              grade = "D";
          } else {
              grade = "F";
          }

          // Calculate the time taken to complete the quiz
          var endTime = new Date().getTime();
          var timeTakenInMilliseconds = endTime - startTime; // Time in milliseconds
          var timeTakenInSeconds = Math.floor(timeTakenInMilliseconds / 1000); // Convert to seconds
          var timeTakenMinutes = Math.floor(timeTakenInSeconds / 60); // Get the minutes
          var timeTakenSeconds = timeTakenInSeconds % 60; // Get the remaining seconds

          // Hide the quiz content and show only the results
          document.getElementById("quiz-container").style.display = "none"; // Hide quiz
          document.getElementById("submitButton").style.display = "none"; // Hide submit button

          var scoreContainer = document.getElementById("score-container");
          scoreContainer.style.display = "block"; // Show score container

          // Use innerHTML to set the values
          document.getElementById("score").innerHTML = "Your Score: " + correctAnswers + " / " + selectedQuestions.length;
          document.getElementById("percentage").innerHTML = "Your Percentage: " + Math.floor(percentage) + "%";
          document.getElementById("grade").innerHTML = "Grade: " + grade;
          document.getElementById("timeTaken").innerHTML = "Time Taken: " + timeTakenMinutes + " minutes " + timeTakenSeconds + " seconds";

          // Show "See Answers" and "Restart Quiz" buttons
          document.getElementById("seeAnswersBtn").style.display = "block";
          document.getElementById("restartBtn").style.display = "block";
          document.getElementById("score").style.display = "block";
          document.getElementById("percentage").style.display = "block";
          document.getElementById("grade").style.display = "block";
          document.getElementById("timeTaken").style.display = "block";
          document.getElementsByClassName("timesup").style.display = "none";
          var p11Elements = document.getElementsByClassName('p11');
          for (var i = 0; i < p11Elements.length; i++) {
              p11Elements[i].style.display = "none";
          }

      }

      function restartQuiz() {
          // Hide everything except start screen

          document.getElementById("score-container").style.display = "none";
          document.getElementById("seeAnswersBtn").style.display = "none";
          document.getElementById("restartBtn").style.display = "none";
          document.getElementById("startBtn").style.display = "block";
          var p11Elements = document.getElementsByClassName('p11');
          for (var i = 0; i < p11Elements.length; i++) {
              p11Elements[i].style.display = "block";
          }
            var p22Elements = document.getElementsByClassName('p22');
          for (var i = 0; i < p22Elements.length; i++) {
              p22Elements[i].style.display = "none";
          }
          
          // Reset all variables
          currentQuestionIndex = 0;
          userAnswers = [];
          timeRemaining = 0;
          selectedQuestions = [];
      }

function openAnswersModal() {
  var modal = document.getElementById("answersModal");
  var answersContent = document.getElementById("answersContent");
  answersContent.innerHTML = ''; // Clear previous content

  // Display user's answers for each question
  for (var i = 0; i < selectedQuestions.length; i++) {
      var question = selectedQuestions[i];
      var userAnswer = userAnswers[i];
      var isCorrect = userAnswer === question.correctAnswer ? 'Correct' : 'Incorrect';

      // Check if the answer is correct or incorrect and assign appropriate color classes
      var answerClass = (userAnswer === question.correctAnswer) ? 'correct' : 'incorrect';
      
      answersContent.innerHTML += `
          <p>Q${i + 1}: ${question.question}</p>
          <p class="${answerClass}">Your Answer: ${userAnswer}</p>
          <p class="correct">Correct Answer: ${question.correctAnswer}</p>
          <p>Status: ${isCorrect}</p>
          <hr>
      `;
  }

  modal.style.display = "block";
}

      function closeModal() {
          var modal = document.getElementById("answersModal");
          modal.style.display = "none";
      }