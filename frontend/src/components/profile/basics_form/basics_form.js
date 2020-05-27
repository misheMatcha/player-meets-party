import React, { useState } from 'react';

const BasicsForm = props => {
  const [hideGenderTags, setHideGenderTags] = useState(true);
  const [hideOrienTags, setHideOrienTags] = useState(true);
  const orientationOpts = ['Straight', 'Gay', 'Bisexual', 'Asexual', 'Demisexual', 'Heteroflexible', 'Homoflexible', 'Lesbian', 'Pansexual', 'Queer', 'Questioning'];
  const genderOpts = ['Woman', 'Man', 'Agender', 'Androgynous', 'Bigender', 'Cis Man', 'Cis Woman', 'Genderfluid', 'Genderqueer', 'Gender Nonconforming', 'Hijra', 'Intersex', 'Non-binary', 'Other', 'Pangender', 'Transfeminine', 'Transgender', 'Transmasculine', 'Transsexual', 'Trans Man', 'Trans Woman', 'Two Spirit'];
  const user = props.user;
  const gender = user ? user.gender : 'loading...';
  const orientation = user ? user.orientation : 'loading...';

  return(
    <div className='basics-form'>
      <div className='basics-form-header'>
        <span>Basics</span>
        <div className='basics-form-header-icon' onClick={() => props.closeModal()}>
          <i className="fas fa-times"/>
        </div>
      </div>
      <form className='basics-form-content' onSubmit={() => console.log('submitted')}>
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

        <div className='basics-form-content-inputs' style={{display: !hideGenderTags ? 'none' : 'flex' }}>

          <div className='basics-form-content-inputs-list'>
            <div className='select'>
              <select name='orientation' id='orientation'>
                <option value='Straight' selected='selected'>Straight</option>
                <option value='Gay'>Gay</option>
                <option value='Bisexual'>Bisexual</option>
                <option value='Options'>More options</option>
              </select>
            </div>
            <div className='basics-form-content-inputs-list-arrow'>
              <i className="fas fa-chevron-down"/>
            </div>
          </div>

          <button className='basics-form-content-inputs-button'  onClick={() => {
            hideGenderTags ? setHideGenderTags(false) : setHideGenderTags(true)
            }}>
            <p className={`basics-form-content-inputs-button-gender ${gender === 'Gender' ? '' : 'black'}`}>{gender}</p>
            <i className='fas fa-pencil-alt'/>
            </button>
        </div>

        <div className='basics-form-content-relationship'>
          <p className='basics-form-content-title'>Relationship Type</p>
          <div className='basics-form-content-inputs' style={{ display: !hideGenderTags ? 'none' : 'flex' }}>

            <div className='basics-form-content-inputs-list'>
              <div className='select'>
                <select name='orientation' id='orientation'>
                  <option value='Monogomous' selected='selected'>Monogomous</option>
                  <option value='Non-monogomous'>Non-monogomous</option>
                  <option value='Open to either'>Open to either</option>
                </select>
              </div>
              <div className='basics-form-content-inputs-list-arrow'>
                <i className="fas fa-chevron-down" />
              </div>
            </div>

          </div>
          <p className='basics-form-content-monogomy'>You will see and be seen by people who are monogamous and open to monogamy. Learn more.</p>
        </div>
        
        <div className='basics-form-buttons'>
          <button className='basics-form-buttons-temp bfsubmit' type='submit'>Save</button>
          <button className='basics-form-buttons-temp bfcancel' type='button' onClick={() => props.closeModal()}>Cancel</button>
        </div>

      </form>
    </div>
  );
};

export default BasicsForm;