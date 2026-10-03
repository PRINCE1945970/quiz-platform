let username = "";

let questionNumber = 0;

let score = 0;

let selectedAnswer = "";


const questions = [

    {
        question: "Which keyword is used to create a class in Java?",
        options: ["class", "new", "create", "object"],
        answer: "class"
    },

    {
        question: "Which method starts a Java program?",
        options: ["start()", "main()", "run()", "begin()"],
        answer: "main()"
    },

    {
        question: "Which symbol ends a Java statement?",
        options: [".", ",", ";", ":"],
        answer: ";"
    },

    {
        question: "Which keyword is used for inheritance?",
        options: ["inherit", "extends", "parent", "super"],
        answer: "extends"
    },

    {
        question: "Which data type stores true or false?",
        options: ["int", "char", "boolean", "double"],
        answer: "boolean"
    }
]


function startQuiz() {

    username = document.getElementById("username").value;

    if (username === "") {
        alert("Please enter your username.");
        return;
    }

    document.getElementById("studentPage").classList.add("hidden");

    document.getElementById("quizPage").classList.remove("hidden");

    showQuestion();
}


function showQuestion() {

    let q = questions[questionNumber];

    document.getElementById("questionNumber").innerText =
        "Question " + (questionNumber + 1) + " of 5";

    document.getElementById("question").innerText =
        q.question;


    let answers = "";

    q.options.forEach(function(option) {

        answers += `
            <div
                class="answer"
                onclick="selectAnswer(this, '${option}')">

                ${option}

            </div>
        `;

    });

    document.getElementById("answers").innerHTML = answers;


    if (questionNumber === 4) {

        document.getElementById("nextButton").innerText =
            "Submit Quiz";

    } else {

        document.getElementById("nextButton").innerText =
            "Next";

    }

}




function selectAnswer(element, answer) {

    let allAnswers =
        document.querySelectorAll(".answer");

    allAnswers.forEach(function(item) {

        item.classList.remove("selected");

    });

    element.classList.add("selected");

    selectedAnswer = answer;
}


function nextQuestion() {

    if (selectedAnswer === "") {

        alert("Please select an answer.");

        return;
    }


    if (
        selectedAnswer ===
        questions[questionNumber].answer
    ) {

        score++;

    }


    if (questionNumber === 4) {

        showResult();

        return;

    }


    questionNumber++;

    selectedAnswer = "";

    showQuestion();

}


function showResult() {

    let percentage = (score / 5) * 100;

    let remark;


    if (percentage === 100) {

        remark = "Excellent! 🎉";

    } else if (percentage >= 60) {

        remark = "Good Job! 👍";

    } else if (percentage >= 40) {

        remark = "Keep Practicing! 📚";

    } else {

        remark = "You need more practice.";

    }


    document.getElementById("quizPage")
        .classList.add("hidden");

    document.getElementById("resultPage")
        .classList.remove("hidden");


    document.getElementById("score").innerText =
        "Score: " + score + "/5";

    document.getElementById("percentage").innerText =
        "Percentage: " + percentage + "%";

    document.getElementById("remark").innerText =
        "Remark: " + remark;
}