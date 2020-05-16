import axios from 'axios';
import TokenVerification from 'lib/Token/TokenVerification';
import { SERVER } from 'config/config.json';

class AdminRepository {
  async authorizationStudent (request) { // 학생회 권한 부여 함수
    const token = TokenVerification() === 'localT' ? localStorage.getItem('petition-token') : sessionStorage.getItem('petition-token'); 
    try {
      const { data } = await axios.post(`${SERVER}/auth/grant`, request, {
        headers: {
          'x-access-token' : token
        }
      });
      return data;
    } catch (error) {
      throw error;
    }
  }
}

export default new AdminRepository();