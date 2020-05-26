import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';

const LoginForm = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const user = {
    email: email,
    password: password
  };
  const guest = {
    email: 'guest@pmp.com',
    password: 'password'
  };

  useEffect(() => {
    return(() => {
    });
  }, []);

  const handleInput = (event, field) => {
    switch(field){
      case 'email':
        setEmail(event.target.value);
        break;
      case 'password':
        setPassword(event.target.value);
        break;
      default:
    }
  };

  const handleLogin = type => {
    let userObj;
    type === 'demo' ? (userObj = guest) : (userObj = user);
    props.login(userObj).then(() => props.closeModal());
  };

  return(
    <div className='login-form-container'>
      <div className='login-form-close'>
        <p className='fas fa-times' onClick={props.closeModal}/>
      </div>
      <div className='login-form-title'>Enter email and password</div>
      <form className='login-form' onSubmit={() => {
        props.login(user)
        props.clearErrors()
        }}>
        <div className='login-form-section-wrap'>
          <div className='login-form-section'>
            <div className='login-form-section-header'>
              <p className='login-form-section-title'>Email</p>
            </div>
            <label className='login-form-section-label'>
              <input className='login-form-section-input' type='email' placeholder='Email' onChange={event => handleInput(event, 'email')}/>
            </label>
          </div>
          <div className='login-form-section lfs-pw'>
            <div className='login-form-section-header'>
              <p className='login-form-section-title'>Password</p>
            </div>
            <label className='login-form-section-label'>
              <input className='login-form-section-input' type='password' placeholder='Password' onChange={event => handleInput(event, 'password')}/>
            </label>
          </div>
        </div>
        <ul className='login-form-errorlist'>
          {
            props.errors.map((err, idx) => (
              <li key={idx} className='login-form-error'>* {err}</li>
            ))
          }
        </ul>
        <button className='login-form-btn' type='submit'>NEXT</button>
        <p className='login-form-pw'>FORGOT PASSWORD?</p>
        <div className='login-form-misc'>
          <div className='login-form-hr'/><p className='or'>or</p><div className='login-form-hr'/>
        </div>
        <button type='button' className='login-form-demo' onClick={(event) => {
          event.preventDefault()
          handleLogin('demo')
      }}>DEMO LOGIN</button>
      </form>
    </div>
  );
};

export default withRouter(LoginForm);