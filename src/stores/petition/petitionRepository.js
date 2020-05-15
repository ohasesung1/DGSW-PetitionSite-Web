import axios from 'axios';
import { SERVER } from 'config/config.json';

class signRepository {
  async getPetitionFeed (page, limit) {
    try {
      const { data } = await axios.get(`${SERVER}/petition?page=${page}&limit=${limit}`);
      return data;
    } catch (error) {
      throw error;
    }
  }

  async getAllPetitionFeed (page, limit) {
    try {
      const { data } = await axios.get(`${SERVER}/petition/all?page=${page}&limit=${limit}`);
      return data;
    } catch (error) {
      throw error;
    }
  }
}

export default new signRepository();
