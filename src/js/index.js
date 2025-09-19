const burger = document.querySelector(".burger");
const header = document.querySelector(".header");

burger.addEventListener("click", () => {
  header.classList.toggle("active");
  document.body.classList.toggle("noscroll");
});

document.querySelectorAll(".team__card-img-big").forEach((img) => {
  img.addEventListener("click", () => {
    const card = img.closest(".team__card");
    card.classList.toggle("active");
  });
});

const pictureWraps = document.querySelectorAll(".about__picture-wrap");

pictureWraps.forEach((el) => {
  el.addEventListener("click", () => {
    el.classList.toggle("active");
  });
});

window.addEventListener("scroll", function () {
  const header = document.getElementById("header");
  if (window.scrollY > 500) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});
