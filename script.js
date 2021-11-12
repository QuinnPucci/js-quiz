var startButton = document.getElementById('start-btn')
var questionContainerEl = document.getElementById('question-container')
var questionEl = document.getElementById('question')
var answerButtonsEl = document.getElementById('answer-btns')

var currentQuestionIndex = questions

startButton.addEventListener('click', startGame)


// ---------------------FUNCTIONS------------------


// start game
function startGame() {
startButton.classList.add("hide")
currentQuestionIndex = 0
questionContainerEl.classList.remove('hide')
stageQuestion()

// something to start timer within this function

}
// start game end


// stage question
function stageQuestion() {
    showQuestion(currentQuestionIndex)
}
// stage question end

//  show current question
function showQuestion(question) {
 questionEl.innerText = question.question
 question.answers.answers.forEach(answer => {
   var button = document.createElement('button') 
   button.innertext = answer.text
   button.classList.add("btn")

    // if statment for correct answer goes here
    
 })

}

// show current question

// select answer
function selectAnswer() {

}
// select answer end


// ---------------------FUNCTIONS END------------------

// question array

var questions = [
    {
        question: "this is question 1",
        answers: [
            { text: 'possible answer a', correct: true},
            { text: 'possible answer b', correct: false},
            { text: 'possible answer c', correct: false},
            { text: 'possible answer d', correct: false}
        ]
    }
]