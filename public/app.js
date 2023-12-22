const reviews = [
  {
    id: 1,
    title: "Bora Bora",
    text: "Bora Bora is a small South Pacific island located in French Polynesia, approximately 230 kilometers (143 miles) northwest of Tahiti. It is part of the Society Islands group and is surrounded by a lagoon and a barrier reef",
  },
  {
    id: 2,
    title: "Bali",
    text: " Bali is an Indonesian island known for its forested volcanic mountains, iconic rice paddies, beaches, and coral reefs. It is part of the Indonesian archipelago and is located in the westernmost end of the Lesser Sunda Islands..",
  },
  {
    id: 3,
    title: "palawan",
    text: "Palawan is an archipelagic province of the Philippines located in the western part of the country. It is known for its stunning natural beauty, pristine beaches, crystal-clear waters, and diverse marine life.",
  },
];
const btn1 = document.getElementById("change-1");
const btn2 = document.getElementById("change-2");
const btn3 = document.getElementById("change-3");

const info = document.getElementById("info");
const names = document.getElementById("name");
const img = document.getElementById("img");

const menu = document.getElementById("menu");
const closeBtn = document.getElementById("close");
const openBtn = document.getElementById("burger");

let i = 0;
window.addEventListener("DOMContentLoaded", function () {
  content1();
});

function content1() {
  const styles = reviews[i];
  info.textContent = styles.text;
  names.textContent = styles.title;
  img.src = "images/borabora.jpg";
}

function content2() {
  const styles = reviews[i];
  info.textContent = styles.text;
  names.textContent = styles.title;
  img.src = "images/bali.jpg";
}

function content3() {
  const styles = reviews[i];
  info.textContent = styles.text;
  names.textContent = styles.title;
  img.src = "images/palawan.jpg";
}

btn1.addEventListener("click", function () {
  i = 0;
  content1();
});

btn2.addEventListener("click", function () {
  i = 1;
  content2();
});

btn3.addEventListener("click", function () {
  i = 2;
  content3();
});

openBtn.addEventListener("click", function () {
  menu.classList.add("active");
});

closeBtn.addEventListener("click", function () {
  menu.classList.remove("active");
});
