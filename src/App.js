import React from 'react';

import { Home, Contact, Profile, Blogs } from './pages';
import { Navbar } from './components';

const App = () => {
  return (
    <div className='app_container'>
      <Navbar />
      <Home />
      {/* <Profile /> */}
      <Blogs />
      <Contact />
    </div>
  );
};

export default App;
