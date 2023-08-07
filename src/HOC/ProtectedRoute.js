import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';

const ProtectedRoute = ({ element: Component, ...props }) => {
  const { currentUser } = useContext(AuthContext);
  return !currentUser ? (<Navigate to='/' replace />) : (<Component {...props} />);
};

export default ProtectedRoute;