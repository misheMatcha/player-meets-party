import React, { useState, useEffect } from 'react';
import { ORIENTATION_LIST, GENDER_LIST } from '../profile_options';

const BasicsForm = props => {
  const [displayOption, setDisplayOption] = useState('none');
  let user;
  let modifiedUser;
  const [orientation, setOrientation] = useState('');
  const [gender, setGender] = useState('');
  // refactor later for relationship_status, as single is default and non-toggleable by nature of being on a dating site
  const [relationship_type, setRelationship_type] = useState('');
  const [idxO, setIdxO] = useState(null);
  const [idxG, setIdxG] = useState(null);

  useEffect(() => {
    if(props.user !== null || props.user === undefined) user = props.user;
    if(user && orientation === '') setDefaultValues();
    return () => {
    };
  });

  const setDefaultValues = () => {
    setOrientation(user.orientation);
    setGender(user.gender);
    setRelationship_type(user.relationship_type);
    setIdxO(ORIENTATION_LIST.indexOf(user.orientation));
    setIdxG(GENDER_LIST.indexOf(user.gender));
  };

  const updateInput = (event=null, field, idx=-1) => {
    switch(field){
      case 'orientation':
        setIdxO(idx);
        setOrientation(ORIENTATION_LIST[idx])
        break;
      case 'gender':
        setIdxG(idx);
        setGender(GENDER_LIST[idx])
        break;
      case 'relationship_type':
        setRelationship_type(event.target.value)
        break;
      default:
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    if(user !== undefined){
      modifiedUser = {
        _id: user._id,
        orientation: orientation,
        gender: gender,
        relationship_type: relationship_type
      };
      props.editUser(modifiedUser).then(() => props.closeModal());
    }
  };
  
  return(
    <div className='basics-form'>
      <div className='basics-form-header'>
        <span>Basics</span>
        <div className='basics-form-header-icon' onClick={() => props.closeModal()}>
          <i className="fas fa-times"/>
        </div>
      </div>
      <form className='basics-form-content' onSubmit={event => handleSubmit(event)}>
        <p className='basics-form-content-title'>I am a...</p>
        <div className={`basics-form-content-tag-container ${displayOption === 'none' ? 'hide' : ''}`}>
          {/* refactor later for a more robust options */}
          {/* <p className='basics-form-content-tag-title'>Select up to 5</p> */}
          { displayOption === 'orientation' ?
            <div className='basics-form-content-tag-list'>
              {
                ORIENTATION_LIST.map((orientationOption, idx) => {
                  return(
                    <button key={idx} type='button' className={`basics-form-content-tag ${idxO === idx ? 'tag-selected' : ''}`} onClick={() => {
                      updateInput(null, 'orientation', idx)
                    }}>
                      {orientationOption}
                    </button>
                  );
                })
              }
            </div>
            :
            <div className='basics-form-content-tag-list'>
              {
                GENDER_LIST.map((genderOption, idx) => {
                  return(
                    <button key={idx} type='button' className={`basics-form-content-tag ${idxG === idx ? 'tag-selected' : ''}`} onClick={() => {
                      updateInput(null, 'gender', idx)
                    }}>
                      {genderOption}
                    </button>
                  );
                })
              }
            </div>
          }
          <div className='basics-form-content-tag-actions'>
            <button className='basics-form-content-tag-actions-cont' type='button' onClick={() => setDisplayOption('none')}>Continue</button>
            <button className='basics-form-content-tag-actions-cancel' type='button' onClick={() => setDisplayOption('none')}>Cancel</button>
          </div>
        </div>
         <div className='basics-form-content-inputs' style={{
           display: displayOption === 'gender' || displayOption === 'orientation' ? 'none' : 'flex'
          }}>
          <button className='basics-form-content-inputs-button' type='button' onClick={() => {
            if (displayOption === 'none') setDisplayOption('orientation');
          }}>
            <p className={`basics-form-content-inputs-button-gender ${idxO > -1 ? 'black' : ''}`}>
              {idxO > -1 ? ORIENTATION_LIST[idxO] : orientation}
            </p>
            <i className='fas fa-pencil-alt'/>
          </button>
          <button className='basics-form-content-inputs-button' type='button' onClick={() => {
            if(displayOption === 'none') setDisplayOption('gender');
          }}>
            <p className={`basics-form-content-inputs-button-gender ${idxG > -1 ? 'black' : ''}`}>
              {idxG > -1 ? GENDER_LIST[idxG] : gender}
            </p>
            <i className='fas fa-pencil-alt'/>
            </button>
        </div>
        <div className='basics-form-content-relationship'>
          <p className='basics-form-content-title'>Relationship Type</p>
          <div className='basics-form-content-inputs'>

            <div className='basics-form-content-inputs-list'>
              <div className='select'>
                <select value={relationship_type} onChange={event => updateInput(event, 'relationship_type')}>
                  <option value='Monogamous'>Monogamous</option>
                  <option value='Non-Monogamous'>Non-Monogamous</option>
                  <option value='Open to either'>Open to either</option>
                </select>
              </div>
              <div className='basics-form-content-inputs-list-arrow'>
                <i className="fas fa-chevron-down" />
              </div>
            </div>
          </div>
          <p className='basics-form-content-monogamy'>You will see and be seen by people who are monogamous and open to monogamy. Learn more.</p>
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