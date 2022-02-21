

const update = document.querySelector(".admis__login");
const out = document.querySelector(".exit");
const int = document.querySelectorAll(".update");
const form = document.querySelector(".formjs");
out.addEventListener("click", (e) => {
  update.style.transform = "translateX(100vw)";
});

int.forEach((btn) => {
  btn.addEventListener("click", () => {
    let width = innerWidth;
    update.style.transform = "translate(0,0)";

    form.children[1].value = btn.parentElement.children[0].innerHTML;
    form.children[3].value = btn.parentElement.children[1].innerHTML;
    form.children[5].value = btn.parentElement.children[3].innerHTML;
    form.children[7].value = btn.parentElement.children[2].innerHTML;
    form.children[9].value = btn.parentElement.children[4].innerHTML;
    form.children[10].value =
      btn.parentElement.children[7].children[0].children[0].value;
  });
});

const exit = document.querySelector('.admis__exit');
exit.addEventListener("click", (e) => {
  location.pathname = '/';
})