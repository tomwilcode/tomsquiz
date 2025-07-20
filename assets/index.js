// === Quiz Data ===
const quizQuestions = [
    {
        question: "The last empress of India died in 2002 in Windsor, who was she?",
        options: ["Queen Elizabeth 2nd", "Queen Elizabeth the Queen Mother", "Queen Victoria", "Queen Mary"],
        correct: 1,
        explanation: "Queen Elizabeth The Queen Monther, Elizabeth Angela Marguerite Bowes-Lyon was the last Empress of India."
    },
    {
        text: "Relight my ________ song by Take that and Lulu.",
        options: ["heart", "cigarette", "fire", "life"],
        answer: "2",
        explanation: "Relight My fire by Take That and Lulu was sung in 1993 on Top of the Pops."
    },
    {
        type: "truefalse",
        question: "The sky is green.",
        options: ["True", "False"],
        correct: 1,
        explanation: "The sky is blue not green. So the answer is false."
    },
    {
        question: "In what year did England last win the football world cup?",
        options: ["1966", "1984", "2004", "2024"],
        correct: 0,
        explanation: "Englands last, and only, FIFA World Cup victory was in 1966. They defeated West Germany 4-2 in the final, which was played at Wembley Stadium"
    },
    {
        type: "truefalse",
        question: "Star Wars was partially fimed in Tunisa",
        options: ["True", "False"],
        correct: 0,
        explanation: "This answer is true as Star Wars was filmed in Tunisia"
    },
    {
        question: "Where is considered the most remote place in the world?",
        options: ["Faroe Islands", "Virgin Islands", "Point Nemo", "Easter Island"],
        correct: 2,
        explanation: "The most remote place on Earth is generally considered to be Point Nemo, a location in the South Pacific Ocean. It's the point furthest from any landmass, situated 2,688 km (1,670 mi) from the nearest islands."
    },
    {
        type: "multiple",
        question: "What is the capital of Germany?",
        options: ["Paris", "Rome", "Berlin", "Madrid"],
        correct: 2,
        explanation: "Berlin is the capital of Germany"
    },
    {
        question: "What is the scientific name for Domesticated Cats?",
        options: ["Free Loaders", "Drain on Resources", "Felis catus", "Felis"],
        correct: 2,
        explanation: "The domestic cat was first classified as the species Felis catus in 1758 by Carolus Linnaeus."
    },
    {
        question: "How long was Queen Victorias reign?",
        options: ["10 years", "30 years", "63 years", "8 hours"],
        correct: 2,
        explanation: "Queen Victoria reigned for 63 years, 7 months and 2 days, from June 20, 1837, to January 22, 1901. This period is known as the Victorian era. Her reign was the second longest in British history, surpassed only by her great-great-granddaughter, Queen Elizabeth II."
    },
    {
        question: "What year was the Great Fire of London",
        options: ["1066", "1986", "1666", "2006"],
        correct: 2,
        explanation: "The Great Fire of London started on Sunday, 2 September 1666 in a baker's shop on Pudding Lane belonging to Thomas Farynor (Farriner)."
    },
    {
        question: "In Chitty Chitty Bang, Bang What colour is Truly's hair before she drives the car into the pond?",
        options: ["Blonde", "Rainbow Coloured", "Red", "Blue"],
        correct: 0,
        explanation: "Truly's hair was blonde."
    },
    {
        question: "Which planet was recently downgraded in our solar system?",
        options: ["Jupiter", "Mars", "Uranus", "Pluto"],
        correct: 3,
        explanation: "In 2006, Pluto was downgraded from a planet to a dwarf planet by the International Astronomical Union (IAU). This change occurred because the IAU established a new definition of a planet that Pluto did not meet. Specifically, Pluto's orbit is not clear of other objects, sharing space with other bodies in the Kuiper Belt."
    },
    {
        question: "Tritium is a radioactive isotope of which gaseous element?",
        options: ["Helium", "Hydrogen", "Oxygen", "Nitrogen"],
        correct: 1,
        explanation: "Tritium is a radioactive isotope of hydrogen with the symbol T or 3H."
    },
    {
        question: "What did the first ever text message say?",
        options: ["Hello", " Hi There", "Happy Easter", "Merry Christmas"],
        correct: 3,
        explanation: "The first text message ever sent was Merry Christmas, on December 3, 1992. It was sent by a British engineer named Neil Papworth to Richard Jarvis, a Vodafone employee, via the Vodafone network. The message was sent from a computer to a mobile phone, as mobile phones at the time did not have keyboards for text input."
    },
    {
        question: "In what year was the World Wide Web invented?",
        options: ["1990", "1987", "1989", "1995"],
        correct: 2,
        explanation: "The World Wide Web was invented in 1989 by Tim Berners-Lee."
    },
    {
        question: "How much is a bakers dozen?",
        options: ["12", "6", "14", "13"],
        correct: 3,
        explanation: "A bakers dozen is 13, it's one more than a standard dozen, which is 12. The term comes from medieval England when bakers, fearing punishment for selling under weight loaves, would include an extra loaf with each dozen to ensure they met the required weight."
    },
    {
        question: "What is the capital of Lanzarote?",
        options: ["Madrid", "Arrecife", "Santa Cruz", "Canaria"],
        correct: 1,
        explanation: "The capital of Lanzarote is Arrecife."
    },
    {
        question: "What year was Planet of the Apes Originally released?",
        options: ["2001", "2024", "1968", "1974"],
        correct: 2,
        explanation: "Planet of the Apes was originally released in 1968 as Charlton Heston as the lead character Taylor."
    },
    {
        question: "Who were Harry Potters parents?",
        options: ["Vernon & Petunia Dursley", "James and Lily Potter", "Arthur and Molly Weasley", "Lucius and Narcissa Malloy"],
        correct: 1,
        explanation: "Harry Potter's parents were James and Lily Potter."
    },
    {
        question: "What does NASA stand for?",
        options: ["Naval Aeronautics Sea Administration", "National Aeronautics and Space Administration", "Nothing About Space Actually", "National Arobics Space Action"],
        correct: 1,
        explanation: "NASA stands for National Aeronautics and Space Administration"
    },
    {
        question: "What date is Valentines Day?",
        options: ["24th December","4th July","14th February","31st October"],
        correct: 2,
        explanation: "Valentines Day is traditionally celebrated on the 14th February."
    },
    {
        question: "What is the capital of England?",
        options: ["Birmingham", "Manchester", "Brighton", "London"],
        correct: 3,
        explanation: "The capital of England is London."
    },
    {
        question: "Who wrote 'Romeo and Juliet'?",
        options: ["Mark Twain", "William Shakespeare", "Jane Austen", "Charles Dickens"],
        correct: 1,
        explanation: "William Shakespeare wrote the famous play 'Romeo and Juliet'."
    },
    {
        question: "What is the boiling point of water at sea level?",
        options: ["100 degrees C", "90 degrees C", "110 degrees C", "8 degrees C"],
        correct: 0,
        explanation: "Water boils at 100 degrees Celsius at sea level."
    }
];

