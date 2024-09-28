function getQueryParams() {
  const params = new URLSearchParams(window.location.search);
  return {
    topic: params.get("topic"),
  };
}

function loadQuiz(topic) {
  const quizTitle = document.getElementById("quiz-title");
  const quizContent = document.getElementById("quiz-content");

  quizTitle.innerText = `${topic} Quiz`;

  const questions = {
    "Mastering CLI": [
      {
        question: "What does CLI stand for?",
        choices: [
          "Command Line Interface",
          "Common Language Interface",
          "Computer Language Interface",
          "Code Language Interpreter",
        ],
        answer: "Command Line Interface",
      },
      {
        question: "What does GUI stand for?",
        choices: [
          "General Utility Interface",
          "Global Unique Identifier",
          "Graphical User Interface",
          "Generic User Interface",
        ],
        answer: "Graphical User Interface",
      },
      {
        question: "How do you list files in a directory using CLI?",
        choices: ["list", "show", "ls", "dir"],
        answer: "ls",
      },
      {
        question: "What command is used to create a new directory in CLI?",
        choices: ["newdir", "mkdir", "create", "makedir"],
        answer: "mkdir",
      },
      {
        question: "How do you remove a file in CLI?",
        choices: ["remove", "delete", "rm", "del"],
        answer: "rm",
      },
      {
        question:
          "What command is used to navigate to the parent directory in CLI?",
        choices: ["cd home", "cd ..", "cd ~", "cd /"],
        answer: "cd ..",
      },
      {
        question: "How do you create a new file in CLI?",
        choices: ["create", "touch", "newfile", "mkfile"],
        answer: "touch",
      },
      {
        question: "What command is used to remove a directory in CLI?",
        choices: ["clrdir", "rmdir", "deldir", "clear"],
        answer: "rmdir",
      },
      {
        question: "How do you display the current directory path in CLI?",
        choices: ["pwd", "dir", "path", "showdir"],
        answer: "pwd",
      },
      {
        question:
          "What command is used to clear the bash terminal screen in CLI?",
        choices: ["cls", "clear", "clrt", "clean"],
        answer: "clear",
      },
    ],
    "Git & GitHub": [
      {
        question: "What is Git?",
        choices: [
          "A version control system",
          "A programming language",
          "A web framework",
          "An operating system",
        ],
        answer: "A version control system",
      },
      {
        question:
          "What command is used in the Git to initialize a repository in the current directory?",
        choices: ["git init", "git start", "git create", "git setup"],
        answer: "git init",
      },
      {
        question: "How do you clone a repository from GitHub?",
        choices: ["git push", "git pull", "git clone", "git fetch"],
        answer: "git clone",
      },
      {
        question: "What command is used to stage changes for the next commit?",
        choices: ["git stage", "git prepare", "git add", "git commit"],
        answer: "git add",
      },
      {
        question: "How do you commit changes in Git?",
        choices: ["git commit", "git push", "git stage", "git add"],
        answer: "git commit",
      },
      {
        question:
          "What command is used to check the status of the working directory and staging area in Git?",
        choices: ["git status", "git check", "git info", "git stat"],
        answer: "git status",
      },
      {
        question: "How do you create a new branch in Git?",
        choices: [
          "git create-branch [branch-name]",
          "git branch-new [branch-name]",
          "git new-branch [branch-name]",
          "git branch [branch-name]",
        ],
        answer: "git branch [branch-name]",
      },
      {
        question: "What command is used to switch to a different branch in Git?",
        choices: [
          "git switch or git checkout",
          "git shift",
          "git change",
          "git branch",
        ],
        answer: "git switch or git checkout",
      },
      {
        question: "How do you merge two branches in Git?",
        choices: ["git merge", "git join", "git combine", "git connect"],
        answer: "git merge",
      },
      {
        question: "What is a Git repository?",
        choices: [
          "A directory where Git stores all the project files and history",
          "A file containing the project's code",
          "A web service for collaborating on code",
          "A programming language used for version control",
        ],
        answer:
          "A directory where Git stores all the project files and history",
      },
    ],
    HTML: [
      {
        question: "What does HTML stand for?",
        choices: [
          "Hyper Text Markup Language",
          "Hyperlinks and Text Markup Language",
          "Home Tool Markup Language",
          "Hyper Tool Markup Language",
        ],
        answer: "Hyper Text Markup Language",
      },
      {
        question:
          "What is the correct HTML element for inserting a line break?",
        choices: ["<br>", "<lb>", "<break>", "<ln>"],
        answer: "<br>",
      },
      {
        question:
          "Which HTML attribute specifies an alternate text for an image, if the image cannot be displayed?",
        choices: ["alt", "title", "src", "href"],
        answer: "alt",
      },
      {
        question: "How do you create an HTML boilerplate in VS Code?",
        choices: [
          "Type 'html-boiler' and press Enter or Tab",
          "Type 'template' and press Enter or Tab",
          "Type '!' and press Enter or Tab",
          "Type 'start' and press Enter",
        ],
        answer: "Type '!' and press Enter or Tab",
      },
      {
        question:
          "Which HTML attribute is used to specify the type of an input element?",
        choices: ["name", "type", "placeholder", "value"],
        answer: "type",
      },
      {
        question: "What is the HTML tag used for creating an unordered list?",
        choices: ["<ul>", "<ol>", "<li>", "<list>"],
        answer: "<ul>",
      },
      {
        question: "Which HTML element is used for the largest heading?",
        choices: ["<h1>", "<head>", "<h6>", "<heading>"],
        answer: "<h1>",
      },
      {
        question: "What is the correct HTML for creating a hyperlink?",
        choices: [
          "<a href='http://www.example.com'>Example</a>",
          "<a url='http://www.example.com'>Example</a>",
          "<a>http://www.example.com</a>",
          "<link href='http://www.example.com'>Example</link>",
        ],
        answer: "<a href='http://www.example.com'>Example</a>",
      },
      {
        question:
          "What Emmet abbreviation can you type in VS Code to create a span element?",
        choices: ["div", "span", "p", "s"],
        answer: "span",
      },
      {
        question:
          "Which HTML element is used to define important text that is typically displayed in bold?",
        choices: ["<strong>", "<em>", "<u>", "<mark>"],
        answer: "<strong>",
      },
    ],
    "CSS Basics": [
      {
        question: "What does CSS stand for?",
        choices: [
          "Cascading Style Sheets",
          "Creative Style Sheets",
          "Computer Style Sheets",
          "Colorful Style Sheets",
        ],
        answer: "Cascading Style Sheets",
      },
      {
        question:
          "Which CSS property is used to change the text color of an element?",
        choices: ["color", "text-color", "font-color", "foreground-color"],
        answer: "color",
      },
      {
        question:
          "Which CSS property is used to change the font size of an element?",
        choices: ["text-size", "font-style", "size", "font-size"],
        answer: "font-size",
      },
      {
        question:
          "Which CSS property is used to create space around elements, inside of borders?",
        choices: ["spacing", "border-spacing", "margin", "padding"],
        answer: "padding",
      },
      {
        question:
          "In CSS, which concept refers to the fundamental structure of every HTML element, comprising its content, padding, border, and margin?",
        choices: ["border box", "border", "Element Structure", "Box Model"],
        answer: "Box Model",
      },
      {
        question:
          "Which CSS property is used to define the background color of an element?",
        choices: ["background-color", "bg-color", "color", "bgcolor"],
        answer: "background-color",
      },
      {
        question: "Which CSS property is used to make text bold?",
        choices: ["font-style", "bold", "text-style", "font-weight"],
        answer: "font-weight",
      },
      {
        question: "Which CSS property is used to align text?",
        choices: ["text-align", "align", "text-style", "font-align"],
        answer: "text-align",
      },
      {
        question:
          "Which CSS property is used to create space between lines of text?",
        choices: ["spacing", "line-height", "margin", "line-spacing"],
        answer: "line-height",
      },
    ],
    "Intermediate CSS": [
      {
        question: "What is the main purpose of Flexbox in CSS?",
        choices: [
          "To create grid layouts",
          "To style text and fonts",
          "To align elements vertically and horizontally",
          "To apply animations",
        ],
        answer: "To align elements vertically and horizontally",
      },
      {
        question:
          "Which CSS property is used to define the direction of flexible items in a flex container?",
        choices: [
          "flex-direction",
          "direction",
          "flex-wrap",
          "justify-content",
        ],
        answer: "flex-direction",
      },
      {
        question: "What does the justify-content property do in Flexbox?",
        choices: [
          "Aligns flex items vertically",
          "Aligns flex items horizontally",
          "Adjusts the space between flex items",
          "Changes the order of flex items",
        ],
        answer: "Aligns flex items horizontally",
      },
      {
        question:
          "Which value of the flex-wrap property allows flex items to wrap onto multiple lines?",
        choices: ["wrap", "nowrap", "wrap-reverse", "multi-wrap"],
        answer: "wrap",
      },
      {
        question: "What is the purpose of the display: grid property in CSS?",
        choices: [
          "To create flexible layouts with rows and columns",
          "To display an element as a block-level flex container",
          "To align elements vertically and horizontally",
          "To apply animations",
        ],
        answer: "To create flexible layouts with rows and columns",
      },
      {
        question:
          "Which CSS property is used to specify the size of grid columns?",
        choices: [
          "grid-column-size",
          "column-size",
          "grid-column",
          "grid-template-columns",
        ],
        answer: "grid-template-columns",
      },
      {
        question: "What does the position: relative property do in CSS?",
        choices: [
          "Positions an element relative to its normal position",
          "Positions an element absolutely within its containing element",
          "Positions an element relative to the viewport",
          "Positions an element relative to its parent element",
        ],
        answer: "Positions an element relative to its normal position",
      },
      {
        question:
          "Which CSS property is used to specify the positioning mode of an element?",
        choices: ["position", "display", "float", "align"],
        answer: "position",
      },
      {
        question: "Which property is used to define the space between grid items?",
        choices: [
          "grid-gap",
          "grid-spacing",
          "grid-margin",
          "grid-padding",
        ],
        answer: "grid-gap",
      },
      {
        question:
          "In Flexbox, which property is used to align items along the cross axis?",
        choices: ["align-items", "justify-content", "flex-direction", "align-content"],
        answer: "align-items",
      },
    ],
    "JavaScript Basics": [
      {
        question: "What is the purpose of 'console.log()' in JavaScript?",
        choices: [
          "To log messages to the server console",
          "To print output to the browser console",
          "To define a function",
          "To execute a function",
        ],
        answer: "To print output to the browser console",
      },
      {
        question:
          "Which keyword is used to declare a variable in JavaScript when its value is intended to remain unchanged?",
        choices: ["let", "var", "const", "variable"],
        answer: "const",
      },
      {
        question: "Which symbol is used for single line comments in JavaScript?",
        choices: ["//", "/* */", "<!-- -->", "#"],
        answer: "//",
      },
      {
        question: "What does 'NaN' stand for in JavaScript?",
        choices: [
          "Not a Number",
          "Null and None",
          "Number and Null",
          "None and NaN",
        ],
        answer: "Not a Number",
      },
      {
        question:
          "Which method is used to add an element to the end of an array in JavaScript?",
        choices: [".push()", ".pop()", ".shift()", ".unshift()"],
        answer: ".push()",
      },
      {
        question: "What is the result of 3 + '3' in JavaScript?",
        choices: ["6", "33", "Error", "NaN"],
        answer: "33",
      },
      {
        question:
          "Which operator is used to compare both value and type in JavaScript?",
        choices: ["==", "===", "!=", "!=="],
        answer: "===",
      },
      {
        question: "What does the 'typeof' operator return in JavaScript?",
        choices: [
          "The type of a variable",
          "The value of a variable",
          "The size of a variable",
          "The memory address of a variable",
        ],
        answer: "The type of a variable",
      },
      {
        question:
          "Which method is used to remove the last element from an array in JavaScript?",
        choices: [".pop()", ".push()", ".shift()", ".unshift()"],
        answer: ".pop()",
      },
      {
        question:
          "What is the default value of an uninitialized variable in JavaScript?",
        choices: ["null", "0", "undefined", "NaN"],
        answer: "undefined",
      },
    ],

    "DOM Manipulation": [
      {
        question: "What is the purpose of the DOM in JavaScript?",
        choices: [
          "To interact with HTML elements",
          "To define variables",
          "To create animations",
          "To handle server requests",
        ],
        answer: "To interact with HTML elements",
      },
      {
        question:
          "Which method is used to get an HTML element by its ID in JavaScript?",
        choices: [
          "getElementById()",
          "getElementsByClassName()",
          "getElementsByTagName()",
        ],
        answer: "getElementById()",
      },
      {
        question: "What does the 'innerText' property do in JavaScript?",
        choices: [
          "Returns the HTML content of an element",
          "Returns the text content of an element",
          "Changes the style of an element",
          "Adds a new element to the DOM",
        ],
        answer: "Returns the text content of an element",
      },
      {
        question: "Which method is used to create a new HTML element to the DOM?",
        choices: [
          "createElement()",
          "appendChild()",
          "removeChild()",
          "replaceChild()",
        ],
        answer: "createElement()",
      },
      {
        question: "What does the 'addEventListener()' method do in JavaScript?",
        choices: [
          "Adds an event listener to an HTML element",
          "Changes the style of an element",
          "Returns the HTML content of an element",
          "Removes an HTML element from the DOM",
        ],
        answer: "Adds an event listener to an HTML element",
      },
      {
        question:
          "What is the purpose of the 'querySelector()' method in JavaScript?",
        choices: [
          "To select the first HTML element that matches a specified CSS selector",
          "To create a new HTML element",
          "To remove an HTML element from the DOM",
          "To add an event listener to an HTML element",
        ],
        answer:
          "To select the first HTML element that matches a specified CSS selector",
      },
      {
        question:
          "What is the purpose of the 'textContent' property in JavaScript?",
        choices: [
          "To get the text content of an element",
          "To set the text content of an element",
          "To get the HTML content of an element",
          "To set the HTML content of an element",
        ],
        answer: "To set the HTML content of an element",
      },
      {
        question:
          "Which method is used to remove an HTML element from the DOM?",
        choices: ["remove()", "deleteElement()", "detach()", "reduce()"],
        answer: "remove()",
      },
      {
        question: "What does the 'classList' property do in JavaScript?",
        choices: [
          "Returns a list of all classes of an element",
          "Adds a new class to an element",
          "Removes a class from an element",
          "Checks if an element has a specific class",
        ],
        answer: "Returns a list of all classes of an element",
      },
      {
        question:
          "What is the purpose of the 'setAttribute()' method in JavaScript?",
        choices: [
          "To get the value of an attribute",
          "To set the value of an attribute",
          "To remove an attribute",
          "To check if an attribute exists",
        ],
        answer: "To set the value of an attribute",
      },
    ],
  };

  const selectedQuestions = questions[topic] || [];
  let currentQuestionIndex = 0;
  const userAnswers = [];


  function showSummary() {
    quizContent.classList.add("summary");
    quizContent.innerHTML = "<span></span>";
    const summaryList = document.createElement("ul");
    let score = 0;
    selectedQuestions.forEach((questionObj, index) => {
      const summaryItem = document.createElement("li");
      const userAnswer = userAnswers[index];
      const isCorrect = userAnswer === questionObj.answer;
      
      if (isCorrect) {
        score++;
      }

      // Create elements for question, user answer, correct answer, and status
      const questionParagraph = document.createElement("p");
      questionParagraph.innerHTML = `<strong>Question:</strong><br>${questionObj.question}`;

      const userAnswerParagraph = document.createElement("p");
      userAnswerParagraph.innerHTML = `${isCorrect ? `<svg width="114" height="114" viewBox="0 0 114 114" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="56.7969" cy="56.7969" r="56.7969" fill="#17A70A"/>
<path d="M25.6484 61.8355L44.9677 77.6773C46.989 79.3347 49.9459 79.1555 51.7522 77.2661L88.3998 38.9336" stroke="white" stroke-width="12" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`:
        `<svg width="114" height="114" viewBox="0 0 114 114" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="56.7969" cy="56.7969" r="56.7969" fill="#D71717"/>
<path d="M37.5547 77.6815L77.4041 36" stroke="white" stroke-width="12" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M35.9982 36.916L77.6797 76.7654" stroke="white" stroke-width="12" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
 <strong>Your Answer:</strong>  `}`;
      const userAnswerText = document.createTextNode(userAnswer);
      userAnswerParagraph.appendChild(userAnswerText);

      //       const statusParagraph = document.createElement("span");
      //       statusParagraph.innerHTML = ` ${isCorrect ? `<svg width="114" height="114" viewBox="0 0 114 114" fill="none" xmlns="http://www.w3.org/2000/svg">
      // <circle cx="56.7969" cy="56.7969" r="56.7969" fill="#17A70A"/>
      // <path d="M25.6484 61.8355L44.9677 77.6773C46.989 79.3347 49.9459 79.1555 51.7522 77.2661L88.3998 38.9336" stroke="white" stroke-width="12" stroke-linecap="round" stroke-linejoin="round"/>
      // </svg>
      // `:
      //         `<svg width="114" height="114" viewBox="0 0 114 114" fill="none" xmlns="http://www.w3.org/2000/svg">
      // <circle cx="56.7969" cy="56.7969" r="56.7969" fill="#D71717"/>
      // <path d="M37.5547 77.6815L77.4041 36" stroke="white" stroke-width="12" stroke-linecap="round" stroke-linejoin="round"/>
      // <path d="M35.9982 36.916L77.6797 76.7654" stroke="white" stroke-width="12" stroke-linecap="round" stroke-linejoin="round"/>
      // </svg>
      // `
      //         } `;

      const correctAnswerParagraph = document.createElement("p");
      correctAnswerParagraph.innerHTML = `< strong > Correct Answer:</strong > `;
      const correctAnswerText = document.createTextNode(questionObj.answer);
      correctAnswerParagraph.appendChild(correctAnswerText);


      // Append all paragraphs to the summary item
      summaryItem.appendChild(questionParagraph);
      summaryItem.appendChild(userAnswerParagraph);

      // summaryItem.appendChild(statusParagraph);

      summaryList.appendChild(summaryItem);
      summaryList.classList.add("summary-list");
    });

    const scoreContainer = document.createElement("div");
    scoreContainer.classList.add("center")


    const congratsElement = document.createElement("h2");
    congratsElement.textContent = `Congratulations!`
    congratsElement.classList.add("text-center")
    scoreContainer.appendChild(congratsElement);

    const congratsParag = document.createElement("p");
    congratsParag.textContent = `You scored: `
    scoreContainer.appendChild(congratsParag);


    const scoreElement = document.createElement("p");
    scoreElement.innerHTML = `<span class="final-score">${score}</span>/${selectedQuestions.length}`;
    scoreContainer.appendChild(scoreElement);

    quizContent.appendChild(scoreContainer);

    const btnContainer = document.createElement("div");
    quizContent.appendChild(btnContainer);

    const retakeButton = document.createElement("button");
    retakeButton.textContent = "Retake Quiz";
    retakeButton.addEventListener("click", function () {
      currentQuestionIndex = 0;
      userAnswers.length = 0;
      quizContent.classList.remove("summary")
      renderQuestion();

    });
    btnContainer.appendChild(retakeButton);
    btnContainer.classList.add("btns-container")

    const homeButton = document.createElement("button");
    homeButton.textContent = "Back to Homepage";
    homeButton.addEventListener("click", function () {
      window.location.href = "index.html";
    });
    btnContainer.appendChild(homeButton);


    quizContent.appendChild(summaryList);

    localStorage.setItem(topic, score);
  }

  function renderQuestion() {
    const currentQuestion = selectedQuestions[currentQuestionIndex];
    const form = document.createElement("form");
    const questionElement = document.createElement("div");
    const questionLabel = document.createElement("label");
    questionLabel.classList.add("question-label");
    questionLabel.textContent =
      currentQuestionIndex + 1 + ". " + currentQuestion.question;
    questionElement.appendChild(questionLabel);

    const choicesList = document.createElement("ul");
    currentQuestion.choices.forEach((choice, choiceIndex) => {
      const choiceElement = document.createElement("li");
      const choiceInput = document.createElement("input");
      choiceInput.type = "radio";
      choiceInput.name = `question${currentQuestionIndex}`;
      choiceInput.value = choice;
      choiceInput.id = `question${currentQuestionIndex}-choice${choiceIndex}`;
      const choiceLabel = document.createElement("label");
      choiceLabel.textContent = choice;
      choiceLabel.htmlFor = `question${currentQuestionIndex}-choice${choiceIndex}`;
      choiceElement.appendChild(choiceInput);
      choiceElement.appendChild(choiceLabel);
      choicesList.appendChild(choiceElement);
    });
    questionElement.appendChild(choicesList);
    form.appendChild(questionElement);

    const nextButton = document.createElement("button");
    nextButton.classList.add("next-btn");
    nextButton.textContent =
      currentQuestionIndex === selectedQuestions.length - 1
        ? "Submit"
        : "Next >";
    nextButton.addEventListener("click", function (event) {
      event.preventDefault();
      const selectedChoice = document.querySelector(
        `input[name="question${currentQuestionIndex}"]:checked`
      );
      if (selectedChoice) {
        userAnswers[currentQuestionIndex] = selectedChoice.value;
        currentQuestionIndex++;
        if (currentQuestionIndex < selectedQuestions.length) {
          renderQuestion();
        } else {
          showSummary();
        }
      } else {
        alert(
          "Please select an answer before proceeding to the next question."
        );
      }
    });
    form.appendChild(nextButton);

    quizContent.innerHTML = "";
    quizContent.appendChild(form);
  }

  renderQuestion();
}

