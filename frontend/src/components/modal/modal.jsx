import React from 'react';
import LoginForm from '../session/login_form_container';
import Boost from '../boost/boost_container';
import BasicsForm from '../profile/basics_form/basics_form_container';
import PronounsForm from '../profile/pronouns_form/pronouns_form_container';
import AttributesForm from '../profile/attributes_form_container';

const Modal = props => {
  if(!props.modal) return null;

  let component;
  switch(props.modal){
    case 'login':
      component = <LoginForm />;
      break;
    case 'boost':
      component = <Boost />;
      break;
    case 'basics':
      component = <BasicsForm />;
      break;
    case 'pronouns':
      component = <PronounsForm />;
      break;
    case 'Basics':
      component = <AttributesForm formType='Basics' />;
      break;
    case 'Pronouns':
      component = <AttributesForm formType='Pronouns' />;
      break;
    case 'Looks':
      component = <AttributesForm formType='Looks' />;
      break;
    case 'Background':
      component = <AttributesForm formType='Background' />;
      break;
    case 'Lifestyle':
      component = <AttributesForm formType='Lifestyle' />;
      break;
    case 'Family':
      component = <AttributesForm formType='Family' />;
      break;
    case 'I am looking for':
      component = <AttributesForm formType='I am looking for' />;
      break;
    default:
      return null;
  }

  return(
    <div className='modal-background' onClick={props.closeModal}>
      <div className='modal-child' onClick={event => event.stopPropagation()}>
        { component }
      </div>
    </div>
  );
};

export default Modal;