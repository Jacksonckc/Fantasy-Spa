import React, { useState } from 'react';
import { firebaseAuth } from '../firebase';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';

const Authentication = () => {
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [haveAccount, setHaveAccount] = useState(true);

  const register = async (event) => {
    event.preventDefault();
    try {
      createUserWithEmailAndPassword(
        firebaseAuth,
        registerEmail,
        registerPassword
      );
      console.log('Registration successful!');
    } catch (err) {
      alert(err.message);
    }
  };

  const login = async (event) => {
    event.preventDefault();
    try {
      signInWithEmailAndPassword(firebaseAuth, loginEmail, loginPassword);
      console.log('Login successful!');
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div className='authentication'>
      <h2>Login before further actions</h2>
      {haveAccount ? (
        <div className='authentication-box'>
          <form>
            <fieldset>
              <legend>Login</legend>
              <input
                type='email'
                placeholder='Email...'
                required
                onChange={(event) => setLoginEmail(event.target.value)}
              />
              <input
                type='password'
                placeholder='Password...'
                required
                autoComplete='on'
                onChange={(event) => setLoginPassword(event.target.value)}
              />
              <button onClick={(event) => login(event)}>Login User</button>
            </fieldset>
          </form>
          <div className='authentication-box-bottom'>
            <div>If you don't have an account yet...</div>

            <button onClick={() => setHaveAccount(!haveAccount)}>
              Go To Registration
            </button>
          </div>
        </div>
      ) : (
        <div className='authentication-box'>
          <form>
            <fieldset>
              <legend>Register</legend>
              <input
                type='email'
                placeholder='Email...'
                required
                onChange={(event) => setRegisterEmail(event.target.value)}
              />
              <input
                type='password'
                placeholder='Password...'
                required
                autoComplete='on'
                onChange={(event) => setRegisterPassword(event.target.value)}
              />
              <button onClick={(event) => register(event)}>
                Register User
              </button>
            </fieldset>
          </form>
          <div className='authentication-box-bottom'>
            <div>I already have an account</div>
            <button onClick={() => setHaveAccount(!haveAccount)}>
              Go To Login
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
export default Authentication;
