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
        <link rel="canonical" href="https://thangndgit.github.io/hust-quiz/${quizId}.html" />
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
        <title>Hust quiz - ${quizId}</title>
        <meta
          name="description"
          content="Tổng hợp câu hỏi trắc nghiệm môn học ${quizId}, Đại học Bách Khoa Hà Nội"
        />
        <meta property="og:title" content="Hust quiz - ${quizId}" />
        <meta
          property="og:description"
          content="Tổng hợp câu hỏi trắc nghiệm môn học ${quizId}, Đại học Bách Khoa Hà Nội"
        />
        <link rel="stylesheet" href="../style.css" />
        <!-- Google tag (gtag.js) -->
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-CTFF0QEV49"></script>
        <script>
          window.dataLayer = window.dataLayer || [];
          function gtag() {
            dataLayer.push(arguments);
          }
          gtag("js", new Date());
          gtag("config", "G-CTFF0QEV49");
        </script>
      </head>
    
      <body>
        <div id="title-wrapper">
          <h1 id="quiz-title" onclick="showAllAnswers()">Hust quiz - ${quizId}</h1>
          <span class="loader"></span>
          <a class="download-quiz-button" style="display: none !important" title="Download this as JSON" href="#"
            ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path
                d="M433.9 129.9l-83.9-83.9A48 48 0 0 0 316.1 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V163.9a48 48 0 0 0 -14.1-33.9zM224 416c-35.3 0-64-28.7-64-64 0-35.3 28.7-64 64-64s64 28.7 64 64c0 35.3-28.7 64-64 64zm96-304.5V212c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12V108c0-6.6 5.4-12 12-12h228.5c3.2 0 6.2 1.3 8.5 3.5l3.5 3.5A12 12 0 0 1 320 111.5z"
              />
            </svg>
          </a>
        </div>

        <ul id="quiz-list"></ul>
    
        <script type="application/ld+json">
          {
            "@context": "http://schema.org",
            "@type": "WebPage",
            "name": "Hust quiz - ${quizId}",
            "description": "Tổng hợp câu hỏi trắc nghiệm môn học ${quizId}, Đại học Bách Khoa Hà Nội",
            "url": "https://thangndgit.github.io/hust-quiz/${quizId}.html",
          }
        </script>
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
