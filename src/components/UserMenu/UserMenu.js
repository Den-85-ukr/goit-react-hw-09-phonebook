import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getUserEmail, logout } from '../../redux/auth';

import styles from './UserMenu.module.scss';

const UserMenu = ({ email, onLogout }) => (
  <div className={styles.UserMenu}>
    <span className={styles.email}>Welcome, {email}</span>
    <button type="button" onClick={onLogout} className={styles.btn}>
      Logout
    </button>
  </div>
);

UserMenu.propTypes = {
  email: PropTypes.string.isRequired,
  onLogout: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  email: getUserEmail(state),
});

const mapDispatchToProps = {
  onLogout: logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);