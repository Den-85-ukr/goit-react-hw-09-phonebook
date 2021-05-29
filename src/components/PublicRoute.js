import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { getIsAuthenticated } from '../redux/auth';

/**
 * - Если маршрут ограниченный, и пользователь залогинен, рендерит редирект на /todos
 * - В противном случае рендерит компонент
 */

export default function PublicRoute({
  children,

  ...routeProps
}) {
  const isLoggedIn = useSelector(getIsAuthenticated);
  const shouldRedirect = isLoggedIn && routeProps.restricted;

  return (
    <Route {...routeProps}>
      {shouldRedirect ? <Redirect to="/contacts" /> : children}
    </Route>
  );
}