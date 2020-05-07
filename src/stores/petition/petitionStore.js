import { action } from 'mobx';
import { autobind } from 'core-decorators';
import petitionRepository from './petitionRepository';

@autobind
class petitionStore {
  @action
  async getPetitionFeed (page, limit) {
    try {
      const response = await petitionRepository.getPetitionFeed(page, limit);

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

export default petitionStore;