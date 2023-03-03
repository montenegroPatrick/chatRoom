# Chatroom

On va construire un chat entièrement fonctionnel :scream:  
Pas de panique on va y aller étape par étape, ce soir on commence par pouvoir envoyer un message en utilisant redux.  
On verra demain pour qu'on puisse nous répondre, tant pis si on parle tout seul pendant quelque temps :smile:

## Résultat

![résultat](result.png)

## Styles

On part au plus simple pour commencer, on peaufinera ensuite ;)

## Fonctionnalités

On doit pouvoir

- Saisir un message dans le champ du bas
- On doit pouvoir soumettre ce message
- Il doit apparaître dans la liste des messages au-dessus, avec un nom d'auteur par défaut

Bien sûr **tu dois** utiliser **redux** et **react-redux** pour gérer tes données et tes actions

## Enoncé Aventurier 

- Tout est dit :arrow_up:

## Enoncé Guidé

<details>
  <summary>
    Quelques pistes
  </summary>

Objectif : construire la ChatRoom

1 - **Config**: Récupération des outils et de la config
  - On récupère le modèle
  - On installe les dépendances

2 -  **Render**: Instanciation du composant racine et rendu dans le DOM réel
  - On vérifie qu'on fait bien le rendu d'un élément React dans le DOM avec le `render` de ReactDom


3 - **Découpage**: dans le composant racine on identifie les zones principales de l'appli
  - On peut nommer le composant racine `App` ou `Chat` (ou autre au choix), il contiendra un listing de messages et une zone de formulaire

4 - **Composants**: reponsables de la représentation d'un fragment d'interface
  - On décrit un composant `Form` pour le formulaire
  - On décrit un composant `Messages` pour le listing des messages
  - On décrit un composant `Message` pour le contenu d'un message

5 - **Props**: configuration des composants via les props
  - Le composant `Message` transpose une chaîne de caractère représentant un message vers une représentation
    - On passe une prop à l'instanciation des `Message` dans `Messages`
    - Dans le composant on récupère la prop, on la valide et on s'en sert

6 - **Store**: détenteur de la vérité 
  - On installe Redux
  - On crée le store, le gardien du state, pour cela aide-toi du code produit en cours dans le dossier `store`

  - <details><summary>Solution pour créer le store</summary>

      ```js
      import { createStore } from 'redux';

      import reducer from 'chemin/vers/reducer';

      const store = createStore(reducer);

      export default store;
      ```
    </details>

  - **Reducer**: fonction qui sait retourner un nouveau state en fonction d'une action
    - On crée le reducer à fournir au store, pour le moment il ne gère aucune action, pour cela aide-toi du reducer codé en cours
  - **State initial**: données représentant l'état initial de notre application
    - Il nous faut la liste des messages initiaux dans le state
  - <details><summary>Solution pour créer le reducer</summary>

    ```js
    const initialState = {
      /* 
        ranger les messages initiaux dans le state
      */
    };

    const reducer = (state = initialState, action = {}) => {
      switch (action.type) {
        default:
          return state;
      }
    }

    export default reducer;
    ```
    </details>

7 - **Provider**: diffuseur du store
  - Notre store est notre interface pour dialoguer avec le state, on le veut partout
   - On installe React-Redux
   - On instancie le composant `Provider` à la racine de notre application, on passe le composant racine en enfant du provider
   - On importe le store pour la passer en prop au provider
   - Pense toujours à regarder les exemples du jour

8 - **useSelector**: branchement en lecture
  - Le composant `Messages` veut ses messages qui sont en principe dans le state connu du store, le hook `useSelector` fourni par react-redux va nous permettre d'aller les récupérer et de nous en servir avec un `map` par exemple pour appeler plusieurs fois le composant `Message` à qui on va passer le contenu de chaque message en props
  - Comme toujours va voir le code du jour pour retrouver comment utiliser `useSelector` ou aide toi de la [documentation](https://react-redux.js.org/api/hooks)

Notre application sait afficher correctement des messages, il faut maintenant pouvoir en ajouter, on prépare un champ contrôlé puis on gère la soumission du formulaire

On fait en sorte que la `value` du champ de notre composant `Form` dépende du state
  - On définit une valeur initiale dans notre state initial
  - On reprend l'étape 8 pour utiliser `useSelector` et afficher une valeur dans notre formulaire qui vient du state

Puis il faut pouvoir modifier la valeur de ce champ, pour cela on passe à l'étape 9

9 - **useDispatch** : émission d'intentions 
  - **Event**: dans les composants on réagit à des interactions
    - On ajoute un écouteur via une prop `onClick`, `onSubmit`, `onChange`, ... dans le composant
    - <details><summary>Un peu d'aide</summary>

        ```jsx
        // mon composant
        const Composant = () => {
          const handleChange = (event) => {
            console.log(event.value);
            // Ici j'ai l'intention de changer la valeur du champ
          }

          return (
            <form>
              <input onChange={handleChange} />
            </form>
          );
        };
        ```
      </details>
    - Oui mais quoi faire quand l'event a lieu ? on va émettre une intention :arrow_down:
  - **Dispatch d'une Action**: émission d'une intention
    - On appelle le hook `useDispatch` fourni par react-refux pour récupérer la fonction `dispatch` capable d'émettre une intention
    - On fait en sorte de dispatcher une action en réponse à une intéraction
    - Si possible on prépare l'**action type** et l'**action creator** qui vont bien par soucis pratique  
    - Quand l'intention est émise, plus qu'à la traduire dans les faits
  - **Reducer** = un traducteur d'intentions
    - Dispatcher, c'est appeler la méthode dispatch du store. On fait donc travailler notre store qui va appeler le reducer et lui passer l'action pour savoir comment le state doit évoluer
    - On ajoute un `case` dans notre reducer pour gérer le cas de cette action et décrire comment devra évoluer le state en fonction de l'action
    - On n'oublie pas d'importer l'action type qui va bien
    - <details><summary>Un exemple ?</summary>
  
        ```js
          const reducer = (state = initialState, action = {}) => {
            switch (action.type) {
              case ACTION_TYPE:
                return {
                  ...state,
                  modif: 'truc',
                }
              default:
                return state;
            }
          };
        ```
      </details>

On reprend l'étape 9 pour gérer la soumission

</details>
<br>

---

## Bonus


<details>
  <summary>
    S'il te reste du jus, un peu de css ?
  </summary>

### On peaufine

Rapproche toi de la capture ci dessous en retravaillant tes styles

![résultat](bonus.png)


