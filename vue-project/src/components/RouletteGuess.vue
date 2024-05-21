<template>
  <!--   <h2>ROULETTE</h2>
  <button class="button" @click="spin">Spin</button>
  <div></div> -->
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Document</title>
      <link rel="stylesheet" href="style.css" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Kanit:wght@200;500&family=News+Cycle:wght@400;700&family=Noto+Sans+JP&display=swap"
        rel="stylesheet"
      />
    </head>

    <body>
      <div class="container">
        <button type="button" class="buttons" id="button1">A</button>
        <button type="button" class="buttons" id="button2">B</button>
        <button type="button" class="buttons" id="button3">C</button>
        <button type="button" class="buttons" id="button4">D</button>
      </div>
      <div class="responsesContainer"></div>
      <script type="module" src="main.js"></script>
    </body>
  </html>
</template>

<script>
const DOMSelectors = {
  container: document.querySelector(".container"),
  buttons: document.querySelectorAll(".buttons"),
  button1: document.querySelector("#button1"),
  button2: document.querySelector("#button2"),
  button3: document.querySelector("#button3"),
  button4: document.querySelector("#button4"),
  responsesContainer: document.querySelector(".responsescontainer"),
};

function rgb() {
  let a = Math.round(Math.random() * 256);
  let b = Math.round(Math.random() * 256);
  let c = Math.round(Math.random() * 256);
  return { a, b, c };
}

function value() {
  const array = [1, 2, 3, 4];
  let randomValue = array[Math.floor(Math.random() * array.length)];
  return { randomValue };
}

let v = value();

function changeBackground() {
  for (let i = 1; i < 5; i++) {
    let w = rgb();
    DOMSelectors[
      `button${i}`
    ].style.backgroundColor = `rgb(${w.a}, ${w.b}, ${w.c})`;
    if (i === v.randomValue) {
      DOMSelectors.container.insertAdjacentHTML(
        "beforebegin",
        `<div class="card">
        <h1>${w.a},&nbsp;</h1>
        <h1>${w.b},&nbsp;</h1>
        <h1>${w.c}</h1>
        </div>`
      );
    }
  }
}

changeBackground();

function checkResult(event) {
  const correctButton = event.target.id;

  if (correctButton === `button${v.randomValue}`) {
    DOMSelectors.responsesContainer.insertAdjacentHTML(
      "afterbegin",
      `<div class="responsesButtons">
        <h1>Correct!</h1>
        <div class="reloadButton">
          <button type="button" onclick="location.reload()">Click here to play again!</button>
        </div>
      </div>`
    );
  } else {
    DOMSelectors.responsesContainer.insertAdjacentHTML(
      "afterend",
      `<div class="responsesButtons">
        <h1>Try again.</h1>
      </div>`
    );
  }
}

DOMSelectors.buttons.forEach((button) => {
  button.addEventListener("click", checkResult);
});
/* function value() {
  const array = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10
  ];
  let randomValue = array[Math.floor(Math.random() * array.length)];
  return { randomValue };
}

const numbers = [
  {
    value: 1,
    color: "red",
    even: false,
  },
  {
    value: 2,
    color: "black",
    even: true,
  },
  {
    value: 3,
    color: "red",
    even: false,
  },
  {
    value: 4,
    color: "black",
    even: true,
  },
  {
    value: 5,
    color: "red",
    even: false,
  },
  {
    value: 6,
    color: "black",
    even: true,
  },
  {
    value: 7,
    color: "red",
    even: false,
  },
  {
    value: 8,
    color: "black",
    even: true,
  },
  {
    value: 9,
    color: "red",
    even: false,
  },
  {
    value: 10,
    color: "black",
    even: true,
  },
];


//if randomvalue=betnumbers.value, add value to bank and display
//else, subtract bet number value from bank
//if selected red/black, add red/black number selected value to bank
//if selected odd/even, add odd/even number selected value to bank
//if selected single/multi digit number, add single/multi digit number to bank */
</script>

<style lang="scss" scoped>
:root {
  background-color: rgb(192, 192, 192);
  font-family: "Kanit", sans-serif;
  font-family: "News Cycle", sans-serif;
  font-family: "Noto Sans JP", sans-serif;
}
.container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.buttons {
  height: 200px;
  width: 200px;
  margin: 2%;
  border: none;
  border-radius: 2%;
}
.card {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: aliceblue;
}
.reloadButton {
  display: flex;
  justify-content: center;
  align-items: center;
}
.responsesButtons {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
</style>
