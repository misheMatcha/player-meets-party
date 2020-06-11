import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { openModal } from '../../actions/modal_actions';

export const UserQuestionSection = ({section, essayList, essayQuestion, essayAnswer, aboutMe, aspirations, talent, myTraits, needs, hobbies, moments, secrets, dating}) => {
  useEffect(() => {
  });

  const dispatchCorrectForm = section => {
    switch(section){
      case 'ABOUT ME':
        aboutMe();
        break;
      case 'ASPIRATIONS':
        aspirations();
        break;
      case 'TALENT':
        talent();
        break;
      case 'MY TRAITS':
        myTraits();
        break;
      case 'NEEDS':
        needs();
        break;
      case 'HOBBIES':
        hobbies();
        break;
      case 'MOMENTS':
        moments();
        break;
      case 'SECRETS':
        secrets();
        break;
      case 'DATING':
        dating();
        break;
      default:
        break;
    }
  };

  return <>
    <div className='user-profile-section'>
      <div className='user-profile-section-header'>
        <div className='user-profile-section-header-wrap'>
          <p className='match-profile-section-header-title'>{section}</p>
          <p className='user-profile-section-header-question'>{essayQuestion}</p>
        </div>
        <i className='fas fa-chevron-down'/>
      </div>
      <div className='user-profile-section-answer'>
        {essayAnswer}
        <span className='essay-write-button' onClick={() => dispatchCorrectForm(section)}>
          <i className='fas fa-pencil-alt'/> WRITE
        </span>
      </div>
    </div>
  </>
};

const mSTP = state => ({});

const mDTP = dispatch => ({
  aboutMe: () => dispatch(openModal('ABOUT ME')),
  aspirations: () => dispatch(openModal('ASPIRATIONS')),
  talent: () => dispatch(openModal('TALENT')),
  myTraits: () => dispatch(openModal('MY TRAITS')),
  needs: () => dispatch(openModal('NEEDS')),
  hobbies: () => dispatch(openModal('HOBBIES')),
  moments: () => dispatch(openModal('MOMENTS')),
  secrets: () => dispatch(openModal('SECRETS')),
  dating: () => dispatch(openModal('DATING'))
});

export default connect(mSTP, mDTP)(UserQuestionSection);