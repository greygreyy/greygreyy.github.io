const images = [
  "img1.jpg",
  "img2.jpg",
  "img3.jpeg",
  "img4.jpg",
  "img5.gif",
  "img6.jpg",
  "img7.jpg",
  "img8.jpg"
];

const randomNum2 = Math.floor(Math.random() * images.length);
const showingImg = images[randomNum2];

const bgImg = document.createElement("img");

bgImg.src = `${showingImg}`;

document.body.appendChild(bgImg);

const colors = [
  "#ef5777",
  "#575fcf",
  "#4bcffa",
  "#34e7e4",
  "#0be881",
  "#f53b57",
  "#3c40c6",
  "#0fbcf9",
  "#00d8d6",
  "#05c46b",
  "#ffc048",
  "#ffdd59",
  "#ff5e57",
  "#d2dae2",
  "#485460",
  "#ffa801",
  "#ffd32a",
  "#ff3f34"
];

function changeColors() {
  const genRand = Math.floor(Math.random() * colors.length);
  const genRand2 = Math.floor(Math.random() * colors.length);
  let color1 = colors[genRand];
  let color2 = colors[genRand2];
  document.querySelector(
    "body"
  ).style.cssText = `background:linear-gradient(90deg, ${color1}, ${color2})`;
}

changeColors();
