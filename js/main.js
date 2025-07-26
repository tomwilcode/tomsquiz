"use strict";

/**
 * Online Quiz App
 * Author: [Tom Wilson]
 * Description: Accessible, industry-standard quiz app JS.
 */
// === Quiz Questions & Answers ===
/**
 * Array of quiz questions and answers.
 * @type {Array<{question: string, options: string[], correct: number,
 * correct: number, explanation: string, type?: string}>}
 */
const quizQuestions = [
  {
    question: "The last empress of India died in 2002 in Windsor. Who was she?",
    options: ["Queen Elizabeth 2nd", "Queen Elizabeth the Queen Mother", "Queen Victoria", "Queen Mary"],
    correct: 1,
    explanation: "Queen Elizabeth The Queen Mother, Elizabeth Angela Marguerite Bowes-Lyon was the last Empress of India."
  },
  {
    question: "Relight my ________ song by Take That and Lulu.",
    options: ["heart", "cigarette", "fire", "life"],
    correct: 2,
    explanation: "Relight My Fire by Take That and Lulu was sung in 1993 on Top of the Pops."
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
    explanation: "England's last, and only, FIFA World Cup victory was in 1966. They defeated West Germany 4-2 in the final, which was played at Wembley Stadium."
  },
  {
    type: "truefalse",
    question: "Star Wars was partially filmed in Tunisia.",
    options: ["True", "False"],
    correct: 0,
    explanation: "True. The original Star Wars film (later retitled 'Star Wars: Episode IV - A New Hope') was partially filmed in Tunisia, which served as the desert planet of Tatooine."
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
    explanation: "Berlin is the capital of Germany."
  },
  {
    question: "What is the scientific name for Domesticated Cats?",
    options: ["Free Loaders", "Drain on Resources", "Felis catus", "Felis"],
    correct: 2,
    explanation: "The domestic cat was first classified as the species Felis catus in 1758 by Carolus Linnaeus."
  },
  {
    question: "How long was Queen Victoria's reign?",
    options: ["10 years", "30 years", "63 years", "8 hours"],
    correct: 2,
    explanation: "Queen Victoria reigned for 63 years, 7 months and 2 days, from June 20, 1837, to January 22, 1901. This period is known as the Victorian era. Her reign was the second longest in British history, surpassed only by her great-great-granddaughter, Queen Elizabeth II."
  },
  {
    question: "What year was the Great Fire of London?",
    options: ["1066", "1986", "1666", "2006"],
    correct: 2,
    explanation: "The Great Fire of London started on Sunday, 2 September 1666 in a baker's shop on Pudding Lane belonging to Thomas Farynor (Farriner)."
  },
  {
    question: "In Chitty Chitty Bang, Bang, What colour is Truly's hair before she drives the car into the pond?",
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
    options: ["Hello", "Hi There", "Happy Easter", "Merry Christmas"],
    correct: 3,
    explanation: "The first text message ever sent was 'Merry Christmas', on December 3, 1992. It was sent by a British engineer named Neil Papworth to Richard Jarvis, a Vodafone employee, via the Vodafone network. The message was sent from a computer to a mobile phone, as mobile phones at the time did not have keyboards for text input."
  },
  {
    question: "In what year was the World Wide Web invented?",
    options: ["1990", "1987", "1989", "1995"],
    correct: 2,
    explanation: "The World Wide Web was invented in 1989 by Tim Berners-Lee."
  },
  {
    question: "How much is a baker's dozen?",
    options: ["12", "6", "14", "13"],
    correct: 3,
    explanation: "A baker's dozen is 13, it's one more than a standard dozen, which is 12. The term comes from medieval England when bakers, fearing punishment for selling underweight loaves, would include an extra loaf with each dozen to ensure they met the required weight."
  },
  {
    question: "What is the capital of Lanzarote?",
    options: ["Madrid", "Arrecife", "Santa Cruz", "Canaria"],
    correct: 1,
    explanation: "The capital of Lanzarote is Arrecife."
  },
  {
    question: "What year was Planet of the Apes originally released?",
    options: ["2001", "2024", "1968", "1974"],
    correct: 2,
    explanation: "Planet of the Apes was originally released in 1968 with Charlton Heston as the lead character Taylor."
  },
  {
    question: "Who were Harry Potter's parents?",
    options: ["Vernon & Petunia Dursley", "James and Lily Potter", "Arthur and Molly Weasley", "Lucius and Narcissa Malfoy"],
    correct: 1,
    explanation: "Harry Potter's parents were James and Lily Potter."
  },
  {
    question: "What does NASA stand for?",
    options: ["Naval Aeronautics Sea Administration", "National Aeronautics and Space Administration", "Nothing About Space Actually", "National Aerobics Space Action"],
    correct: 1,
    explanation: "NASA stands for National Aeronautics and Space Administration."
  },
  {
    question: "What date is Valentine's Day?",
    options: ["24th December", "4th July", "14th February", "31st October"],
    correct: 2,
    explanation: "Valentine's Day is traditionally celebrated on the 14th of February."
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
    explanation: "William Shakespeare wrote the famous play 'Romeo and Juliet.'"
  },
  {
    question: "What is the boiling point of water at sea level?",
    options: ["100 degrees C", "90 degrees C", "110 degrees C", "8 degrees C"],
    correct: 0,
    explanation: "Water boils at 100 degrees Celsius at sea level."
  },
];

