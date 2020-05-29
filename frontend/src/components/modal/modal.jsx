import React from 'react';
import LoginForm from '../session/login_form_container';
import Boost from '../boost/boost_container';
import BasicsForm from '../profile/basics_form/basics_form_container';
import PronounsForm from '../profile/pronouns_form/pronouns_form_container';

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