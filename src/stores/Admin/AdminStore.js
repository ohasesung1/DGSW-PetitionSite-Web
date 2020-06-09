import { action, observable } from 'mobx';
import { autobind } from 'core-decorators';
import AdminRepository from './AdminRepository';

@autobind
class AdminStore {

  @observable memberData = [];

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

  @action
  async deleteAuth (request) {
    try {
      const response = await AdminRepository.deleteAuth(request);

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

  @action
  async deletePeition (idx) {
    try {
      const response = await AdminRepository.deletePetition(idx);

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

  @action
  async searchMember (searchWord) {
    try {
      const response = await AdminRepository.searchMember(searchWord);      
      
      this.memberData = response.data.member;

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

  @action
  async getOrderMember () {
    try {
      const response = await AdminRepository.getOrderMember();

      this.memberData = response.data.member;

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