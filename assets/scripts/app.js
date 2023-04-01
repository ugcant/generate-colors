// const body = document.querySelector("body");
const colorForm = document.querySelector("#user-color");
const inputHex = document.querySelector("#hex");
const inputR = document.querySelector("#r");
const inputB = document.querySelector("#g");
const inputG = document.querySelector("#b");
const inputH = document.querySelector("#h");
const inputS = document.querySelector("#s");
const inputL = document.querySelector("#l");
const resetBtn = document.querySelector("#reset-btn");
const randomColorBtn = document.querySelector("#random-color");

function setColor() {}

//SET BACKGROUND BY USER
colorForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const outputHex = inputHex.value.toString();
  const r = inputR.value.toString();
  const g = inputG.value.toString();
  const b = inputB.value.toString();
  const h = inputH.value.toString();
  const s = inputS.value.toString();
  const l = inputL.value.toString();

  if (outputHex.length > 3) {
    return (document.body.style.backgroundColor = outputHex);
  } else if ((r.length > 0, g.length > 0, b.length > 0)) {
    return (document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`);
  } else if (
    (h.length <= 3,
    h.length >= 1,
    l.length > 1,
    l.length <= 4,
    s.length > 1,
    s.length <= 4)
  ) {
    return (document.body.style.backgroundColor = `hsl(${h}, ${s}%, ${l}%)`);
  }
});

//RANDOM COLOR
randomColorBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const randomColor = Math.floor(Math.random() * 16777216)
    .toString(16)
    .toUpperCase(); //256^3 = 16777216
  document.body.style.backgroundColor = `#${randomColor}`;
  inputHex.value = `#${randomColor}`;
});

//ONLOAD RANDOM COLOR
onload = (e) => {
  e.preventDefault();
  const randomColor = Math.floor(Math.random() * 16777216)
    .toString(16)
    .toUpperCase(); //256^3 = 16777216
  document.body.style.backgroundColor = `#${randomColor}`;
  inputHex.value = `#${randomColor}`;
};

//RESET BUTTON
resetBtn.addEventListener("click", () => {
  document.body.style.backgroundColor = "";
});
