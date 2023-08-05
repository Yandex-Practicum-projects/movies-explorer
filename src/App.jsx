import { useCallback, useMemo, useState } from 'react';
import { Outlet, useLoaderData, useNavigation } from 'react-router-dom';
import { AuthContext } from './contexts/AuthContext';
import Preloader from './components/Preloader/Preloader';

const App = () => {
  const { user } = useLoaderData();
  const navigation = useNavigation();
  const [currentUser, setCurrentUser] = useState(user);

  const login = useCallback((user) => {
    setCurrentUser(user);
  }, []);

  const contextValue = useMemo(() => ({
    currentUser,
    login,
  }), [currentUser, login]);

  return (
    <AuthContext.Provider value={contextValue}>
      {navigation.state === 'loading' ? (
        <Preloader />
      ) : (
        <Outlet />
      )}
    </AuthContext.Provider>
  );
};

export default App;
