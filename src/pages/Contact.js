import React, { useState } from 'react';
import { collection, doc, setDoc, getDoc } from 'firebase/firestore';

import { firestore } from '../firebase';

const Contact = () => {
  const contactCollectionRef = collection(firestore, 'contacts');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [request, setRequest] = useState('');

  const handleSumbit = async (event) => {
    event.preventDefault();
    try {
      const data = { name, request };
      await setDoc(doc(contactCollectionRef, email), data);
      setName('');
      setEmail('');
      setRequest('');
      console.log('Your form is submitted');
    } catch (err) {
      alert(err);
    }
  };
  return (
    <div className='contact'>
      <form onSubmit={handleSumbit} className='contact-form'>
        <h2>Contact Us!</h2>
        <fieldset>
          <label htmlFor='name'>Name: </label>
          <input
            type='text'
            id='name'
            name='name'
            placeholder='John'
            required
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </fieldset>
        <fieldset>
          <label htmlFor='email'>Email: </label>
          <input
            type='email'
            id='email'
            name='email'
            placeholder='email@com'
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </fieldset>
        <fieldset>
          <textarea
            type='text'
            id='request'
            name='request'
            placeholder='I would love to ask about ....'
            required
            value={request}
            onChange={(event) => setRequest(event.target.value)}
          />
        </fieldset>
        <input type='submit' value='Submit' />
      </form>

      <div className='contact-resource'>
        <div className='contact-resource-info'>
          <div>Phone: 1999041</div>
          <div>Email: Talia:)@gmail.com</div>
          <div>
            <span>Facebook</span>
            <span>Instagram</span>
            <span>Tictok</span>
          </div>
        </div>
        <iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2878.2860551546833!2d-111.78828328407832!3d43.82916637911569!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53540a52790748c1%3A0x44ef79c168641456!2s146%20N%201st%20W%2C%20Rexburg%2C%20ID%2083440!5e0!3m2!1sen!2sus!4v1664398657365!5m2!1sen!2sus'></iframe>
      </div>
    </div>
  );
};

export default Contact;
