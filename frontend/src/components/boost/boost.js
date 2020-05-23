import React from 'react';

const Boost = ({closeModal}) => {
  return(
    <div className='boost'>
      <div className='boost-content'></div>
      <div className='boost-options'>
        <form className='boost-form' onSubmit={() => console.log('submitted')}>
          <label className='boost-form-section'>
            <input className='boost-form-radio' type='radio' id='10' name='boost' value='10'/>
            <p className='boost-form-amt'>10 Boosts</p> for $1.69 each
          </label>
          <label className='boost-form-section'>
            <input className='boost-form-radio' type='radio' id='10' name='boost' value='10'/>
            <p className='boost-form-amt'>5 Boosts</p> for $1.79 each
          </label>
          <label className='boost-form-section'>
            <input className='boost-form-radio' type='radio' id='10' name='boost' value='10'/>
            <p className='boost-form-amt'>1 Boosts</p> for $1.99 each
          </label>
          <button className='boost-submit' type='submit'>Boost now</button>
          <button className='boost-close' onClick={() => closeModal()}>No thanks</button>
        </form>
      </div>
    </div>
  );
};

export default Boost;