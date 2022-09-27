import React from 'react';

import { generateHomeButton } from '../utils';

const Home = () => {
  const buttonsInfo = [
    ['facial.webp', 'Facial', '/Facial', '1'],
    ['waxing.webp', 'Waxing', '/Waxing', '2'],
    ['makeup.webp', 'Makeup', '/Makeup', '3'],
  ];
  return (
    <div className='home'>
      <div className='home-welcome'>Your next Adventure starts here!</div>
      <span className='home-buttons'>{generateHomeButton(buttonsInfo)}</span>
    </div>
  );
};

export default Home;
