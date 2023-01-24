import { Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import { fetchCurrentUser } from 'redux/auth/auth-operations';
import { PrivateRoute } from './PrivateRoute';
import { RedirectRoute } from './ReditectRoute';
import { useDispatch } from 'react-redux';
import { Layout } from './Layout';
import { RestrictedRoute } from './RestrictedRoute';
import { lazy } from 'react';
import { Toastify } from './Toast/Toast';
import { useAuth } from 'hooks/useAuth';
import { Loader } from './Loader/Loader';

const Homepage = lazy(() => import('../pages/Homepage/Homepage'));
const Register = lazy(() => import('../pages/Register/Register'));
const Login = lazy(() => import('../pages/Login/Login'));
const Contacts = lazy(() => import('../pages/Contacts/Contacts'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    <>
      <Toastify />
      {isRefreshing ? (
        <Loader />
      ) : (
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Homepage />} />
            <Route
              path="/register"
              element={
                <RestrictedRoute
                  redirectTo="/contacts"
                  component={<Register />}
                />
              }
            />
            <Route
              path="/login"
              element={
                <RestrictedRoute redirectTo="/contacts" component={<Login />} />
              }
            />
            <Route
              path="/contacts"
              element={
                <PrivateRoute redirectTo="/login" component={<Contacts />} />
              }
            />

            <Route path="*" element={<RedirectRoute />} />
          </Route>
        </Routes>
      )}
    </>
  );
};
