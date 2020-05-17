import signStore from './sign';
import dialogStore from './dialog';
import petitionStore from './petition';
import adminStore from './admin';

const stores = {
  sign: new signStore(),
  dialog: new dialogStore(),
  petitionStore: new petitionStore(),
  adminStore: new adminStore()
};

export default stores;