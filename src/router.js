import { createBrowserRouter } from 'react-router-dom';
import Main from './pages/Main/Main';
import Movies from './pages/Movies/Movies';
import NotFound from './pages/NotFound/NotFound';
import Profile from './pages/Profile/Profile';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';


export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: <NotFound />,
  },
  {
    path: '/movies',
    element: <Movies savedPage={false} />,
  },
  {
    path: '/saved-movies',
    element: <Movies savedPage={true} />,
  },
  {
    path: '/profile',
    element: <Profile />,
  },
  {
    path: '/signin',
    element: <Login />,
  },
  {
    path: '/signup',
    element: <Register />,
  },
]);