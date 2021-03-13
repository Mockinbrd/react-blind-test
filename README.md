# react-blind-test

Projet de cours en React ayant pour but de découvrir et d'approfondir le framework. Thème noyau : un blind-test.

## ⚙️ Fonctionnalités / Specs abordées

- **Authentification** :

  - Authentification avec l'aide de Firebase.

- **Gestion d'utiisateurs** :

  - Session utilisateur avec Firebase + localStorage.

- **Base de données** :

  - BDD en NoSQL avec Cloud Firestore.

- **Module de Blind-Test** :

  - Choix du nombres de questions (2 à 6 pour le moment)
  - Fetch des questions en BDD
  - Stepping des questions sans reload
  - L'audio se joue automatiquement à chaque nouvelle question
  - Mise en pause de l'audio en fondu pour une écoute plus agréable
  - Gestion bonne/mauvaise réponse avec retour couleur, textuel + bip sonore
  - Affichage du score final + push en BDD

- **Styling** :

  - Styles des composants avec les librairie styled-components et twin.macro pour une personnalisation plus poussées et des performances accrues.

- **Animations** :

  - Implentation d'animations avec la librairie react-animations couplée avec styled-components.

- **Dark Mode** :
  - Possibilité de switch de thème ["light","dark"] depuis tout le site.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.
