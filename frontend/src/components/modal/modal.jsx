import React from 'react';
import LoginForm from '../session/login_form_container';
import Boost from '../boost/boost_container';
import AttributesForm from '../profile/attributes_form_container';
import BackgroundForm from '../attribute_form/background_form/background_form_container';
import BasicsForm from '../attribute_form/basics_form/basics_form_container';

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
    case 'Basics':
      component = <BasicsForm formType='Basics' />;
      break;
    case 'Pronouns':
      component = <AttributesForm currentId={localStorage.currentId} formType='Pronouns' />;
      break;
    case 'Looks':
      component = <AttributesForm currentId={localStorage.currentId} formType='Looks' />;
      break;
    case 'Background':
      component = <BackgroundForm formType='Background' />;
      break;
    case 'Lifestyle':
      component = <AttributesForm currentId={localStorage.currentId} formType='Lifestyle' />;
      break;
    case 'Family':
      component = <AttributesForm currentId={localStorage.currentId} formType='Family' />;
      break;
    case 'I am looking for':
      component = <AttributesForm currentId={localStorage.currentId} formType='I am looking for' />;
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