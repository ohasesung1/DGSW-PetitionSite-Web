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

  async deleteAuth (request) { // 학생회 권한 부여 함수
    const token = TokenVerification() === 'localT' ? localStorage.getItem('petition-token') : sessionStorage.getItem('petition-token'); 
    try {
      const { data } = await axios.post(`${SERVER}/auth/delete_auth`, request, {
        headers: {
          'x-access-token' : token
        }
      });
      return data;
    } catch (error) {
      throw error;
    }
  }

  async searchMember (searchWord) { // 학생회 검색
    const token = TokenVerification() === 'localT' ? localStorage.getItem('petition-token') : sessionStorage.getItem('petition-token'); 
    try {
      const { data } = await axios.get(`${SERVER}/member/search?searchWord=${searchWord}`, {
        headers: {
          'x-access-token' : token
        }
      });
      return data;
    } catch (error) {
      throw error;
    }
  }

  async deletePetition (idx) { //  청원 삭제
    const token = TokenVerification() === 'localT' ? localStorage.getItem('petition-token') : sessionStorage.getItem('petition-token'); 
    try {
      const { data } = await axios.delete(`${SERVER}/petition?idx=${idx}`, {
        headers: {
          'x-access-token' : token
        }
      });
      return data;
    } catch (error) {
      throw error;
    }
  }

  async getOrderMember () { // 관리자용 멤버 조회 함수
    const token = TokenVerification() === 'localT' ? localStorage.getItem('petition-token') : sessionStorage.getItem('petition-token'); 
    try {
      const { data } = await axios.get(`${SERVER}/member/admin`, {
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