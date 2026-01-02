const modal = document.querySelector(".modal");
const mascara = document.querySelector(".mascara");

function mostrarModal() {
  modal.style.left = "50%";
  mascara.style.visibility = "visible";
}

function esconderModal() {
  modal.style.left = "-30%";
  mascara.style.visibility = "hidden";
}
function acaoEndereco(event) {
  const isMobile = window.innerWidth <= 768;

  if (isMobile) {
    // 📱 Mobile → deixa o HTML agir
    return;
  }

  // 💻 Desktop → bloqueia a navegação e abre o modal
  event.preventDefault();
  mostrarModal();
}
