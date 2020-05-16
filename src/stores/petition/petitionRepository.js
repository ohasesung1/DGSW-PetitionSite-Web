import axios from 'axios';
import TokenVerification from 'lib/Token/TokenVerification';
import { SERVER } from 'config/config.json';

class petitionRepository {
  async getPetitionFeed (page, limit) { // 승인 된 청원 조회 요청 함수
    try {
      const { data } = await axios.get(`${SERVER}/petition?page=${page}&limit=${limit}`);
      return data;
    } catch (error) {
      throw error;
    }
  }

  async getAllPetitionFeed (page, limit) {// 전체 청원 조회 요청 함수
    try {
      const { data } = await axios.get(`${SERVER}/petition/all?page=${page}&limit=${limit}`);
      return data;
    } catch (error) {
      throw error;
    }
  }

  async writePetition (request) { // 청원 작성 요청 함수
    // 토큰 가져오기
    const token = TokenVerification() === 'localT' ? localStorage.getItem('petition-token') : sessionStorage.getItem('petition-token'); 

    try {
      const { data } = await axios.post(`${SERVER}/petition/`, request, {
        headers: {
          'x-access-token' : token,
        },
      });
      return data;
    } catch (error) {
      throw error;
    }
  }
}

export default new petitionRepository();
