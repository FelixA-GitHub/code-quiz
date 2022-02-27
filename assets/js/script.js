

// variables
const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');

// timer

function getTimeRemaining(endtime) {
    const total = Date.parse(endtime) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
  
    
    return {
      total,
      seconds
    };
  }
  
  function initializeClock(id, endtime) {
    const clock = document.getElementById(id);
    const secondsSpan = clock.querySelector('.seconds');
  
    function updateClock() {
      const t = getTimeRemaining(endtime);
      secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
  
      if (t.total <= 0) {
        clearInterval(timeinterval);
      }
    }
  
    updateClock();
    const timeinterval = setInterval(updateClock, 1000);
  }
  
  const deadline = new Date(Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000);
  initializeClock('countdown', deadline);


// function to build quiz
function buildQuiz(){
    // variable to store the HTML output
    const output = [];
    
    
    // for each question
    myQuestions.forEach((currentQuestion, questionNumber) => {
    
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
                `<div class="slide">
                    <div class="question"> ${currentQuestion.question} </div>
                    <div class="answers"> ${answers.join('')}</div>
                </div>`
            );
        }
    );

    
    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join('');
};
    
// shows quiz answers
function showResults(){

// gather answer containers from our quiz
const answerContainers = quizContainer.querySelectorAll('.answers');

// keep track of user's answers
let numCorrect = 0;

// for each question...
myQuestions.forEach( (currentQuestion, questionNumber) => {

    // find selected answer
    const answerContainer = answerContainers[questionNumber];
    const selector = `input[name=question${questionNumber}]:checked`;
    const userAnswer = (answerContainer.querySelector(selector) || {}).value;

    // if answer is correct
    if(userAnswer === currentQuestion.correctAnswer){
    // add to the number of correct answers
    numCorrect++;

    // color the answers green
    answerContainers[questionNumber].style.color = 'lightgreen';
    
    // show next slide
    
    }
    // if answer is wrong or blank
    else{
    // color the answers red
    answerContainers[questionNumber].style.color = 'red';
    }
});

// show number of correct answers out of total
resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
}

// function to show slide with quiz question
function showSlide(n) {
    slides[currentSlide].classList.remove('active-slide');
    slides[n].classList.add('active-slide');
    currentSlide = n;
    if(currentSlide === 0){
        previousButton.style.display = 'none';
    }
    else{
        previousButton.style.display = 'inline-block';
    }
    if(currentSlide === slides.length-1){
        nextButton.style.display = 'none';
        submitButton.style.display = 'inline-block';
    }
    else{
        nextButton.style.display = 'inline-block';
        submitButton.style.display = 'none';
    }
}

// slides to next slide when click next question button
function showNextSlide() {
    showSlide(currentSlide + 1);
}

// slides to previous slide when click next question button
function showPreviousSlide() {
    showSlide(currentSlide - 1);
}

// quiz questions
const myQuestions = [

    {
        question: "String values must be enclosed within _______ when being assigned to variables.",
        answers: {
            A: "Commas",
            B: "Curly braces",
            C: "Quotes",
            D: "Brackets"
        },
        correctAnswer: "C"
    },
    {
        question: "Commonly used data types DO NOT include...",
        answers: {
            A: "Strings",
            B: "Booleans",
            C: "Alerts",
            D: "Numbers"
        },
        correctAnswer: "C"
    },
    {
        question: "The condition in an IF/ELSE statement is enclosed with _______.",
        answers: {
            A: "Quotes",
            B: "Curly braces",
            C: "Parenthesis",
            D: "Square Brackets"
        },
        correctAnswer: "C"
    },
    {
        question: "Arrays in JavaScript can be used to store _______.",
        answers: {
            A: "Numbers and strings",
            B: "Booleans",
            C: "Other arrays",
            D: "All of the above"
        },
        correctAnswer: "D"
    },
    {
        question: "Useful tool during developement and debugging for printing content to the debugger is _______.",
        answers: {
            A: "console.log",
            B: "JavaScript",
            C: "Terminal bash",
            D: "for loops"
        },
        correctAnswer: "A"
    }
    ];


// display quiz right away
buildQuiz();

// pagination of slides/quiz questions
const previousButton = document.getElementById("previous");
const nextButton = document.getElementById("next");
const slides = document.querySelectorAll(".slide");
let currentSlide = 0;

showSlide(currentSlide);

// event listeners
submitButton.addEventListener("click", showResults);
previousButton.addEventListener("click", showPreviousSlide);
nextButton.addEventListener("click", showNextSlide);

// const questions = [
//     ["Useful tool during developement and debugging for printing content to the debugger is _______.", "console.log"],
//     ["Arrays in JavaScript can be used to store _______.","All of the above"]
// ];

// var questionNum = 0;
// var score = 0;

// function clickButton() {
//     questions.shift();
//     questionNum++;
//     setup();
//     console.log("text");
// }

// function setup() {
    
//     if (questions.length != 0) {
//         document.getElementById("questionNum").innerHTML = "Question " + questionNum;
//         document.getElementById("question").innerHTML = questions[0][0]; 
//     }
//     else {
//         document.getElementById("questionNum").innerHTML = "You're Done!";
//         document.getElementById("question").innerHTML = "Your score is: " + score;
//         document.getElementById("text-field").remove();
//         document.getElementById("button").remove();
//     }
// }

// function check() {
//     if (document.getElementById("text-field").value == question[0][1]){
//         console.log("current");
//         score++;
//         document.getElementById("text-field").value = "";
//     }
// }

