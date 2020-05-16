import { action } from 'mobx';
import { autobind } from 'core-decorators';
import AdminRepository from './AdminRepository';

@autobind
class AdminStore {

  @action
  async authorizationStudent (request) {
    try {
      const response = await AdminRepository.authorizationStudent(request);

      return new Promise((resolve, reject) => {
        resolve(response);
      });
    } catch (error) {
      console.error(error);
      
      return new Promise((resolve, reject) => {
        reject(error);
      });
    }
  }
}

export default AdminStore;