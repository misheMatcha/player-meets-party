import React, { useState, useEffect } from 'react';

const PronounsForm = props => {
  const [pronouns, setPronouns] = useState('Pronouns');

  useEffect(() => {
    if (props.user && pronouns === 'Pronouns') setPronouns(props.user.pronouns)
    return () => {
    };
  },[pronouns]);

  const handleSubmit = event => {
    event.preventDefault();
    if(props.user !== undefined){
      let modifiedUser = {
        _id: props.user._id,
        pronouns: pronouns
      };
      props.editUser(modifiedUser).then(() => {
        props.requestCurrentUser(props.user._id)
        props.closeModal()
      });
    }
  };

  return(
    <div className='modal-form'>
      <div className='modal-form-header'>
        <span>Pronouns</span>
        <div className='modal-form-header-close' onClick={
          () => props.closeModal()
        }>
          <i className="fas fa-times" />
        </div>
      </div>
      <form className='modal-form-content' onSubmit={event => handleSubmit(event)}>
        <p className='modal-form-content-title'>Pronouns</p>
        {/* refactor later to have a dropdown as well as input */}
        <label className='modal-form-content-label'>
          <input className='pronouns-input' type='text' placeholder='Enter your own' value={pronouns} onChange={event => setPronouns(event.target.value)} />
        </label>
        <div className='modal-form-buttons-wrap'>
          <button className='modal-form-buttons mfb-submit'>Save</button>
          <button className='modal-form-buttons mfb-cancel' type='button' onClick={() => props.closeModal()}>Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default PronounsForm;