// "https://opentdb.com/api.php?amount=10&category=15&difficulty=medium&type=boolean" <- medium difficulty game trivia 10 questions
//fetch("https://opentdb.com/api.php?amount=10&category=15&difficulty=medium&type=boolean")
    //.then(res => res.json())
    //.then(data => console.log(data))

// "http://shibe.online/api/shibes?count=10&urls=false&httpsUrls=false" <- more questions u get right more shibas you get POG
//fetch("http://shibe.online/api/shibes?count=10&urls=false&httpsUrls=false")
    //.then(res => res.json())
    //then(data => console.log(data))

fetch("https://api.adviceslip.com/advice")
    .then((resp) => resp.json())
    .then((json) => console.log(json))
    