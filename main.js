const toUpperFirstCase = (str) => {
  str = str.trim();
  return str.charAt(0).toUpperCase() + str.slice(1);
};

const checkAnswer = (event) => {
  const answer = event.target;
  const isCorrect = answer.getAttribute("correct");
  if (answer.classList.contains(`answer--${isCorrect}`)) answer.classList.remove(`answer--${isCorrect}`);
  else answer.classList.add(`answer--${isCorrect}`);
};

const showAnswer = (event) => {
  const question = event.target;
  const quiz = question.parentElement;
  const answer = quiz.querySelector("[correct=true]");
  if (answer.classList.contains("answer--true")) answer.classList.remove("answer--true");
  else answer.classList.add("answer--true");
};

const showAllAnswers = () => {
  const correctAnswers = document.querySelectorAll("[correct=true]");
  correctAnswers.forEach((ans) => {
    if (ans.classList.contains("answer--true")) ans.classList.remove("answer--true");
    else ans.classList.add("answer--true");
  });
};

const shuffleArr = (arr) => {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
};

const renderQuizzes = (quizzes) => {
  const list = document.getElementById("quiz-list");
  const questions = shuffleArr(quizzes);
  questions.forEach((quiz, id) => {
    const answers = shuffleArr(quiz.answers);
    // console.log(quiz.question);
    return (list.innerHTML += `
        <li class="quiz">
          <h3 class="question" onclick="showAnswer(event)">Câu ${id + 1}: ${toUpperFirstCase(quiz.question)}</h3>
          ${answers.reduce(
            (str, ans, idx) =>
              str +
              `<div class="answer" correct=${ans.isCorrect} onclick="checkAnswer(event)">${String.fromCharCode(
                idx + 65
              )}. ${toUpperFirstCase(ans.text)}</div>`,
            ""
          )}
        </li>
      `);
  });
};

const fetchQuizzes = async (path) => {
  try {
    const res = await fetch(path);
    const data = await res.json();
    renderQuizzes(data);
    document.querySelector(".loader").style.display = "none";
    // Handle error
  } catch (error) {
    console.log(error);
  }
};
