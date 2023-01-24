import { useAuth } from 'hooks/useAuth';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/auth-operations';
import avatar from '../../images/avatar1.png';
import {
  UserMenuContainer,
  UserImage,
  LogOutBtn,
  UserName,
} from './UserMenu.styled';
import { FiLogOut } from 'react-icons/fi';

export const UserMenu = () => {
  const { userName } = useAuth();
  const dispatch = useDispatch();

  const handleLogout = () => dispatch(logOut());
  return (
    <UserMenuContainer>
      <UserImage src={avatar} alt={userName} />
      <UserName>{userName}</UserName>
      <LogOutBtn type="button" onClick={handleLogout} variant="light">
        Logout
        <FiLogOut size="20" />
      </LogOutBtn>
    </UserMenuContainer>
  );
};
