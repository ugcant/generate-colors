// const body = document.querySelector("body");
const colorForm = document.querySelector("#user-color");
const inputHex = document.querySelector("#hex");
const inputRgb1 = document.querySelector("#rgb1");
const inputRgb2 = document.querySelector("#rgb2");
const inputRgb3 = document.querySelector("#rgb3");
const inputHsl1 = document.querySelector("#hsl1");
const inputHsl2 = document.querySelector("#hsl2");
const inputHsl3 = document.querySelector("#hsl3");
const resetBtn = document.querySelector("#reset-btn");
const randomColorBtn = document.querySelector("#random-color");

function setColor() {}

//SET BACKGROUND BY USER
colorForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const outputHex = inputHex.value.toString();
  const r = inputRgb1.value.toString();
  const g = inputRgb2.value.toString();
  const b = inputRgb3.value.toString();
  const h = inputHsl1.value.toString();
  const s = inputHsl2.value.toString();
  const l = inputHsl3.value.toString();

  if (outputHex.length > 3) {
    return (document.body.style.backgroundColor = outputHex);
  } else if (((r.length = 3), (g.length = 3), (b.length = 3))) {
    return (document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`);
  } else if (
    (h.length <= 3,
    h.length >= 1,
    l.length > 1,
    l.length <= 4,
    s.length > 1,
    s.length <= 4)
  ) {
    return (document.body.style.backgroundColor = `hsl(${h}, ${s}, ${l})`);
  }
});

//
inputHex.addEventListener("click", (e) => {
  e.preventDefault();

  const outputHex = inputHex.value.toString();
  let r = inputRgb1.value.toString();
  let g = inputRgb2.value.toString();
  let b = inputRgb3.value.toString();
  let h = inputHsl1.value.toString();
  let s = inputHsl2.value.toString();
  let l = inputHsl3.value.toString();

  if (outputHex.length > 3) {
  } else {
    r = " ";
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

// onload = (e) => {
//   e.preventDefault();
//   const randomColor = Math.floor(Math.random() * 16777216)
//     .toString(16)
//     .toUpperCase(); //256^3 = 16777216
//   document.body.style.backgroundColor = `#${randomColor}`;
//   inputHex.value = `#${randomColor}`;
// };

//RESET BUTTON
resetBtn.addEventListener("click", () => {
  document.body.style.backgroundColor = "";
});
