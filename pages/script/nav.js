function muestraMenu(evento) {
  evento.preventDefault();
  evento.stopPropagation();
  document.querySelector(".menu-nav").classList.toggle("visible");
  document.getElementById("main").style.backgroundColor = "rgba(0,0,0,0.4)";
}

function ocultaMenu(evento) {
  evento.preventDefault();
  document.querySelector(".menu-nav").classList.remove("visible");
  document.body.style.backgroundColor = white;
}

function clickFueraDeMenu(evento) {
  if (evento.target.closest(".menu-nav")) {
    return;
  }
  document.querySelector(".menu-nav").classList.remove("visible");
  document.body.style.backgroundColor = white;
}

function teclaEscCierraMenu(evento) {
  if (evento.key === "Escape") {
    document.querySelector(".menu-nav").classList.remove("visible");
    document.body.style.backgroundColor = white;
  }
}

document.querySelector("#mostrar-menu").addEventListener("click", muestraMenu);
document.querySelector("#cerrar-menu").addEventListener("click", ocultaMenu);
document.addEventListener("click", clickFueraDeMenu);
document.addEventListener("keydown", teclaEscCierraMenu);
