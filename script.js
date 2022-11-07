const model = document.querySelector(".pop-up");
const overlay = document.querySelector(".overlay");
const btnOpenModel = document.querySelectorAll(".request-btn");
const btnCloseModel = document.querySelector(".close-btn");
const Section1 = document.querySelector(".section-1");
const hamburger = document.querySelector(".hamburger");
const home = document.querySelector(".home");
const MobileView = document.querySelector(".mobile-view");
function openModal() {
  model.classList.remove("hidden");
  overlay.classList.remove("hidden");
}
function closeModal() {
  model.classList.add("hidden");
  overlay.classList.add("hidden");
}

//Loop over the all btn 
btnOpenModel.forEach((btn) => btn.addEventListener("click", openModal));

btnCloseModel.addEventListener("click", function () {
  closeModal();
});


document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !model.classList.contains("hidden")) {
    closeModal();
  }
});

home.addEventListener("click", function () {
  Section1.scrollIntoView({ behavior: "smooth" });
});

function openNavMobile() {
  MobileView.classList.toggle("hidden-hamburger");
}

hamburger.addEventListener("click", openNavMobile);
