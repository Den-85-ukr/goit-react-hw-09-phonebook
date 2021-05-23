import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Navigation from '../Navigation';
import UserMenu from '../UserMenu';
import AuthNav from '../AuthNav';

import { getIsAuthenticated } from '../../redux/auth';

import styles from './AppBar.module.scss';

const AppBar = ({ isAuthenticated }) => (
  <div className={styles.AppBar}>
    <Navigation />
    {isAuthenticated ? <UserMenu /> : <AuthNav />}
  </div>
);

AppBar.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  isAuthenticated: getIsAuthenticated(state),
});

export default connect(mapStateToProps)(AppBar);