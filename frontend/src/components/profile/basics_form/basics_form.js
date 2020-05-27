import React, { useState } from 'react';

const BasicsForm = props => {
  const [hideGenderTags, setHideGenderTags] = useState(true);
  const [hideOrienTags, setHideOrienTags] = useState(true);
  const orientationOpts = ['Straight', 'Gay', 'Bisexual', 'Asexual', 'Demisexual', 'Heteroflexible', 'Homoflexible', 'Lesbian', 'Pansexual', 'Queer', 'Questioning'];
  const genderOpts = ['Woman', 'Man', 'Agender', 'Androgynous', 'Bigender', 'Cis Man', 'Cis Woman', 'Genderfluid', 'Genderqueer', 'Gender Nonconforming', 'Hijra', 'Intersex', 'Non-binary', 'Other', 'Pangender', 'Transfeminine', 'Transgender', 'Transmasculine', 'Transsexual', 'Trans Man', 'Trans Woman', 'Two Spirit'];
  const user = props.user;
  const gender = user ? user.gender : 'loading...';

  return(
    <div className='basics-form'>
      <div className='basics-form-header'>
        <span>Basics</span>
        <div className='basics-form-header-icon' onClick={() => props.closeModal()}>
          <i className="fas fa-times"/>
        </div>
      </div>
      <div className='basics-form-content'>
        <p className='basics-form-content-title'>I am a...</p>

        <div className={`basics-form-content-tag-container ${hideGenderTags ? 'hide' : ''}`}>
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
            <button className='basics-form-content-tag-actions-cancel' onClick={() =>setHideGenderTags(true)}>Cancel</button>
          </div>
        </div>

        <div className='basics-form-content-inputs'>

          <label className={`basics-form-content-inputs-label ${!hideGenderTags ? 'hide' : ''}`}>
            <ul>
              <li>Straight</li>
              <li>Gay</li>
              <li>Bisexual</li>
              <li>More options</li>
            </ul>
          </label>
          
          <button className={`basics-form-content-inputs-button ${!hideGenderTags ? 'hide' : ''}`} onClick={() => {
            hideGenderTags ? setHideGenderTags(false) : setHideGenderTags(true)
            }}>
            <p className={`basics-form-content-inputs-button-gender ${gender === 'Gender' ? '' : 'black'}`}>{gender}</p>
            <i className='fas fa-pencil-alt'/>
            </button>
        </div>

      </div>
    </div>
  );
};

export default BasicsForm;