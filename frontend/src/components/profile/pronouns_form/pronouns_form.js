import React from 'react';

const PronounsForm = props => {
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
    </div>
  );
};

export default PronounsForm;