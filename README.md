# SC DESIGN FRANCE — projet complet pour Phoenix Code

Cette version autonome, mise à jour le 2 septembre 2026, reprend toutes les pages, les textes, les illustrations, les polices, le portrait de Fabrice Imbrosciano, le favicon et le formulaire de contact du site SC DESIGN FRANCE. Elle fonctionne en HTML, CSS et JavaScript, sans Node.js ni compilation.

## Ouvrir le site dans Phoenix Code

1. Décompressez l’archive du projet.
2. Dans Phoenix Code, choisissez **Open Folder** et ouvrez le dossier `sc-design-france-phoenix-code`.
3. Ouvrez `index.html`.
4. Lancez **Live Preview** pour naviguer dans toutes les pages.

## Arborescence

- `index.html` : accueil
- `methode.html`, `missions.html`, `adaptation-changement-climatique.html`, etc. : pages du site
- `fabrice-imbrosciano.html` : page professionnelle de Fabrice Imbrosciano
- `assets/css/styles.css` : styles généraux et responsive
- `assets/js/main.js` : en-tête, pied de page, menu mobile et formulaire
- `assets/images/` : logos, favicon, portrait, pictogrammes, croquis et illustrations
- `robots.txt` et `sitemap.xml` : fichiers utiles au référencement

L’ancien fichier `resilience.html` est conservé uniquement pour rediriger automatiquement les anciens liens vers la page fusionnée `adaptation-changement-climatique.html`.

## Modifier le site

- Les textes de chaque page se modifient directement dans le fichier HTML correspondant.
- Les couleurs, polices, dimensions et mises en page se modifient dans `assets/css/styles.css`.
- Le menu commun, le pied de page, le menu mobile et le formulaire se modifient dans `assets/js/main.js`.

Le formulaire de contact ouvre le logiciel de messagerie de l’utilisateur avec tous les champs préremplis à destination de `fabrice.imbrosciano@free.fr`. L’utilisateur doit ensuite confirmer l’envoi dans sa messagerie.

## Mise en ligne

Le dossier peut être publié sur un hébergement statique en conservant exactement l’arborescence fournie. La page d’accueil doit rester nommée `index.html`.
