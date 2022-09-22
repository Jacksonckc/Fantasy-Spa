import React from 'react';
import { RoundButton } from '../particles';

const Home = () => {
  const generateHomeButtons = () => {
    const buttonsInfo = [
      ['facial_button.webp', 'Facial', '1'],
      ['waxing.webp', 'Waxing', '2'],
      ['makeup.webp', 'Makeup', '3'],
    ];
    const buttons = [];
    buttonsInfo.forEach((info) => {
      const props = { path: info[0], caption: info[1], key: info[2] };
      buttons.push(<RoundButton {...props} />);
    });
    return buttons;
  };

  return (
    <div className='home'>
      <div className='home-welcome'>Your next Adventure starts here!</div>
      <span className='home-buttons'>{generateHomeButtons()}</span>
    </div>
  );
};

export default Home;
