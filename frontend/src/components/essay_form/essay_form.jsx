import React, { useEffect, useState } from 'react';
import { PROFILE_QUESTIONS, ABOUTME_SECTIONS, PROFILE_QUESTIONS_PLACEHOLDERS } from '../profile/profile_options';

const EssayForm = props => {
  let answerIdx = ABOUTME_SECTIONS.indexOf(props.formType);
  const [question, setQuestion] = useState(props.user.profile_essay_questions[answerIdx]);
  const [answer, setAnswer] = useState(props.user.profile_essay_answers[answerIdx]);
  const updatedAnswers = props.user.profile_essay_answers;
  const placeholderIdx = PROFILE_QUESTIONS[props.formType].indexOf(question);
  const placeholder = PROFILE_QUESTIONS_PLACEHOLDERS[props.formType][placeholderIdx];

  useEffect(() => {
  });

  const handleChange = event => {
    setAnswer(event.target.value);
    updatedAnswers[answerIdx] = event.target.value;
  };

  const handleSubmit = event => {
    let modifiedUser = {
      _id: props.user._id,
      profile_essay_answers: updatedAnswers
    }
    props.editUser(modifiedUser).then(() => props.closeModal());
  };

  return <>
    <form className='essay-form' onSubmit={event => handleSubmit(event)}>
      <div className='essay-form-header'>
        <p className='essay-form-header-title'>{props.formType}</p>
        <p className='essay-form-header-question'>{question}</p>
      </div>
      <div className='essay-form-answer'>
        <textarea placeholder={placeholder} value={answer} onChange={event => handleChange(event)} />
        <div className='essay-form-answer-camera'>
          <i className="fas fa-camera-retro"/>
        </div>
      </div>
      <div className='essay-form-buttons'>
        <button className='essay-form-buttons-cancel' type='button' onClick={() => props.closeModal()}>CANCEL</button>
        <button className='essay-form-buttons-save' type='submit'>SAVE</button>
      </div>
    </form>
  </>
};

export default EssayForm;