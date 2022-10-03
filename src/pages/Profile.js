import React, { useState, useEffect } from 'react';
import { firestore, firebaseAuth } from '../firebase';
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
} from 'firebase/auth';
// import {
//   collection,
//   getDocs,
//   addDoc,
//   updateDoc,
//   doc,
//   deleteDoc,
// } from 'firebase/firestore';

const Profile = () => {
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  const [user, setUser] = useState({});
  onAuthStateChanged(firebaseAuth, (currentUser) => {
    setUser(currentUser);
  });

  const register = async () => {
    try {
      const user = createUserWithEmailAndPassword(
        firebaseAuth,
        registerEmail,
        registerPassword
      );
      console.log(user);
    } catch (err) {
      console.log(err.message);
    }
  };
  const login = async () => {
    try {
      const user = signInWithEmailAndPassword(
        firebaseAuth,
        loginEmail,
        loginPassword
      );
      console.log(user);
    } catch (err) {
      console.log(err.message);
    }
  };
  const logout = async () => {
    await signOut(firebaseAuth);
  };

  return (
    <div className='profile'>
      <fieldset>
        <h2>Register</h2>
        <input
          type='text'
          placeholder='Email...'
          onChange={(event) => setRegisterEmail(event.target.value)}
        />
        <input
          type='text'
          placeholder='Password...'
          onChange={(event) => setRegisterPassword(event.target.value)}
        />
        <button onClick={register}>Register User</button>
      </fieldset>
      <fieldset>
        <h2>Login</h2>
        <input
          type='text'
          placeholder='Email...'
          onChange={(event) => setLoginEmail(event.target.value)}
        />
        <input
          type='text'
          placeholder='Password...'
          onChange={(event) => setLoginPassword(event.target.value)}
        />
        <button onClick={login}>Login User</button>
      </fieldset>
      <div>{user?.email}</div>
      <button onClick={logout}>Logout</button>
    </div>
  );
};
//   const [newName, setNewName] = useState('');
//   const [newService, setNewService] = useState('');
//   const [newAge, setNewAge] = useState(0);
//   const [users, setUsers] = useState([]);
//   const usersCollectionRef = collection(firestore, 'users');
//   useEffect(() => {
//     const getUsers = async () => {
//       const data = await getDocs(usersCollectionRef);
//       setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
//     };
//     getUsers();
//   }, [users]);

//   const createUser = async () => {
//     await addDoc(usersCollectionRef, {
//       name: newName,
//       service: newService,
//       age: Number(newAge),
//     });
//   };

//   const updateUserAge = async (id, age) => {
//     const userDoc = doc(firestore, 'users', id);
//     const newFields = { age: age + 1 };
//     await updateDoc(userDoc, newFields);
//   };

//   const deleteUser = async (id) => {
//     const userDoc = doc(firestore, 'users', id);
//     await deleteDoc(userDoc);
//   };

//   return (
//     <div className='profile'>
//       <input
//         placeholder='Name: '
//         onChange={(event) => {
//           setNewName(event.target.value);
//         }}
//       ></input>
//       <input
//         placeholder='Service: '
//         onChange={(event) => {
//           setNewService(event.target.value);
//         }}
//       ></input>
//       <input
//         placeholder='Age: '
//         type='number'
//         onChange={(event) => {
//           setNewAge(event.target.value);
//         }}
//       ></input>

//       <button onClick={createUser}>Create User</button>
//       {users.map((user) => {
//         return (
//           <div key={user.id}>
//             <h1>Name: {user.name}</h1>
//             <h1>Service: {user.service}</h1>
//             <h1>Age: {user.age}</h1>
//             <button
//               onClick={() => {
//                 updateUserAge(user.id, user.age);
//               }}
//             >
//               Increase Age
//             </button>
//             <button onClick={() => deleteUser(user.id)}>Delete User</button>
//           </div>
//         );
//       })}
//     </div>
//   );
// };

export default Profile;
