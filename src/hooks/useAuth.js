import { useSelector } from 'react-redux';
import { authSelectors } from '../redux/auth';

export const useAuth = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const isRefreshing = useSelector(authSelectors.getIsRefreshingUser);
  const user = useSelector(authSelectors.getUser);
  const loading = useSelector(authSelectors.getLoading);
  const error = useSelector(authSelectors.getError);

  return {
    isLoggedIn,
    isRefreshing,
    user,
    error,
    loading,
  };
};