// === Quiz State added ===
let currentQuestionIndex = 0;
let score = 0;
let shuffledQuestions = [];

// === DOM Elements ===
const introSection = document.getElementById("intro");
const quizSection = document.getElementById("quiz");
const resultSection = document.getElementById("result");
const questionText = document.getElementById("questionText");
const answerList = document.getElementById("answerList");
const explanationBox = document.getElementById("explanation");
const nextButton = document.getElementById("nextBtn");
const scoreText = document.getElementById("scoreText");

// === Start Quiz ===
function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  shuffledQuestions = [...quizQuestions].sort(() => Math.random() - 0.5);

  introSection.classList.add("hidden");
  quizSection.classList.remove("hidden");

  showQuestion();
}

// === Display a Question ===
function showQuestion() {
  const currentQuestion = shuffledQuestions[currentQuestionIndex];
  const { question, options } = currentQuestion;

  questionText.textContent = question || "No question provided";
  answerList.innerHTML = "";

  options.forEach((option, index) => {
    const listItem = document.createElement("li");
    listItem.textContent = option;
    listItem.classList.add("answer-option");
    listItem.addEventListener("click", () => handleAnswer(index));
    answerList.appendChild(listItem);
  });

  explanationBox.classList.add("hidden");
  nextButton.classList.add("hidden");
}

// === Handle Answer Selection ===
function handleAnswer(selectedIndex) {
  const currentQuestion = shuffledQuestions[currentQuestionIndex];
  const correctIndex = typeof currentQuestion.correct === "number" 
    ? currentQuestion.correct 
    : parseInt(currentQuestion.correct);

  const allOptions = document.querySelectorAll("#answerList li");

  allOptions.forEach((item, index) => {
    item.style.pointerEvents = "none";
    item.style.backgroundColor = index === correctIndex ? "#c8e6c9" : "#ffcdd2";
  });

  if (selectedIndex === correctIndex) {
    score++;
  }

  explanationBox.textContent = `Explanation: ${currentQuestion.explanation}`;
  explanationBox.classList.remove("hidden");
  nextButton.classList.remove("hidden");
}

// === Move to Next Question ===
function nextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex < shuffledQuestions.length) {
    showQuestion();
  } else {
    showResult();
  }
}

// === Show Final Result ===
function showResult() {
  quizSection.classList.add("hidden");
  resultSection.classList.remove("hidden");
  scoreText.textContent = `You scored ${score} out of ${shuffledQuestions.length}`;
}

// === Attach Start Event on Page Load ===
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("startBtn").addEventListener("click", startQuiz);
  nextButton.addEventListener("click", nextQuestion);
});