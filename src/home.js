const element = document.querySelector(".app_about--img img");
VanillaTilt.init(element);

const pathname = location.pathname;

const login = document.querySelector(".app__login");
const btnOut = document.querySelector(".exit");
const btnInt = document.querySelector(".app__header--nav");

btnOut.addEventListener("click", (e) => {
  login.style.transform = "translateX(100vw)";
});

btnInt.addEventListener("click", (e) => {
  let width = innerWidth;
  login.style.transform = "translate(0,0)";
});

