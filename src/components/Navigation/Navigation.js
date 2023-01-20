import { useAuth } from 'hooks/useAuth';
import { Link, NavList } from './Navigation.styled';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <NavList>
      <Link to="/">Homepage</Link>
      {isLoggedIn && <Link to="/contacts">Contacts</Link>}
    </NavList>
  );
};
