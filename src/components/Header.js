import React from 'react';
import logo from '../images/logo.png';

const Header = () => {
  console.log('header');
  return (
    <header className='center'>
      <img src={logo} alt='logo' />
    </header>
  );
};

export default React.memo(Header);
