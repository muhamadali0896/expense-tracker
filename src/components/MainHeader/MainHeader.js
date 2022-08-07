import React from 'react';

import Navigation from './Navigation';
import classes from './MainHeader.module.css';

const MainHeader = (props) => {
  return (
    <header className={classes['main-header']}>
      <center><h1>Expense Tracker</h1></center>
      <Navigation onLogout={props.onLogout} />
    </header>
  );
};

export default MainHeader;
