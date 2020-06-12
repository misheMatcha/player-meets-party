import React, { useState } from 'react';

const MatchQuestionSection = ({section, question, answer}) => {
  const [likedAnswer, setLikedAnswer] = useState(false);
    return <>
      <div className='match-profile-section'>
        <div className='match-profile-section-header'>
          <p className='match-profile-section-header-title'>{section}</p>
          <p className='match-profile-section-header-question'>{question}</p>
        </div>
        <div className='match-profile-section-answer'>{answer}</div>
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

export default MatchQuestionSection;