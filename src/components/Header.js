import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { ProfileImg } from '../particles';
const Header = () => {
  const [toggle, setToggle] = useState(false);
  const changeToggleState = () => {
    setToggle(!toggle);
  };

  return (
    <nav className='header'>
      <div className='header-toggle_button' onClick={changeToggleState}>
        <div className={`bar1 ${toggle && 'bar1on'}`}></div>
        <div className={`bar2 ${toggle && 'bar2on'}`}></div>
        <div className={`bar3 ${toggle && 'bar3on'}`}></div>
      </div>
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
