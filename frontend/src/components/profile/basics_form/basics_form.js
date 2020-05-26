import React from 'react';

const BasicsForm = props => {
  return(
    <div className='basics-form'>
      <div className='basics-form-header'>
        <span>Basics</span>
        <div className='basics-form-header-icon' onClick={() => props.closeModal()}>
          <i class="fas fa-times"/>
        </div>
        </div>
      <div className='basics-form-content'>
        <p className=''>I am a...</p>
        <label className=''>
          <input className='' type='text' placeholder='orientation'/>
        </label>
        <label className=''>
          <input className='' type='text' placeholder='gender'/>
        </label>
      </div>
    </div>
  );
};

export default BasicsForm;