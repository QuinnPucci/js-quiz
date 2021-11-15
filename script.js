var startButton = document.getElementById('start-btn')
var questionContainerEl = document.getElementById('question-container')
var questionEl = document.getElementById('question')
var answerButtonsEl = document.getElementById('answer-btns')
var choiceOne = document.getElementById('choice1')
var choiceTwo = document.getElementById('choice2')
var choiceThree = document.getElementById('choice3')
var choiceFour = document.getElementById('choice4')
var timer = 70
var correct = document.getElementById("correct")
var wrong = document.getElementById("wrong")

// question array

var questions = [
    {
        question: "Which word defines a variable?",
        answers: [
            { text: 'this'},
            { text: 'for'},
            { text: 'let'},
            { text: 'if'}
        ],
        correctAnswer: 'let'
    },
    {
        question: "Which symbol is used to start an array?",
        answers: [
            { text: "{"},
            { text: '('},
            { text: '['},
            { text: '<'}
        ],
        correctAnswer: '['
    },
    {
        question: "Which symbol is used to denote a false statement?",
        answers: [
            { text: '!'},
            { text: '?'},
            { text: ':'},
            { text: '/'}
        ],
        correctAnswer: "!"
    },
    {
        question: "What shorthand is used to add 1?",
        answers: [
            { text: '='},
            { text: '+'},
            { text: '++'},
            { text: '=='}
        ],
        correctAnswer: "++"
    }
]

var currentQuestionIndex = 0

startButton.addEventListener('click', startQuiz)


// ---------------------FUNCTIONS------------------


// start Quiz
function startQuiz() {
startButton.classList.add("hide")
questionContainerEl.classList.remove('hide')
document.getElementById("timer").innerText=timer
timer = 70
currentQuestionIndex = 0
setInterval(countDown, 1000)
showQuestion()
}
// start Quiz end


//  show current question
function showQuestion() {
    questionEl.innerText = questions[currentQuestionIndex].question

    choiceOne.innerText = questions[currentQuestionIndex].answers[0].text
    choiceTwo.innerText = questions[currentQuestionIndex].answers[1].text
    choiceThree.innerText = questions[currentQuestionIndex].answers[2].text
    choiceFour.innerText = questions[currentQuestionIndex].answers[3].text

    choiceOne.addEventListener("click", nextQuestion)
    choiceTwo.addEventListener("click", nextQuestion)
    choiceThree.addEventListener("click", nextQuestion)
    choiceFour.addEventListener("click", nextQuestion)  
}
// show current question end

// next question
function nextQuestion(event) {
    event.preventDefault()
    if (questions[currentQuestionIndex].correctAnswer === event.target.innerHTML) {
        correct.classList.remove('hide')
        wrong.classList.add('hide')
    }
    else {
        timer=timer-9
        document.getElementById("timer").innerText=timer
        wrong.classList.remove('hide')
        correct.classList.add('hide')
    }

    currentQuestionIndex++
    if (currentQuestionIndex === questions.length) {
        endQuiz()
    } 
    else {
    showQuestion()
    }
    
}
// next question end

// end Quiz
function endQuiz() {

    initials = window.prompt("enter your intials")
    if (initials === "" ) {
        initials = window.prompt("you didnt enter anything, enter your intials")
         if (initials === "" || initials === null) {
            window.location.reload
        }
    }
    else if (initials === null) {
        initials = window.prompt("you didnt enter anything, enter your intials")
        if (initials === "" || initials === null) {
            window.location.reload
        }
    }


    var score = timer
    window.alert("your score is " + score)

    var highScore = localStorage.getItem("highscore");
    if (highScore === null) {
    highScore = 0;
    }

     if (score > highScore) {
    localStorage.setItem("highscore", score);
    localStorage.setItem("initials", initials);
    }
  displayHighScore()
}
// end Quiz end

// display high score 
function displayHighScore () {
    var highScore = localStorage.getItem("highscore");
    var initials = localStorage.getItem("initials");
    if (initials === null || highScore === null) {
        window.alert("There is no highscore")
        window.location.reload()
    }

    else {
        window.alert(initials + " has the high score of " + highScore)
        window.location.reload()
    }
}
// display high score end

// countdown
function countDown() {
    timer--
    document.getElementById("timer").innerText=timer

    if (timer <= 0) {
     var retry = confirm('you ran out of time, press "OK" to try again and "CANCEL" to give up')
        if (retry) {
         timer = 75
         window.location.reload()
        }
        else {
            displayHighScore()
            timer = 75
            window.location.reload()
            
          }
    }
     
};
// countdown end

// ---------------------FUNCTIONS END------------------