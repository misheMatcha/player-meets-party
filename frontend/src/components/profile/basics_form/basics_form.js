import React, { useState, useEffect } from 'react';

const BasicsForm = props => {
  const orienlist = ['Straight', 'Gay', 'Bisexual', 'Asexual', 'Demisexual', 'Heteroflexible', 'Homoflexible', 'Lesbian', 'Pansexual', 'Queer', 'Questioning'];
  const genderlist = ['Woman', 'Man', 'Agender', 'Androgynous', 'Bigender', 'Cis Man', 'Cis Woman', 'Genderfluid', 'Genderqueer', 'Gender Nonconforming', 'Hijra', 'Intersex', 'Non-binary', 'Other', 'Pangender', 'Transfeminine', 'Transgender', 'Transmasculine', 'Transsexual', 'Trans Man', 'Trans Woman', 'Two Spirit'];
  let user;
  const [fetched, setFetched] = useState(false);
  const [whichTag, setWhichTag] = useState('none')
  const [gender, setGender] = useState('loading...');
  const [orientation, setOrientation] = useState('loading...');
  // refactor later to add logic for status options based on relationship type
  // currently default is single and non-toggleable by nature of being on a dating site
  const [relationship_type, setRelationship_type] = useState('loading...');
  const modifiedUser = {
  };
  const [genderIdx, setGenderIdx] = useState(null);
  const [orientationIdx, setOrientationIdx] = useState(null);

  useEffect(() => {
    const checkUser = () => {
      if(props.user !== undefined){
        user = props.user;
        setFetched(true)
      }
    };
    const setFetchedValues = () => {
      setOrientation(user.orientation);
      setGender(user.gender)
      setRelationship_type(user.relationship_type);
    };
    const checkTagValues = () => {
      // const checkedOrienIdx = orienlist.indexOf(orientation);
      setOrientationIdx(orienlist.indexOf(orientation))
      setGenderIdx(genderlist.indexOf(gender))
      // const checkedGenderIdx = genderlist.indexOf(gender);
      // if(checkedOrienIdx > -1) setOrientationIdx(checkedOrienIdx)
      // if(checkedGenderIdx > -1) setGenderIdx(checkedGenderIdx)
    };
    console.log(genderIdx)
    console.log(orientationIdx)
    // console.log(genderlist[genderIdx])
    // console.log(orienlist[orientationIdx])
    // checks
    if(!fetched) checkUser();
    if(user){
      setFetchedValues();
      checkTagValues();
    }
    return () => {
    };
  });

  // [user, modifiedUser, gender, orientation, relationship_type, genderIdx, orientationIdx]

  const updateInput = (event, field) => {
    switch(field){
      case 'orientation':
        break;
      default:
    }
  };

  const setIdx = (field, idx) => {
    switch(field){
      case 'gender':
        setGenderIdx(idx);
        break;
      case 'orientation':
        setOrientationIdx(idx);
        break;
      default:
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
      <form className='basics-form-content' onSubmit={() => console.log('submitted')}>
        <p className='basics-form-content-title'>I am a...</p>

        <div className={`basics-form-content-tag-container ${whichTag === 'none' ? 'hide' : ''}`}>
          {/* refactor later for a more robust options */}
          {/* <p className='basics-form-content-tag-title'>Select up to 5</p> */}
          { whichTag === 'orientation' ?
            <div className='basics-form-content-tag-list'>
              {
                orienlist.map((orienOpt, idx) => {
                  return(
                    <button key={idx} type='button' className={`basics-form-content-tag ${orientationIdx === idx ? 'tag-selected' : ''}`} onClick={() => {
                      setIdx('orientation', idx)
                    }}>
                      {orienOpt}
                    </button>
                  );
                })
              }
            </div>
            :
            <div className='basics-form-content-tag-list'>
              {
                genderlist.map((genderOption, idx) => {
                  return(
                    <button key={idx} type='button' className={`basics-form-content-tag ${genderIdx === idx ? 'tag-selected' : ''}`} onClick={() => {
                      setIdx('gender', idx)
                    }}>
                      {genderOption}
                    </button>
                  );
                })
              }
            </div>
          }
          <div className='basics-form-content-tag-actions'>
            <button className='basics-form-content-tag-actions-cont' onClick={() => setWhichTag('none')}>Continue</button>
            <button className='basics-form-content-tag-actions-cancel' onClick={() => setWhichTag('none')}>Cancel</button>
          </div>
        </div>

        <div className='basics-form-content-inputs' style={{display: whichTag === 'gender' || whichTag === 'orientation' ? 'none' : 'flex' }}>

          <button className='basics-form-content-inputs-button' onClick={() => {
            if (whichTag === 'none') setWhichTag('orientation');
          }}>
            <p className={`basics-form-content-inputs-button-gender ${orientation === 'Orientation' ? '' : 'black'}`}>{orientationIdx > -1 ? orienlist[orientationIdx] : orientation}</p>
            <i className='fas fa-pencil-alt' />
          </button>

          <button className='basics-form-content-inputs-button'  onClick={() => {
            if(whichTag === 'none') setWhichTag('gender');
          }}>
            <p className={`basics-form-content-inputs-button-gender ${gender === 'Gender' ? '' : 'black'}`}>{genderIdx > -1 ? genderlist[genderIdx] : gender}</p>
            <i className='fas fa-pencil-alt'/>
            </button>
        </div>

        <div className='basics-form-content-relationship'>
          <p className='basics-form-content-title'>Relationship Type</p>
          <div className='basics-form-content-inputs'>

            <div className='basics-form-content-inputs-list'>
              <div className='select'>
                <select>
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