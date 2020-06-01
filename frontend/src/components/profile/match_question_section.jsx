import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { ABOUTME_SECTIONS, PROFILE_QUESTIONS } from './profile_questions';

const MatchQuestionSection = ({section, essayQuestion, essayAnswer}) => {
  const [displayMore, setDisplayMore] = useState(false);
  const [likedAnswer, setLikedAnswer] = useState(false);
    return <>
      <div className='match-profile-section'>
        <div className='match-profile-section-header'>
          <p className='match-profile-section-header-title'>{section}</p>
          <p className='match-profile-section-header-question'>{essayQuestion}</p>
        </div>
        <div className='match-profile-section-answer'>{essayAnswer}</div>
        {
          !likedAnswer ?
            <button className='match-profile-section-like' onClick={() => {
              setLikedAnswer(true);
              console.log('Answer liked')
            }}><i className='fas fa-heart' /> LIKE</button> :
            <button className='match-profile-section-comment' onClick={() => console.log('Commenting on answer')}><i className='fas fa-comment-alt' /> COMMENT</button>
        }
      </div>
    </>
};

export default withRouter(MatchQuestionSection);