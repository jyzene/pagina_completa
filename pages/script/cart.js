function muestraMenu(evento) {
  evento.preventDefault();
  evento.stopPropagation();
  document.querySelector(".cart-nav").classList.toggle("visible");
}

function ocultaMenu(evento) {
  evento.preventDefault();
  document.querySelector(".cart-nav").classList.remove("visible");
}

function clickFueraDeMenu(evento) {
  if (evento.target.closest(".cart-nav")) {
    return;
  }
  document.querySelector(".cart-nav").classList.remove("visible");
}

function teclaEscCierraMenu(evento) {
  if (evento.key === "Escape") {
    document.querySelector(".cart-nav").classList.remove("visible");
  }
}

document.querySelector("#mostrar-cart").addEventListener("click", muestraMenu);
document.querySelector("#cerrar-cart").addEventListener("click", ocultaMenu);
document.addEventListener("click", clickFueraDeMenu);
document.addEventListener("keydown", teclaEscCierraMenu);