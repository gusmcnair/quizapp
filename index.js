//Store questions, answers and correct answers in order they will be displayed
const STORE = [
    {
        question: "What did Lyndon B. Johnson call his trademark set of domestic programs?",
        answers: ["The New New Deal", "The Great Society", "Big Lyndy Presents: Jobs-A-Plenty", "A Chimp In Every Home, And That Chimp's Name Is Jeffrey"],
        correct: "The Great Society",
    }, {
        question: "What state did Lyndon B. Johnson hail from?",
        answers: ["Denial", "Oklahoma", "Texas", "The deep state"],
        correct: "Texas",
    }, {
        question: "Which president did Lyndon B. Johnson serve under as vice president?",
        answers: ["John F. Kennedy", "Dwight Eisenhower", "Selina Meyer", "President Turtles, The President Who Was Just A Stack Of Turtles Masquerading As A Person"],
        correct: "John F. Kennedy",
    }, {
        question: "Who was Johnson's right-wing opponent in the 1964 presidential election?",
        answers: ["Richard Nixon", "Barry Goldwater", "Forrest Gump", "Gordy, The Talking Confederate Flag Bumper Sticker"],
        correct: "Barry Goldwater",
    }, {
        question: "What was the name of the controversial commercial Johnson's campaign ran against  Barry Goldwater in the 1964 election?",
        answers: ["'Lily'", "'Daisy'", "'Pansy'", "'Barry Goldwater Is A Dingus'"],
        correct: "'Daisy'",
    }, {
        question: "Which of these actors has NOT portrayed Lyndon B. Johnson in a feature film?",
        answers: ["Bryan Cranston", "Tom Wilkinson", "Zach Braff", "Liev Schrieber"],
        correct: "Zach Braff",
    }, {
        question: "What was the name for Lyndon B. Johnson's signature persuasion method?",
        answers: ["The Polite Conversation", "The Flying Elbow Drop", "The Johnson Treatment", "The Vietnam War"],
        correct: "The Johnson Treatment",
    }, {
        question: "What type of health problems did Johnson experience throughout his life?",
        answers: ["Heart problems", "Lung problems", "Butt problems", "Math problems"],
        correct: "Heart problems",
    }, {
        question: "What sort of unusual vehicle did Johnson own?",
        answers: ["An aquatic car", "A flying van", "A walking boat", "A Zeppelin"],
        correct: "An aquatic car",
    }, {
        question: "What was Johnson's dog named?",
        answers: ["Lazy Bulldog Johnson", "Little Beagle Johnson", "Loathsome Bloodhound Johnson", "Lecherous Borzoi Johnson"],
        correct: "Little Beagle Johnson",
    }
]

//Set two counters: one for the question number, one for the user's current score.
let questionNumber = 0;
let score = 0;

function handleClicks() {
    //On clicking the start button, begin the quiz and run the "loadNewQuestion" function
    $("#start-button").on("click", event => {
        event.preventDefault();
        $(".start-screen").hide();
        $(".questions-screen").fadeIn(1000);
        loadNewQuestion();
    })
    //On clicking the submit button, run the "checkCorrect" function
    $("#submit1").on("click", event => {
        event.preventDefault();
        checkCorrect();
    });
    //On clicking the next button, run the "loadNewQuestion" function
    $("#next1").on("click", event => {
        event.preventDefault();
        loadNewQuestion();
    });
    //On clicking the retake button, run the "loadNewQuestion" button and begin the quiz.
    $("#retake").on("click", event => {
        event.preventDefault();
        loadNewQuestion();
        $(".end-screen").hide();
        $(".question-score").text(score);
        $(".questions-screen").fadeIn(1000);
    });
};

//If the quiz is over, load the end screen, otherwise load the next question, its answers and the submit button.
//Also, increase the questionNumber count by one, when this is done.
function loadNewQuestion() {
    if (questionNumber === STORE.length) {
        loadEndScreen();
        questionNumber = 0
    }
    else {
        $("input[name='options']:checked").prop("checked", false);
        $("input#option1").prop("checked", true);
        $(".question-number").text(questionNumber + 1);
        $(".questions-screen").hide();
        $(".questions-screen").fadeIn(1000);
        $("legend").text(STORE[questionNumber].question);
        $("label[for='option1']").text(STORE[questionNumber].answers[0]);
        $("label[for='option2']").text(STORE[questionNumber].answers[1]);
        $("label[for='option3']").text(STORE[questionNumber].answers[2]);
        $("label[for='option4']").text(STORE[questionNumber].answers[3]);
        $(".submit-button").show();
        $(".next-button").hide();
        $(".results").text("");
        $("#option1").focus();
        questionNumber++;
    }
}

