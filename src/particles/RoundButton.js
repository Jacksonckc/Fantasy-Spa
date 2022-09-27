import React from 'react';
import { Link } from 'react-router-dom';

const RoundButton = (props) => {
  const { path, caption, route } = props;
  return (
    <div className='round_button'>
      <div className='round_button-caption'>{caption}</div>
      <Link to={route}>
        <img className='round_button-img' src={path} alt='round image' />
      </Link>
    </div>
  );
};

export default RoundButton;
