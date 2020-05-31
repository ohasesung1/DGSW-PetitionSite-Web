import { useState } from 'react';
import { action, observable } from 'mobx';
import { autobind } from 'core-decorators';
import petitionRepository from './petitionRepository';

@autobind
class petitionStore {
  @observable categoryPetitions = []; // 전체 청원 목록
  @observable categoryPetitionPageIndex = 1; // 전체 청원 페이지 index
  @observable categoryPetitionTotalPage = 1; // 전체 청원 페이지 개수
  @observable allowedPetitions = []; // 승인된 청원 목록
  @observable allowedPetitionTotalPage = 1; // 승인된 청원 페이지 개수
  @observable allowedPetitionPageIndex = 1; // 승인된 청원 페이지 index

  @observable studentCouncilPetitions = []; // 학생회 전용 청원 페이지 목록
  @observable studentCouncilPetitionsTotalpage = 1;
  @observable studentCouncilPetitionsPageIndex = 1;

  @observable petitionComment = []; // 청원 댓글

  @observable PetitionDetailData = {}; // 청원 상세 조회 변수

  @action
  handleAllowedPage(pageIndex) { // item index 리스트 설정 handleStudentCouncilPage
    this.allowedPetitionPageIndex = pageIndex;
  }

  @action
  handleStudentCouncilPage(pageIndex) { // item index 리스트 설정
    this.studentCouncilPetitionsPageIndex = pageIndex;
  }

  @action
  handleAllPage(pageIndex) { // item index 리스트 설정
    this.categoryPetitionPageIndex = pageIndex;
  }

  @action
  async getPetitionFeed (page, limit, type) { // 승인된 청원 목록을 Repository 함수를 통해 저장
    try {
      const response = await petitionRepository.getPetitionFeed(page, limit, type);
      
      this.allowedPetitions = response.data.petition; // 받아온 데이터를 observable 변수에 저장
      this.allowedPetitionTotalPage = response.data.totalPage; // 받아온 데이터를 observable 변수에 저장

      return new Promise((resolve, reject) => {// resonse 비동기 처리
        resolve(response);
      });
    } catch (error) {
      console.error(error);
      
      return new Promise((resolve, reject) => {// 에러 catch
        reject(error);
      });
    }
  }

  @action
  async getPetitionFeedByCategory (page, limit, category) { // 전체 청원 목록을 Repository 함수를 통해 저장
    try {
      const response = await petitionRepository.getPetitionFeedByCategory(page, limit, category);

      this.categoryPetitions = response.data.petition; // 받아온 데이터를 observable 변수에 저장
      this.categoryPetitionTotalPage = response.data.totalPage; // 받아온 데이터를 observable 변수에 저장

      return new Promise((resolve, reject) => { // resonse 비동기 처리
        resolve(response);
      });
    } catch (error) {
      console.error(error);
      
      return new Promise((resolve, reject) => { // 에러 catch
        reject(error);
      });
    }
  }

  @action
  async searchPetition (title, page, limit) { // 검색 청원 목록을 Repository 함수를 통해 저장
    try {
      const response = await petitionRepository.searchPetition(title, page, limit);

      this.allowedPetitions = response.data.petition; // 받아온 데이터를 observable 변수에 저장
      this.allowedPetitionTotalPage = response.data.totalPage; // 받아온 데이터를 observable 변수에 저장

      return new Promise((resolve, reject) => { // resonse 비동기 처리
        resolve(response);
      });
    } catch (error) {
      console.error(error);
      
      return new Promise((resolve, reject) => { // 에러 catch
        reject(error);
      });
    }
  }

