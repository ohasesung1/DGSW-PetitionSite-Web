import signStore from './sign';
import dialogStore from './dialog';
import petitionStore from './petition';

const stores = {
  sign: new signStore(),
  dialog: new dialogStore(),
  petitionStore: new petitionStore()
};

export default stores;