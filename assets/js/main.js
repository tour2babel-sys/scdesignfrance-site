"use strict";
(() => {
const recipient = "fabrice.imbrosciano@free.fr";
  function prepareEmail(event) {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    const name = data.get("name");
    const email = data.get("email");
    const phone = data.get("phone") || "Non renseigné";
    const profile = data.get("profile");
    const project = data.get("project");
    const location = data.get("location");
    const horizon = data.get("horizon");
    const challenge = data.get("challenge");

    const subject = `Nouveau projet SC DESIGN — ${project}`;
    const body = [
      "Bonjour Fabrice,",
      "",
      "Je souhaite vous présenter mon projet.",
      "",
      `Nom : ${name}`,
      `E-mail : ${email}`,
      `Téléphone : ${phone}`,
      `Profil : ${profile}`,
      `Projet : ${project}`,
      `Localisation : ${location}`,
      `Horizon : ${horizon}`,
      "",
      "Principal enjeu :",
      challenge,
      "",
      "Cordialement,",
      name
    ].join("\n");

    window.location.href = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

const form = document.querySelector(".contact-form");
if(form) form.addEventListener("submit", prepareEmail);
})();
