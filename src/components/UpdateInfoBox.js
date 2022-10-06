import React from 'react';
import { firestore } from '../firebase';

import { collection, doc, setDoc, deleteDoc } from 'firebase/firestore';
import { useState } from 'react';

const UpdateInfoBox = (userData) => {
  const userCollectionRef = collection(firestore, 'users');
  let { name, gender, phone, id, setIsSaving, setShowUpdate } = userData;

  const updateInfo = async () => {
    const data = { name, gender, phone };
    if (
      window.confirm(
        'Are you sure you want to UPDATE your account information?'
      )
    ) {
      try {
        await setDoc(doc(userCollectionRef, id), data);
        setShowUpdate(false);
      } catch (err) {
        alert(err);
      }
      // Changes the state in the parent component to re render the profile info
      setIsSaving(true);
    }
  };

  const reset = async () => {
    if (
      window.confirm(
        'Are you sure you want to DELETE your account information?'
      )
    ) {
      await deleteDoc(doc(userCollectionRef, id));
      setShowUpdate(false);
      setIsSaving(true);
    } else {
      console.log('no');
    }
  };

  // Check if the user is logged in, if not, send them to the authentication page.
  return (
    <div className='update_info_box'>
      <button
        className='update_info_box-close_btn'
        onClick={() => setShowUpdate(false)}
      >
        &times;
      </button>
      <fieldset className='update_info_box-user_info'>
        <div>
          <label htmlFor='name'>Name: </label>
          <input
            type='text'
            placeholder='Your name..'
            id='name'
            defaultValue={name}
            onChange={(event) => {
              name = event.target.value;
            }}
          />
        </div>
        <div>
          <label htmlFor='gender'>Gender: </label>
          <select
            name='gender'
            id='gender'
            onChange={(event) => {
              gender = event.target.value;
            }}
          >
            <option value={gender}>Default</option>
            <option value='Male'>Male</option>
            <option value='Female'>Female</option>
            <option value='Transgender'>Transgender</option>
            <option value='Not Sure'>Not Sure</option>
            <option value='Secret'>Secret</option>
            <option value=''>Remove</option>
          </select>
        </div>
        <div>
          <label htmlFor='phone'>Phone: </label>
          <input
            type='phone'
            placeholder='Your phone..'
            id='phone'
            defaultValue={phone}
            onChange={(event) => {
              phone = event.target.value;
            }}
          />
        </div>
      </fieldset>
      <div className='update_info_box-button_set'>
        <button onClick={updateInfo}>Confirm</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
};

export default UpdateInfoBox;
