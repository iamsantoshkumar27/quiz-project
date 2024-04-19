const quizQuestions = [
    {
      question: "NIT KURUKSHETRA is situated in which state ? ",
      choices: ["U.P.", "HARYANA", "BIHAR", "TELANGANA"],
      correctAnswer: "HARYANA"
    },
    {
      question: "What is latest NIRF ranking of NIT Kurukshetra ? ",
      choices: ["43", "80", "50", "58"],
      correctAnswer: "58"
    },
    {
      question: "NIT KURUKSHETRA is also abbreviated as : ",
      choices: ["NIT KKR", "NIT K", "NIT KU", "NIT KUK"],
      correctAnswer: "NIT KKR"
    },
    {
      question: "NIT KKR have : ",
      choices: ["OAT", "THOUGHT LAB", "LAKE", "All OF THE ABOVE"],
      correctAnswer: "All OF THE ABOVE"
    },
    {
      question: "How many B-tech branches offered by NIT KURUKSHETRA",
      choices: ["8", "10", "11", "9"],
      correctAnswer: "10"
    }
  ];
  
  let currentQuestion = 0;
  let score = 0;
  let timer;
  

  function displayQuestion() {
    resetTimer();
    const questionElement = document.getElementById("question");
    const choicesElement = document.getElementById("choices");
  
    questionElement.textContent = quizQuestions[currentQuestion].question;
  
    choicesElement.innerHTML = "";
  
    quizQuestions[currentQuestion].choices.forEach(choice => {
      const button = document.createElement("button");
      button.textContent = choice;
      button.addEventListener("click", () => {
        checkAnswer(choice, button);
      });
      choicesElement.appendChild(button);
    });

    startTimer();

    updateProgressBar();
  }
  
  function checkAnswer(answer, button) {
    clearInterval(timer);
    const correctAnswer = quizQuestions[currentQuestion].correctAnswer;
    if (answer === correctAnswer) {
      score++;
      button.classList.add('correct');
    } else {
      button.classList.add('incorrect');
    }
    displayResult(answer === correctAnswer);
  }
  
  function displayResult(isCorrect) {
    const resultElement = document.getElementById("result");
    resultElement.textContent = isCorrect ? "Correct!" : "Incorrect!";
    resultElement.style.color = isCorrect ? "green" : "red";
  
    setTimeout(() => {
      resultElement.textContent = "";
      nextQuestion();
    }, 1000);
  }
  
  function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < quizQuestions.length) {
      displayQuestion();
    } else {
      endQuiz();
    }
  }
  
  function endQuiz() {
    clearInterval(timer);
    const quizContainer = document.getElementById("quiz-container");
    quizContainer.innerHTML = `<h2>Quiz completed!</h2><p>Your score: ${score} out of ${quizQuestions.length}</p>`;
  }
  
  function startTimer() {
    let timeLeft = 10; 
    const timerElement = document.getElementById("timer");
  
    timer = setInterval(() => {
      timerElement.textContent = `Time left: ${timeLeft} seconds`;
      timeLeft--;
  
      if (timeLeft < 0) {
        clearInterval(timer);
        displayResult(false);
      }
    }, 1000);
  }
  
  function resetTimer() {
    clearInterval(timer);
    const timerElement = document.getElementById("timer");
    timerElement.textContent = "";
  }
  
  displayQuestion();
  