//When the quiz is over, hide the questions screen and load the end screen, with results specific to the user's score.
function loadEndScreen() {
    console.log(score);
    $(".questions-screen").hide();
    $(".end-screen").fadeIn(1000);
    $("legend").text("");
    $(".resultsText").text("");
    $("h3").text("");
    if (score === 10) {
        $("legend").append("Congratulations, you are Robert Caro!");
        $(".resultsText").append("Your level of LBJ knowledge indicates that you are Robert Caro, the erstwhile biographer who has spent the last forty years studying and chronicling the former president's life. Stop showing off and get back to writing!");
        $(".end-graphic").attr("src", "assets/caro.jpg");
        $(".end-graphic").attr("alt", "Robert Caro");
        $("h3").append("Your score: " + score + " out of 10");
    }
    else if (score >= 6) {
        $("legend").append("You know as much about Lyndon B. Johnson as his wife did.");
        $(".resultsText").append("Lady Bird Johnson knew some things about her husband, like that he liked green bean casseroles and big fat cigars, but he didn't share his political life or his numerous sordid affairs with her. In other news, congratulations! You are now the First Lady.");
        $(".end-graphic").attr("src", "assets/ladybird.jpg")
        $(".end-graphic").attr("alt", "Lady Bird Johnson");
        $("h3").append("Your score: " + score + " out of 10");
    }
    else if (score >= 1) {
        $("legend").append("You know as little about LBJ as John F. Kennedy did!");
        $(".resultsText").append("Much like JFK, who had little interest in his vice president once elected, your level of LBJ knowledge is pretty middling. This is probably okay, unless you actually <span style='font-style: italic'>are</span> JFK, in which case: Come on, get to know the poor guy! He's a heartbeat away from the presidency, and he could probably help you pass civil rights legislation! Make a new friend, life's short!");
        $(".end-graphic").attr("src", "assets/lbjjfk.jpg");
        $(".end-graphic").attr("alt", "John F. Kennedy");
        $("h3").append("Your score: " + score + " out of 10");

    }
    else {
        $("legend").append("You know as much about LBJ as my cousin Mike!");
        $(".resultsText").append("My cousin Mike doesn't know anything about LBJ because he skipped history class every day to play horseshoes with his buddy Jeff. I hope your career as a semiprofessional horseshoes player works out, because no one's going to hire you as an LBJ expert!");
        $(".end-graphic").attr("src", "assets/mycousin.png")
        $(".end-graphic").attr("alt", "My cousin Mike")
        $("h3").append("Your score: " + score + " out of 10");
    }
    keepScore();
}

//If the user selected the correct answer, tell them this and run the "keepScore" function.
//Otherwise, tell them they were wrong. Either way, load the "next" button.
function checkCorrect() {
    let checkedAnswer = $("input[name='options']:checked").parent().find("label").text();
    let correctAnswer = (STORE[questionNumber - 1].correct);
    if (checkedAnswer === correctAnswer) {
        $(".results").append("<span class='right-answer'>You're right! Lyndon B. Johnson would be proud, if he wasn't super dead.</span>");
        keepScore();
        $(".question-score").text(score)
    }
    else {
        $(".results").append("<span class='wrong-answer'>You're even wronger than Robert Kennedy when he called LBJ a \"useless toadstool!\" The correct answer is \"" + correctAnswer + "!\"</span>")
    }
    $(".submit-button").hide();
    $(".next-button").show();
    $("button#next1").focus();
}

//If it's the end of the quiz, reset the score to 0. Otherwise, increase their score by one.
function keepScore() {
    if ($(".end-screen").is(":visible")) {
        score = 0;
    } else {
        score++;
    }
}


$(handleClicks);
