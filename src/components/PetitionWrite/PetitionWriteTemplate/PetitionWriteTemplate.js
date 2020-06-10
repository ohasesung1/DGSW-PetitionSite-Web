import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import style from './PetitionWriteTemplate.scss';
import moment from 'moment';
import classNames from 'classnames';

const cx = classNames.bind(style);

const PetitionWriteTemplate = ({titleObj, contentsObj, categoryObj, handleWritePetition, history, handleContentsLegnth, handleTitleLength}) => {
  const { title, setTitle } = titleObj;
  const { contents, setContents } = contentsObj;
  const { category, setCategory } = categoryObj;

  return (
    <div className={cx('PetitionWriteTemplate')}>
      <div className={cx('PetitionWriteTemplate-title')}>
        <span>지금 청원하기</span>
      </div>
      <div className={cx('PetitionWriteTemplate-guideContentOne')}>
        <div className={cx('PetitionWriteTemplate-guideContentOne-title')}>
          <span>학생회 학생청원 게시판 운영 원칙</span>
        </div>
        <ul>
          <li className={cx('PetitionWriteTemplate-guideContentOne-list')}>
            학생회는 사상과 표현의 다양성을 존중합니다. 동시에 타인의 권리를 침해하거나 명예를 훼손하는 내용은 제한합니다. 방송통신심의위원회의 '정보통신에 관한 심의 규정', 한국인터넷자율정책기구의 '정책규정' 등을 기반으로 문제 게시물은 삭제될 수 있습니다. 자극적이고 혐오스러운 내용, 비속어, 폭력적 내용, 특정 대상을 비하하거나 차별을 조장하는 내용, 개인정보 유출을 비롯해 타인의 권리를 침해하는 내용, 반복되는 내용, 허위사실 등은 삭제나 숨김 처리될 수 있습니다.
          </li>
          <li className={cx('PetitionWriteTemplate-guideContentOne-list')}>
            청원글은 게시 후 학생청원 게시판에 공개됩니다. 청원이 공개된 후 60% 이상의 동의를 받은 청원에 대해 답변합니다.
          </li>
          <li className={cx('PetitionWriteTemplate-guideContentOne-list')}>
            한 번 작성된 청원은 수정 및 삭제가 불가능합니다. 최초 청원 취지와 다른 내용으로 변경되는 것을 방지하여 청원 참여자의 의견을 보호하기 위한 조치이니 신중하게 작성하여 주시기 바랍니다.
          </li>
        </ul>
      </div>
      <div className={cx('PetitionWriteTemplate-guideContentTwo')}>
      <div className={cx('PetitionWriteTemplate-guideContentTwo-title')}>
          <span>청원 작성 요령</span>
        <ul>
          <li className={cx('PetitionWriteTemplate-guideContentTwo-list')}>
            청원 내용을 대표하는 짧은 제목(100자 이하)을 입력해주세요. 주요 단어를 제목에 포함시켜 주시면 검색을 통한 노출이 잘 이뤄질 수 있습니다.
          </li>
          <li className={cx('PetitionWriteTemplate-guideContentTwo-list')}>
            청원 내용과 관련된 분야를 선택해주세요. 참여자들이 '분야별 청원' 메뉴를 통해 접근할 수 있습니다
          </li>
          <li className={cx('PetitionWriteTemplate-guideContentTwo-list')}>
            사람들이 쉽게 읽고 이해할 수 있는 내용으로 작성해주시면 됩니다. 글자 수는 최대 1000자까지 입력 가능합니다.
          </li>
          <li className={cx('PetitionWriteTemplate-guideContentTwo-list')}>
            한번 작성된 청원은 수정 및 삭제가 불가능합니다. 최초 청원 취지와 다른 내용으로 변경되는 것을 방지하여 청원작성자의 의견을 보호하기 위한 조치이니 신중하게 게시해주시기 바랍니다.
          </li>
        </ul>
      </div>
      </div>
      <div className={cx('PetitionWriteTemplate-centerLine')}/>
      <div className={cx('PetitionWriteTemplate-titleDiv')}>
        <div className={cx('PetitionWriteTemplate-titleDiv-title')}>
          <span>청원 제목</span>
        </div>
        <div className={cx('PetitionWriteTemplate-titleDiv-titleInputDiv')}>
          <input className={cx('PetitionWriteTemplate-titleDiv-titleInputDiv-titleInput')} value={title} onChange={(e) => handleTitleLength(e)}/>
        </div>
        <span className={cx('PetitionWriteTemplate-titleDiv-title-titleLength')}>{title.length}/50자</span>
      </div>
      <div className={cx('PetitionWriteTemplate-categoryDiv')}>
        <div className={cx('PetitionWriteTemplate-categoryDiv-title')}>
          <span>카테고리</span>
        </div>
        <div className={cx('PetitionWriteTemplate-titleDiv-titleInputDiv')}>
          <select className={cx('PetitionWriteTemplate-titleDiv-titleInputDiv-titleInput')} value={category} onChange={(e) => {setCategory(e.target.value)}}>
            <option value={'empty'}>카테고리 선택</option>
            <option value={'기숙사'}>기숙사</option>
            <option value={'학생회'}>학생회</option>
            <option value={'축제'}>축제</option>
            <option value={'운동회'}>운동회</option>
            <option value={'해커톤'}>해커톤</option>
            <option value={'동아리'}>동아리</option>
            <option value={'나르샤'}>나르샤</option>
            <option value={'강의'}>강의</option>
            <option value={'급식'}>급식</option>
          </select>
        </div>
      </div>
      <div className={cx('PetitionWriteTemplate-contentsBox')}>
        <div className={cx('PetitionWriteTemplate-contentsBox-title')}>
          <span>청원내용</span>
        </div>
        <div className={cx('PetitionWriteTemplate-contentsBox-contentsDiv')}>
          <textarea className={cx('PetitionWriteTemplate-contentsBox-contentsDiv-contents')} value={contents} onChange={(e) => handleContentsLegnth(e)}/>
        </div>
        <div className={cx('PetitionWriteTemplate-contentLengthDiv')}>
          {contents.length}/1000자
        </div>
      </div>
      <div className={cx('PetitionWriteTemplate-buttonDiv')}>
        <button className={cx('PetitionWriteTemplate-buttonDiv-button')} onClick={() => handleWritePetition()}>작성 완료</button>
        <button className={cx('PetitionWriteTemplate-buttonDiv-cancleButton')} onClick={() => history.goBack(1)}>작성 취소</button>
      </div>
    </div>
  );
};

PetitionWriteTemplate.propTypes = {
  titleObj: PropTypes.object,
  contentsObj: PropTypes.object,
  categoryObj: PropTypes.object,
  handleWritePetition: PropTypes.func
};

export default withRouter(PetitionWriteTemplate);