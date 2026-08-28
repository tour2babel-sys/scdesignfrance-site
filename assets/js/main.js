(function () {
  var pages = [
    ["methode", "methode.html", "Méthode"],
    ["missions", "missions.html", "Missions"],
    ["resilience", "resilience.html", "Résilience"],
    ["projets", "projets.html", "Projets"],
    ["a-propos", "a-propos.html", "À propos"],
    ["ressources", "ressources.html", "Ressources"]
  ];

  var currentPage = document.body.getAttribute("data-page") || "accueil";
  var headerTarget = document.getElementById("site-header");
  var footerTarget = document.getElementById("site-footer");

  if (headerTarget) {
    var navigation = pages.map(function (page) {
      var active = currentPage === page[0] ? " class=\"active\" aria-current=\"page\"" : "";
      return "<a href=\"" + page[1] + "\"" + active + ">" + page[2] + "</a>";
    }).join("");

    headerTarget.innerHTML = [
      "<header class=\"header\">",
      "<a class=\"brand\" href=\"index.html\" aria-label=\"SC DESIGN FRANCE — accueil\">",
      "<img src=\"assets/images/logo-scdesign.svg\" alt=\"\">",
      "<span class=\"brand-name\"><strong>SC DESIGN</strong><span>FRANCE</span></span>",
      "</a>",
      "<button class=\"menu-toggle\" type=\"button\" aria-expanded=\"false\" aria-controls=\"main-nav\">Menu</button>",
      "<nav class=\"nav\" id=\"main-nav\" aria-label=\"Navigation principale\">" + navigation + "</nav>",
      "<a class=\"button dark header-cta\" href=\"regard-2050.html\">Lancer un diagnostic</a>",
      "</header>"
    ].join("");

    var toggle = headerTarget.querySelector(".menu-toggle");
    var nav = headerTarget.querySelector(".nav");
    toggle.addEventListener("click", function () {
      var isOpen = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(isOpen));
      toggle.textContent = isOpen ? "Fermer" : "Menu";
    });
  }

  if (footerTarget) {
    footerTarget.innerHTML = [
      "<footer class=\"footer\">",
      "<div class=\"footer-brand\"><img src=\"assets/images/logo-scdesign-white.svg\" alt=\"\"><div><strong>SC DESIGN FRANCE</strong><p>Architecture · Conseil · Stratégie territoriale · Résilience climatique</p></div></div>",
      "<div class=\"footer-links\"><a href=\"methode.html\">Méthode</a><a href=\"missions.html\">Missions</a><a href=\"resilience.html\">Résilience</a><a href=\"regard-2050.html\">Regard 2050</a><a href=\"projets.html\">Projets</a><a href=\"fabrice-imbrosciano.html\">Fabrice Imbrosciano</a><a href=\"contact.html\">Contact</a></div>",
      "<div class=\"footer-note\"><p>SC DESIGN FRANCE</p><p>Conseil stratégique / AMO / Design management</p><p>© 2026 — Tous droits réservés</p></div>",
      "</footer>"
    ].join("");
  }

  var contactForm = document.querySelector(".contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
      event.preventDefault();
      var data = new FormData(contactForm);
      var name = data.get("name") || "Non renseigné";
      var project = data.get("project") || "Projet";
      var subject = "Nouveau projet SC DESIGN — " + project;
      var body = [
        "Bonjour Fabrice,",
        "",
        "Je souhaite vous présenter mon projet.",
        "",
        "Nom : " + name,
        "E-mail : " + (data.get("email") || "Non renseigné"),
        "Téléphone : " + (data.get("phone") || "Non renseigné"),
        "Profil : " + (data.get("profile") || "Non précisé"),
        "Projet : " + project,
        "Localisation : " + (data.get("location") || "Non précisée"),
        "Horizon : " + (data.get("horizon") || "Non précisé"),
        "",
        "Principal enjeu :",
        data.get("challenge") || "",
        "",
        "Cordialement,",
        name
      ].join("\n");
      window.location.href = "mailto:fabrice.imbrosciano@free.fr?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
    });
  }
}());
