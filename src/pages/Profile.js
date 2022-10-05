import React, { useState } from 'react';
import { firestore, firebaseAuth } from '../firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import {
  collection,
  doc,
  setDoc,
  addDoc,
  getDoc,
  getDocs,
  updateDoc,
  deleteDoc,
} from 'firebase/firestore';

import { Authentication, UpdateInfo } from './index';
import { useEffect } from 'react';

const Profile = () => {
  const userCollectionRef = collection(firestore, 'users');
  // const orderCollectionRef = collection(firestore, 'orders');

  const [userData, setUserData] = useState({});
  const [user, setUser] = useState();
  onAuthStateChanged(firebaseAuth, (currentUser) => {
    setUser(currentUser);
  });

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
      console.log(data.data());
      setUserData(data.data());
    };
    user && getUserData();
  }, [user]);

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
    <div>
      <h2>
        User:
        <span> {user?.email}</span>
      </h2>
      <fieldset>
        <div>Name: {userData.name}</div>
        <div>Gender: {userData.gender}</div>
        <div>Phone: {userData.phone}</div>
      </fieldset>
      <button onClick={logout}>Logout</button>
      <UpdateInfo {...user} />
      {/* <button onClick={createOrders}>Add Orders</button> */}
    </div>
  );
};

export default Profile;
