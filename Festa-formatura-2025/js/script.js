// Contagem regressiva
const eventDate = new Date("Dec 20, 2025 19:00:00").getTime();

setInterval(() => {
  const now = new Date().getTime();
  const distance = eventDate - now;

  if (distance < 0) {
    $("#countdown").html("<h2>🎉 O grande dia chegou! 🎓</h2>");
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  $("#countdown").html(`<h3>${days}d ${hours}h ${minutes}m ${seconds}s</h3>`);
}, 1000);

// Formulário 
$(document).ready(function () {
  $("#rsvpForm").on("submit", function (e) {
    e.preventDefault();

    const nome = $("#nome").val().trim();
    const email = $("#email").val().trim();
    const presenca = $("#presenca").val();

    const erroNome = $("#erroNome");
    const erroEmail = $("#erroEmail");
    const mensagem = $("#mensagem");

    erroNome.text("");
    erroEmail.text("");
    mensagem.text("");

    if (nome === "") {
      erroNome.text("* Informe seu nome corretamente!");
      return;
    }

    const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailValido.test(email)) {
      erroEmail.text("* Informe um email válido!");
      return;
    }

    const partesNome = nome.split(" ");
    const nomeCurto =
      partesNome.length > 1
        ? `${partesNome[0]} ${partesNome[1]}`
        : partesNome[0];

    if (presenca === "sim") {
      mensagem.text(
        `🎉 Obrigado, ${nomeCurto}! Estamos animados para te ver na festa!`
      );
    } else {
      mensagem.text(`😢 Que pena, ${nomeCurto}. Sentiremos sua falta!`);
    }

    console.log("Nome completo:", nome);

    this.reset();
  });
});
