const element = document.querySelector(".app_about--img img");
VanillaTilt.init(element);

const pathname = location.pathname;

if (pathname === "/") {
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
} else if (pathname === "/admis") {
  const login = document.querySelector(".admis__login");
  const btnOut = document.querySelector(".exit");
  const btnInt = document.querySelector(".update");

  btnOut.addEventListener("click", (e) => {
    login.style.transform = "translateX(100vw)";
  });

  btnInt.addEventListener("click", (e) => {
    e.preventDefault();
    let width = innerWidth;
    login.style.transform = "translate(0,0)";
  });
}
