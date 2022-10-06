import React, { useState, useEffect } from 'react';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { collection, doc, setDoc, getDoc } from 'firebase/firestore';

import { firestore, firebaseAuth } from '../firebase';
import { Authentication } from './index';
import { UpdateInfoBox } from '../components';
import { ProfileImg } from '../particles';

const Profile = () => {
  const userCollectionRef = collection(firestore, 'users');
  // const orderCollectionRef = collection(firestore, 'orders');

  const [showUpdate, setShowUpdate] = useState(false);
  const [userData, setUserData] = useState({});
  const [user, setUser] = useState();
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    onAuthStateChanged(firebaseAuth, (currentUser) => {
      setUser(currentUser);
    });
  }, [firebaseAuth]);

  const initNewUser = async () => {
    const data = { name: '', gender: '', phone: '' };
    await setDoc(doc(userCollectionRef, user.uid), data);
  };
  useEffect(() => {
    const getUserData = async () => {
      // See if this is the first time the user signs up
      let data = await getDoc(doc(userCollectionRef, user.uid));
      if (!data.exists()) {
        await initNewUser();
        data = await getDoc(doc(userCollectionRef, user.uid));
      }

      setUserData({
        ...data.data(),
        id: user.uid,
        setIsSaving,
        setShowUpdate,
      });
    };
    user && getUserData();
    // Set saved to initial value
    setIsSaving(false);
    // Trigger is user, when user is there run getUserData.
    // Second trigger is when the update happens, getUserData again.
  }, [user, isSaving]);

  // If the user is logged in, get his/her data

  const logout = async () => {
    await signOut(firebaseAuth);
  };

  // const createOrders = async () => {
  //   const data = { pencil: '10' };
  //   await setDoc(doc(orderCollectionRef, user.uid), data);
  // };

  // Check if the user is logged in, if not, send them to the authentication page.
  return !user ? (
    <Authentication />
  ) : (
    <div className='profile'>
      <div className='profile-top'>
        <div className='profile-top-header'>
          <h2 className='profile-top-user_email'>
            {/* Email:
          <span> {user?.email}</span> */}
            {userData.name ? (
              <div>Welcome! {userData.name}</div>
            ) : (
              <div>Welcome Back!</div>
            )}
          </h2>
          <ProfileImg />
        </div>
        <fieldset className='profile-top-user_info'>
          <div>
            Email:
            <span> {user?.email}</span>
          </div>
          <div>Gender: {userData.gender}</div>
          <div>Phone: {userData.phone}</div>
        </fieldset>
        <div className='profile-top-button_set'>
          <button onClick={logout}>Logout</button>
          <button
            onClick={() => {
              setShowUpdate(!showUpdate);
            }}
          >
            {!showUpdate ? 'Update Info' : 'Close Update'}
          </button>
        </div>
      </div>
      {showUpdate && <UpdateInfoBox {...userData} />}

      {/* <button onClick={createOrders}>Add Orders</button> */}
    </div>
  );
};

export default Profile;
