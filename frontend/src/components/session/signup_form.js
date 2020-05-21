import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const SignupForm = props => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [birthday, setBirthday] = useState('');
  const [state, setState] = useState('');
  const [zip, setZip] = useState('');
  const user = {
    name: name,
    email: email,
    password: password,
    birthday: birthday,
    state: state,
    zip: zip
  };
  const guest = {
    email: 'guest@pmp.com',
    password: 'password',
  };

  useEffect(() => {
    return(() => {
    });
  }, [user, props.errors]);

  const handleInput = (event, field) => {
    switch(field){
      case 'name':
        setName(event.target.value);
        break;
      case 'email':
        setEmail(event.target.value);
        break;
      case 'password':
        setPassword(event.target.value);
        break;
      case 'birthday':
        setBirthday(event.target.value);
        break;
      case 'state':
        setState(event.target.value);
        break;
      case 'zip':
        setZip(event.target.value);
        break;
    }
  };

  const checkErrors = field => {
    // if(props.errors[field] && !user[field].length) props.clearErrors();
    switch(field){
      case 'name':
        if(!user[field].length || user[field].length > 0) props.clearErrors()
        break;
      case 'email':
        break;
      case 'password':
        break;
      case 'birthday':
        break;
      case 'state':
        break;
      case 'zip':
        break;
    }
  };

  const handleNewUser = () => {
    props.signup(user);
  };

  return(
    <div className='signup-form'>
      <Link to='/' className='pmp-logo'>PMP</Link>

      <form className='signup-form-wrap' onSubmit={handleNewUser}>
        <div className='signup-form-header'>
          <Link to="/" className="fas fa-chevron-left"/>
          <p className="signup-form-header-title">About you</p>
        </div>


        <div className="signup-form-section">
          <p className="signup-form-section-title">Welcome! Who are you?</p>
          <div className="signup-form-section-input-container">
            <div className="signup-form-section-field-details">
              <p className="signup-form-section-field">Name</p>
              <p className="signup-form-section-error">{props.errors.name}</p>
            </div>
            <label className="signup-form-section-label">
              <input className="signup-form-section-input" type="text" placeholder='Kratos, Isabelle, etc...' onChange={event => {
                handleInput(event, 'name');
                checkErrors('name')
                }}/>
              <p className="fas fa-exclamation" style={
                props.errors.name ? {opacity:1} : {opacity:0}
              }/>
            </label>
          </div>
        </div>
{/* 

        <div className="signup-form-section">
          <p className="signup-form-section-title">Let's connect! What's your email?</p>
          <div className="signup-form-section-input-container">
            <div className="signup-form-section-field-details">
              <p className="signup-form-section-field">Name</p>
              <p className="signup-form-section-error">{props.errors.name}</p>
            </div>
            <label className="signup-form-section-label">
              <input className="signup-form-section-input" type="text" placeholder='Kratos, Isabelle, etc...' onChange={event => {
                handleInput(event, 'name');
                checkErrors('name')
                }}/>
              <p className="fas fa-exclamation" style={
                props.errors.name ? {opacity:1} : {opacity:0}
              }/>
            </label>
          </div>
        </div>


        <div className="signup-form-section">
          <p className="signup-form-section-title">Welcome! Who are you?</p>
          <div className="signup-form-section-input-container">
            <div className="signup-form-section-field-details">
              <p className="signup-form-section-field">Name</p>
              <p className="signup-form-section-error">{props.errors.name}</p>
            </div>
            <label className="signup-form-section-label">
              <input className="signup-form-section-input" type="text" placeholder='Kratos, Isabelle, etc...' onChange={event => {
                handleInput(event, 'name');
                checkErrors('name')
                }}/>
              <p className="fas fa-exclamation" style={
                props.errors.name ? {opacity:1} : {opacity:0}
              }/>
            </label>
          </div>
        </div> */}









        
       
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default SignupForm;