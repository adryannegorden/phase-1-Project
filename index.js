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
const shibePicture = fetch("https://shibe.online/api/shibes?count=10&urls=true&httpsUrls=true")
    .then(res => res.json())
    .then(data => console.log(data))


//button information

const trueButton = document.querySelector('.trueButton');
trueButton.addEventListener('click', function() {
    alert('The answer is true!');
});

const falseButton = document.querySelector('.falseButton');
falseButton.addEventListener('click', function() {
    alert('The answer is false!');
});