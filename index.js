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
let quizQuestion;
fetch("https://opentdb.com/api.php?amount=1&category=15&difficulty=medium&type=boolean")
    .then(res => res.json())
    .then(data => {
        quizQuestion = data;
        document.getElementById('question').textContent = quizQuestion.results[0].question;
    });

let shibePicture;
function getShibePicture() {
    fetch("https://shibe.online/api/shibes?count=10&urls=true&httpsUrls=true")
    .then(res => res.json())
    .then(data => {
        shibePicture = data;
        document.getElementById('shibeImage').src = shibePicture[0];
    });
}

//button information
let userAnswer = null
const trueButton = document.querySelector('.trueButton');
trueButton.addEventListener('click', function() {
    alert('The answer is true!');
    userAnswer = true
    console.log(userAnswer)
});

const falseButton = document.querySelector('.falseButton');
falseButton.addEventListener('click', function() {
    alert('The answer is false!');
    userAnswer = false
    console.log(userAnswer)
});

