import React from 'react';
import './header.scss';

export const Header = () => {
  return (
    <header className='app-header'>
      <nav className='main-menu'>
        <div className='logo' tabIndex="1">
          <img src="/assets/Union.svg" alt="logo"/>
        </div>
        <div className='user-icon' tabIndex="2">
          <img src='/assets/Frame 46.svg' alt='user-icon' />
        </div>
      </nav>
    </header>
  );
};
