//Movement Animation to happen
const card = document.querySelector(".card");
const main = document.querySelector(".main");
//Items
const parent = document.querySelector(".parent");
const earth = document.querySelector(".earth img");
const text = document.querySelector(".text");
const submit = document.querySelector(".submit button");

const gender = document.querySelector(".gender");

//Moving Animation Event
main.addEventListener("mousemove", (e) => {
  let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
  let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
  card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});
//Animate In
main.addEventListener("mouseenter", (e) => {
  card.style.transition = "none";
  //Popout
  parent.style.transform = "translateZ(100px)";
  earth.style.transform = "translateZ(200px) rotateZ(-45deg)";
  text.style.transform = "translateZ(170px)";

  gender.style.transform = "translateZ(100px)";
  submit.style.transform = "translateZ(75px)";
});
//Animate Out
main.addEventListener("mouseleave", (e) => {
  card.style.transition = "all 0.5s ease";
  card.style.transform = `rotateY(0deg) rotateX(0deg)`;
  //Popback
  parent.style.transform = "translateZ(0px)";
  earth.style.transform = "translateZ(0px) rotateZ(0deg)";
 
  text.style.transform = "translateZ(0px)";
  gender.style.transform = "translateZ(0px)";
  submit.style.transform = "translateZ(0px)";
});
