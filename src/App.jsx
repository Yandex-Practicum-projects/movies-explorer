import { useCallback, useEffect, useMemo, useState } from 'react';
import { Outlet, useNavigation } from 'react-router-dom';
import { AuthContext } from './contexts/AuthContext';
import { checkToken } from './utils/MainApi';
import Preloader from './components/Preloader/Preloader';


const App = () => {
  const navigation = useNavigation();
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    checkToken()
      .then((res) => {
        setCurrentUser(res);
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.log(err);
      });
  }, [currentUser]);
  

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
