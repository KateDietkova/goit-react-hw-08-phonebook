import { useSelector } from 'react-redux';
import authSelectors from 'redux/auth/auth-selectors';

export const useAuth = () => {
  const isLoggedIn = useSelector(authSelectors.selectIsLoggedIn);
  const userName = useSelector(authSelectors.selectUsername);
  const isRefreshing = useSelector(authSelectors.selectIsRefreshing);

  return {
    isLoggedIn,
    userName,
    isRefreshing,
  };
};
