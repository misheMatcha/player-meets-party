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

  const [stage, setStage] = useState(1);

  useEffect(() => {
    return(() => {
    });
  }, [user, props.errors, props.loggedIn]);

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
      default:
    }
  };

  const checkErrors = field => {
    // if(props.errors[field] && !user[field].length) props.clearErrors();
    switch(field){
      case 'name':
        if(!user[field].length || user[field].length > 0) props.clearErrors()
        break;
      case 'email':
        if(!user[field].length) props.clearErrors()
        break;
      case 'password':
        if(!user[field].length || (user[field].length > 5 && user[field].length < 31)) props.clearErrors()
        break;
      case 'birthday':
        if(!user[field].length) props.clearErrors()
        break;
      case 'state':
        break;
      case 'zip':
        break;
      default:
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
          {
            stage > 1 ? <button type='button' className='fas fa-chevron-left' onClick={() => setStage(stage - 1)}/> : <Link to='/' className='fas fa-chevron-left'/>
          }

          <p className='signup-form-header-title'>About you</p>
        </div>

        <div className={'signup-form-section' + (stage === 1 ? '' : ' hide')}>
          <p className='signup-form-section-title'>Welcome! Who are you?</p>
          <div className='signup-form-section-input-container'>
            <div className='signup-form-section-field-details'>
              <p className='signup-form-section-field'>Name</p>
              <p className='signup-form-section-error'>{props.errors.name}</p>
            </div>
            <label className='signup-form-section-label'>
              <input className='signup-form-section-input' type='text' placeholder='Kratos, Isabelle, etc...' onChange={event => {
                handleInput(event, 'name');
                // checkErrors('name')
                }}/>
              <p className='fas fa-exclamation' style={
                props.errors.name ? {opacity:1} : {opacity:0}
              }/>
            </label>
          </div>
        </div>

        <div className={'signup-form-section' + (stage === 2 ? '' : ' hide')}>
          <p className='signup-form-section-title'>Let's connect!<br/>What's your email?</p>
          <div className='signup-form-section-input-container'>
            <div className='signup-form-section-field-details'>
              <p className='signup-form-section-field'>Email</p>
              <p className='signup-form-section-error'>{props.errors.email}</p>
            </div>
            <label className='signup-form-section-label'>
              <input className='signup-form-section-input' type='email' placeholder='your.email@example.com' onChange={event => {
                handleInput(event, 'email');
                checkErrors('email')
                }}/>
              <p className='fas fa-exclamation' style={
                props.errors.email ? {opacity:1} : {opacity:0}
              }/>
            </label>
          </div>
        </div>

        <div className={'signup-form-section' + (stage === 3 ? '' : ' hide')}>
          <p className='signup-form-section-title'>Create a password</p>
          <div className='signup-form-section-input-container'>
            <div className='signup-form-section-field-details'>
              <p className='signup-form-section-field'>Password</p>
              <p className='signup-form-section-error'>{props.errors.password}</p>
            </div>
            <label className='signup-form-section-label'>
              <input className='signup-form-section-input' type='password' placeholder='6 characters minimum' onChange={event => {
                handleInput(event, 'password');
                checkErrors('password')
                }}/>
              <p className='fas fa-exclamation' style={
                props.errors.password ? {opacity:1} : {opacity:0}
              }/>
            </label>
          </div>
        </div>

        <div className={'signup-form-section' + (stage === 4 ? '' : ' hide')}>
          <p className='signup-form-section-title'>When's your birthday?</p>
          <div className='signup-form-section-input-container'>
            <div className='signup-form-section-field-details'>
              <p className='signup-form-section-field'>Birthday</p>
              <p className='signup-form-section-error'>{props.errors.birthday}</p>
            </div>
            <label className='signup-form-section-label'>
              <input className='signup-form-section-input' type='date' placeholder='6 characters minimum' onChange={event => {
                handleInput(event, 'birthday');
                checkErrors('birthday')
                }}/>
              <p className='fas fa-exclamation' style={
                props.errors.birthday ? {opacity:1} : {opacity:0}
              }/>
            </label>
          </div>
        </div>

        <div className={'signup-form-section' + (stage === 5 ? '' : ' hide')}>
          <p className='signup-form-section-title'>Where you at?</p>
          <div className='signup-form-section-input-container'>
            <div className='signup-form-section-input-wrap'>
              <div className='signup-form-section-input-state'>
                <div className='signup-form-section-field-details-location'>
                  <p className='signup-form-section-field'>State</p>
                  <p className='signup-form-section-error-location'>{props.errors.state}</p>
                </div>
                <label className='signup-form-section-label'>
                  <input className='signup-form-section-input' type='text' placeholder='CA' onChange={event => {
                    handleInput(event, 'state');
                    checkErrors('state')
                    }}/>
                  <p className='fas fa-exclamation' style={
                    props.errors.state ? {opacity:1} : {opacity:0}
                  }/>
                </label>
              </div>
              <div className='signup-form-section-input-zip'>
                <div className='signup-form-section-field-details-location'>
                  <p className='signup-form-section-field'>Zip code</p>
                  <p className='signup-form-section-error-location'>{props.errors.zip}</p>
                </div>
                <label className='signup-form-section-label'>
                  <input className='signup-form-section-input' type='text' placeholder='94043' onChange={event => {
                    handleInput(event, 'zip');
                    checkErrors('zip')
                    }}/>
                  <p className='fas fa-exclamation' style={
                    props.errors.zip ? {opacity:1} : {opacity:0}
                  }/>
                </label>
              </div>
            </div>
          </div>
        </div>
        {
          stage <= 4 ? (
            <div className='signup-form-button'>
          <button type='button' className='signup-form-section-next' onClick={() => {
            if(stage < 5) setStage(stage + 1);
          }}>NEXT</button>
        </div>
          ) : (
            <div className='signup-form-button'>
          <button type='submit' className='signup-form-button-p'>SIGN UP</button>
        </div>
          )
        }
        <div className='signup-form-button demo'>
          <button type='button' className='signup-form-button-p' onClick={() => props.login(guest)}>DEMO LOGIN</button>
        </div>
      </form>
    </div>
  );
};

export default SignupForm;