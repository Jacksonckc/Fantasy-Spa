import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const changeToggleState = (x) => {
    setToggle(!toggle);
  };
  console.log(toggle);
  return (
    <nav className='navbar'>
      <div className='navbar-toggle_button' onClick={changeToggleState}>
        {/* <img src='../../public/menu.png'></img> */}
        <div className={toggle ? 'bar1on bar1' : 'bar1'}></div>
        <div className={toggle ? 'bar2on bar2' : 'bar2'}></div>
        <div className={toggle ? 'bar3on bar3' : 'bar3'}></div>
      </div>
      <h1 className='navbar-brand_name'>Perfectly Beautiful</h1>
      {toggle && (
        <div className='navbar-ul'>
          <a href='#home' className='navbar-li' onClick={changeToggleState}>
            Home
          </a>
          {/* <a href='#profile' className='navbar-li' onClick={changeToggleState}>
            Profile
          </a> */}
          <a href='#blogs' className='navbar-li' onClick={changeToggleState}>
            Blogs
          </a>
          <a href='#contact' className='navbar-li' onClick={changeToggleState}>
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
