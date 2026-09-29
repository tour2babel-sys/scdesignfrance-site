# SC DESIGN FRANCE — Guide Phoenix Code

Export du 29 septembre 2026, réalisé depuis la version publiée 100.
Le site publié n’a pas été modifié. Cette copie est indépendante : enregistrer un fichier dans Phoenix Code ne change pas le site en ligne.

## 1. Ouvrir le site

1. Téléchargez l’archive ZIP et extrayez-la entièrement (sous Windows : clic droit → Extraire tout).
2. Dans Phoenix Code, ouvrez le dossier SC-Design-France-Phoenix, pas le ZIP.
3. Ouvrez index.html, puis utilisez l’aperçu de Phoenix Code pour voir l’accueil.
4. Cliquez sur les liens pour parcourir le site. Vous pouvez aussi ouvrir index.html directement dans un navigateur.

Aucune installation de Node.js, React ou Next.js n’est nécessaire. Les pages sont en HTML, les styles en CSS et le formulaire utilise du JavaScript classique. Les liens sont relatifs et fonctionnent lorsque le dossier est déplacé.

## 2. Retrouver les fichiers

- index.html : Accueil
- missions.html : Mission
- methode.html : Méthode
- design-management.html : Design Management
- adaptation-changement-climatique.html : Adaptation climatique
- projets.html : Projets
- a-propos.html : À propos
- ressources.html : Ressources naturelles
- regard-2050.html : Regard 2050
- fabrice-imbrosciano.html : Fabrice Imbrosciano
- sonia-chassint.html : Sonia Chassint
- contact.html : Contact
- resilience.html : Redirection vers Adaptation climatique

- assets/css/styles.css : tous les styles du site, les règles mobiles et les déclarations des polices locales.
- assets/js/main.js : comportement du formulaire de contact.
- assets/images/ : les images et SVG du dossier public original, y compris les variantes conservées dans les sources.
- assets/fonts/ : Inter, Cormorant Garamond et leurs licences OFL.
- documentation/INVENTAIRE.json : liste et empreintes des fichiers du site exporté.

## 3. Modifier un texte

Ouvrez la page HTML correspondante et recherchez quelques mots du texte avec Ctrl+F. Modifiez uniquement le texte entre les balises, en conservant les balises et leurs attributs. Enregistrez, puis actualisez l’aperçu.

Les compositions graphiques qui contiennent déjà du texte dans une image restent des images, comme dans le site actuel. Leur texte ne peut pas être modifié dans le HTML : il faut modifier l’image elle-même, puis la remplacer. Les visuels sont conservés sans retouche ni recompression.

L’en-tête et le pied de page sont présents dans chaque page HTML. Une modification de leur menu ou de leurs textes doit donc être reportée dans les 12 pages de contenu. Le fichier resilience.html est uniquement une redirection.

## 4. Modifier les couleurs, espaces et tailles

Ouvrez assets/css/styles.css. Les variables au début de la feuille définissent notamment les couleurs et les familles typographiques. Le fichier conserve les règles et les ajustements successifs du site original ; une règle placée plus bas peut prendre le dessus sur une règle précédente. Faites une sauvegarde avant les changements et vérifiez les vues ordinateur et mobile.

## 5. Remplacer une image

Repérez son nom dans l’attribut src de la page ou dans une règle CSS url(...). Conservez si possible son nom, son format et ses dimensions. Si vous changez le nom, mettez à jour chaque référence. Plusieurs sections utilisent un recadrage précis d’une composition : changer ses proportions peut modifier l’affichage.

## 6. Polices et fonctionnement hors connexion

Les familles Inter (graisses 300 à 500) et Cormorant Garamond (300 et 400) sont incluses localement. Les variantes italiques non chargées par le site original restent synthétisées par le navigateur. Il n’y a plus de chargement de Google Fonts. Les licences de redistribution sont fournies dans assets/fonts.

Les pages, images, styles, polices et le menu mobile fonctionnent sans connexion. Les liens vers CertiPlace nécessitent Internet. L’envoi d’un e-mail dépend de votre logiciel de messagerie et de sa connexion.

## 7. Formulaire de contact

Comme sur le site original, le bouton ouvre votre messagerie avec un message prérempli pour fabrice.imbrosciano@free.fr. Il ne transmet rien automatiquement et ne stocke aucune donnée sur un serveur. L’utilisateur doit confirmer l’envoi dans sa messagerie. Si rien ne s’ouvre, configurez une application de messagerie par défaut sur votre ordinateur.

## 8. Publier ultérieurement

Pour un hébergement statique, transférez les 13 fichiers HTML et le dossier assets en conservant leur structure. Cette archive ne contient aucun accès à l’hébergement actuel et ne déclenche aucune publication. Les adresses des pages exportées se terminent en .html ; une migration de domaine nécessitera d’adapter les redirections et les métadonnées de référencement à votre futur hébergement.

## 9. Périmètre et vérifications

L’export reprend les composants de contenu et l’intégralité de la feuille de styles de la version publiée 100. Seuls les chemins des ressources, la navigation vers les fichiers .html et le chargement local des polices ont été adaptés pour l’export. Le formulaire a été repris en JavaScript autonome. Les composants Link et Image ont été convertis en liens et images HTML.

Contrôles effectués : présence des ressources référencées, validité des liens internes et ancres, conservation octet pour octet des images et SVG du dossier public, syntaxe et préparation du message du formulaire, intégrité ZIP. Aucun envoi d’e-mail n’a été effectué. La comparaison visuelle dans un navigateur n’a pas pu être exécutée dans cet environnement ; vérifiez l’aperçu dans Phoenix Code avant une éventuelle nouvelle publication.
