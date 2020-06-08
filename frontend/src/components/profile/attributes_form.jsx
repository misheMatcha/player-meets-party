import React, { useEffect } from 'react';
import { closeModal } from '../../actions/modal_actions';

const AttributesForm = props => {
  useEffect(() => {
  })

  const basics = <>
    <div className=''>
      basics
    </div>
  </>

  const pronouns = <>
    <div className=''>
      pro
    </div>
  </>

  const looks = <>
    <div className=''>
      looks
    </div>
  </>

  const background = <>
    <div className=''>
      bg
    </div>
  </>

  const lifestyle = <>
    <div className=''>
      life
    </div>
  </>

  const family = <>
    <div className=''>
      fam
    </div>
  </>

  const lookingFor = <>
    <div className=''>
      looking for
    </div>
  </>

  const handleSubmit = (event, formType) => {
    event.preventDefault();

    const modifiedUser = {
      _id: props.currentId
    };

    switch (formType) {
      case 'Basics':
        modifiedUser.orientation = 'replace'
        modifiedUser.gender = 'replace'
        modifiedUser.relationship_status = 'replace'
        modifiedUser.relationship_type = 'replace'
        break;
      case 'Pronouns':
        modifiedUser.pronouns = 'replace'
        break;
      case 'Looks':
        modifiedUser.height = 'replace'
        modifiedUser.body_type = 'replace'
        break;
      case 'Background':
        modifiedUser.ethnicity = 'replace'
        modifiedUser.languages = 'replace'
        modifiedUser.politics = 'replace'
        modifiedUser.education = 'replace'
        modifiedUser.occupation = 'replace'
        modifiedUser.religion = 'replace'
        modifiedUser.sign = 'replace'
        break;
      case 'Lifestyle':
        modifiedUser.smoking = 'replace'
        modifiedUser.drinks = 'replace'
        modifiedUser.marijuana = 'replace'
        modifiedUser.diet = 'replace'
        break;
      case 'Family':
        modifiedUser.children = 'replace'
        modifiedUser.pets = 'replace'
        break;
      case 'I am looking for':
        modifiedUser.pref_gender = 'replace'
        modifiedUser.pref_distance = 'replace'
        modifiedUser.pref_age = 'replace'
        modifiedUser.pref_connections = 'replace'
        break;
      default:
        break;
    }
  };

  const whichForm = formType => {
    switch (formType) {
      case 'Basics':
        return basics;
      case 'Pronouns':
        return pronouns;
      case 'Looks':
        return looks;
      case 'Background':
        return background;
      case 'Lifestyle':
        return lifestyle;
      case 'Family':
        return family;
      case 'I am looking for':
        return lookingFor;
      default:
        break;
    }
  };

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