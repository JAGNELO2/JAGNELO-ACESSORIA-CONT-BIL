let adminAtivo = false;

document.getElementById("adminBtn").addEventListener("click", () => {
  const senha = prompt("Senha do Admin:");
  if (senha === "1234") {
    adminAtivo = true;
    ativarEdicao();
    alert("Modo Admin Ativo");
  }
});

function ativarEdicao() {
  document.querySelectorAll(".editable").forEach(el => {
    el.contentEditable = true;
    el.style.border = "2px dashed red";
  });

  document.addEventListener("input", salvarAutomatico);
}

function salvarAutomatico() {
  localStorage.setItem(location.pathname, document.body.innerHTML);
}

window.onload = () => {
  const salvo = localStorage.getItem(location.pathname);
  if (salvo) document.body.innerHTML = salvo;
};