/* eslint-disable indent */
const debug = (store) => (next) => (action) => {
  switch (action.type) {
    case 'TEST_DEBUG_MW':
      /*
          Quand l'action est capturée, je fais mon traitement
          (appel API par exemple)
        */
      console.group('je passe par le DEBUG MW');
      console.log(store);
      console.log(next);
      console.log(action);
      console.groupEnd();

      /*
          Après un appel API, par exemple,
          je peux dispatcher une nouvelle action
          `store.dispatch(newAction())`
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

export default debug;
