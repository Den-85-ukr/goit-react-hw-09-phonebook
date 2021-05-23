import { Component } from 'react';
import { Redirect, Switch } from 'react-router-dom';
import { PublicRoute, PrivateRoute } from 'react-private-public-route';
import { Suspense, lazy } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getIsAuthenticated } from './redux/auth';

import AppBar from './components/AppBar';
import routes from './routes';

import { currentUser } from './redux/auth';

const HomePage = lazy(() =>
  import('./pages/HomePage' /* webpackChunkName: "HomePage" */),
);
const RegisterPage = lazy(() =>
  import('./pages/RegisterPage' /* webpackChunkName: "RegisterPage" */),
);
const LoginPage = lazy(() =>
  import('./pages/LoginPage' /* webpackChunkName: "LoginPage" */),
);
const ContactsPage = lazy(() =>
  import('./pages/ContactsPage' /* webpackChunkName: "ContactsPage" */),
);

class App extends Component {
  componentDidMount() {
    this.props.getUser();
  }

  render() {
    const { isAuthenticated } = this.props;
    return (
      <div>
        <AppBar />
        <Suspense fallback={<h1>Loading Page...</h1>}>
          <Switch>
            <PublicRoute exact path={routes.home} component={HomePage} />
            <PublicRoute
              restricted={isAuthenticated}
              redirect={routes.contacts}
              path={routes.login}
              component={LoginPage}
            />
            <PublicRoute
              restricted={isAuthenticated}
              redirect={routes.contacts}
              path={routes.register}
              component={RegisterPage}
            />
            <PrivateRoute
              isAuthenticated={isAuthenticated}
              redirect={routes.login}
              path={routes.contacts}
              component={ContactsPage}
            />
            <Redirect to={routes.home} />
          </Switch>
        </Suspense>
      </div>
    );
  }
}

App.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  getUser: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  isAuthenticated: getIsAuthenticated(state),
});

const mapDispatchToProps = {
  getUser: currentUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);