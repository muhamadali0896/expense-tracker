import React,{useContext, useState} from 'react';
import AuthContext from '../../store/auth-context';

import classes from './Navigation.module.css';
const Navigation = () => {
  const ctx = useContext(AuthContext);
  const [isReport, setIsReport] = useState(false);
  const showReportHandler=(event)=>{
    setIsReport(true);
  }
  return (
    <nav className={classes.nav}>
      <ul>
        {ctx.isLoggedIn && (
          !isReport && <button onClick={showReportHandler}>Report</button>
        )}
        {ctx.isLoggedIn && (
          <li>
            <a href="/">Admin</a>
          </li>
        )}
        {ctx.isLoggedIn && (
          <li>
            <button onClick={ctx.onLogout}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
