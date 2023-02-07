const sandwichMenu = document.querySelector(".sandwich-menu");
const menuList = document.querySelector("ul");

sandwichMenu.addEventListener("click", () => {
  menuList.classList.toggle("show");
});