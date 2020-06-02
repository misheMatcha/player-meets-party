import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';

const UserQuestionSection = ({ section, essayList, essayQuestion, essayAnswer }) => {

  return <>
    <div className='user-profile-section'>
      <div className='user-profile-section-header'>
        <div className='user-profile-section-header-wrap'>
          <p className='match-profile-section-header-title'>{section}</p>
          <p className='user-profile-section-header-question'>{essayQuestion}</p>
        </div>
        <i className='fas fa-chevron-down'/>
      </div>
      <div className='user-profile-section-answer'>{essayAnswer}<span><i className='fas fa-pencil-alt'/> WRITE</span></div>
    </div>
  </>
};

export default withRouter(UserQuestionSection);