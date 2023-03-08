import axios from 'axios';
import { catchError, changeLoading, newConnexion } from '../actions/formAction';

const auth = (store) => (next) => (action) => {
  const { payload } = action;
  switch (action.type) {
    case 'AUTHENTIFICATION':
      /*
            Quand l'action est capturée, je fais mon traitement
            (appel API par exemple)
          */
      store.dispatch(changeLoading({ loading: true }));
      axios
        .post('http://localhost:3001/login', { ...payload })
        .then((res) => {
          const { pseudo } = res.data;
          store.dispatch(
            newConnexion({
              pseudo,
              login: true,
            }),
          );
        })
        .catch(() => store.dispatch(catchError()))
        .finally();
      /*
            Après un appel API, par exemple,
            je peux dispatcher une nouvelle action
            `store.dispatch(newAction(user{...res.data}))`
          */

      // Par défaut, le MW bloque l'action
      // mais on peut faire passer l'action à l'étape suivante (MW, reducer)
      next(action);
      break;

    default:
      // Si l'action « n'intéresse » pas le MW,
      // on n'oublie pas de faire passer l'action à l'étape suivante :
      // autre MW ou Reducer
      next(action);
  }
};

export default auth;
