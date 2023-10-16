const questions = [
    {
      question: "1. O dono de uma das lanchonetes do Zoológico comprou 587 picolés para vender num fim de semana. Ao encerrar as vendas, no domingo, verificou que restaram 53. Quantos picolés ele vendeu nesse fim de semana?",
      choices: ["522", "529", "531", "534"],
      answer: "534",
    },
    {
      question: "2. De um censo para outro, a população da cidade de Bela Cruz passou de 9651 habitantes para 11843 habitantes. Em quanto a população aumentou?",
      choices: ["2100", "2150", "2192", "2203"],
      answer: "2192",
    },
    {
      question: "3. Na decisão de um campeonato de basquete, foram realizadas 3 partidas. Na primeira compareceram 2852 pessoas, na segunda havia 1976 pessoas e, na final, 3467 pessoas. Calcule a diferença entre o número maior e o número menor de espectadores das três partidas:",
      choices: ["1491", "1502", "1593", "1687"],
      answer: "1491",
    },
    {
      question: "4. Num jogo de basquete a equipe de Vitória fez 78 pontos, a equipe de Rayane fez 56.  Quantos pontos a equipe de Rayane fez a menos que a de Vitória?",
      choices: ["23", "32", "22", "19"],
      answer: "22",
    },
    {
      question: "5. Dos 54 pinguins do Zoológico do Rio de Janeiro, 23 voltarão para o seu habitat natural. Quantos pinguins ainda ficarão no Zoológico?",
      choices: ["31", "21", "32", "33"],
      answer: "31",
    },
    {
      question: "6. Para tomar banho, a Mônica gasta em média 43 litros de água. Seu amigo Cascão que não gosta de tomar banho gasta apenas 17 litros de água quando toma banho. Quantos litros de água a Mônica gasta a mais  que o Cascão ?",
      choices: ["27", "26", "30", "23"],
      answer: "26",
    },
    {
      question: "7. Rafael foi ao Mercadinho do seu João comprar um pacote de biscoitos. O biscoito custou R$ 2,00 e Rafael deu uma nota de R$ 10,00 para pagar. Quanto ele recebeu de troco??",
      choices: ["R$ 10,00", "R$ 12,00", "R$ 7,00", "R$ 8,00"],
      answer: "R$ 8,00",
    },
    {
      question: "8. O grande cientista Albert Einstein viveu de 1879 a 1955. Com quantos anos ele morreu?",
      choices: ["65", "76", "78", "81"],
      answer: "76",
    },
    {
      question: "9. No campeonato carioca de 2012 o jogo Flamengo X Vasco teve 8560 torcedores no estádio, enquanto Fluminense X Botafogo teve 5420 torcedores. Qual a diferença entre o número de torcedores nos dois jogos?",
      choices: ["3140 torcedores", "3260 torcedores", "4340 torcedores", "4560 torcedores"],
      answer: "3140 torcedores",
    },
    {
      question: "10. Numa subtração o minuendo é 58 e o resto é 23. Qual é o valor do subtraendo ?",
      choices: ["15", "25", "30", "35"],
      answer: "35",
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
  