  @action
  async searchCategoryPetition (title, page, limit) { // 검색 청원 목록을 Repository 함수를 통해 저장
    try {
      const response = await petitionRepository.searchPetition(title, page, limit);

      this.categoryPetitions = response.data.petition; // 받아온 데이터를 observable 변수에 저장
      this.categoryPetitionTotalPage = response.data.totalPage; // 받아온 데이터를 observable 변수에 저장

      return new Promise((resolve, reject) => { // resonse 비동기 처리
        resolve(response);
      });
    } catch (error) {
      console.error(error);
      
      return new Promise((resolve, reject) => { // 에러 catch
        reject(error);
      });
    }
  }

  @action
  async getPetitionDetail (idx) { //  청원 상세조회 후  Repository 함수를 통해 저장
    try {
      const response = await petitionRepository.getPetitionDetail(idx);

      this.PetitionDetailData = response.data.petition;

      return new Promise((resolve, reject) => { // resonse 비동기 처리
        resolve(response);
      });
    } catch (error) {
      console.error(error);
      
      return new Promise((resolve, reject) => { // 에러 catch
        reject(error);
      });
    }
  }

  
  @action
  async deletePetition (idx) { //  청원 상세조회 후  Repository 함수를 통해 저장
    try {
      const response = await petitionRepository.deletePetition(idx);

      return new Promise((resolve, reject) => { // resonse 비동기 처리
        resolve(response);
      });
    } catch (error) {
      console.error(error);
      
      return new Promise((resolve, reject) => { // 에러 catch
        reject(error);
      });
    }
  }

  @action
  async blindPetition (request) { //  청원 상세조회 후  Repository 함수를 통해 저장
    try {
      const response = await petitionRepository.blindPetition(request);

      return new Promise((resolve, reject) => { // resonse 비동기 처리
        resolve(response);
      });
    } catch (error) {
      console.error(error);
      
      return new Promise((resolve, reject) => { // 에러 catch
        reject(error);
      });
    }
  }

  @action
  async allowPetition (request) { //  청원 상세조회 후  Repository 함수를 통해 저장
    try {
      const response = await petitionRepository.allowPetition(request);

      return new Promise((resolve, reject) => { // resonse 비동기 처리
        resolve(response);
      });
    } catch (error) {
      console.error(error);
      
      return new Promise((resolve, reject) => { // 에러 catch
        reject(error);
      });
    }
  }

  @action
  async getStudentCouncilPetition (page, limit, type) { //  청원 상세조회 후  Repository 함수를 통해 저장
    try {
      const response = await petitionRepository.getStudentCouncilPetition(page, limit, type);

      this.studentCouncilPetitions = response.data.petition;
      this.studentCouncilPetitionsTotalpage = response.data.totalPage;

      return new Promise((resolve, reject) => { // resonse 비동기 처리
        resolve(response);
      });
    } catch (error) {
      console.error(error);
      
      return new Promise((resolve, reject) => { // 에러 catch
        reject(error);
      });
    }
  }

  @action
  async writePetition (request) { // 청원 작성
    try {
      const response = await petitionRepository.writePetition(request);

      return new Promise((resolve, reject) => { // resonse 비동기 처리
        resolve(response);
      });
    } catch (error) {
      console.error(error);
      
      return new Promise((resolve, reject) => { // 에러 catch
        reject(error);
      });
    }
  }

  @action
  async writePetitionComment (request) { // 청원 댓글 작성
    try {
      const response = await petitionRepository.writePetitionComment(request);

      return new Promise((resolve, reject) => { // resonse 비동기 처리
        resolve(response);
      });
    } catch (error) {
      console.error(error);
      
      return new Promise((resolve, reject) => { // 에러 catch
        reject(error);
      });
    }
  }

  @action
  async getPetitionComments (idx) { // 청원 댓글 조회
    try {
      const response = await petitionRepository.getPetitionComments(idx);

      this.petitionComment = response.data.comment;

      return new Promise((resolve, reject) => { // resonse 비동기 처리
        resolve(response);
      });
    } catch (error) {
      console.error(error);
      
      return new Promise((resolve, reject) => { // 에러 catch
        reject(error);
      });
    }
  }
}

export default petitionStore;