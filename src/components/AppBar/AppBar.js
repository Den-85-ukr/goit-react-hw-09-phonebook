import { useSelector } from 'react-redux';

import Navigation from '../Navigation';
import UserMenu from '../UserMenu';
import AuthNav from '../AuthNav';

import { getIsAuthenticated } from '../../redux/auth';

import styles from './AppBar.module.scss';

export default function AppBar() {
  const isAuthenticated = useSelector(getIsAuthenticated);
  
  return (
    <div className={styles.AppBar}>
      <Navigation />
      {isAuthenticated ? <UserMenu /> : <AuthNav />}
    </div>
  );
};
  
// const mapStateToProps = state => ({
//   isAuthenticated: getIsAuthenticated(state),
// });

//export default connect(mapStateToProps)(AppBar);