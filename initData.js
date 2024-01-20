// Node only, run after update json files in data folder
const fs = require("fs");

const generateQuizzesHtml = (quizId) => {
  const html = `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="keywords" content="hust, quiz, it4422, it4079,it4470, it4898" />
        <title>Hust quiz - ${quizId}</title>
        <link rel="stylesheet" href="../style.css" />
      </head>
    
      <body>
        <h1 id="quiz-title" onclick="showAllAnswers()">
          Hust quiz - ${quizId}<span class="loader"></span>
        </h1>
        <ul id="quiz-list"></ul>
    
        <script src="../main.js"></script>
        <script>
          fetchQuizzes('../data/${quizId}.json')
        </script>
      </body>
    </html>`;

  fs.writeFileSync(`./quiz/${quizId}.html`, html, "utf-8");
  console.log(`Generated ${quizId}.html`);
};

const generateConstantsJs = (constants) => {
  const { quizIds } = constants;
  const js = `const quizIds = ${JSON.stringify(quizIds)};`;
  fs.writeFileSync("./constants.js", js, "utf-8");
  console.log("Generated constants.js");
};

fs.readdir("./data", (err, files) => {
  if (err) {
    console.error("Error reading data folder:", err);
    return;
  }
  const quizIds = files.map((fileName) => fileName.replace(".json", ""));
  generateConstantsJs({ quizIds });
  quizIds.forEach((quizId) => generateQuizzesHtml(quizId));
});
