import { Navigate, Outlet } from 'react-router-dom'; 
import { useAuth } from '../../context';

import { AUTH_SIGN_IN } from '../../routes';

const AdminLayout = ({
  children,
  ...rest
}) => {
  const { currentUser } = useAuth();

  return (
    currentUser
      ? <Outlet/>
      : <Navigate to={AUTH_SIGN_IN} />      
  );
};

export default AdminLayout;