import { AuthNavList } from "./AuthNav.styled";
import { AuthNavLink } from "./AuthNav.styled";


export const AuthNav = () => {

    return (
      <AuthNavList>
        <AuthNavLink to="/register">Register</AuthNavLink>
        <AuthNavLink to="login">Login</AuthNavLink>
      </AuthNavList>
    );
}