import React from 'react';
import { firebaseAuth } from '../firebase';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';

const Authentication = () => {
  let registerEmail = '';
  let registerPassword = '';
  let loginEmail = '';
  let loginPassword = '';

  const register = async () => {
    try {
      createUserWithEmailAndPassword(
        firebaseAuth,
        registerEmail,
        registerPassword
      );
      console.log('Registration successful!');
    } catch (err) {
      console.log(err.message);
    }
  };

  const login = async () => {
    try {
      signInWithEmailAndPassword(firebaseAuth, loginEmail, loginPassword);
      console.log('Login successful!');
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div className='profile'>
      <fieldset>
        <h2>Register</h2>
        <input
          type='text'
          placeholder='Email...'
          onChange={(event) => (registerEmail = event.target.value)}
        />
        <input
          type='text'
          placeholder='Password...'
          onChange={(event) => (registerPassword = event.target.value)}
        />
        <button onClick={register}>Register User</button>
      </fieldset>
      <fieldset>
        <h2>Login</h2>
        <input
          type='text'
          placeholder='Email...'
          onChange={(event) => (loginEmail = event.target.value)}
        />
        <input
          type='text'
          placeholder='Password...'
          onChange={(event) => (loginPassword = event.target.value)}
        />
        <button onClick={login}>Login User</button>
      </fieldset>
    </div>
  );
};
export default Authentication;
