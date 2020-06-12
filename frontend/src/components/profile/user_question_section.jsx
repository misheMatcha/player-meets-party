import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { openModal } from '../../actions/modal_actions';
import { PROFILE_QUESTIONS, PROFILE_QUESTIONS_PLACEHOLDERS } from './profile_options';

export const UserQuestionSection = ({answers, section, sectionIdx, essayIdx, defaultQuestion, defaultAnswer, aboutMe, aspirations, talent, myTraits, needs, hobbies, moments, secrets, dating}) => {
  const [question, setQuestion] = useState(defaultQuestion)
  const placeholder = PROFILE_QUESTIONS_PLACEHOLDERS[section][essayIdx];
  // const [answer, setAnswer] = useState(defaultAnswer)
  const answerIdx = PROFILE_QUESTIONS[section].indexOf(question)
  const answer = answers[sectionIdx];

  useEffect(() => {
    console.log(answer)
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
          <p className='user-profile-section-header-question'>{question}</p>
        </div>
        <i className='fas fa-chevron-down'/>
      </div>
      <div className='user-profile-section-answer' style={{color: !answer ? '#aeb4bf' : ''}}>
        {!answer ? placeholder : answer}
        <span className='essay-write-button' onClick={() => dispatchCorrectForm(section)}>
          <i className='fas fa-pencil-alt'/> WRITE
        </span>
      </div>
    </div>
  </>
};

const mSTP = state => ({
  answers: state.entities.users.user.profile_essay_answers
});

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