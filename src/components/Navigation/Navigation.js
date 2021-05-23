import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import routes from '../../routes';
import { getIsAuthenticated } from '../../redux/auth';
import styles from './Navigation.module.scss';

const Navigation = ({ isAuthenticated }) => (
  <nav>
    <NavLink
      exact
      className={styles.Navigation}
      activeStyle={{ color: 'powderblue' }}
      to={routes.home}
    >
      Home
    </NavLink>
    {isAuthenticated && (
      <NavLink
        className={styles.Navigation}
        activeStyle={{ color: 'powderblue' }}
        to={routes.contacts}
      >
        Contacts{' '}
      </NavLink>
    )}
  </nav>
);

Navigation.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  isAuthenticated: getIsAuthenticated(state),
});

export default connect(mapStateToProps)(Navigation);
