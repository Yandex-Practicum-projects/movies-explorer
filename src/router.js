import { createBrowserRouter } from 'react-router-dom';
import { moviesLoader, savedMoviesLoader } from './pages/Movies/loaders';
import { appLoader } from './appLoader';
import Main from './pages/Main/Main';
import Movies from './pages/Movies/Movies';
import NotFound from './pages/NotFound/NotFound';
import Profile from './pages/Profile/Profile';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import ProtectedRoute from './HOC/ProtectedRoute';
import App from './App';


export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    loader: appLoader,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Main /> },
      {
        path: '/movies',
        element: <ProtectedRoute element={Movies} savedPage={false} />,
        loader: moviesLoader,
      },
      {
        path: '/saved-movies',
        element: <ProtectedRoute element={Movies} savedPage={true} />,
        loader: savedMoviesLoader,
      },
      { path: '/profile', element: <ProtectedRoute element={Profile} /> },
      { path: '/signin', element: <Login /> },
      { path: '/signup', element: <Register /> },
    ],
  },
]);