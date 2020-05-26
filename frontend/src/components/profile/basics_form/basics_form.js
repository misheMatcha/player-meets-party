import React from 'react';

const BasicsForm = props => {
  const orientationOpts = ['Straight', 'Gay', 'Bisexual', 'Asexual', 'Demisexual', 'Heteroflexible', 'Homoflexible', 'Lesbian', 'Pansexual', 'Queer', 'Questioning'];
  const genderOpts = ['Woman', 'Man', 'Agender', 'Androgynous', 'Bigender', 'Cis Man', 'Cis Woman', 'Genderfluid', 'Genderqueer', 'Gender Nonconforming', 'Hijra', 'Intersex', 'Non-binary', 'Other', 'Pangender', 'Transfeminine', 'Transgender', 'Transmasculine', 'Transsexual', 'Trans Man', 'Trans Woman', 'Two Spirit'];

  return(
    <div className='basics-form'>
      <div className='basics-form-header'>
        <span>Basics</span>
        <div className='basics-form-header-icon' onClick={() => props.closeModal()}>
          <i class="fas fa-times"/>
        </div>
        </div>
      <div className='basics-form-content'>
        <p className='basics-form-content-title'>I am a...</p>

        <div className='basics-form-content-tag-container'>
          <p className='basics-form-content-tag-title'>Select up to 5</p>
          <div className='basics-form-content-tag-list'>
            {
              orientationOpts.map((orienOpt, idx) => {
                return(
                  <button key={idx} className='basics-form-content-tag'>{orienOpt}</button>
                );
              })
            }
          </div>
          <div className='basics-form-content-tag-actions'>
            <button className='basics-form-content-tag-actions-cont'>Continue</button>
            <button className='basics-form-content-tag-actions-cancel'>Cancel</button>
          </div>
        </div>

        <div className=''>
          <label className=''>
            <input className='' type='text' placeholder='orientation'/>
          </label>
          <label className=''>
            <input className='' type='text' placeholder='gender'/>
          </label>
        </div>

      </div>
    </div>
  );
};

export default BasicsForm;