import { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { useLocation, useHistory } from 'react-router';

import routes from '../../routes';
import { getIsAuthenticated } from '../../redux/auth';

import styles from './Navigation.module.scss';

export default function Navigation() {
  const isAuthenticated = useSelector(getIsAuthenticated);
  const location = useLocation();
  const history = useHistory();
  const refPageContacts = useRef(location.pathname);

  useEffect(() => {
    history.push(refPageContacts.current);
  }, [history]);
  return (
  <nav>
    <NavLink
      exact
      className={styles.Navigation}
      activeStyle={{ color: 'blueviolet' }}
      to={routes.home}
    >
      Home
    </NavLink>
    {isAuthenticated && (
      <NavLink
        className={styles.Navigation}
        activeStyle={{ color: 'blueviolet' }}
        to={routes.contacts}
      >
        Contacts{' '}
      </NavLink>
    )}
  </nav>
  );  
};