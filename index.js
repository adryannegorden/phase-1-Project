//fetch("https://api.adviceslip.com/advice")
    //.then((resp) => resp.json())
    //.then((json) => console.log(json))

// "https://opentdb.com/api.php?amount=10&category=15&difficulty=medium&type=boolean" <- medium difficulty game trivia 10 questions
//fetch("https://opentdb.com/api.php?amount=10&category=15&difficulty=medium&type=boolean")
    //.then(res => res.json())
    //.then(data => console.log(data))

//fetch('https://opentdb.com/api.php?amount=1&category=15&difficulty=medium&type=boolean')
//.then(res => res.json())
//.then(data => console.log(data))

//api information

    //quiz question api
let quizAnswer;
let quizQuestion;
let decodedQuestion;
fetch("https://opentdb.com/api.php?amount=10&category=15&type=boolean&encode=base64")
    .then(res => res.json())
    .then(data => {
        quizQuestion = data;
        decodedQuestion = atob(quizQuestion.results[0].question)
        document.getElementById('question').textContent = decodedQuestion
        quizAnswer = quizQuestion.results[0].correct_answer
    });

    //shiba picture api
let shibePicture;
function getShibePicture() {
    fetch("https://shibe.online/api/shibes?count=10&urls=true&httpsUrls=true")
    .then(res => res.json())
    .then(data => {
        shibePicture = data;
        document.getElementById('shibeImage').src = shibePicture[0];
    });
}

    //insporational quote api
let quote;
function getQuote() {
    fetch("https://api.adviceslip.com/advice")
    .then(res => res.json())
    .then(data => {
        quote = data;
        document.getElementById('quote').textContent = quote.slip.id.advice
    });
}

//button information
let userAnswer = null
const trueButton = document.querySelector('.trueButton');
trueButton.addEventListener('click', function() {
    alert('The answer is true!');
    userAnswer = 'VHJ1ZQ=='
});

const falseButton = document.querySelector('.falseButton');
falseButton.addEventListener('click', function() {
    alert('The answer is false!');
    userAnswer = 'RmFsc2U='
});

//NOTE: RmFsc2U= MEANS FALSE ;;; VHJ1ZQ== MEANS TRUE ;;; IN BASE64 ENCRYPTION!!!
//answer response
function answerResponse(){
    if(userAnswer === quizAnswer) {
        getShibePicture
    } else {
        getQuote
    }
}