const { topic } = getQueryParams();
if (topic) {
  loadQuiz(topic);
} else {
  document.getElementById("quiz-title").innerText = "No topic selected";
}


// // Prevent Inspect Element

// document.addEventListener("contextmenu", function (e) {
//     e.preventDefault();
// });

// document.addEventListener("keydown", function (e) {
//     if (
//         e.keyCode == 123 ||
//         (e.ctrlKey && e.shiftKey && e.keyCode == 73) ||
//         (e.ctrlKey && e.keyCode == 85)
//     ) {
//         e.preventDefault();
//     }
// });

// Prevent Copy Paste

document.addEventListener("contextmenu", function (e) {
  e.preventDefault();
});

document.addEventListener("keydown", function (e) {
  if (
    (e.ctrlKey || e.metaKey) &&
    (e.key === "c" || e.key === "x" || e.key === "v")
  ) {
    e.preventDefault();
  }
});

document.addEventListener("dragstart", function (e) {
  e.preventDefault();
});

document.querySelectorAll(".no-copy").forEach((element) => {
  element.addEventListener("copy", function (e) {
    e.preventDefault();
  });
  element.addEventListener("cut", function (e) {
    e.preventDefault();
  });
  element.addEventListener("paste", function (e) {
    e.preventDefault();
  });
});
