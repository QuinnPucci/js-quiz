var startButton = document.getElementById('start-btn')
var questionContainerEl = document.getElementById('question-container')
var questionEl = document.getElementById('question')
var answerButtonsEl = document.getElementById('answer-btns')
var choiceOne = document.getElementById('choice1')
var choiceTwo = document.getElementById('choice2')
var choiceThree = document.getElementById('choice3')
var choiceFour = document.getElementById('choice4')
var timer = 75
var correct = document.getElementById("correct")
var wrong = document.getElementById("wrong")

// question array

var questions = [
    {
        question: "Which word define a variable?",
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

startButton.addEventListener('click', startGame)


// ---------------------FUNCTIONS------------------


// start game
function startGame() {
startButton.classList.add("hide")
questionContainerEl.classList.remove('hide')
document.getElementById("timer").innerText=timer
timer = 75
currentQuestionIndex = 0
setInterval(countDown, 1000)
showQuestion()
}
// start game end


//  show current question
function showQuestion() {
    console.log(questionEl)
    
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
    console.log(questions[currentQuestionIndex].correctAnswer)
    if (questions[currentQuestionIndex].correctAnswer === event.target.innerHTML) {
        console.log("correct")
        correct.classList.remove('hide')
        wrong.classList.add('hide')
    }
    else {
        timer=timer-8 
        document.getElementById("timer").innerText=timer
        console.log("incorrect")
        wrong.classList.remove('hide')
        correct.classList.add('hide')
    }
    console.log(event.target.innerHTML)
    currentQuestionIndex++
    if (currentQuestionIndex === questions.length) {
        console.log(questions.length)
        endGame()
    } 
    else {
    showQuestion()
    }
    
}
// next question end

// end game
function endGame() {

    initials = window.prompt("what are your intials")

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
// end game end

// display high score 
function displayHighScore () {
    var highScore = localStorage.getItem("highscore");
    var initials = localStorage.getItem("initials");
    if (initials === null || highScore === null) {
        window.alert("there is no highscore")
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
     var retry = confirm('Game over, press "OK" to try again and "CANCEL" give up')
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