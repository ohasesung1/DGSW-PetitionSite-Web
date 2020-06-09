import { action } from 'mobx';
import { autobind } from 'core-decorators';
import signRepository from './signRepository';

@autobind
class signStore {

  @action
  async handleSignIn (request) {
    try {
      const response = await signRepository.handelSignIn(request);

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
  async handleSignUp (request) {
    try {
      const response = await signRepository.handelSignUp(request);

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
  async handelCheckId (request) {
    try {
      const response = await signRepository.handelCheckId(request);

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

export default signStore;