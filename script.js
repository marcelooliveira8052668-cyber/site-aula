const senhaCorreta = "1234";

function login() {
  const senha = document.getElementById("senha").value;
  if (senha === senhaCorreta) {
    document.getElementById("painel").classList.remove("hidden");
  } else {
    alert("Senha errada!");
  }
}

// AULA AO VIVO
function ativarLive() {
  const link = document.getElementById("linkInput").value;

  localStorage.setItem("liveLink", link);
  localStorage.setItem("liveStatus", "on");

  atualizarLive();
}

function desativarLive() {
  localStorage.setItem("liveStatus", "off");
  atualizarLive();
}

function atualizarLive() {
  const status = localStorage.getItem("liveStatus");
  const link = localStorage.getItem("liveLink");

  const texto = document.getElementById("statusLive");
  const botao = document.getElementById("linkLive");

  if (status === "on") {
    texto.innerText = "A aula está AO VIVO!";
    botao.classList.remove("hidden");
    botao.href = link;
  } else {
    texto.innerText = "A aula não está acontecendo agora.";
    botao.classList.add("hidden");
  }
}

// MATERIAIS
function addMaterial() {
  const titulo = document.getElementById("tituloMaterial").value;
  const link = document.getElementById("linkMaterial").value;

  let materiais = JSON.parse(localStorage.getItem("materiais")) || [];

  materiais.push({titulo, link});
  localStorage.setItem("materiais", JSON.stringify(materiais));

  carregarMateriais();
}

function carregarMateriais() {
  const lista = document.getElementById("materiais");
  lista.innerHTML = "";

  let materiais = JSON.parse(localStorage.getItem("materiais")) || [];

  materiais.forEach(m => {
    const li = document.createElement("li");
    li.innerHTML = `<a href="${m.link}" target="_blank">${m.titulo}</a>`;
    lista.appendChild(li);
  });
}

atualizarLive();
carregarMateriais();