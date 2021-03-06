import React from 'react';
import LoginForm from '../session/login_form_container';
import Boost from '../boost/boost_container';
import AttributesForm from '../attribute_form/attributes_form_container';
import BasicsForm from '../attribute_form/basics_form/basics_form_container';
import EssayForm from '../essay_form/essay_form_container';

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
    // Note: consider if you want to pass in a prop for the id or pull from users which is already updated in state
    // Attributes
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
    // Essay
    case 'ABOUT ME':
      component = <EssayForm currentId={localStorage.currentId} formType='ABOUT ME' />;
      childStyle = 'modal-child-ef-aboutme';
      break;
    case 'ASPIRATIONS':
      component = <EssayForm currentId={localStorage.currentId} formType='ASPIRATIONS' />;
      childStyle = 'modal-child-ef-aboutme';
      break;
    case 'TALENT':
      component = <EssayForm currentId={localStorage.currentId} formType='TALENT' />;
      childStyle = 'modal-child-ef-aboutme';
      break;
    case 'MY TRAITS':
      component = <EssayForm currentId={localStorage.currentId} formType='MY TRAITS' />;
      childStyle = 'modal-child-ef-aboutme';
      break;
    case 'NEEDS':
      component = <EssayForm currentId={localStorage.currentId} formType='NEEDS' />;
      childStyle = 'modal-child-ef-aboutme';
      break;
    case 'HOBBIES':
      component = <EssayForm currentId={localStorage.currentId} formType='HOBBIES' />;
      childStyle = 'modal-child-ef-aboutme';
      break;
    case 'MOMENTS':
      component = <EssayForm currentId={localStorage.currentId} formType='MOMENTS' />;
      childStyle = 'modal-child-ef-aboutme';
      break;
    case 'SECRETS':
      component = <EssayForm currentId={localStorage.currentId} formType='SECRETS' />;
      childStyle = 'modal-child-ef-aboutme';
      break;
    case 'DATING':
      component = <EssayForm currentId={localStorage.currentId} formType='DATING' />;
      childStyle = 'modal-child-ef-aboutme';
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