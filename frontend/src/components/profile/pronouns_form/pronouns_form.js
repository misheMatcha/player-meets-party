import React, { useState, useEffect } from 'react';

const PronounsForm = props => {
  const [pronouns, setPronouns] = useState('');

  useEffect(() => {
    console.log(pronouns)
    return () => {
    };
  });

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
      <form className='modal-form-content'>
        <p className='modal-form-content-title'>Pronouns</p>
        {/* refactor later to have a dropdown as well as input */}
        <label className='modal-form-content-label'>
          <input className='pronouns-input' type='text' placeholder='Enter your own' value={pronouns} onChange={event => setPronouns(event.target.value)} />
        </label>
        <div className='modal-form-buttons-wrap'>
          <button className='modal-form-buttons mfb-submit'>Save</button>
          <button className='modal-form-buttons mfb-cancel'>Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default PronounsForm;