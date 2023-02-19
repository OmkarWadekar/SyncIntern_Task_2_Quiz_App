const quizDatabase = [
    {
        question: "Q1. In JavaScript '= = =' operator defines what?",
        a: "Non-identicalIs ",
        b: "identical (is equal to and is of the different type)",
        c: "Is identical (is equal to and is of the same type)",
        d: "Is equal to",
        ans: "ans3"
    }, {
        question: "Q2. What will be the result of the following JavaScript: var x='Volvo'+ 16 + 4 ",
        a: "164",
        b: "volvo",
        c: "Volvo164",
        d: "Error",
        ans: "ans3"
    }, {
        question: "Q3. Which one of the following is not considered as an error in JS",
        a: "Syntax error",
        b: "Missing of semicolons",
        c: "Division by zero",
        d: "Missing of Bracket",
        ans: "ans3"
    }, {
        question: "Q4. The correct syntax to write 'Hi There' in Javascript is",
        a: "jscript.write('Hi There')",
        b: "response.write('Hi There')",
        c: "print('Hi There')",
        d: "print.jscript('Hi There')",
        ans: "ans2"
    }, {
        question: "Q5. Which of the following is not a javascript framework?",
        a: "Vue",
        b: "React",
        c: "Node",
        d: "Laravel",
        ans: "ans4"
    },

];

const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');
const answers = document.querySelectorAll('.answer');

const showScore = document.querySelector("#showScore");

let queCount = 0;
let score = 0;


const loadQuestion = () => {
    const queList = quizDatabase[queCount];
    question.innerText = queList.question;
    option1.innerHTML = queList.a;
    option2.innerHTML = queList.b;
    option3.innerHTML = queList.c;
    option4.innerHTML = queList.d;
}
loadQuestion();

const getCheckAnswer = () => {
    let ans;
    answers.forEach((curAnsEle) => {
        if (curAnsEle.checked) {
            ans = curAnsEle.id;
        }
    });
    return ans;
}
const deselectAll = () => {
    answers.forEach((curAnsEle) => {
        curAnsEle.checked = false;
    });
}

submit.addEventListener('click', () => {
    const checkedAnswer = getCheckAnswer();
    console.log(checkedAnswer);
    console.log("\nlength of db : ", quizDatabase.length);

    if (checkedAnswer === quizDatabase[queCount].ans) {
        score++;
    };

    queCount++;

    deselectAll();

    if (queCount < quizDatabase.length) {
        loadQuestion();
    } else {
        showScore.innerHTML = `
            <h3> You Scored ${score}/${quizDatabase.length} !!! </h3>
            <button class="btn" onclick="location.reload()"> Play Again </button>
        `;
        showScore.classList.remove('scoreArea')
    }
});