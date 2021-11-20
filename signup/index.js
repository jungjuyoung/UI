const slidePage = document.querySelector(".slidePage");
const startBtn = document.querySelector(".startBtn");
const prevBtnSec = document.querySelector(".prev-1");
const nextBtnSec = document.querySelector(".next-1");
const prevBtnThird = document.querySelector(".prev-2");
const nextBtnThird = document.querySelector(".next-2");
const prevBtnForth = document.querySelector(".prev-3");
const submitBtn = document.querySelector(".submit");
const closeBtn = document.querySelector(".close");
const progressText = document.querySelectorAll(".step p");
const progressCheck = document.querySelectorAll(".step .check");
const bullet = document.querySelectorAll(".step .bullet");
const selBank = document.querySelector(".select select").value;

let max = 4;
let current = 1;
const timeout = 800;
startBtn.addEventListener("click", () => {
  slidePage.style.marginLeft = "-25%";
  bullet[current - 1].classList.add("active");
  progressCheck[current - 1].classList.add("active");
  current += 1;
});

nextBtnSec.addEventListener("click", () => {
  slidePage.style.marginLeft = "-50%";
  bullet[current - 1].classList.add("active");
  progressCheck[current - 1].classList.add("active");
  current += 1;
});

nextBtnThird.addEventListener("click", () => {
  slidePage.style.marginLeft = "-75%";
  bullet[current - 1].classList.add("active");
  progressCheck[current - 1].classList.add("active");
  current += 1;
});

submitBtn.addEventListener("click", () => {
  slidePage.style.marginLeft = "-100%";
  bullet[current - 1].classList.add("active");
  progressCheck[current - 1].classList.add("active");
  current += 1;
  setTimeout(() => {
    location.reload();
  }, timeout);
});

closeBtn.addEventListener("click", () => {
  alert("닫기");
});

prevBtnSec.addEventListener("click", () => {
  slidePage.style.marginLeft = "0";
  bullet[current - 2].classList.remove("active");
  progressCheck[current - 2].classList.remove("active");
  current -= 1;
});

prevBtnThird.addEventListener("click", () => {
  slidePage.style.marginLeft = "-25%";
  bullet[current - 2].classList.remove("active");
  progressCheck[current - 2].classList.remove("active");
  current -= 1;
});

prevBtnForth.addEventListener("click", () => {
  slidePage.style.marginLeft = "-50%";
  bullet[current - 2].classList.remove("active");
  progressCheck[current - 2].classList.remove("active");
  current -= 1;
});

console.log(selBank);
