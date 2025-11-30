const mathematicians = [
    {
        name: "Thalès de Milet (vers 625 — vers 547 av. J.-C.)",
        img: "thalès.jpg",
        desc: `
Thalès est l’un des premiers grands mathématiciens grecs. Voyageur et observateur, il s'intéresse 
à la géométrie et aux mesures. La tradition raconte qu'il aurait calculé la hauteur d’une pyramide
grâce à son ombre, utilisant les propriétés de proportionnalité.

<b>Travaux importants :</b><br>
• Introduction de la démonstration géométrique<br>
• Étude des triangles et de la proportionnalité<br>
• Précurseur du célèbre théorème portant son nom<br><br>

<b>Lien avec le programme :</b><br>
✔ 4ᵉ — Théorème de Thalès, triangles semblables, proportionnalité
        `
    },
    {
        name: "Pythagore (vers 570 — vers 495 av. J.-C.)",
        img: "pythagore.jpg",
        desc: `
Pythagore fonde une école où les mathématiques sont au centre de la philosophie. 
Il développe l’idée que les nombres structurent l’univers. Son théorème sur les triangles rectangles 
est encore aujourd’hui un outil essentiel.

<b>Travaux importants :</b><br>
• Théorème de Pythagore<br>
• Classification des nombres (pairs/impairs, carrés parfaits)<br>
• Lien entre musique et mathématiques<br><br>

<b>Lien avec le programme :</b><br>
✔ 4ᵉ — Théorème de Pythagore, distance entre deux points
        `
    },
    {
        name: "Hypatie d’Alexandrie (355 — 415)",
        img: "hypatie.jpg",
        desc: `
Hypatie est la première femme mathématicienne connue. Enseignante renommée à Alexandrie, 
elle rédige et commente de nombreuses œuvres majeures de géométrie, notamment celles d’Euclide.

<b>Travaux importants :</b><br>
• Étude des coniques<br>
• Commentaires des Éléments d’Euclide<br>
• Contributions à la géométrie et à l’astronomie<br><br>

<b>Lien avec le programme :</b><br>
✔ 6ᵉ — Cercles, constructions<br>
✔ 5ᵉ — Propriétés géométriques<br>
        `
    },
    {
        name: "Euclide (vers 325 — vers 265 av. J.-C.)",
        img: "euclide.jpg",
        desc: `
Euclide est surnommé le “père de la géométrie”. Son œuvre majeure, Les Éléments, 
est un recueil de définitions, axiomes et démonstrations encore utilisé aujourd’hui.

<b>Travaux importants :</b><br>
• Bases de la géométrie moderne<br>
• Divisions euclidiennes<br>
• Étude des nombres premiers<br><br>

<b>Lien avec le programme :</b><br>
✔ 6ᵉ–3ᵉ — Vocabulaire géométrique, propriétés, démonstrations
        `
    },
    {
        name: "Évariste Galois (1811 — 1832)",
        img: "galois.jpg",
        desc: `
Génie français mort très jeune, Galois révolutionne l’algèbre en introduisant le lien 
entre les groupes de symétrie et les équations polynomiales.

<b>Travaux importants :</b><br>
• Théorie de Galois<br>
• Structure des équations<br>
• Symétries en algèbre<br><br>

<b>Lien avec le programme :</b><br>
✔ 4ᵉ–3ᵉ — Équations, transformations, symétries
        `
    },
    {
        name: "Sophie Germain (1776 — 1831)",
        img: "germain.jpg",
        desc: `
Autodidacte brillante, Sophie Germain étudie en secret les mathématiques et contribue à la théorie 
des nombres. Elle échange avec Gauss sous un faux nom pour être prise au sérieux.

<b>Travaux importants :</b><br>
• Théorie des nombres (premiers de Sophie Germain)<br>
• Étude de l’élasticité<br>
• Avancées liées au dernier théorème de Fermat<br><br>

<b>Lien avec le programme :</b><br>
✔ 5ᵉ–3ᵉ — Nombres premiers, divisibilité, puissances
        `
    },
    {
        name: "Ada Lovelace (1815 — 1852)",
        img: "lovelace.jpg",
        desc: `
Ada Lovelace, fille du poète Byron, est la première programmeuse de l’histoire. 
Elle imagine un algorithme complet pour une machine qui n’existait pas encore.

<b>Travaux importants :</b><br>
• Premier algorithme de calcul<br>
• Vision de l’ordinateur moderne<br>
• Notions d’instructions, de boucle, de variable<br><br>

<b>Lien avec le programme :</b><br>
✔ 6ᵉ–3ᵉ — Algorithmique & programmation
        `
    },
    {
        name: "Carl Friedrich Gauss (1777 — 1855)",
        img: "gauss.jpg",
        desc: `
Gauss est l’un des mathématiciens les plus prolifiques de l’histoire. 
À 10 ans, il étonne son professeur en trouvant la somme de 1 à 100 instantanément.

<b>Travaux importants :</b><br>
• Courbe de Gauss (statistiques)<br>
• Nombres premiers<br>
• Astronomie, géodésie, algèbre<br><br>

<b>Lien avec le programme :</b><br>
✔ 5ᵉ–3ᵉ — Statistiques, symétries, arithmétique
        `
    },
    {
        name: "Al-Khwarizmi (780 — 850)",
        img: "Al-Khwarizmi.jpg",
        desc: `
Mathématicien perse, dont le nom a donné le mot “algorithme”. 
Il pose les bases de l’algèbre moderne et diffuse les chiffres indo-arabes.

<b>Travaux importants :</b><br>
• Résolution d’équations du premier degré<br>
• Naissance de l’algèbre<br>
• Systèmes de calcul<br><br>

<b>Lien avec le programme :</b><br>
✔ 4ᵉ–3ᵉ — Équations, algèbre, calcul littéral
        `
    },
    {
        name: "Maryam Mirzakhani (1977 — 2017)",
        img: "maryam-mirzakhani.jpg",
        desc: `
Première femme à recevoir la médaille Fields, Mirzakhani étudiait les surfaces complexes 
et les géométries non-euclidiennes.

<b>Travaux importants :</b><br>
• Géométrie hyperbolique<br>
• Surfaces de Riemann<br>
• Étude des courbes complexes<br><br>

<b>Lien avec le programme :</b><br>
✔ 6ᵉ–3ᵉ — Aires, périmètres, géométries variées
        `
    },
    {
        name: "René Descartes (1596 — 1650)",
        img: "Descartes.jpg",
        desc: `
Descartes unifie algèbre et géométrie en inventant les coordonnées. 
Son repère cartésien est indispensable à l’étude des fonctions.

<b>Travaux importants :</b><br>
• Repère cartésien<br>
• Géométrie analytique<br>
• Bases des fonctions<br><br>

<b>Lien avec le programme :</b><br>
✔ 3ᵉ — Repères, coordonnées, fonctions, équations
        `
    },
    {
        name: "Alan Turing (1912 — 1954)",
        img: "turing.jpg",
        desc: `
Mathématicien britannique, pionnier de l’informatique moderne. Il conçoit la machine de Turing, 
base théorique de tous les ordinateurs.

<b>Travaux importants :</b><br>
• Logique informatique<br>
• Décryptage d’Enigma<br>
• Machine de Turing<br><br>

<b>Lien avec le programme :</b><br>
✔ 6ᵉ–3ᵉ — Logique, algorithmique, programmation
        `
    }
];

// Sélection automatique du mathématicien en fonction du mois
const month = new Date().getMonth(); // 0 = janvier
const selected = mathematicians[month % mathematicians.length];

document.getElementById("math-name").innerHTML = selected.name;
document.getElementById("math-desc").innerHTML = selected.desc;
document.getElementById("math-image").src = selected.img;
