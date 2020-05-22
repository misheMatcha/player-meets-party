import React from 'react';
import LoginForm from '../session/login_form_container';

const Modal = props => {
  if(!props.modal) return null;

  let component;
  switch(props.modal){
    case 'login':
      component = <LoginForm />;
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