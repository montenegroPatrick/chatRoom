// == Import : npm
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './store/store';

// == Import : local
// Composants
import App from 'src/components/App/App';
import { StrictMode } from 'react';
import { connectWebsocket } from './actions/chatAction';

store.dispatch(connectWebsocket());
// == Render
// 1. Élément React racine (celui qui contient l'ensemble de l'app)
//    => crée une structure d'objets imbriqués (DOM virtuel)
const rootReactElement = (
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);

// 2. La cible du DOM (là où la structure doit prendre vie dans le DOM)
const root = createRoot(document.getElementById('root'));

// 3. Déclenchement du rendu de React (virtuel) => DOM (page web)
root.render(rootReactElement);
