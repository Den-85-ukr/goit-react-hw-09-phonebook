import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { getIsAuthenticated } from '../redux/auth';

/**
 * - Если маршрут приватный и пользователь залогинен, рендерит компонент
 * - В противном случае рендерит Redirect на /login
 */

export default function PrivateRoute({
  
  children,
  ...routeProps
}) {
  const isLoggedIn = useSelector(getIsAuthenticated); 
  return (
    <Route {...routeProps}>
      {isLoggedIn ? children : <Redirect to="/login" />}
    </Route>
  );
};