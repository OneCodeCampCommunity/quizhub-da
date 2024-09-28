const topicCodes = {
  "Markdown": "MARKDOWN123",
  "Python Essentials": "PROGLANG",
  "SQL": "TABLES",
  "Pandas Basics": "PANDASBASICS",
  "Pandas Intermediate": "PANDASINTERMEDIATE",
  "Data Visualization": "DATAVIS"
};

const buttons = document.querySelectorAll(".quiz-button");

buttons.forEach((button) => {
  button.addEventListener("click", function () {
    const topic = this.getAttribute("data-topic");
    const enteredCode = prompt(`Enter the code to access the ${topic} quiz:`);
    const correctCode = topicCodes[topic];
    if (enteredCode === correctCode) {
      window.location.href = `dashboard.html?topic=${encodeURIComponent(
        topic
      )}`;
    } else {
      alert("Incorrect code. Please try again.");
    }
  });
});

function retrieveScore() {
  const topics = [
    "Markdown",
    "Python Essentials",
    "SQL",
    "Pandas Basics",
    "Pandas Intermediate",
    "Data Visualization"
  ];

  const topicIds = {
    "Markdown": "MARKDOWN123",
    "Python Essentials": "PROGLANG",
    "SQL": "TABLES",
    "Pandas Basics": "PANDASBASICS",
    "Pandas Intermediate": "PANDASINTERMEDIATE",
    "Data Visualization": "DATAVIS"
  };

  topics.forEach((topic) => {
    let score = localStorage.getItem(topic) || 0; // Retrieving score from localStorage, defaulting to 0 if null
    const id = topicIds[topic];

    const scoreInfo = document.getElementById(id);
    if (scoreInfo) {
      scoreInfo.innerHTML = `
            <span>COMPLETION RATE:
              <span class="${score === 0 ? "orange" : "green"}">${
        score === 0 ? "0%" : "100%"
      }</span>
            </span>
            <span>SCORE:
              <span class="strong ${
                score === 0 ? "orange" : "green"
              }">${score}/10</span>            
            </span>
        `;
    }
  });
}

retrieveScore();

// Prevent Inspect Element
// document.addEventListener("contextmenu", function (e) {
//   e.preventDefault();
// });

// document.addEventListener("keydown", function (e) {
//   if (
//     e.keyCode == 123 ||
//     (e.ctrlKey && e.shiftKey && e.keyCode == 73) ||
//     (e.ctrlKey && e.keyCode == 85)
//   ) {
//     e.preventDefault();
//   }
// });
