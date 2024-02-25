const accordionEl = document.querySelectorAll(".price__headline");
const burgerBtnEl = document.querySelector(".header__burger");
const mobileMenuEl = document.querySelector(".mobile__menu");
const closeMenuBtnEl = document.querySelector(".mobile__cross");
const menuListEl = mobileMenuEl.querySelectorAll(".mobile__list li");

const HIDDEN_CLASS = "price__hidden";
const GRADIENT_CLASS = "bg__gradient";
const ROTATE_IN = "rotateX(0)";
const ROTATE_OUT = "rotateX(180deg)";

const openAccordionText = (e) => {
  const { currentTarget } = e;
  const { nextElementSibling, parentElement, lastElementChild } = currentTarget;

  nextElementSibling.classList.toggle(HIDDEN_CLASS);
  parentElement.classList.toggle(GRADIENT_CLASS);
  lastElementChild.style.transform = nextElementSibling.classList.contains(
    HIDDEN_CLASS
  )
    ? ROTATE_IN
    : ROTATE_OUT;
};

const toggleMenu = () => {
  mobileMenuEl.classList.toggle("hide__menu");
};
accordionEl.forEach((item) => {
  item.addEventListener("click", openAccordionText);
});
menuListEl.forEach((menuItem) => {
  menuItem.addEventListener("click", toggleMenu);
});

burgerBtnEl.addEventListener("click", toggleMenu);
closeMenuBtnEl.addEventListener("click", toggleMenu);
