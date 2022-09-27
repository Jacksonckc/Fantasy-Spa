import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { ProfileImg, ToggleButton } from '../particles';
const Header = () => {
  const [toggle, setToggle] = useState(false);

  const changeToggleState = () => {
    setToggle(!toggle);
  };

  const toggleButtonProps = {
    toggle,
    changeToggleState,
  };

  return (
    <nav className='header'>
      <ToggleButton {...toggleButtonProps} />

      <h1 className='header-brand_name'>Fantasy Spa</h1>

      {toggle && (
        <div className='header-ul'>
          <Link to='/' className='header-li' onClick={changeToggleState}>
            Home
          </Link>
          <Link to='/Blogs' className='header-li' onClick={changeToggleState}>
            Blogs
          </Link>
          <Link to='/Contact' className='header-li' onClick={changeToggleState}>
            Contact
          </Link>
        </div>
      )}
      <Link to='/Profile'>
        <ProfileImg />
      </Link>
    </nav>
  );
};

export default Header;
