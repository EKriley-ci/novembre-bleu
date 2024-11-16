// Les questions, options et réponses correctes
const questions = [
    {
      question: "Quel est le deuxième cancer le plus fréquent chez les hommes ?",
      options: ["Cancer du Poumon", "Cancer de la Prostate", "Cancer de la Peau"],
      answer: "Cancer de la Prostate"
    },
    {
      question: "Quel est le pourcentage des suicides chez les hommes dans le monde ?",
      options: ["50%", "75%", "85%"],
      answer: "75%"
    },
    {
      question: "Combien de nouveaux cas de cancer de la prostate sont diagnostiqués chaque année dans le monde ?",
      options: ["500,000", "1.3 Million", "2 Million"],
      answer: "1.3 Million"
    },
    {
      question: "À quel âge le cancer des testicules est-il le plus fréquent ?",
      options: ["15-35 ans", "40-60 ans", "60 ans et plus"],
      answer: "15-35 ans"
    },
    {
      question: "Quel est le meilleur moyen de réduire les risques de cancer ?",
      options: ["Alimentation saine", "Exercice physique", "Contrôles de santé réguliers"],
      answer: "Contrôles de santé réguliers"
    }
  ];
  
  // Affiche les questions et les options
  const quizDiv = document.querySelector("#quiz");
  
  questions.forEach((q, index) => {
    const questionDiv = document.createElement("div");
    questionDiv.classList.add("question");
  
    const questionTitle = document.createElement("h3");
    questionTitle.innerText = `Question ${index + 1}: ${q.question}`;
    questionDiv.appendChild(questionTitle);
  
    const answersDiv = document.createElement("div");
    answersDiv.classList.add("answers");
  
    q.options.forEach(option => {
      const label = document.createElement("label");
      label.classList.add("answer-box");
  
      const input = document.createElement("input");
      input.type = "radio";
      input.name = `question${index}`;
      input.value = option;
  
      label.appendChild(input);
      label.appendChild(document.createTextNode(option));
      answersDiv.appendChild(label);
    });
  
    questionDiv.appendChild(answersDiv);
    quizDiv.appendChild(questionDiv);
  });
  
  // Vérifie les réponses de l'utilisateur
  function verifierReponses() {
    let score = 0;
  
    questions.forEach((q, index) => {
      const selectedOption = document.querySelector(`input[name="question${index}"]:checked`);
      if (selectedOption && selectedOption.value === q.answer) {
        score++;
      }
    });
  
    const result = document.getElementById("result");
    result.innerText = `Votre score : ${score} sur ${questions.length}`;
  }
  