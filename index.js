//== API FETCH FUNCTIONS ==\\
    //quiz question api
    const startQuizButton = document.querySelector('.startQuiz');
    startQuizButton.addEventListener('click', function () {
        generateQuizQuestion()
            .then((quizQuestion) => {
                selection.style.display = 'none';
                question.style.display = 'contents';
                trueButton.style.display = 'contents';
                falseButton.style.display = 'contents';

                const questionElement = document.getElementById('question');
                questionElement.textContent = atob(quizQuestion[0].question);
            });
    });

    let quizAnswer;
    function generateQuizQuestion() {
        return new Promise((resolve) => {
            fetch("https://opentdb.com/api.php?amount=50&category=15&type=boolean&encode=base64")
                .then(res => res.json())
                .then(data => {
                    let quizQuestion = data.results;
    
                    if (selectedDifficulty === 'easy') {
                        quizQuestion = quizQuestion.filter(question => question.difficulty === "ZWFzeQ==");
                        quizAnswer = quizQuestion[0].correct_answer
                    } else if (selectedDifficulty === 'medium') {
                        quizQuestion = quizQuestion.filter(question => question.difficulty === "bWVkaXVt");
                        quizAnswer = quizQuestion[0].correct_answer
                    } else if (selectedDifficulty === 'hard') {
                        quizQuestion = quizQuestion.filter(question => question.difficulty === "aGFyZA==");
                        quizAnswer = quizQuestion[0].correct_answer
                    }
    
                    resolve(quizQuestion);
                })
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
        trueButton.style.display = 'none';
        falseButton.style.display = 'none';
    } else {
        correctAnswer.style.display = 'none'
        incorrectAnswer.style.display = 'block'
        trueButton.style.display = 'none';
        falseButton.style.display = 'none';
    }
});

const falseButton = document.querySelector('.falseButton');
falseButton.addEventListener('click', function() {
    userAnswer = 'RmFsc2U='
    if (userAnswer === quizAnswer) {
        correctAnswer.style.display = 'block'
        incorrectAnswer.style.display = 'none'
        trueButton.style.display = 'none';
        falseButton.style.display = 'none';
        trueButton
    } else {
        correctAnswer.style.display = 'none'
        incorrectAnswer.style.display = 'block'
        trueButton.style.display = 'none';
        falseButton.style.display = 'none';
    }
});


//KONAMI CODE :D
const konami = document.querySelector('.cheat');
const keyList = [];
const cheatElement = document.getElementById('cheat');

document.addEventListener('keydown', function(event) {
    const key = event.key || String.fromCharCode(event.keyCode);

    if (key === 'Enter') {

        let konamiSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

        if (keyList.length === konamiSequence.length && keyList.every((value, index) => value === konamiSequence[index])) {
            cheatElement.textContent = atob(quizAnswer);
            cheat.style.display = 'contents';
                                                                        } else {
                                                                            keyList.length = 0;
                                                                        } //im putting this here lol
        console.log('Key List:', keyList);
        return;
    }
    keyList.push(key);
});