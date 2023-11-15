//== API FETCH FUNCTIONS ==\\
    //quiz question api

const startQuizButton = document.querySelector('.startQuiz');
startQuizButton.addEventListener('click', function() {
    generateQuizQuestion();
});

function generateQuizQuestion() {
    fetch("https://opentdb.com/api.php?amount=50&category=15&type=boolean&encode=base64")
        .then(res => res.json())
        .then(data => {
            quizQuestion = data;
            if (selectedDifficulty === 'easy') {
                quizQuestion = quizQuestion.results.filter(question => question.difficulty === "ZWFzeQ==");
                console.log(quizQuestion);
            } else if (selectedDifficulty === 'medium') {
                quizQuestion = quizQuestion.results.filter(question => question.difficulty === "bWVkaXVt");
                console.log(quizQuestion);
            } else if (selectedDifficulty === 'hard') {
                quizQuestion = quizQuestion.results.filter(question => question.difficulty === "aGFyZA==");
                console.log(quizQuestion);
            }
        });
}


    //shiba picture api
let shibePicture;
function generateShibePicture() {
        fetch("https://shibe.online/api/shibes?count=10&urls=true&httpsUrls=true")
        .then(res => res.json())
        .then(data => {
            shibePicture = data;
            document.getElementById('shibeImage').src = shibePicture[0];
    });
};
generateShibePicture();

    //insporational quote api
let quote;
function generateInspoQuote() {
        fetch("https://api.adviceslip.com/advice")
        .then(res => res.json())
        .then(data => {
            quote = data;
            document.getElementById('quoteMessage').textContent = quote.slip.advice
    });
};
generateInspoQuote();

//== BUTTON INFORMATION ==\\
//Difficulty Selection Buttons
const difficultySelection = document.querySelector('.selectButton');
let selectedDifficulty = 'easy'
difficultySelection.addEventListener('change', function() {
    selectedDifficulty = difficultySelection.value;
});



//true false buttons
//NOTE: RmFsc2U= MEANS FALSE ;;; VHJ1ZQ== MEANS TRUE ;;; IN BASE64 ENCRYPTION!!!
let userAnswer = null
const trueButton = document.querySelector('.trueButton');
trueButton.addEventListener('click', function() {
    userAnswer = 'VHJ1ZQ=='
    if (userAnswer === quizAnswer) {
        correctAnswer.style.display = 'block'
        incorrectAnswer.style.display = 'none'
    } else {
        correctAnswer.style.display = 'none'
        incorrectAnswer.style.display = 'block'
    }
});

const falseButton = document.querySelector('.falseButton');
falseButton.addEventListener('click', function() {
    userAnswer = 'RmFsc2U='
    if (userAnswer === quizAnswer) {
        correctAnswer.style.display = 'block'
        incorrectAnswer.style.display = 'none'
    } else {
        correctAnswer.style.display = 'none'
        incorrectAnswer.style.display = 'block'
    }
});

