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

  const r1 = inputR.value;
  const g1 = inputG.value;
  const b1 = inputB.value;

  if (outputHex.length > 3) {
    return (
      (document.body.style.backgroundColor = outputHex), hexToRgb(outputHex)
    );
  } else if ((r.length > 0, g.length > 0, b.length > 0)) {
    return (
      (document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`),
      rgbToHex(r1, g1, b1)
    );
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

  inputR.value = rgb[0];
  inputG.value = rgb[1];
  inputB.value = rgb[2];
}

// RGB TO HEX
const rgbToHex = (r, g, b) => {
  let convertedHex;

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
onload = (e) => {
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
