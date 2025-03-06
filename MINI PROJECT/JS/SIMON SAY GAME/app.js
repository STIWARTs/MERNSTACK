//STEP 1
let gameSeq = [];
let userSeq = [];

let btns = ["yellow", "red", "purple", "green"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function () {
  //   console.log("game started");
  if (started == false) {
    console.log("game is started");
    started = true;

    levelUp();
  }
});

//STEP 2
function gameFlash(btn) {
  btn.classList.add("flash");
  setTimeout(function () {
    btn.classList.remove("flash");
  }, 250);
}

function userFlash(btn) {
  btn.classList.add("userflash");
  setTimeout(function () {
    btn.classList.remove("userflash");
  }, 250);
}

function levelUp() {
  userSeq = [];
  level++;
  h2.innerText = `Level ${level}`; //level update in h2

  //random btn choose
  let randIdx = Math.floor(Math.random() * 3); //random index generate
  let randColor = btns[randIdx]; //choosing random color using random index
  let randBtn = document.querySelector(`.${randColor}`); //selecting button
  //   console.log(randIdx);
  //   console.log(randColor);
  //   console.log(randBtn);
  gameSeq.push(randColor);
  console.log(gameSeq);
  gameFlash(randBtn);
}

//step 4
function checkAns(idx) {
  if (userSeq[idx] === gameSeq[idx]) {
    if (userSeq.length == gameSeq.length) {
      setTimeout(levelUp, 1000);
    }
  } else {
    //gameover
    h2.innerHTML = `Game over! Your score is <b>${level}</b> <br> Press any key to start.`;
    document.querySelector("body").style.backgroundColor = "red";
    setTimeout(function () {
      document.querySelector("body").style.backgroundColor = "white";
    }, 150);
    reset();
  }
}

//Step 3
function btnPress() {
  console.log(this);
  let btn = this;
  userFlash(btn);

  userColor = btn.getAttribute("id");
  //   console.log(userColor);
  userSeq.push(userColor);

  checkAns(userSeq.length - 1); //last index of user seq
}

let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns) {
  btn.addEventListener("click", btnPress);
}

//Step 5
function reset() {
  started = false;
  gameSeq = [];
  userSeq = [];
  level = 0;
}
