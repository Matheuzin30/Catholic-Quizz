const question = document.querySelector('#question');
const answersBox = document.querySelector('#answers-box');
const quizzContainer = document.querySelector('#quizz-container');
const scoreContainer = document.querySelector('#score-container');
const letter = ["a", "b", "c", "d"];
let points = 0;
let actualQuestion = 0;

const questions = [
    {
        "question": "Quais São os sacramentos da Igreja?",
        "answers": [
        {
            "answer": "batismo, Confirmação, Eucaristia, Penitência, Unção dos Enfermos, Ordem, Matrimônio",
            "correct": true
        },
        {
            "answer": "batismo, Dons, Palavra, Oração, Unção dos Enfermos, Matrimônio",
            "correct": false
        },
        {
            "answer": "Libertação, Confirmação, Eucaristia, Penitência, Unção dos Enfermos, Celibato",
            "correct": false
        },
        {
            "answer": "batismo, Ciência, Missa, Adoração, Unção dos Enfermos, Ordem, Matrimônio",
            "correct": false
        },
        ]
    },

    {
        "question": "Como se chama o livro usado durante o rito da missa?",
        "answers": [
        {
            "answer": "Liturgia diária",
            "correct": false
        },
        {
            "answer": "Bíblia",
            "correct": false
        },
        {
            "answer": "Devocionário",
            "correct": false
        },
        {
            "answer": "Missal",
            "correct": true
        },
        ]
    },

    {
        "question": "Como se chama o chaopéu do bispo?",
        "answers": [
        {
            "answer": "Losango",
            "correct": false
        },
        {
            "answer": "Cambaleio",
            "correct": false
        },
        {
            "answer": "Chapéu Bento",
            "correct": false
        },
        {
            "answer": "Mitra",
            "correct": true
        },
        ]
    },

    {
        "question": "Qual País fica a sede da Igreja Católica?",
        "answers": [
        {
            "answer": "Brasil",
            "correct": false
        },
        {
            "answer": "África do Sul",
            "correct": false
        },
        {
            "answer": "Costa do Marfim",
            "correct": false
        },
        {
            "answer": "Vaticano",
            "correct": true
        },
        ]
    },

    {
        "question": "Qual é o atual líder da Igreja Católica?",
        "answers": [
        {
            "answer": "Papa Bento XVI",
            "correct": false
        },
        {
            "answer": "São João Paulo II",
            "correct": false
        },
        {
            "answer": "Papa Pio XVII",
            "correct": false
        },
        {
            "answer": "Papa Francisco",
            "correct": true
        },
        ]
    },

    {
        "question": "Como se chama o cajado do bispo",
        "answers": [
        {
            "answer": "Báculo",
            "correct": true
        },
        {
            "answer": "Cajado",
            "correct": false
        },
        {
            "answer": "Vara Benta",
            "correct": false
        },
        {
            "answer": "Pau de Sebo",
            "correct": false
        },
        ]
    },

    {
        "question": "Como se chama o local aonde se põe o corpo de Cristo durante o rito da missa?",
        "answers": [
        {
            "answer": "Cálice",
            "correct": false
        },
        {
            "answer": "Âmbula",
            "correct": true
        },
        {
            "answer": "Paracorpo",
            "correct": false
        },
        {
            "answer": "Ostensório",
            "correct": false
        },
        
        ]
    },

]

function init(){
    
    createQuestion(0)
}

function createQuestion(i){

    const oldButtons = answersBox.querySelectorAll("button");

    oldButtons.forEach(function(btn){
        btn.remove();
    });

    const questionText = question.querySelector("#question-text");
    const questionNumber = question.querySelector("#question-number");

    questionText.textContent = questions[i].question;
    questionNumber.textContent = i + 1;

    questions[i].answers.forEach(function(answer, i){

        const answerTemplate = document.querySelector(".answer-template").cloneNode(true);

        const letterBtn = answerTemplate.querySelector(".btn-letter");
        const answerText = answerTemplate.querySelector(".question-answer");

        letterBtn.textContent = letter[i];
        answerText.textContent = answer['answer'];

        answerTemplate.setAttribute("correct-answer", answer["correct"]);


        answerTemplate.classList.remove("hide");
        answerTemplate.classList.remove("answer-template");

        answersBox.appendChild(answerTemplate);

        answerTemplate.addEventListener("click", function(){
            checkAnswer(this);
        })

    });

        actualQuestion++;
        
}

function checkAnswer(btn){

    const buttons = answersBox.querySelectorAll("button");

    buttons.forEach(function(button){
        
        if(button.getAttribute("correct-answer") === "true"){

            button.classList.add("correct-answer");

            if(btn === button){

                points++;
            }

        } else{
            button.classList.add("wrong-answer");
        }
    });

    nextQuestion();


}

function nextQuestion(){
    setTimeout(function(){

        if(actualQuestion >= question.length){

        }

        createQuestion(actualQuestion);

    }, 1500)
}

init();