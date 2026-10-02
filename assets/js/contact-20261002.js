(function () {
  var form = document.querySelector('.contact-form');
  if (!form) return;
  form.addEventListener('submit', function (event) {
    event.preventDefault();
    var data = new FormData(form);
    var name = data.get('name') || '';
    var project = data.get('project') || '';
    var body = ['Bonjour Fabrice,', '', 'Je souhaite vous présenter mon projet.', '',
      'Nom : ' + name, 'E-mail : ' + (data.get('email') || ''),
      'Téléphone : ' + (data.get('phone') || 'Non renseigné'),
      'Profil : ' + (data.get('profile') || ''), 'Projet : ' + project,
      'Localisation : ' + (data.get('location') || ''), 'Horizon : ' + (data.get('horizon') || ''),
      '', 'Principal enjeu :', data.get('challenge') || '', '', 'Cordialement,', name].join('\n');
    window.location.href = 'mailto:fabrice.imbrosciano@free.fr?subject=' + encodeURIComponent('Nouveau projet SC DESIGN — ' + project) + '&body=' + encodeURIComponent(body);
  });
}());
