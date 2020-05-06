import signStore from './sign';
import dialogStore from './dialog';

const stores = {
  sign: new signStore(),
  dialog: new dialogStore()
};

export default stores;