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
  }, []);

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

  const handleNewUser = () => {
    props.signup(user);
  };

  return(
    <div className="signup-form">
      <Link to="/" className="pmp-logo">PMP</Link>

      <form className="signup-form-wrap" onSubmit={handleNewUser}>
        <div className="signup-form-header">
          <Link to="/" className="fas fa-chevron-left"/>
          <p className="signup-form-header-title">About you</p>
        </div>
        <ul>
          {
            props.errors.map((err, idx) => (
              <li key={idx} className="">{err}</li>
            ))
          }
        </ul>
        <div className="signup-form-section">
          <p className="signup-form-section-title">Welcome! Who are you?</p>
          <label>Name
            <input type="text" placeholder='name' onChange={event => {
              handleInput(event, 'name');
            }}/>
          </label>
        </div>
        
        <div className="signup-form-section">
          {/* <p className="signup-form-title">Welcome! Who are you?</p> */}
          <label>Email
            <input type="email" placeholder='your.email@example.com' onChange={event => {
              handleInput(event, 'email');
            }}/>
          </label>
        </div>

        <div className="signup-form-section">
          {/* <p className="">Welcome! Who are you?</p> */}
          <label>Password
            <input type="password" placeholder='password' onChange={event => {
              handleInput(event, 'password');
            }}/>
          </label>
        </div>

        <div className="signup-form-section">
          {/* <p className="">Welcome! Who are you?</p> */}
          <label>Birthday
            <input type="text" placeholder='birthday' onChange={event => {
              handleInput(event, 'birthday');
            }}/>
          </label>
        </div>

        <div className="signup-form-section">
          {/* <p className="">Welcome! Who are you?</p> */}
          <label>State
            <input type="text" placeholder='state' onChange={event => {
              handleInput(event, 'state');
            }}/>
          </label>
          <label>Zip
            <input type="number" placeholder='94043, etc...' onChange={event => {
              handleInput(event, 'zip');
            }}/>
          </label>
        </div>
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default SignupForm;