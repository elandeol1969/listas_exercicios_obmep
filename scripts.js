const questions = [
  {
    question: "Cíntia, professora da 4ª série, comprou 200 cocadinhas, 350 balas e 100 chocolates para distribuir em sala de aula. Quantos doces Cíntia comprou?",
    choices: ["550 doces", "600 doces", "650 doces", "750 doces"],
    answer: "650 doces",
  },
  {
    question: "Ticiano vende churrasquinho em uma praça próxima de sua casa. Ontem ele vendeu 302 churrasquinhos de carne e 221 de frango. Quantos churrasquinhos  Ticiano vendeu ao todo?",
    choices: ["500 churrasquinhos", "502 churrasquinhos", "523 churrasquinhos", "533 churrasquinhos"],
    answer: "523 churrasquinhos",
  },
  {
    question: "Margarida foi à indústria de sorvetes Kibombom e comprou 130 picolés sabor uva, 140 sabor morango, 30 sabor manga e 150 sabor leite condensado. Quantos picolés com sabor de fruta Margarida comprou?",
    choices: ["270 sorvetes", "300 sorvetes", "330 sorvetes", "450 sorvetes"],
    answer: "300 sorvetes",
  },
  {
    question: "Felipe e seu pai compraram ingressos para assistir a dois jogos da Copa das Confederações no Maracanã, um no sábado e outro no domingo. No primeiro jogo tinham 40.346 pessoas no Maracanã e no segundo jogo tinham 9.130 pessoas a mais que no primeiro. Cada pessoa que chegava ao estádio ganhava um apito para que os gols fossem bem comemorados. Quantos apitos foram distribuídos ao todo no final de semana?",
    choices: ["49.476 apitos", "80.692 apitos", "89.822 apitos", "89.922 apitos"],
    answer: "89.822 apitos",
  },
  {
    question: "Melina colheu em sua horta 832 pés de alface, 671 pés de almeirão e dos 500 pés de chicória, colheu 425. Quantas hortaliças Melina colheu?",
    choices: ["2.428", "2.003", "1.928", "1.918"],
    answer: "1.928",
  },
  {
    question: "Melina vai fazer uma festa em seu sítio e alugou 2 centenas de toalhas verdes, 3 dezenas de toalhas azuis, 60 unidades de toalhas vermelhas e 50 unidades de toalhas rosa. Quantas toalhas ao todo Melina alugou?",
    choices: ["115 toalhas", "313 toalhas", "340 toalhas", "430 toalhas"],
    answer: "340 toalhas",
  },
  {
    question: "O Sr. Caetano nasceu em 22 de Fevereiro de 1910 e viveu até seus 101 anos. Em que ano ele faleceu?",
    choices: ["2008", "2009", "2010", "2011"],
    answer: "2011",
  },
  {
    question: "Vanessa comprou 4 embalagens de pregadores de roupa com 12 pregadores em cada embalagem. Quantos pregadores de roupa Vanessa comprou no total?",
    choices: ["8", "12", "16", "48"],
    answer: "48",
  },
  {
    question: "Para comemorar as Olimpíadas de 2016 no Rio de Janeiro, o Banco Central lançou moedas de um real com símbolos de alguns esportes olímpicos e paraolímpicos. Em um site para colecionadores, algumas dessas moedas foram anunciadas para venda por 12 reais cada uma. Qual foi o valor pago por um colecionador que comprou 3 dessas moedas pelo preço anunciado?",
    choices: ["4 reais", "9 reais", "15 reais", "36 reais"],
    answer: "36 reais",
  },
  {
    question: "Gustavo sempre joga bolinha de gude com seus amigos. Na última semana, ele tinha 2.274 bolinhas de gude. Depois de perdeu algumas jogadas durante a semana, ele ficou com 1.387 bolinhas de gude. Quantas bolinhas de gude ele perdeu nessa semana?",
    choices: ["787", "887", "1.997", "4.661"],
    answer: "887",
  },
];

const questionElement = document.getElementById("question");
const choiceElements = Array.from(document.getElementsByClassName("choice"));
const nextButton = document.getElementById("next");
const scoreElement = document.getElementById("score");
const wrongElement = document.getElementById("wrong");

let currentQuestion = 0;
let score = 0;
let wrong = 0;
let answerChosen = false;

function loadQuestion() {
  const currentQuestionData = questions[currentQuestion];
  questionElement.innerText = currentQuestionData.question;

  const choices = shuffleArray(currentQuestionData.choices);
  for (let i = 0; i < choiceElements.length; i++) {
    choiceElements[i].innerText = choices[i];
  }
  answerChosen = false; // reset flag when loading new question
}

function checkAnswer(e) {
  if (answerChosen) return; // prevent multiple answers
  answerChosen = true;

  if (e.target.innerText === questions[currentQuestion].answer) {
    score++;
    scoreElement.innerText = "Pontuação: " + score;
    alert("Correto!");
  } else {
    wrong++;
    wrongElement.innerText = "Erros: " + wrong;
    alert(
      "Errado! A resposta correta é " + questions[currentQuestion].answer + "."
    );
  }
}

choiceElements.forEach((element) => {
  element.addEventListener("click", checkAnswer);
});

function restartQuiz() {
  currentQuestion = 0;
  score = 0;
  wrong = 0;
  scoreElement.innerText = "Pontuação: 0";
  wrongElement.innerText = "Erros: 0";
  loadQuestion();
}

nextButton.addEventListener("click", () => {
  if (!answerChosen) {
    alert("Por favor, escolha uma resposta antes de prosseguir.");
    return;
  }

  currentQuestion++;

  if (currentQuestion < questions.length) {
    loadQuestion();
  } else {
    alert(
      "Fim do Quiz! Você acertou " +
        score +
        " de " +
        questions.length +
        " perguntas."
    );
    restartQuiz();
  }
});

function shuffleArray(array) {
  let currentIndex = array.length,
    temporaryValue,
    randomIndex;

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

loadQuestion();
