import React, { useEffect, useState } from 'react';
import PropTypes  from 'prop-types';
import classNames from 'classnames/bind';
import moment from 'moment';
import ReactPlayer from 'react-player';
import style from './PetitionDetailTemplate.scss';
import { BsFillCircleFill } from 'react-icons/bs';
import schoolImage from 'assets/image/schoolImage.jpg';
import PetitionCommentItem from 'components/PetitionDetail/PetitionCommentItem/PetitionCommentItem';

const cx = classNames.bind(style);

const PetitionDetailTemplate = ({ detailData,adminAuth,
    commentContentsObj,
    handlePetitionDelete,
    handleWriteCommentFunc, 
    handleWritePagePath,
    sideAllowedPetition,
    handleBlindPetition,
    handleAllowPetition
  }) => {

  const { idx, title, contents, category, joinDate, id, blind, comment, voteCount } = detailData;
  let { isAllowed } = detailData;
  

  const joinDateFormat = moment(joinDate).format('YYYY-MM-DD');
  
  const { commentContents, setCommentContents } = commentContentsObj;
  const [commentArray, setCommentArray] = useState([]);

  let memberIdLength;
  
  if (isAllowed === 0) {
    isAllowed = '승인 대기 중';
  } else if (isAllowed === 1) {
    isAllowed = '승인 완료';
  }
  if (id) {
    memberIdLength = id[0];
    for (let i = 1; i < id.length; i++) {
      memberIdLength += '*';
    };
  }
useEffect(() => {
  if (comment) {
    setCommentArray(comment.map((item) => <PetitionCommentItem key={item.idx} item={item}/>));
  }
}, [comment]);
  
  return (
    <div className={cx('PetitionDetailTemplate')}>
      <div className={cx('PetitionDetailTemplate-contentsDiv')}>
        <div className={cx('PetitionDetailTemplate-contentsDiv-titleDiv')}>
          <div className={cx('PetitionDetailTemplate-contentsDiv-titleDiv-guideDiv')}>
            <span>- 청원 {isAllowed} -</span>
          </div>
          <div className={cx('PetitionDetailTemplate-contentsDiv-titleDiv-title')}>
            <span>{title}</span>
          </div>
          <div className={cx('PetitionDetailTemplate-contentsDiv-titleDiv-voteDiv')}>
            <span>참여 인원: [ </span><span className={cx('categoryColor')}>{voteCount}</span> <span>명 ]</span>
          </div>
          <div className={cx('PetitionDetailTemplate-contentsDiv-titleDiv-infoDiv')}>
            <div className={cx('PetitionDetailTemplate-contentsDiv-titleDiv-infoDiv-categoryDiv')}>
              <span>카테고리: {category}</span>
            </div>
            <div className={cx('PetitionDetailTemplate-contentsDiv-titleDiv-infoDiv-categoryDiv')}>
              <span>청원 등록일: {joinDateFormat}</span>
            </div>
            <div className={cx('PetitionDetailTemplate-contentsDiv-titleDiv-infoDiv-categoryDiv')}>
              <span>청원 처리 상태: {isAllowed}</span>
            </div>
            <div className={cx('PetitionDetailTemplate-contentsDiv-titleDiv-infoDiv-categoryDiv')}>
              <span>청원인: {memberIdLength}</span>
            </div>
          </div>
          <div className={cx('PetitionDetailTemplate-contentsDiv-titleDiv-statusDiv')}>
            <div className={cx('PetitionDetailTemplate-contentsDiv-titleDiv-statusDiv-graph')}>
              <div className={cx('PetitionDetailTemplate-contentsDiv-titleDiv-statusDiv-graph-start')}>
                <div className={cx('PetitionDetailTemplate-contentsDiv-titleDiv-statusDiv-graph-start-iconDiv')}>
                  <BsFillCircleFill className={cx('PetitionDetailTemplate-contentsDiv-titleDiv-statusDiv-graph-start-iconDiv-icon')}/>
                </div>
                <span>청원 시작</span>
              </div>
              <div className={cx('PetitionDetailTemplate-contentsDiv-titleDiv-statusDiv-graph-start')}>
              <div className={cx('PetitionDetailTemplate-contentsDiv-titleDiv-statusDiv-graph-start-iconDiv')}>
                  <BsFillCircleFill className={cx('PetitionDetailTemplate-contentsDiv-titleDiv-statusDiv-graph-start-iconDiv-icon', {'statusColor': isAllowed === '승인 대기 중'})}/>
                </div>
                <span>승인 대기 중</span>
              </div>
              <div className={cx('PetitionDetailTemplate-contentsDiv-titleDiv-statusDiv-graph-start')}>
              <div className={cx('PetitionDetailTemplate-contentsDiv-titleDiv-statusDiv-graph-start-iconDiv')}>
                  <BsFillCircleFill className={cx('PetitionDetailTemplate-contentsDiv-titleDiv-statusDiv-graph-start-iconDiv-icon', {'statusColor': isAllowed === '승인 완료'})}/>
                </div>
                <span>승인 완료</span>
              </div>
            </div>
          </div>
          <div className={cx('PetitionDetailTemplate-contentsDiv-titleDiv-contentsTitleDiv')}>
            <span>청원 내용</span>
          </div>
        </div>
        <div className={cx('PetitionDetailTemplate-contentsDiv-contentsBox')}>
          {contents}
      </div>
        <div className={cx('PetitionDetailTemplate-contentsDiv-commentDiv')}>
          <div className={cx('PetitionDetailTemplate-contentsDiv-commentDiv-titleDiv')}>
            <div className={cx('PetitionDetailTemplate-contentsDiv-commentDiv-titleDiv-title')}>
              <span>청원 동의 {voteCount}명</span>
            </div>
          </div>
          <div className={cx('PetitionDetailTemplate-contentsDiv-commentDiv-commentWriteDiv')}>
            <div className={cx('PetitionDetailTemplate-contentsDiv-commentDiv-commentWriteDiv-textDiv')}>
              <textarea className={cx('PetitionDetailTemplate-contentsDiv-commentDiv-commentWriteDiv-textDiv-text')} placeholder={'동의 댓글 작성...'} value={commentContents} onChange={(e) => setCommentContents(e.target.value)}/>
            </div>
            <div className={cx('PetitionDetailTemplate-contentsDiv-commentDiv-commentWriteDiv-sendButtonDiv')}>
              <button className={cx('PetitionDetailTemplate-contentsDiv-commentDiv-commentWriteDiv-sendButtonDiv-sendButton')} onClick={() => handleWriteCommentFunc(idx)}>동의</button>
            </div>
          </div>
          <div className={cx('PetitionDetailTemplate-contentsDiv-commentDiv-commentTemplate')}>
            {commentArray}
          </div>
        </div>
      </div>
      <div className={cx('PetitionDetailTemplate-bannerDiv')}> 
        <div className={cx('PetitionDetailTemplate-bannerDiv-petitionWriteDiv')}>
          <div className={cx('PetitionDetailTemplate-bannerDiv-petitionWriteDiv-title')}>
            <span>2020 학생회 지금 청원 하러 가기</span>
          </div>
          <div className={cx('PetitionDetailTemplate-bannerDiv-petitionWriteDiv-imgDiv')} onClick={() => handleWritePagePath()}>
            <img className={cx('PetitionDetailTemplate-bannerDiv-petitionWriteDiv-imgDiv-img')}src={schoolImage}/>
          </div>
        </div>
        <div className={cx('PetitionDetailTemplate-bannerDiv-schoolYoutubeDiv')}>
          <div className={cx('PetitionDetailTemplate-bannerDiv-schoolYoutubeDiv-title')}>
            <span>학교 홍보 영상</span>
          </div>
          <ReactPlayer width={"280px"} height={"200px"} url={'https://www.youtube.com/watch?v=6Z71dmwOEyM'} loop controls/>
        </div>
        <div className={cx('PetitionDetailTemplate-bannerDiv-allowedPetitionDiv')}>
          <div className={cx('PetitionDetailTemplate-bannerDiv-allowedPetitionDiv-title')}>
            <span>승인된 청원</span>
          </div>
          {sideAllowedPetition}
        </div>
        {
          adminAuth ?
          <>
            <div className={cx('PetitionDetailTemplate-bannerDiv-adminButtonsDiv')}>
              <button className={cx('PetitionDetailTemplate-bannerDiv-adminButtonsDiv-allowButton')} onClick={() => handleAllowPetition(idx)}>청원 승인</button>
            </div>
            <div className={cx('PetitionDetailTemplate-bannerDiv-adminButtonsDiv')}>
              <div className={cx('PetitionDetailTemplate-bannerDiv-adminButtonsDiv-deleteButtonDiv')}>
                <button className={cx('PetitionDetailTemplate-bannerDiv-adminButtonsDiv-deleteButtonDiv-deleteButton')} onClick={() => handlePetitionDelete(idx)}>청원 삭제</button>
              </div>
              <div className={cx('PetitionDetailTemplate-bannerDiv-adminButtonsDiv-blindButtonDiv')}> 
                <button className={cx('PetitionDetailTemplate-bannerDiv-adminButtonsDiv-blindButtonDiv-blindButton')} onClick={() => handleBlindPetition(idx, 1)}>청원 블라인드</button>
              </div>
            </div>
            {
              blind ?
              <div className={cx('PetitionDetailTemplate-bannerDiv-adminButtonsDiv-notBlindButtonDiv')}> 
                <button className={cx('PetitionDetailTemplate-bannerDiv-adminButtonsDiv-blindButtonDiv-blindButton')} onClick={() => handleBlindPetition(idx, 0)}>청원 블라인드 해제</button>
              </div>
              : <></>
            }

            </>
            : <></>
        }
      </div>
    </div>
  );
};

PetitionDetailTemplate.propTypes = {
  detailData: PropTypes.object,
  commentContentsObj: PropTypes.object,
  handleWriteCommentFunc: PropTypes.func,
  handleWritePagePath: PropTypes.func,
  sideAllowedPetition: PropTypes.array
};

export default PetitionDetailTemplate;