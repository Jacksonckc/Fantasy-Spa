import React from 'react';

const ToggleButton = (props) => {
  const { toggle, changeToggleState } = props;

  return (
    <div className='header-toggle_button' onClick={changeToggleState}>
      <div className={`bar1 ${toggle && 'bar1on'}`}></div>
      <div className={`bar2 ${toggle && 'bar2on'}`}></div>
      <div className={`bar3 ${toggle && 'bar3on'}`}></div>
    </div>
  );
};

export default ToggleButton;
