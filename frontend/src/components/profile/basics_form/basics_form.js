import React, { useState, useEffect } from 'react';

const BasicsForm = props => {
  const [whichTag, setWhichTag] = useState('none')
  const orientationOpts = ['Straight', 'Gay', 'Bisexual', 'Asexual', 'Demisexual', 'Heteroflexible', 'Homoflexible', 'Lesbian', 'Pansexual', 'Queer', 'Questioning'];
  const genderOpts = ['Woman', 'Man', 'Agender', 'Androgynous', 'Bigender', 'Cis Man', 'Cis Woman', 'Genderfluid', 'Genderqueer', 'Gender Nonconforming', 'Hijra', 'Intersex', 'Non-binary', 'Other', 'Pangender', 'Transfeminine', 'Transgender', 'Transmasculine', 'Transsexual', 'Trans Man', 'Trans Woman', 'Two Spirit'];
  const user = props.user;
  const gender = user ? user.gender : 'loading...';
  const orientation = user ? user.orientation : 'loading...';
  const [formGender, setFormGender] = useState('');
  const [formOrientation, setFormOrientation] = useState('');
  const [formMonogmy, setFormMonogmy] = useState('');

  useEffect(() => {
    return () => {
    };
  }, []);
  
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

        <div className={`basics-form-content-tag-container ${whichTag === 'none' ? 'hide' : ''}`}>
          {/* refactor later for a more robust options */}
          {/* <p className='basics-form-content-tag-title'>Select up to 5</p> */}
          { whichTag === 'gender' ?
            <div className='basics-form-content-tag-list'>
              {
                orientationOpts.map((orienOpt, idx) => {
                  return(
                    <button key={idx} className='basics-form-content-tag'>{orienOpt}</button>
                  );
                })
              }
            </div>
            :
            <div className='basics-form-content-tag-list'>
              {
                genderOpts.map((genderOption, idx) => {
                  return(
                    <button key={idx} className='basics-form-content-tag'>{genderOption}</button>
                  );
                })
              }
            </div>
          }
          <div className='basics-form-content-tag-actions'>
            <button className='basics-form-content-tag-actions-cont'>Continue</button>
            <button className='basics-form-content-tag-actions-cancel' onClick={() => setWhichTag('none')}>Cancel</button>
          </div>
        </div>

        <div className='basics-form-content-inputs' style={{display: whichTag === 'gender' || whichTag === 'orientation' ? 'none' : 'flex' }}>

          <button className='basics-form-content-inputs-button' onClick={() => {
            if (whichTag === 'none') setWhichTag('orientation');
          }}>
            <p className={`basics-form-content-inputs-button-gender ${orientation === 'Orientation' ? '' : 'black'}`}>{orientation}</p>
            <i className='fas fa-pencil-alt' />
          </button>

          <button className='basics-form-content-inputs-button'  onClick={() => {
            if(whichTag === 'none') setWhichTag('gender');
          }}>
            <p className={`basics-form-content-inputs-button-gender ${gender === 'Gender' ? '' : 'black'}`}>{gender}</p>
            <i className='fas fa-pencil-alt'/>
            </button>
        </div>

        <div className='basics-form-content-relationship'>
          <p className='basics-form-content-title'>Relationship Type</p>
          <div className='basics-form-content-inputs'>

            <div className='basics-form-content-inputs-list'>
              <div className='select'>
                <select name='orientation' defaultValue='Monogomous' id='orientation'>
                  <option value='Monogomous'>Monogomous</option>
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