// === Quiz State ===
let currentQuestionIndex = 0;
let score = 0;
let shuffledQuestions = [];


// === DOM Elements ===
// Use a local getElement function to avoid 'document is not defined' in some environments
/**
 * Get DOM element by ID, throw error if not found.
 * @param {string} id
 * @returns {HTMLElement}
 */

function getElementById(id) {
  if (typeof document === 'undefined') {
    throw new Error('document is not defined. This code must run in a browser environment.');
  }
  const el = document.getElementById(id);
  if (!el) {
    throw new Error(`Element with id '${id}' not found in DOM.`);
  }
  return el;
}



const introSection = getElementById("intro");
const quizSection = getElementById("quiz");
const resultSection = getElementById("result");
const questionText = getElementById("questionText");
const answerList = getElementById("answerList");
const explanationBox = getElementById("explanation");
const nextButton = getElementById("nextBtn");
const scoreText = getElementById("scoreText");
let restartButton = null;



// === Display a Question ===
/**
 * Displays the current question and answer options.
 */


function handleAnswer(selectedIndex) {
  if (typeof document === 'undefined') {
    throw new Error('document is not defined. This code must run in a browser environment.');
  }
  const currentQuestion = shuffledQuestions[currentQuestionIndex];
  const correctIndex = typeof currentQuestion.correct === "number"
    ? currentQuestion.correct
    : parseInt(currentQuestion.correct, 10);

  const allOptions = document.querySelectorAll("#answerList .answer-option");
  allOptions.forEach((btn, idx) => {
    // Avoid parameter reassignment
    btn.disabled = true;
    btn.style.backgroundColor = idx === correctIndex ? "#c8e6c9" : "#ffcdd2";
    btn.setAttribute("aria-pressed", idx === selectedIndex ? "true" : "false");
  });

  if (selectedIndex === correctIndex) {
    score += 1;
  }

  explanationBox.textContent = `Explanation: ${currentQuestion.explanation}`;
  explanationBox.classList.remove("hidden");
  nextButton.classList.remove("hidden");
}


function showResult() {
  if (typeof document === 'undefined') {
    throw new Error('document is not defined. This code must run in a browser environment.');
  }
  quizSection.classList.add("hidden");
  resultSection.classList.remove("hidden");
  scoreText.textContent =
    `You scored ${score} out of ${shuffledQuestions.length}`;

  if (restartButton) {
    restartButton.remove();
    restartButton = null;
  }
  restartButton = document.createElement("button");
  restartButton.textContent = "Restart Quiz";
  restartButton.className = "restart-btn";
  restartButton.setAttribute("aria-label", "Restart Quiz");
  restartButton.addEventListener("click", startQuiz);
  resultSection.appendChild(restartButton);
}


function showQuestion() {
  if (typeof document === 'undefined') {
    throw new Error('document is not defined. This code must run in a browser environment.');
  }
  const currentQuestion = shuffledQuestions[currentQuestionIndex];
  const { question, options } = currentQuestion;

  questionText.textContent = question || "No question provided";
  answerList.innerHTML = "";

  // Accessibility: Use button elements, ARIA, and focus management
  options.forEach((option, idx) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.textContent = option;
    btn.className = "answer-option";
    btn.setAttribute("tabindex", "0");
    btn.setAttribute("role", "button");
    btn.setAttribute("aria-label", option);
    btn.dataset.index = idx;
    btn.style.backgroundColor = "";
    btn.disabled = false;
    btn.addEventListener("keydown", function handleKey(e) {
      if ((e.key === "Enter" || e.key === " ") && !btn.disabled) {
        handleAnswer(idx);
      }
    });
    answerList.appendChild(btn);
  });

  explanationBox.classList.add("hidden");
  nextButton.classList.add("hidden");
}


function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  shuffledQuestions = [...quizQuestions].sort(() => Math.random() - 0.5);

  introSection.classList.add("hidden");
  resultSection.classList.add("hidden");
  quizSection.classList.remove("hidden");

  showQuestion();
}

// === Answer Selection ===
/**
 * Handles answer selection, disables options, and shows explanation.
 * @param {number} selectedIndex - Index of selected answer
 */
// ...moved above...


function nextQuestion() {
  currentQuestionIndex += 1;
  if (currentQuestionIndex < shuffledQuestions.length) {
    showQuestion();
    // explanationBox.textContent = `Explanation: ${shuffledQuestions[currentQuestionIndex].explanation}`;
    // explanationBox.classList.remove("hidden");
  } else {
    showResult();
  }
}

// === Show Final Result ===
// ...moved above...

// === Event Listeners ===


if (typeof document !== 'undefined') {
  document.addEventListener("DOMContentLoaded", function domReadyHandler() {
    const startBtn = getElementById("startBtn");
    startBtn.addEventListener("click", startQuiz);
    nextButton.addEventListener("click", nextQuestion);
    answerList.addEventListener("click", function answerClickHandler(e) {
      if (
        e.target &&
        e.target.classList.contains("answer-option") &&
        !e.target.disabled
      ) {
        handleAnswer(Number(e.target.dataset.index));
      }
    });
  });
}
