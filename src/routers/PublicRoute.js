import { useAuth } from 'components/hooks';
import { Navigate } from 'react-router-dom';

const PublicRoute = ({ redirectTo = '/', component: Component }) => {
  const { isLoggedIn } = useAuth();
  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};

export default PublicRoute;
