
const flashcards = [
    {
        question: "What is HTML?",
        answer: "HTML stands for HyperText Markup Language. It is used to structure web pages."
    },
    {
        question: "What is CSS?",
        answer: "CSS stands for Cascading Style Sheets. It controls the design and appearance of websites."
    },
    {
        question: "What is JavaScript?",
        answer: "JavaScript is a programming language used to make websites interactive."
    },
    {
        question: "What is the use of frontend?",
        answer: "Frontend refers to the part of a website that users interact with directly, typically involving HTML, CSS, and JavaScript."
    },
    {
        question: "What is a Mid tier?",
        answer: "A Mid tier is a component in a three-tier architecture that handles business logic and data processing."
    },
    {
        question: "What is the Backend?",
        answer: "The backend refers to the server-side of a website, handling data processing and business logic."
    },
    {
        question: "What are frontend frameworks?",
        answer: "Frontend frameworks are libraries that provide a structure for building user interfaces, making development more efficient."
    },
    {
        question: "What are backend technologies?",
        answer: "Backend technologies are the server-side components and tools used to build and maintain the server-side of a website or application."
    },
    {
        question: "What is an event in JavaScript?",
        answer: "An event is an action that happens in a browser, such as a click or key press."
    },
    {
        question: "What is a CSS transform?",
        answer: "A CSS transform changes an element's position, size, rotation or shape."
    }
];

let currentIndex = 0;
let isFlipped = false;

const flashcard = document.getElementById("flashcard");
const questionText = document.getElementById("question");
const answerText = document.getElementById("answer");
const cardCount = document.getElementById("card-count");
const progressPercent = document.getElementById("progress-percent");
const progressFill = document.getElementById("progress-fill");

const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const flipBtn = document.getElementById("flip-btn");
const shuffleBtn = document.getElementById("shuffle-btn");

function displayCard() {
    const card = flashcards[currentIndex];

    questionText.textContent = card.question;
    answerText.textContent = card.answer;

    cardCount.textContent = `Card ${currentIndex + 1} of ${flashcards.length}`;

    const progress = ((currentIndex + 1) / flashcards.length) * 100;

    progressFill.style.width = `${progress}%`;
    progressPercent.textContent = `${Math.round(progress)}%`;

    prevBtn.disabled = currentIndex === 0;
    nextBtn.disabled = currentIndex === flashcards.length - 1;

    isFlipped = false;
    flashcard.classList.remove("flipped");
}

function flipCard() {
    isFlipped = !isFlipped;
    flashcard.classList.toggle("flipped");
}

function nextCard() {
    if (currentIndex < flashcards.length - 1) {
        currentIndex++;
        displayCard();
    }
}

function previousCard() {
    if (currentIndex > 0) {
        currentIndex--;
        displayCard();
    }
}

function shuffleCards() {
    for (let i = flashcards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));

        [flashcards[i], flashcards[j]] = [flashcards[j], flashcards[i]];
    }

    currentIndex = 0;
    displayCard();
}

flashcard.addEventListener("click", flipCard);
flipBtn.addEventListener("click", flipCard);
nextBtn.addEventListener("click", nextCard);
prevBtn.addEventListener("click", previousCard);
shuffleBtn.addEventListener("click", shuffleCards);

document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowRight") {
        nextCard();
    } else if (event.key === "ArrowLeft") {
        previousCard();
    } else if (event.key === " " && event.target.tagName !== "BUTTON") {
        event.preventDefault();
        flipCard();
    }
});

displayCard();