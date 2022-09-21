import React, { useState, useEffect } from 'react';
import { db } from '../firebase';
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  doc,
  deleteDoc,
} from 'firebase/firestore';

const Profile = () => {
  const [newName, setNewName] = useState('');
  const [newService, setNewService] = useState('');
  const [newAge, setNewAge] = useState(0);
  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(db, 'users');
  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getUsers();
  }, []);

  const createUser = async () => {
    await addDoc(usersCollectionRef, {
      name: newName,
      service: newService,
      age: Number(newAge),
    });
  };

  const updateUserAge = async (id, age) => {
    const userDoc = doc(db, 'users', id);
    const newFields = { age: age + 1 };
    await updateDoc(userDoc, newFields);
  };

  const deleteUser = async (id) => {
    const userDoc = doc(db, 'users', id);
    await deleteDoc(userDoc);
  };

  return (
    <div id='profile'>
      <input
        placeholder='Name: '
        onChange={(event) => {
          setNewName(event.target.value);
        }}
      ></input>
      <input
        placeholder='Service: '
        onChange={(event) => {
          setNewService(event.target.value);
        }}
      ></input>
      <input
        placeholder='Age: '
        type='number'
        onChange={(event) => {
          setNewAge(event.target.value);
        }}
      ></input>

      <button onClick={createUser}>Create User</button>
      {users.map((user) => {
        return (
          <div key={user.id}>
            <h1>Name: {user.name}</h1>
            <h1>Service: {user.service}</h1>
            <h1>Age: {user.age}</h1>
            <button
              onClick={() => {
                updateUserAge(user.id, user.age);
              }}
            >
              Increase Age
            </button>
            <button onClick={() => deleteUser(user.id)}>Delete User</button>
          </div>
        );
      })}
    </div>
  );
};

export default Profile;
