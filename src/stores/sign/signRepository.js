import axios from 'axios';
import { SERVER } from 'config/config.json';

class signRepository {
  async handelSignIn (request) {
    try {
      const { data } = await axios.post(`${SERVER}/auth/login`, request);
      return data;
    } catch (error) {
      throw error;
    }
  }

  async handelSignUp (request) {
    try {
      const { data } = await axios.post(`${SERVER}/auth/register`, request);
      return data;
    } catch (error) {
      throw error;
    }
  }

  async handelCheckId (request) {
    try {
      const { data } = await axios.post(`${SERVER}/auth/find/id`, request);
      return data;
    } catch (error) {
      throw error;
    }
  }
}

export default new signRepository();
