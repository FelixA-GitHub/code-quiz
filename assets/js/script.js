const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');

function buildQuiz(){}

function showResults(){}

// display quiz right away
buildQuiz();

// on submit, show results
submitButton.addEventListener('click', showResults);

const myQuestions = [
    {
        question: "String values must be enclosed within _______ when being assigned to variables.",
        answers: {
            1: "Commas",
            2: "Curly braces",
            3: "Quotes",
            4: "Brackets"
        },
        correctAnswer: "3"
    },
    {
        question: "Commonly used data types DO NOT include...",
        answers: {
            1: "Strings",
            2: "Booleans",
            3: "Alerts",
            4: "Numbers"
        },
        correctAnswer: "3"
    },
    {
        question: "The condition in an IF/ELSE statement is enclosed with _______.",
        answers: {
            1: "Quotes",
            2: "Curly braces",
            3: "Parenthesis",
            4: "Square Brackets"
        },
        correctAnswer: "3"
    },
    {
        question: "Arrays in JavaScript can be used to store _______.",
        answers: {
            1: "Numbers and strings",
            2: "Booleans",
            3: "Other arrays",
            4: "All of the above"
        },
        correctAnswer: "4"
    },
    {
        question: "Useful tool during developement and debugging for printing content to the debugger is _______.",
        answers: {
            1: "console.log",
            2: "JavaScript",
            3: "Terminal bash",
            4: "for loops"
        },
        correctAnswer: "1"
    }
  ];
  // function to build quiz
  function buildQuiz(){
    // variable to store the HTML output
    const output = [];
  
    // for each question
    myQuestions.forEach(
      (currentQuestion, questionNumber) => {
  
        // variable to store the list of possible answers
        const answers = [];
  
        // and for each available answer...
        for(letter in currentQuestion.answers){
  
          // ...add an HTML radio button
          answers.push(
            `<label>
              <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
            </label>`
          );
        }
  
        // add this question and its answers to the output
        output.push(
          `<div class="question"> ${currentQuestion.question} </div>
          <div class="answers"> ${answers.join('')} </div>`
        );
      }
    );
  
    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join('');
  }