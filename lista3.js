const questions = [
    {
      question: "1. Ana Maria recebeu de sua prima 9 caixas com 7 brinquedos. Quantos brinquedos ela recebeu ao todo?",
      choices: ["80 brinquedos", "70 brinquedos", "63 brinquedos", "47 brinquedos"],
      answer: "63 brinquedos",
    },
    {
      question: "2. Gabriel e Felipe colecionam bolinhas de gude juntos, a caixa onde eles guardam cabem 10 bolinhas. Quantas bolinhas de gude serão necessárias para que os dois meninos completem 3 caixas?",
      choices: ["35 bolinhas de gude", "30 bolinhas de gude", "13 bolinhas de gude", "10 bolinhas de gude"],
      answer: "30 bolinhas de gude",
    },
    {
      question: "3. Luana comprou 5 pacotes de docinhos para a sobremesa depois do jantar, em cada pacote vieram 15 docinhos. Quantos docinhos Luana comprou para a sobremesa?",
      choices: ["20 docinhos", "88 docinhos", "80 docinhos", "75 docinhos"],
      answer: "75 docinhos",
    },
    {
      question: "4. Luiza ganhou 3 caixas com 9 brigadeiros em cada. Qual operação matemática devemos usar para saber quantos brigadeiros ela ganhou?",
      choices: ["Multiplicação", "Divisão", "Adição", "Subtração"],
      answer: "Multiplicação",
    },
    {
      question: "5. Túlio, Lucas e Guilherme estão aniversariando. Tamires, amiga dos meninos, resolveu levar 1 caixa de carrinhos de presente para cada um, em cada caixinha havia 5 carrinhos. Quantos carrinhos ela levou no total?",
      choices: ["30 carrinhos", "25 carrinhos", "20 carrinhos", "15 carrinhos"],
      answer: "15 carrinhos",
    },
    {
      question: "6. Valentina possui dois álbuns, em cada álbum ela pode colar 50 figurinhas. Quantas figurinhas serão necessárias para que ela possa completar seus álbuns?",
      choices: ["100 figurinhas", "130 figurinhas", "136 figurinhas", "150 figurinhas"],
      answer: "100 figurinhas",
    },
    {
      question: "7. Para um passeio na praia, Juca e Fernanda levaram juntos R$ 20,00 para comprar água de coco e batatinhas fritas, Taís, amiga dos meninos, levou o triplo da quantia deles. Quanto os três levaram juntos?",
      choices: ["R$ 35,00", "R$ 75,00", "R$ 50,00", "R$ 80,00"],
      answer: "R$ 80,00",
    },
    {
      question: "8. Uma professora de uma instituição levou sua turma para acampar em uma floresta. Sabe-se que ela levou 6 caixas, cada caixa com 9 lanches. Qual operação deve ser feita para descobrir quantos lanches a professora levou?",
      choices: ["9 + 6 =", " 9 - 6 =", "6 x 9 =", "6 : 9 ="],
      answer: "6 x 9 =",
    },
    {
      question: "9. Na casa de Rafaela, sua família costuma ouvir rádio todas as tardes. Essa semana o rádio parou de funcionar e sua mãe Rejane foi a uma loja se informar sobre o preço de um novo. O vendedor lhe deu as seguintes opções: À VISTA = R$ 1.500,00 OU PARCELADO = 3 x R$ 600,00. Quanto Rosana pagará pelo rádio se comprar com o parcelamento?",
      choices: ["R$ 3.100,00", "R$ 1.500,00", "R$ 2.000,00", "R$ 1.800,00"],
      answer: "R$ 1.800,00",
    },
    {
      question: "10. Joana comprou para suas 2 filhas 4 embalagens de borrachas. Sabendo que em cada embalagem vieram 8 borrachas, quantas borrachas Joana comprou no total?",
      choices: ["50 borrachas", "48 borrachas", "32 borrachas", "20 borrachas"],
      answer: "32 borrachas",
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
  