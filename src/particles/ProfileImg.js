import React, { useState } from 'react';

const ProfileImg = () => {
  const [profileImg, setProfileImg] = useState('profile.webp');
  return <img src={profileImg} className='profile_img'></img>;
};

export default ProfileImg;
