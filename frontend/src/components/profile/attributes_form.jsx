import React, { useEffect, useState } from 'react';
import { closeModal } from '../../actions/modal_actions';

const AttributesForm = props => {
  const [orientation, setOrientation ] = useState(props.user.orientation);
  const [gender, setGender ] = useState(props.user.gender);
  const [relationship_status, setRelationship_status] = useState(props.user.relationship_status);
  const [relationship_type, setRelationship_type] = useState(props.user.relationship_type);
  const [pronouns, setPronouns ] = useState(props.user.pronouns);
  const [height, setHeight] = useState(props.user.height);
  const [body_type, setBody_type] = useState(props.user.body_type);
  const [ethnicity, setEthnicity] = useState(props.user.ethnicity);
  const [languages, setLanguages] = useState(props.user.languages);
  const [politics, setPolitics] = useState(props.user.politics);
  const [education, setEducation] = useState(props.user.education);
  const [occupation, setOccupation] = useState(props.user.occupation);
  const [religion, setReligion] = useState(props.user.religion);
  const [sign, setSign] = useState(props.user.sign);
  const [smoking, setSmoking] = useState(props.user.smoking);
  const [drinks, setDrinks] = useState(props.user.drinks);
  const [marijuana, setMarijuana] = useState(props.user.marijuana);
  const [diet, setDiet] = useState(props.user.diet);
  const [children, setChildren] = useState(props.user.children);
  const [pets, setPets] = useState(props.user.pets);
  const [pref_gender, setPref_gender] = useState(props.user.pref_gender);
  const [pref_distance, setPref_distance] = useState(props.user.pref_distance);
  const [pref_age, setPref_age] = useState(props.user.pref_age);
  const [pref_connections, setPref_connections] = useState(props.user.pref_connections);

  useEffect(() => {
  })

  const handleUpdate = (event, field) => {
    switch(field){
      case 'orientation':
        setOrientation(event.target.value);
        break;
      case 'pronouns':
        setPronouns(event.target.value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (event, formType) => {
    event.preventDefault();

    const modifiedUser = {
      _id: props.currentId
    };

    switch (formType) {
      case 'Basics':
        modifiedUser.orientation = orientation;
        modifiedUser.gender = gender;
        modifiedUser.relationship_status = relationship_status;
        modifiedUser.relationship_type = relationship_type;
        break;
      case 'Pronouns':
        modifiedUser.pronouns = pronouns;
        break;
      case 'Looks':
        modifiedUser.height = height;
        modifiedUser.body_type = body_type;
        break;
      case 'Background':
        modifiedUser.ethnicity = ethnicity;
        modifiedUser.languages = languages;
        modifiedUser.politics = politics;
        modifiedUser.education = education;
        modifiedUser.occupation = occupation;
        modifiedUser.religion = religion;
        modifiedUser.sign = sign;
        break;
      case 'Lifestyle':
        modifiedUser.smoking = smoking;
        modifiedUser.drinks = drinks;
        modifiedUser.marijuana = marijuana;
        modifiedUser.diet = diet;
        break;
      case 'Family':
        modifiedUser.children = children;
        modifiedUser.pets = pets;
        break;
      case 'I am looking for':
        modifiedUser.pref_gender = pref_gender;
        modifiedUser.pref_distance = pref_distance;
        modifiedUser.pref_age = pref_age;
        modifiedUser.pref_connections = pref_connections;
        break;
      default:
        break;
    }

    props.updateUser(modifiedUser).then(() => props.closeModal());
  };

  const whichForm = formType => {
    switch (formType) {
      case 'Basics':
        return basicsContent;
      case 'Pronouns':
        return pronounsContent;
      case 'Looks':
        return looksContent;
      case 'Background':
        return backgroundContent;
      case 'Lifestyle':
        return lifestyleContent;
      case 'Family':
        return familyContent;
      case 'I am looking for':
        return lookingForContent;
      default:
        break;
    }
  };

  const basicsContent = <>
    <div className=''>
      basics
    </div>
  </>

  const pronounsContent = <>
    <div className='attribute-form-section'>
      <p className='attribute-form-section-title'>{props.formType}</p>
      <label className='attribute-form-section-label'>
        <input type='text' placeholder='ex: they/them, or enter your own' value={pronouns} onChange={event => handleUpdate(event, 'pronouns')}/>
      </label>
    </div>
  </>

  const looksContent = <>
    <div className=''>
      looks
    </div>
  </>

  const backgroundContent = <>
    <div className=''>
      bg
    </div>
  </>

  const lifestyleContent = <>
    <div className=''>
      life
    </div>
  </>

  const familyContent = <>
    <div className=''>
      fam
    </div>
  </>

  const lookingForContent = <>
    <div className=''>
      looking for
    </div>
  </>

  return <>
    <div className='attribute-form'>
      <div className='attribute-form-container'>
        <div className='attribute-form-header'>
          <p className='attribute-form-header-title'>{props.formType}</p>
          <div className='attribute-form-header-close' onClick={() => props.closeModal()}>X</div>
        </div>
        <div className='attribute-form-sections'>
          <form className='' onSubmit={event => handleSubmit(event, props.formType)}>
            {
              whichForm(props.formType)
            }
            <div className='attribute-form-buttons'>
              <button className='attribute-form-buttons-save' type='submit'>SAVE</button>
              <button className='attribute-form-buttons-cancel' type='button' onClick={() => props.closeModal()}>CANCEL</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </>;
};

export default AttributesForm;