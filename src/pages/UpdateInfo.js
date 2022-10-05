import React from 'react';
import { firestore } from '../firebase';

import { collection, doc, setDoc } from 'firebase/firestore';

const UpdateInfo = (user) => {
  const userCollectionRef = collection(firestore, 'users');

  let name = '';
  let gender = '';
  let phone = '';

  const updateInfo = async () => {
    const data = { name, gender, phone };
    await setDoc(doc(userCollectionRef, user.uid), data);
    window.location.reload();
  };

  // Check if the user is logged in, if not, send them to the authentication page.
  return (
    <div>
      <fieldset>
        <div>
          <label htmlFor='name'>Name: </label>
          <input
            type='text'
            placeholder='Your name..'
            id='name'
            onChange={(event) => {
              name = event.target.value;
            }}
          />
        </div>
        <div>
          <label htmlFor='gender'>Gender: </label>
          <input
            type='text'
            placeholder='Your gender..'
            id='gender'
            onChange={(event) => {
              gender = event.target.value;
            }}
          />
        </div>
        <div>
          <label htmlFor='phone'>Phone: </label>
          <input
            type='text'
            placeholder='Your phone..'
            id='phone'
            onChange={(event) => {
              phone = event.target.value;
            }}
          />
        </div>
      </fieldset>
      <button onClick={updateInfo}>Update Info</button>
    </div>
  );
};

export default UpdateInfo;
