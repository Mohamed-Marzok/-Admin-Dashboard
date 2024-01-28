let list = document.querySelector(".navigation ul");
let main = document.querySelector(".main");
let toggle = document.querySelector(".toggle");
let navigation = document.querySelector(".navigation");
let listOpations = document.querySelectorAll(".navigation ul li");

list.addEventListener("mouseover", function (e) {
  if (e.target.closest("li")) {
    listOpations.forEach((option) => option.classList.remove("hovered"));
    e.target.closest("li").classList.add("hovered");
  }
});

toggle.addEventListener("click", function (e) {
  e.stopPropagation();
  main.classList.toggle("nonactive");
  navigation.classList.toggle("nonactive");
});
