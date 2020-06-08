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

  const whichForm = formType => {
    switch (props.formType) {
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
          <form className='' onSubmit={() => console.log('submit')}>
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