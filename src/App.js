import { useEffect } from 'react';
import { Switch } from 'react-router-dom';
import { Redirect } from 'react-router';
//import { PublicRoute, PrivateRoute } from 'react-private-public-route';
import { Suspense, lazy } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Loader from 'react-loader-spinner';

import { getIsAuthenticated } from './redux/auth';
import AppBar from './components/AppBar';
import PublicRoute from './components/PublicRoute';
import PrivateRoute from './components/PublicRoute';
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

export default function App() {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(getIsAuthenticated);

  useEffect(() => {
    dispatch(currentUser());
  }, [dispatch]);

  return (
    <div>
      <AppBar />
      <Suspense
        fallback={
          <Loader
            className="loader"
            type="Puff"
            color="#00BFFF"
            height={100}
            width={500}
          />
        }
      >
        <Switch>
            <PublicRoute exact path={routes.home}>
              <HomePage />
            </PublicRoute>
            <PublicRoute
              restricted={isAuthenticated}
              redirect={routes.contacts}
              path={routes.login}
            >
              <LoginPage />
            </PublicRoute>
            <PublicRoute
              restricted={isAuthenticated}
              redirect={routes.contacts}
              path={routes.register}
            >
              <RegisterPage />
            </PublicRoute>
            <PrivateRoute
            isAuthenticated={isAuthenticated}
            redirect={routes.login}
            
            >
              <ContactsPage path={routes.contacts} />
            </PrivateRoute>
            <Redirect to={routes.home} />
          </Switch>
        
      </Suspense>
    </div>
  );
  
};