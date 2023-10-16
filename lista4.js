const questions = [
    {
      question: "1. Dona Maria fez 48 bolinhos e pensou em colocar 8 em cada prato. De quantos pratos Dona Maria precisa para colocar todos os bolinhos?",
      choices: ["6", "10", "8", "4"],
      answer: "6",
    },
    {
      question: "2. André resolveu pesquisar em sua escola sobre o meio ambiente e chamou 32 amigos para se organizarem em 4 grupos.  Quantas pessoas haverá em cada grupo? ",
      choices: ["6 pessoas", "8 pessoas", "10 pessoas", "13 pessoas"],
      answer: "8 pessoas",
    },
    {
      question: "3. Neila irá distribuir igualmente R$ 30,00 entre ela e os 4 irmãos. Que quantia caberá a cada um?",
      choices: ["R$ 20,00", "R$ 10,00", "R$ 6,00", "R$ 2,00"],
      answer: "R$ 6,00",
    },
    {
      question: "4. Josué tem 24 biscoitos e deu todos os biscoitos para seus quatro primos dividirem entre si. Com quantos biscoitos ficaram cada um dos primos de João?",
      choices: ["2", "4", "8", "6"],
      answer: "6",
    },
    {
      question: "5. Patrícia tem 18 flores, e quer colocar 6 flores em cada vaso. Como ela colocará  6 flores em cada vaso, precisará formar quantos grupos?",
      choices: ["3 grupos", "6 grupos", "8 grupos", "10 grupos"],
      answer: "3 grupos",
    },
    {
      question: "6. Carolina recolheu 50 latinhas de alumínio para levá-las a uma cooperativa de reciclagem. Guardou 6 latinhas em cada sacola plástica.  Quantas latinhas sobraram após Carol encher todos os sacos com 6 latinhas?",
      choices: ["5", "2", "3", "6"],
      answer: "2",
    },
    {
      question: "7. Miguel quer  colocar 12 garrafas plásticas em caixas, levar para escola e reciclar. Sabendo que em  cada caixa cabem 4 garrafas, quantas caixas serão necessárias levar para a escola?",
      choices: ["10 caixas", "5 caixas", "3 caixas", "12 caixas"],
      answer: "3 caixas",
    },
    {
      question: "8. Um biólogo coletou 53 estrelas do mar e 4 esponjas para fazer uma pesquisa. Ele quer colocar  7 animais em cada aquário. Quantos animais irão sobrar fora do aquário?",
      choices: ["2", "3", "0", "1"],
      answer: "1",
    },
    {
      question: "9. Há 45 pessoas inscritas em um curso de como reaproveitar os alimentos. Cada turma deverá ter 5 alunos. Serão formadas 9 turmas. Como é chamado o resultado encontrado nesse cálculo?",
      choices: ["Quociente", "Resto", "Dividendo", "Divisor"],
      answer: "Quociente",
    },
    {
      question: "10. Na granja Rejane, 3 dúzias de ovos serão colocadas em embalagens para meia dúzia. Quantas embalagens serão necessárias para se colocar os ovos?",
      choices: ["16 embalagens", "6 embalagens", "12 embalagens", "36 embalagens"],
      answer: "6 embalagens",
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
  