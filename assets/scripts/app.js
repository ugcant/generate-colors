const colorForm = document.querySelector("#user-color");
const inputHex = document.querySelector("#hex");
const redInput = document.querySelector("#r");
const greenInput = document.querySelector("#g");
const blueInput = document.querySelector("#b");
const resetBtn = document.querySelector("#reset-btn");
const randomColorBtn = document.querySelector("#random-color");

function setColor() {}

//SET BACKGROUND BY USER
colorForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const outputHex = inputHex.value.toString();
  const r = redInput.value.toString();
  const g = greenInput.value.toString();
  const b = blueInput.value.toString();
  const r1 = redInput.value;
  const g1 = greenInput.value;
  const b1 = blueInput.value;

  if (outputHex.length > 3) {
    return (
      (document.body.style.backgroundColor = outputHex), hexToRgb(outputHex)
    );
  } else if (r.length > 0 && g.length > 0 && b.length > 0) {
    return (
      (document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`),
      rgbToHex(r1, g1, b1)
    );
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

  hexToRgb(randomColor);
});

//HEX TO RGB
function hexToRgb(clr) {
  let rgbHex;
  let rgb = [];
  if (clr.startsWith("#")) {
    let clr1 = clr.substr(1);
    rgbHex = clr1.match(/.{1,2}/g);
    rgb.push(parseInt(rgbHex[0], 16));
    rgb.push(parseInt(rgbHex[1], 16));
    rgb.push(parseInt(rgbHex[2], 16));
  } else {
    rgbHex = clr.match(/.{1,2}/g);
    rgb.push(parseInt(rgbHex[0], 16));
    rgb.push(parseInt(rgbHex[1], 16));
    rgb.push(parseInt(rgbHex[2], 16));
  }

  redInput.value = rgb[0];
  greenInput.value = rgb[1];
  blueInput.value = rgb[2];
}

// RGB TO HEX
const rgbToHex = (r, g, b) => {
  let convertedHex = undefined;

  r = parseInt(r).toString(16);
  g = parseInt(g).toString(16);
  b = parseInt(b).toString(16);
  if (r.length == 1) r = "0" + r;
  if (g.length == 1) g = "0" + g;
  if (b.length == 1) b = "0" + b;

  convertedHex = "#" + r + g + b;
  inputHex.value = convertedHex.toUpperCase();
};

//ONLOAD RANDOM COLOR
window.onload = (e) => {
  e.preventDefault();
  const randomColor = Math.floor(Math.random() * 16777216)
    .toString(16)
    .toUpperCase(); //256^3 = 16777216
  document.body.style.backgroundColor = `#${randomColor}`;
  inputHex.value = `#${randomColor}`;

  hexToRgb(randomColor);
};

//RESET BUTTON
resetBtn.addEventListener("click", () => {
  document.body.style.backgroundColor = "";
});

//ONKEYUP
function moveOnMax(field, nextFieldID) {
  if (field.value.length >= field.maxLength) {
    document.getElementById(nextFieldID).focus();
  }
}
