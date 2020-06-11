import React from 'react';
import LoginForm from '../session/login_form_container';
import Boost from '../boost/boost_container';
import AttributesForm from '../attribute_form/attributes_form_container';
import BasicsForm from '../attribute_form/basics_form/basics_form_container';

const Modal = props => {
  if(!props.modal) return null;

  let component;
  let bgStyle = 'modal-background';
  let childStyle = 'modal-child';
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
      component = <AttributesForm currentId={localStorage.currentId} formType='Background' />;
      childStyle = 'modal-form-bg';
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
    <div className={bgStyle} onClick={props.closeModal}>
      <div className={childStyle} onClick={event => event.stopPropagation()}>
        { component }
      </div>
    </div>
  );
};

export default Modal;