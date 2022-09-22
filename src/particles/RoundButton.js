import React from 'react';

const RoundButton = (props) => {
  const { path, caption } = props;
  return (
    <div className='round_button'>
      <div className='round_button-caption'>{caption}</div>
      <img className='round_button-img' src={path} alt='round image' />
    </div>
  );
};

export default RoundButton;
