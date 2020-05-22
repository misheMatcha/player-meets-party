import React, { useState } from 'react';

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

  console.log(props.errors)

  return(
    <div className='login-form-container'>
      <div className='login-form-close'>
        <p className='fas fa-times' onClick={props.closeModal}/>
      </div>
      <div className='login-form-title'>Enter email and password</div>
      <form className='login-form' onSubmit={() => console.log('submitted')}>
        <div className='login-form-section-wrap'>
          <div className='login-form-section'>
            <div className='login-form-section-header'>
              <p className='login-form-section-title'>Email</p>
              <p className='login-form-section-error'></p>
            </div>
            <label className='login-form-section-label'>
              <input className='login-form-section-input' type='email' placeholder='Email'/>
            </label>
          </div>
          <div className='login-form-section'>
            <div className='login-form-section-header'>
              <p className='login-form-section-title'>Password</p>
              <p className='login-form-section-error'></p>
            </div>
            <label className='login-form-section-label'>
              <input className='login-form-section-input' type='password' placeholder='Password'/>
            </label>
          </div>
        </div>
        <button className='login-form-btn' type='submit'>NEXT</button>

        <p className='login-form-pw'>FORGOT PASSWORD?</p>
        <div className='login-form-misc'>
          <div className='login-form-hr'/><p className='or'>or</p><div className='login-form-hr'/>
        </div>
        <button className='login-form-demo' onClick={() => props.login(guest)}>DEMO LOGIN</button>
      </form>
    </div>
  );
};

export default LoginForm;