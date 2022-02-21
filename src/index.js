const element = document.querySelector(".app_about--img img");
VanillaTilt.init(element);

const pathname = location.pathname;
if(pathname === '/' || pathname === '/delete') {

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
}else if(pathname === '/admis' || pathname === '/delete') { 
  const login = document.querySelector(".admis__login");
  const btnOut = document.querySelector(".exit");
  const btnInt = document.querySelectorAll(".update");
  const form = document.querySelector('.formjs')
  btnOut.addEventListener("click", (e) => {
    login.style.transform = "translateX(100vw)";
  });
  
btnInt.forEach(btn => {
  btn.addEventListener("click", () => {
    let width = innerWidth;
    login.style.transform = "translate(0,0)";

    form.children[1].value = btn.parentElement.children[0].innerHTML
    form.children[3].value = btn.parentElement.children[1].innerHTML
    form.children[5].value = btn.parentElement.children[3].innerHTML
    form.children[7].value = btn.parentElement.children[2].innerHTML
    form.children[9].value = btn.parentElement.children[4].innerHTML
    form.children[10].value = btn.parentElement.children[7].children[0].children[0].value

  });
})

 
}
