import { useState } from 'react';
import { action, observable } from 'mobx';
import { autobind } from 'core-decorators';
import petitionRepository from './petitionRepository';

@autobind
class petitionStore {
  @observable allPetitions = []; // 전체 청원 목록
  @observable allPetitionPageIndex = 1; // 전체 청원 페이지 index
  @observable allPetitionTotalPage = 1; // 전체 청원 페이지 개수
  @observable allowedPetitions = []; // 승인된 청원 목록
  @observable allowedPetitionTotalPage = 1; // 승인된 청원 페이지 개수
  @observable allowedPetitionPageIndex = 1; // 승인된 청원 페이지 index

  @action
  handleAllowedPage(pageIndex) {
    this.allowedPetitionPageIndex = pageIndex;
  }

  @action
  handleAllPage(pageIndex) {
    this.allPetitionPageIndex = pageIndex;
  }

  @action
  async getPetitionFeed (page, limit) { // 승인된 청원 목록을 Repository 함수를 통해 저장
    try {
      const response = await petitionRepository.getPetitionFeed(page, limit);

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
  async getAllPetitionFeed (page, limit) { // 전체 청원 목록을 Repository 함수를 통해 저장
    try {
      const response = await petitionRepository.getAllPetitionFeed(page, limit);

      this.allPetitions = response.data.petition; // 받아온 데이터를 observable 변수에 저장
      this.allPetitionTotalPage = response.data.totalPage; // 받아온 데이터를 observable 변수에 저장

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
}

export default petitionStore;