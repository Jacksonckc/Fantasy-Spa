import React from 'react';

const RoundButtonToCal = (props) => {
  const { path, caption, route } = props;
  return (
    <div className='round_button_to_cal'>
      <h3 className='round_button_to_cal-caption'>{caption}</h3>
      <a href={route} target='blank' title='Click to schedule!'>
        <img className='round_button_to_cal-img' src={path} alt='round image' />
      </a>
    </div>
  );
};

export default RoundButtonToCal;
