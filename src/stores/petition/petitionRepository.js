import axios from 'axios';
import TokenVerification from 'lib/Token/TokenVerification';
import { SERVER } from 'config/config.json';

class petitionRepository {
  async getPetitionFeed (page, limit, type) { // 승인 된 청원 조회 요청 함수
    try {
      const { data } = await axios.get(`${SERVER}/petition?page=${page}&limit=${limit}&type=${type}`);
      return data;
    } catch (error) {
      throw error;
    }
  }

  async getPetitionFeedByCategory (page, limit, category) {// 전체 청원 조회 요청 함수
    try {
      const { data } = await axios.get(`${SERVER}/petition/category/?page=${page}&limit=${limit}&category=${category}`);
      return data;
    } catch (error) {
      throw error;
    }
  }

  async searchPetition (title, page, limit) {// 검색 청원 조회 요청 함수
    try {
      const { data } = await axios.get(`${SERVER}/petition/search?title=${title}&page=${page}&limit=${limit}`);
      return data;
    } catch (error) {
      throw error;
    }
  }

  async writePetitionComment (request) {// 검색 청원 조회 요청 함수
    const token = TokenVerification() === 'localT' ? localStorage.getItem('petition-token') : sessionStorage.getItem('petition-token'); 
    try {
      const { data } = await axios.post(`${SERVER}/petition/comment`, request, {
        headers: {
          'x-access-token' : token,
        }
      });
      return data;
    } catch (error) {
      throw error;
    }
  }

  async getPetitionDetail (idx) {//  청원 상세 조회 조회 요청 함수
    try {
      const { data } = await axios.get(`${SERVER}/petition/detail?idx=${idx}`);
      return data;
    } catch (error) {
      throw error;
    }
  }

  async getPetitionComments (idx) {//  청원 상세 조회 댓글 조회 요청 함수
    try {
      const { data } = await axios.get(`${SERVER}/petition/comment?petitionIdx=${idx}`);
      return data;
    } catch (error) {
      throw error;
    }
  }

  async deletePetition (idx) {//  청원 삭제 요청 함수
    const token = TokenVerification() === 'localT' ? localStorage.getItem('petition-token') : sessionStorage.getItem('petition-token'); 

    try {
      const { data } = await axios.delete(`${SERVER}/petition?idx=${idx}`, {
        headers: {
          'x-access-token' : token,
        }
      });
      return data;
    } catch (error) {
      throw error;
    }
  }

  async allowPetition (request) {//  청원 승인 요청 함수
    const token = TokenVerification() === 'localT' ? localStorage.getItem('petition-token') : sessionStorage.getItem('petition-token'); 

    try {
      const { data } = await axios.post(`${SERVER}/petition/allow`, request, {
        headers: {
          'x-access-token' : token,
        }
      });
      return data;
    } catch (error) {
      throw error;
    }
  }

  async getStudentCouncilPetition (page, limit, type) {//  학생회 전용 청원 조회 요청 함수
    const token = TokenVerification() === 'localT' ? localStorage.getItem('petition-token') : sessionStorage.getItem('petition-token'); 

    try {
      const { data } = await axios.get(`${SERVER}/petition/get_student_council?page=${page}&limit=${limit}&type=${type}`, {
        headers: {
          'x-access-token' : token,
        }
      });
      return data;
    } catch (error) {
      throw error;
    }
  }

  async blindPetition (request) {//  청원 블라인드 요청 함수
    const token = TokenVerification() === 'localT' ? localStorage.getItem('petition-token') : sessionStorage.getItem('petition-token'); 

    try {
      const { data } = await axios.post(`${SERVER}/petition/blind`, request, {
        headers: {
          'x-access-token' : token,
        }
      });
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
